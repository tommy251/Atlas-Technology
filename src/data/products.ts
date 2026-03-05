import categoryPhones from "@/assets/category-phones.jpg";
import categoryLaptops from "@/assets/category-laptops.jpg";
import categoryPrinting from "@/assets/category-printing.jpg";
import categoryNetworking from "@/assets/category-networking.jpg";
import categoryServers from "@/assets/category-servers.jpg";
import categoryGaming from "@/assets/category-gaming.jpg";
import categoryStorage from "@/assets/category-storage.jpg";

export interface Product {
  id: string;
  name: string;
  category: string;
  categorySlug: string;
  brand: string;
  price: number;
  originalPrice?: number;
  image: string;
  badge?: string;
  rating: number;
  inStock: boolean;
}

export interface Category {
  name: string;
  slug: string;
  image: string;
  productCount: number;
  subcategories: string[];
}

export const categories: Category[] = [
  {
    name: "Phones & Tablets",
    slug: "phones-tablets",
    image: categoryPhones,
    productCount: 245,
    subcategories: ["Smartphones", "Tablets", "Accessories", "Phone Accessories"],
  },
  {
    name: "Computing",
    slug: "computing",
    image: categoryLaptops,
    productCount: 189,
    subcategories: ["Laptops", "Desktop", "Workstations", "All-In-One", "Monitors", "Accessories"],
  },
  {
    name: "Imaging & Printing",
    slug: "imaging-printing",
    image: categoryPrinting,
    productCount: 156,
    subcategories: ["Printers", "Inks & Toners", "Scanners", "Projectors", "ID Card Printers"],
  },
  {
    name: "Networking & Surveillance",
    slug: "networking-surveillance",
    image: categoryNetworking,
    productCount: 134,
    subcategories: ["Routers", "Switches", "Cables", "Firewalls", "CCTV & Security", "IP Phones"],
  },
  {
    name: "Servers",
    slug: "servers",
    image: categoryServers,
    productCount: 67,
    subcategories: ["Tower Servers", "Rack Servers", "Server Accessories"],
  },
  {
    name: "Gaming & Console",
    slug: "gaming",
    image: categoryGaming,
    productCount: 98,
    subcategories: ["Consoles", "Controllers", "Gaming Accessories", "Gaming Laptops"],
  },
  {
    name: "Storage",
    slug: "storage",
    image: categoryStorage,
    productCount: 112,
    subcategories: ["Hard Drives", "Flash Drives", "Memory Cards", "SSD"],
  },
];

export const menuCategories = [
  {
    name: "Phones & Tablets",
    subcategories: ["Smartphones", "Tablets", "Accessories", "Phone Accessories"],
  },
  {
    name: "Computing",
    subcategories: ["Laptops", "Desktop", "Workstations", "All-In-One", "Monitors", "Computing Accessories"],
  },
  {
    name: "Imaging & Printing",
    subcategories: ["Printers", "Inks & Toners", "Scanners", "Projectors", "Barcode", "Receipt Printers"],
  },
  {
    name: "Networking & Surveillance",
    subcategories: ["Routers", "Switches", "Cables", "Firewalls", "Access Points", "CCTV & Drones", "IP Phones", "Racks"],
  },
  {
    name: "Servers",
    subcategories: ["Tower Servers", "Rack Servers", "Server Accessories"],
  },
  {
    name: "Gaming & Console",
    subcategories: ["Consoles", "Controllers", "Game Accessories"],
  },
  {
    name: "Storage",
    subcategories: ["Hard Drives", "Flash Drives", "Memory Cards"],
  },
  {
    name: "Power",
    subcategories: ["UPS", "Batteries", "Stabilizers", "Inverters"],
  },
];

export const newArrivals: Product[] = [
  {
    id: "1",
    name: 'Apple iMac 27", Core i5, 512GB SSD, 8GB RAM, 5K Retina',
    category: "Desktop",
    categorySlug: "computing",
    brand: "Apple",
    price: 1350000,
    originalPrice: 1450000,
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400&h=400&fit=crop",
    badge: "-7%",
    rating: 4.8,
    inStock: true,
  },
  {
    id: "2",
    name: "Dell PowerEdge Intel Xeon Silver 4314 32GB RAM 480GB SSD",
    category: "Servers",
    categorySlug: "servers",
    brand: "Dell",
    price: 8260000,
    originalPrice: 8300000,
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=400&fit=crop",
    badge: "SALE!",
    rating: 4.9,
    inStock: true,
  },
  {
    id: "3",
    name: "HP ZBook Firefly 14 G9, Core i7, 512GB SSD, 16GB RAM",
    category: "Workstations",
    categorySlug: "computing",
    brand: "HP",
    price: 1650000,
    originalPrice: 1700000,
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=400&fit=crop",
    badge: "-3%",
    rating: 4.7,
    inStock: true,
  },
  {
    id: "4",
    name: "HP LaserJet M107W Printer (4ZB78A)",
    category: "Printers",
    categorySlug: "imaging-printing",
    brand: "HP",
    price: 230000,
    originalPrice: 240000,
    image: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=400&h=400&fit=crop",
    badge: "-4%",
    rating: 4.5,
    inStock: true,
  },
  {
    id: "5",
    name: "Apple iPhone 16 5G [256GB]",
    category: "Smartphones",
    categorySlug: "phones-tablets",
    brand: "Apple",
    price: 1441000,
    originalPrice: 1448900,
    image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=400&fit=crop",
    badge: "-1%",
    rating: 4.9,
    inStock: true,
  },
  {
    id: "6",
    name: "Google Pixel 9 Pro 5G [16+256GB]",
    category: "Smartphones",
    categorySlug: "phones-tablets",
    brand: "Google",
    price: 995000,
    originalPrice: 1000000,
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400&h=400&fit=crop",
    badge: "-1%",
    rating: 4.7,
    inStock: true,
  },
  {
    id: "7",
    name: "Brother DCP-T720DW Wireless All-in-One Ink Tank Printer",
    category: "Printers",
    categorySlug: "imaging-printing",
    brand: "Brother",
    price: 790000,
    originalPrice: 800000,
    image: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=400&h=400&fit=crop",
    badge: "-1%",
    rating: 4.6,
    inStock: true,
  },
  {
    id: "8",
    name: "Samsung Galaxy Tab S9 FE [128GB] WiFi",
    category: "Tablets",
    categorySlug: "phones-tablets",
    brand: "Samsung",
    price: 450000,
    originalPrice: 480000,
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=400&fit=crop",
    badge: "-6%",
    rating: 4.6,
    inStock: true,
  },
];

export const topSellers: Product[] = [
  {
    id: "9",
    name: "Google Pixel 9 Pro Fold 5G [16+256GB]",
    category: "Smartphones",
    categorySlug: "phones-tablets",
    brand: "Google",
    price: 1365000,
    originalPrice: 1455000,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop",
    badge: "-6%",
    rating: 4.8,
    inStock: true,
  },
  {
    id: "10",
    name: "Google Pixel 10 Pro XL 5G [16+256GB]",
    category: "Smartphones",
    categorySlug: "phones-tablets",
    brand: "Google",
    price: 1415000,
    originalPrice: 1440000,
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400&h=400&fit=crop",
    badge: "-2%",
    rating: 4.9,
    inStock: true,
  },
  {
    id: "11",
    name: "Pantum CTL-1100 Black Toner Cartridge",
    category: "Inks & Toners",
    categorySlug: "imaging-printing",
    brand: "Pantum",
    price: 72000,
    originalPrice: 80000,
    image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=400&h=400&fit=crop",
    badge: "-10%",
    rating: 4.4,
    inStock: true,
  },
  {
    id: "12",
    name: "Dell Latitude 7480 Intel Core i5 256GB SSD 8GB RAM",
    category: "Laptops",
    categorySlug: "computing",
    brand: "Dell",
    price: 285000,
    image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=400&h=400&fit=crop",
    rating: 4.5,
    inStock: true,
  },
  {
    id: "13",
    name: "Kico Cat5 Outdoor Cable",
    category: "Cables",
    categorySlug: "networking-surveillance",
    brand: "Kico",
    price: 76500,
    originalPrice: 95500,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&h=400&fit=crop",
    badge: "-20%",
    rating: 4.3,
    inStock: true,
  },
  {
    id: "14",
    name: "MacBook Pro 14\" M3 Pro, 18GB RAM, 512GB SSD",
    category: "Laptops",
    categorySlug: "computing",
    brand: "Apple",
    price: 2850000,
    originalPrice: 2950000,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=400&fit=crop",
    badge: "-3%",
    rating: 4.9,
    inStock: true,
  },
];

export const brands = [
  "Apple", "Dell", "HP", "Samsung", "Google", "Lenovo", "Microsoft", "Xiaomi",
  "Brother", "Canon", "Pantum", "TP-Link", "Cisco", "Logitech", "Sony",
];

export const formatPrice = (price: number): string => {
  return "₦" + price.toLocaleString("en-NG");
};
