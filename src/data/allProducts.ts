import { Product } from "./products";
import { supabase } from "@/integrations/supabase/client";

// Keep local data as fallback
const localAllProducts: Product[] = [
  // ... (keep your existing allProducts array here, truncated for brevity)
];

const localOpenBox: Product[] = [
  // ... (keep existing openBoxProducts)
];

const localPreOwned: Product[] = [
  // ... (keep existing preOwnedProducts)
];

// Convert DB row to Product type
const dbRowToProduct = (r: any): Product => ({
  id: r.id,
  name: r.name,
  category: r.subcategory || r.category || "Uncategorized",
  categorySlug: (r.subcategory || r.category || "uncategorized").toLowerCase().replace(/\s+/g, "-"),
  brand: "",
  price: Number(r.price),
  originalPrice: r.original_price ? Number(r.original_price) : undefined,
  image: r.image_url || "/placeholder.svg",
  badge: r.badge || undefined,
  rating: 5,
  inStock: r.stock > 0,
});

let cachedProducts: Product[] | null = null;
let cachedOpenBox: Product[] | null = null;
let cachedPreOwned: Product[] | null = null;

export const fetchDbProducts = async (): Promise<Product[]> => {
  if (cachedProducts) return cachedProducts;
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("is_active", true)
    .neq("category", "Open Box")
    .neq("category", "Pre-owned")
    .order("created_at", { ascending: false });
  if (error || !data) return localAllProducts;
  cachedProducts = data.map(dbRowToProduct);
  return cachedProducts;
};

export const fetchOpenBoxProducts = async (): Promise<Product[]> => {
  if (cachedOpenBox) return cachedOpenBox;
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("is_active", true)
    .eq("category", "Open Box")
    .order("created_at", { ascending: false });
  if (error || !data) return localOpenBox;
  cachedOpenBox = data.map(dbRowToProduct);
  return cachedOpenBox;
};

export const fetchPreOwnedProducts = async (): Promise<Product[]> => {
  if (cachedPreOwned) return cachedPreOwned;
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("is_active", true)
    .eq("category", "Pre-owned")
    .order("created_at", { ascending: false });
  if (error || !data) return localPreOwned;
  cachedPreOwned = data.map(dbRowToProduct);
  return cachedPreOwned;
};

export const getProductById = async (id: string): Promise<Product | undefined> => {
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("id", id)
    .eq("is_active", true)
    .single();
  if (!error && data) return dbRowToProduct(data);
  // Fallback to local
  return [...localAllProducts, ...localOpenBox, ...localPreOwned].find(p => p.id === id);
};

export const getProductsByCategory = async (categorySlug: string, subcategory?: string): Promise<Product[]> => {
  const all = await fetchDbProducts();
  let products = all.filter(p => p.categorySlug === categorySlug);
  if (subcategory) {
    products = products.filter(p => p.category.toLowerCase() === subcategory.toLowerCase());
  }
  return products;
};

// Export local data for immediate use (pages will migrate to async)
export const allProducts = localAllProducts;
export const openBoxProducts = localOpenBox;
export const preOwnedProducts = localPreOwned;