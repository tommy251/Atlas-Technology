import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { LogOut, Plus, Trash2, Pencil, X, Upload } from "lucide-react";
import { formatPrice } from "@/data/products";

interface DbProduct {
  id: string;
  name: string;
  description: string | null;
  price: number;
  original_price: number | null;
  image_url: string | null;
  category: string | null;
  subcategory: string | null;
  stock: number;
  badge: string | null;
  is_active: boolean;
}

const empty = {
  id: "",
  name: "",
  description: "",
  price: 0,
  original_price: "" as number | "",
  image_url: "",
  category: "",
  subcategory: "",
  stock: 0,
  badge: "",
  is_active: true,
};

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState<DbProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState<typeof empty>(empty);
  const [uploading, setUploading] = useState(false);
  const [saving, setSaving] = useState(false);

  const checkAuth = async () => {
    const { data } = await supabase.auth.getSession();
    if (!data.session) { navigate("/admin/login", { replace: true }); return false; }
    const { data: roles } = await supabase
      .from("user_roles")
      .select("role")
      .eq("user_id", data.session.user.id)
      .eq("role", "admin");
    if (!roles || roles.length === 0) {
      await supabase.auth.signOut();
      navigate("/admin/login", { replace: true });
      return false;
    }
    return true;
  };

  const loadProducts = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("products")
      .select("*")
      .order("created_at", { ascending: false });
    if (error) toast.error(error.message);
    else setProducts((data as DbProduct[]) || []);
    setLoading(false);
  };

  useEffect(() => {
    (async () => {
      if (await checkAuth()) loadProducts();
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/admin/login", { replace: true });
  };

  const handleImageUpload = async (file: File) => {
    setUploading(true);
    const ext = file.name.split(".").pop();
    const path = `${crypto.randomUUID()}.${ext}`;
    const { error } = await supabase.storage.from("product-images").upload(path, file);
    if (error) {
      toast.error(error.message);
      setUploading(false);
      return;
    }
    const { data } = supabase.storage.from("product-images").getPublicUrl(path);
    setForm((f) => ({ ...f, image_url: data.publicUrl }));
    setUploading(false);
    toast.success("Image uploaded");
  };

  const startEdit = (p: DbProduct) => {
    setForm({
      id: p.id,
      name: p.name,
      description: p.description || "",
      price: Number(p.price),
      original_price: p.original_price ? Number(p.original_price) : "",
      image_url: p.image_url || "",
      category: p.category || "",
      subcategory: p.subcategory || "",
      stock: p.stock,
      badge: p.badge || "",
      is_active: p.is_active,
    });
    setShowForm(true);
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    const payload = {
      name: form.name,
      description: form.description || null,
      price: Number(form.price),
      original_price: form.original_price === "" ? null : Number(form.original_price),
      image_url: form.image_url || null,
      category: form.category || null,
      subcategory: form.subcategory || null,
      stock: Number(form.stock),
      badge: form.badge || null,
      is_active: form.is_active,
    };
    const { error } = form.id
      ? await supabase.from("products").update(payload).eq("id", form.id)
      : await supabase.from("products").insert(payload);
    setSaving(false);
    if (error) { toast.error(error.message); return; }
    toast.success(form.id ? "Product updated" : "Product created");
    setShowForm(false);
    setForm(empty);
    loadProducts();
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this product?")) return;
    const { error } = await supabase.from("products").delete().eq("id", id);
    if (error) { toast.error(error.message); return; }
    toast.success("Product deleted");
    loadProducts();
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-card border-b border-border sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-xl font-display font-bold text-foreground">Admin Dashboard</h1>
            <p className="text-xs text-muted-foreground font-body">Manage your products</p>
          </div>
          <div className="flex gap-2">
            <Button onClick={() => { setForm(empty); setShowForm(true); }}>
              <Plus className="h-4 w-4 mr-1" /> Add Product
            </Button>
            <Button variant="outline" onClick={handleLogout}>
              <LogOut className="h-4 w-4 mr-1" /> Logout
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {loading ? (
          <p className="text-muted-foreground">Loading...</p>
        ) : products.length === 0 ? (
          <div className="text-center py-16 bg-card border border-border rounded-lg">
            <p className="text-muted-foreground font-body mb-4">No products yet. Click "Add Product" to create your first one.</p>
          </div>
        ) : (
          <div className="bg-card border border-border rounded-lg overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-secondary text-foreground">
                <tr>
                  <th className="text-left p-3">Image</th>
                  <th className="text-left p-3">Name</th>
                  <th className="text-left p-3">Category</th>
                  <th className="text-left p-3">Price</th>
                  <th className="text-left p-3">Stock</th>
                  <th className="text-left p-3">Active</th>
                  <th className="text-right p-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {products.map((p) => (
                  <tr key={p.id} className="border-t border-border">
                    <td className="p-3">
                      {p.image_url ? (
                        <img src={p.image_url} alt={p.name} className="h-12 w-12 object-cover rounded" />
                      ) : (
                        <div className="h-12 w-12 bg-secondary rounded" />
                      )}
                    </td>
                    <td className="p-3 font-body">{p.name}</td>
                    <td className="p-3 font-body text-muted-foreground">{p.category}</td>
                    <td className="p-3 font-body">{formatPrice(Number(p.price))}</td>
                    <td className="p-3 font-body">{p.stock}</td>
                    <td className="p-3 font-body">{p.is_active ? "Yes" : "No"}</td>
                    <td className="p-3 text-right">
                      <Button size="icon" variant="ghost" onClick={() => startEdit(p)}>
                        <Pencil className="h-4 w-4" />
                      </Button>
                      <Button size="icon" variant="ghost" onClick={() => handleDelete(p.id)}>
                        <Trash2 className="h-4 w-4 text-destructive" />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </main>

      {showForm && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4">
          <div className="bg-card rounded-lg shadow-elevated max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between p-4 border-b border-border sticky top-0 bg-card">
              <h2 className="font-display font-bold text-lg">{form.id ? "Edit Product" : "Add Product"}</h2>
              <Button size="icon" variant="ghost" onClick={() => setShowForm(false)}>
                <X className="h-4 w-4" />
              </Button>
            </div>
            <form onSubmit={handleSave} className="p-4 space-y-4">
              <div>
                <Label>Product Name *</Label>
                <Input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
              </div>
              <div>
                <Label>Description</Label>
                <Textarea rows={3} value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <Label>Price (₦) *</Label>
                  <Input type="number" step="0.01" required value={form.price} onChange={(e) => setForm({ ...form, price: Number(e.target.value) })} />
                </div>
                <div>
                  <Label>Original Price (₦)</Label>
                  <Input type="number" step="0.01" value={form.original_price} onChange={(e) => setForm({ ...form, original_price: e.target.value === "" ? "" : Number(e.target.value) })} />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <Label>Category</Label>
                  <Input value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })} placeholder="e.g. Computing" />
                </div>
                <div>
                  <Label>Subcategory</Label>
                  <Input value={form.subcategory} onChange={(e) => setForm({ ...form, subcategory: e.target.value })} placeholder="e.g. Laptops" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <Label>Stock</Label>
                  <Input type="number" value={form.stock} onChange={(e) => setForm({ ...form, stock: Number(e.target.value) })} />
                </div>
                <div>
                  <Label>Badge</Label>
                  <Input value={form.badge} onChange={(e) => setForm({ ...form, badge: e.target.value })} placeholder="e.g. NEW, SALE" />
                </div>
              </div>
              <div>
                <Label>Product Image</Label>
                <div className="flex gap-3 items-start">
                  {form.image_url && (
                    <img src={form.image_url} alt="" className="h-20 w-20 object-cover rounded border border-border" />
                  )}
                  <label className="flex-1">
                    <div className="border-2 border-dashed border-border rounded-md p-4 text-center cursor-pointer hover:bg-secondary transition-colors">
                      <Upload className="h-5 w-5 mx-auto mb-1 text-muted-foreground" />
                      <span className="text-sm font-body text-muted-foreground">
                        {uploading ? "Uploading..." : "Click to upload image"}
                      </span>
                    </div>
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(e) => { if (e.target.files?.[0]) handleImageUpload(e.target.files[0]); }}
                    />
                  </label>
                </div>
                <Input
                  className="mt-2"
                  placeholder="Or paste an image URL"
                  value={form.image_url}
                  onChange={(e) => setForm({ ...form, image_url: e.target.value })}
                />
              </div>
              <div className="flex items-center gap-2">
                <input
                  id="is_active"
                  type="checkbox"
                  checked={form.is_active}
                  onChange={(e) => setForm({ ...form, is_active: e.target.checked })}
                />
                <Label htmlFor="is_active" className="!mt-0">Active (visible on site)</Label>
              </div>
              <div className="flex gap-2 justify-end pt-2">
                <Button type="button" variant="outline" onClick={() => setShowForm(false)}>Cancel</Button>
                <Button type="submit" disabled={saving}>{saving ? "Saving..." : "Save Product"}</Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
