import { createClient } from "@supabase/supabase-js";
import { allProducts, openBoxProducts, preOwnedProducts } from "../src/data/allProducts";

const supabase = createClient(
  process.env.VITE_SUPABASE_URL!,
  process.env.VITE_SUPABASE_SERVICE_ROLE_KEY!
);

const migrate = async () => {
  const all = [
    ...allProducts.map(p => ({ ...p, category: p.category, subcategory: p.categorySlug })),
    ...openBoxProducts.map(p => ({ ...p, category: "Open Box", subcategory: "open-box" })),
    ...preOwnedProducts.map(p => ({ ...p, category: "Pre-owned", subcategory: "pre-owned" })),
  ];

  for (const p of all) {
    await supabase.from("products").insert({
      id: p.id,
      name: p.name,
      description: null,
      price: p.price,
      original_price: p.originalPrice || null,
      image_url: p.image,
      category: p.category,
      subcategory: p.subcategory,
      stock: 50,
      badge: p.badge || null,
      is_active: true,
    });
  }
  console.log("Migration complete!");
};

migrate();