import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import type { Product } from "@/data/products";

export interface DbProductRow {
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

export const dbRowToProduct = (r: DbProductRow): Product => ({
  id: r.id,
  name: r.name,
  category: r.category || "Uncategorized",
  categorySlug: (r.category || "uncategorized").toLowerCase().replace(/\s+/g, "-"),
  brand: "",
  price: Number(r.price),
  originalPrice: r.original_price ? Number(r.original_price) : undefined,
  image: r.image_url || "/placeholder.svg",
  badge: r.badge || undefined,
  rating: 5,
  inStock: r.stock > 0,
});

export const useDbProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    const load = async () => {
      const { data, error } = await supabase
        .from("products")
        .select("*")
        .eq("is_active", true)
        .order("created_at", { ascending: false });
      if (!mounted) return;
      if (!error && data) {
        setProducts((data as DbProductRow[]).map(dbRowToProduct));
      }
      setLoading(false);
    };
    load();
    return () => { mounted = false; };
  }, []);

  return { products, loading };
  
};
// Add to useDbProducts.ts
export const useAllDbProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      const { data, error } = await supabase
        .from("products")
        .select("*")
        .eq("is_active", true)
        .order("created_at", { ascending: false });
      if (!error && data) {
        setProducts(data.map(dbRowToProduct));
      }
      setLoading(false);
    };
    load();
  }, []);

  return { products, loading };
};
