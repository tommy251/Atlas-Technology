import { Product } from "./products";

// Comprehensive product catalog for all categories/subcategories

export const allProducts: Product[] = [
  // === PHONES & TABLETS ===
  // Smartphones
  { id: "s1", name: "Apple iPhone 16 5G [256GB]", category: "Smartphones", categorySlug: "phones-tablets", brand: "Apple", price: 1441000, originalPrice: 1448900, image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=400&fit=crop", badge: "-1%", rating: 4.9, inStock: true },
  { id: "s2", name: "Apple iPhone 16 Plus 5G [256GB]", category: "Smartphones", categorySlug: "phones-tablets", brand: "Apple", price: 1661000, originalPrice: 1690000, image: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=400&h=400&fit=crop", badge: "-2%", rating: 4.8, inStock: true },
  { id: "s3", name: "Apple iPhone 16 Pro 5G [256GB]", category: "Smartphones", categorySlug: "phones-tablets", brand: "Apple", price: 1810000, originalPrice: 1883000, image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400&h=400&fit=crop", badge: "-4%", rating: 4.9, inStock: true },
  { id: "s4", name: "Apple iPhone 15 5G [128GB]", category: "Smartphones", categorySlug: "phones-tablets", brand: "Apple", price: 1140000, originalPrice: 1231000, image: "https://images.unsplash.com/photo-1678685888221-cda773a3dcdb?w=400&h=400&fit=crop", badge: "-7%", rating: 4.7, inStock: true },
  { id: "s5", name: "Apple iPhone 14 5G [128GB]", category: "Smartphones", categorySlug: "phones-tablets", brand: "Apple", price: 905000, originalPrice: 988000, image: "https://images.unsplash.com/photo-1663499482523-1c0c1bae4ce1?w=400&h=400&fit=crop", badge: "-8%", rating: 4.6, inStock: true },
  { id: "s6", name: "Apple iPhone 13 5G [128GB]", category: "Smartphones", categorySlug: "phones-tablets", brand: "Apple", price: 830000, originalPrice: 888000, image: "https://images.unsplash.com/photo-1632633173522-47456de71b68?w=400&h=400&fit=crop", badge: "-7%", rating: 4.5, inStock: true },
  { id: "s7", name: "Google Pixel 9 Pro 5G [16+256GB]", category: "Smartphones", categorySlug: "phones-tablets", brand: "Google", price: 995000, originalPrice: 1000000, image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400&h=400&fit=crop", badge: "-1%", rating: 4.7, inStock: true },
  { id: "s8", name: "Google Pixel 9 Pro Fold 5G [16+256GB]", category: "Smartphones", categorySlug: "phones-tablets", brand: "Google", price: 1365000, originalPrice: 1455000, image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop", badge: "-6%", rating: 4.8, inStock: true },
  { id: "s9", name: "Samsung Galaxy S24 Ultra 5G [256GB]", category: "Smartphones", categorySlug: "phones-tablets", brand: "Samsung", price: 1550000, originalPrice: 1650000, image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400&h=400&fit=crop", badge: "-6%", rating: 4.8, inStock: true },
  { id: "s10", name: "Samsung Galaxy A55 5G [128GB]", category: "Smartphones", categorySlug: "phones-tablets", brand: "Samsung", price: 380000, originalPrice: 420000, image: "https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=400&h=400&fit=crop", badge: "-10%", rating: 4.4, inStock: true },
  { id: "s11", name: "Xiaomi 14 Ultra 5G [512GB]", category: "Smartphones", categorySlug: "phones-tablets", brand: "Xiaomi", price: 980000, originalPrice: 1050000, image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop", badge: "-7%", rating: 4.6, inStock: true },
  { id: "s12", name: "Google Pixel 10 Pro XL 5G [16+256GB]", category: "Smartphones", categorySlug: "phones-tablets", brand: "Google", price: 1415000, originalPrice: 1440000, image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400&h=400&fit=crop", badge: "-2%", rating: 4.9, inStock: true },

  // Tablets
  { id: "t1", name: "Samsung Galaxy Tab S9 FE [128GB] WiFi", category: "Tablets", categorySlug: "phones-tablets", brand: "Samsung", price: 450000, originalPrice: 480000, image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=400&fit=crop", badge: "-6%", rating: 4.6, inStock: true },
  { id: "t2", name: 'Apple iPad Pro 11" M4 [256GB] WiFi', category: "Tablets", categorySlug: "phones-tablets", brand: "Apple", price: 1350000, originalPrice: 1400000, image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=400&fit=crop", badge: "-4%", rating: 4.9, inStock: true },
  { id: "t3", name: "Apple iPad Air 13\" M2 [128GB] WiFi", category: "Tablets", categorySlug: "phones-tablets", brand: "Apple", price: 1050000, originalPrice: 1100000, image: "https://images.unsplash.com/photo-1585790050230-5dd28404ccb9?w=400&h=400&fit=crop", badge: "-5%", rating: 4.8, inStock: true },
  { id: "t4", name: "Samsung Galaxy Tab A9+ [64GB] WiFi", category: "Tablets", categorySlug: "phones-tablets", brand: "Samsung", price: 280000, originalPrice: 310000, image: "https://images.unsplash.com/photo-1561154464-82e9aeb73d42?w=400&h=400&fit=crop", badge: "-10%", rating: 4.3, inStock: true },
  { id: "t5", name: "Lenovo Tab M11 [128GB] WiFi", category: "Tablets", categorySlug: "phones-tablets", brand: "Lenovo", price: 220000, image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=400&fit=crop", rating: 4.2, inStock: true },
  { id: "t6", name: "Xiaomi Pad 6 [128GB] WiFi", category: "Tablets", categorySlug: "phones-tablets", brand: "Xiaomi", price: 350000, originalPrice: 380000, image: "https://images.unsplash.com/photo-1585790050230-5dd28404ccb9?w=400&h=400&fit=crop", badge: "-8%", rating: 4.5, inStock: true },

  // Phone Accessories
  { id: "pa1", name: "Apple AirPods Pro 2nd Gen USB-C", category: "Accessories", categorySlug: "phones-tablets", brand: "Apple", price: 285000, originalPrice: 310000, image: "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=400&h=400&fit=crop", badge: "-8%", rating: 4.8, inStock: true },
  { id: "pa2", name: "Samsung Galaxy Buds3 Pro", category: "Accessories", categorySlug: "phones-tablets", brand: "Samsung", price: 195000, originalPrice: 220000, image: "https://images.unsplash.com/photo-1590658268037-6bf12f032f55?w=400&h=400&fit=crop", badge: "-11%", rating: 4.5, inStock: true },
  { id: "pa3", name: "Apple MagSafe Charger", category: "Accessories", categorySlug: "phones-tablets", brand: "Apple", price: 65000, image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=400&h=400&fit=crop", rating: 4.6, inStock: true },
  { id: "pa4", name: "Anker PowerCore 20000mAh Power Bank", category: "Accessories", categorySlug: "phones-tablets", brand: "Anker", price: 42000, originalPrice: 50000, image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=400&h=400&fit=crop", badge: "-16%", rating: 4.7, inStock: true },
  { id: "pa5", name: "Spigen Tough Armor Case iPhone 16", category: "Phone Accessories", categorySlug: "phones-tablets", brand: "Spigen", price: 25000, image: "https://images.unsplash.com/photo-1601972599720-36938d4ecd31?w=400&h=400&fit=crop", rating: 4.4, inStock: true },
  { id: "pa6", name: "Baseus 65W GaN USB-C Charger", category: "Phone Accessories", categorySlug: "phones-tablets", brand: "Baseus", price: 35000, originalPrice: 42000, image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=400&h=400&fit=crop", badge: "-17%", rating: 4.5, inStock: true },

  // === COMPUTING ===
  // Laptops
  { id: "l1", name: "HP ZBook Firefly 14 G9, Core i7, 512GB SSD, 16GB RAM", category: "Laptops", categorySlug: "computing", brand: "HP", price: 1650000, originalPrice: 1700000, image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=400&fit=crop", badge: "-3%", rating: 4.7, inStock: true },
  { id: "l2", name: "Dell Latitude 7480 Intel Core i5 256GB SSD 8GB RAM", category: "Laptops", categorySlug: "computing", brand: "Dell", price: 285000, image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=400&h=400&fit=crop", rating: 4.5, inStock: true },
  { id: "l3", name: 'MacBook Pro 14" M3 Pro, 18GB RAM, 512GB SSD', category: "Laptops", categorySlug: "computing", brand: "Apple", price: 2850000, originalPrice: 2950000, image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=400&fit=crop", badge: "-3%", rating: 4.9, inStock: true },
  { id: "l4", name: "Lenovo ThinkPad X1 Carbon Gen 11, i7, 16GB, 512GB", category: "Laptops", categorySlug: "computing", brand: "Lenovo", price: 2100000, originalPrice: 2250000, image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=400&h=400&fit=crop", badge: "-7%", rating: 4.8, inStock: true },
  { id: "l5", name: 'MacBook Air 15" M3, 8GB RAM, 256GB SSD', category: "Laptops", categorySlug: "computing", brand: "Apple", price: 1950000, originalPrice: 2050000, image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=400&fit=crop", badge: "-5%", rating: 4.8, inStock: true },
  { id: "l6", name: "HP EliteBook 840 G8, Core i5, 256GB SSD, 8GB", category: "Laptops", categorySlug: "computing", brand: "HP", price: 520000, originalPrice: 580000, image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=400&fit=crop", badge: "-10%", rating: 4.4, inStock: true },
  { id: "l7", name: "Dell XPS 15 9530, Core i7, 1TB SSD, 32GB RAM", category: "Laptops", categorySlug: "computing", brand: "Dell", price: 3200000, originalPrice: 3400000, image: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=400&h=400&fit=crop", badge: "-6%", rating: 4.9, inStock: true },
  { id: "l8", name: "ASUS ZenBook 14, Ryzen 7, 512GB SSD, 16GB RAM", category: "Laptops", categorySlug: "computing", brand: "ASUS", price: 890000, originalPrice: 950000, image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=400&fit=crop", badge: "-6%", rating: 4.5, inStock: true },

  // Desktop
  { id: "d1", name: 'Apple iMac 27", Core i5, 512GB SSD, 8GB RAM, 5K Retina', category: "Desktop", categorySlug: "computing", brand: "Apple", price: 1350000, originalPrice: 1450000, image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400&h=400&fit=crop", badge: "-7%", rating: 4.8, inStock: true },
  { id: "d2", name: "HP ProDesk 400 G7, Core i5, 256GB SSD, 8GB RAM", category: "Desktop", categorySlug: "computing", brand: "HP", price: 480000, originalPrice: 520000, image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400&h=400&fit=crop", badge: "-8%", rating: 4.3, inStock: true },
  { id: "d3", name: "Dell OptiPlex 7090 Micro, i7, 512GB, 16GB", category: "Desktop", categorySlug: "computing", brand: "Dell", price: 750000, originalPrice: 800000, image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400&h=400&fit=crop", badge: "-6%", rating: 4.5, inStock: true },
  { id: "d4", name: "Lenovo ThinkCentre M720s, i5, 256GB SSD, 8GB", category: "Desktop", categorySlug: "computing", brand: "Lenovo", price: 320000, image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400&h=400&fit=crop", rating: 4.2, inStock: true },

  // Workstations
  { id: "w1", name: "HP ZBook Studio G9, i9, 1TB SSD, 32GB, RTX 3080", category: "Workstations", categorySlug: "computing", brand: "HP", price: 4500000, originalPrice: 4800000, image: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=400&h=400&fit=crop", badge: "-6%", rating: 4.9, inStock: true },
  { id: "w2", name: "Dell Precision 5570, i7, 512GB, 32GB, RTX A2000", category: "Workstations", categorySlug: "computing", brand: "Dell", price: 3800000, originalPrice: 4000000, image: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=400&h=400&fit=crop", badge: "-5%", rating: 4.8, inStock: true },

  // Monitors
  { id: "m1", name: 'Dell UltraSharp U2723QE 27" 4K USB-C Monitor', category: "Monitors", categorySlug: "computing", brand: "Dell", price: 750000, originalPrice: 820000, image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400&h=400&fit=crop", badge: "-9%", rating: 4.7, inStock: true },
  { id: "m2", name: 'LG 27UL500 27" UHD 4K IPS Monitor', category: "Monitors", categorySlug: "computing", brand: "LG", price: 380000, originalPrice: 420000, image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400&h=400&fit=crop", badge: "-10%", rating: 4.5, inStock: true },
  { id: "m3", name: 'Samsung 34" Curved WQHD Monitor', category: "Monitors", categorySlug: "computing", brand: "Samsung", price: 550000, originalPrice: 600000, image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400&h=400&fit=crop", badge: "-8%", rating: 4.6, inStock: true },

  // All-In-One
  { id: "aio1", name: 'HP All-in-One 24" FHD, i5, 512GB, 8GB', category: "All-In-One", categorySlug: "computing", brand: "HP", price: 680000, originalPrice: 750000, image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400&h=400&fit=crop", badge: "-9%", rating: 4.4, inStock: true },
  { id: "aio2", name: 'Lenovo IdeaCentre AIO 3 27" FHD, i5, 256GB', category: "All-In-One", categorySlug: "computing", brand: "Lenovo", price: 520000, image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400&h=400&fit=crop", rating: 4.3, inStock: true },

  // Computing Accessories
  { id: "ca1", name: "Logitech MX Master 3S Wireless Mouse", category: "Computing Accessories", categorySlug: "computing", brand: "Logitech", price: 85000, originalPrice: 95000, image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=400&fit=crop", badge: "-11%", rating: 4.8, inStock: true },
  { id: "ca2", name: "Logitech MX Keys S Wireless Keyboard", category: "Computing Accessories", categorySlug: "computing", brand: "Logitech", price: 95000, image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400&h=400&fit=crop", rating: 4.7, inStock: true },
  { id: "ca3", name: "HP USB-C Dock G5", category: "Computing Accessories", categorySlug: "computing", brand: "HP", price: 180000, originalPrice: 210000, image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=400&h=400&fit=crop", badge: "-14%", rating: 4.5, inStock: true },

  // === IMAGING & PRINTING ===
  // Printers
  { id: "p1", name: "HP LaserJet M107W Printer (4ZB78A)", category: "Printers", categorySlug: "imaging-printing", brand: "HP", price: 230000, originalPrice: 240000, image: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=400&h=400&fit=crop", badge: "-4%", rating: 4.5, inStock: true },
  { id: "p2", name: "Brother DCP-T720DW Wireless All-in-One Ink Tank", category: "Printers", categorySlug: "imaging-printing", brand: "Brother", price: 790000, originalPrice: 800000, image: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=400&h=400&fit=crop", badge: "-1%", rating: 4.6, inStock: true },
  { id: "p3", name: "HP Color LaserJet Pro MFP M283fdw", category: "Printers", categorySlug: "imaging-printing", brand: "HP", price: 520000, originalPrice: 580000, image: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=400&h=400&fit=crop", badge: "-10%", rating: 4.5, inStock: true },
  { id: "p4", name: "Canon PIXMA G3420 InkTank All-in-One", category: "Printers", categorySlug: "imaging-printing", brand: "Canon", price: 180000, originalPrice: 200000, image: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=400&h=400&fit=crop", badge: "-10%", rating: 4.4, inStock: true },
  { id: "p5", name: "Epson EcoTank L3250 WiFi All-in-One Printer", category: "Printers", categorySlug: "imaging-printing", brand: "Epson", price: 195000, originalPrice: 220000, image: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=400&h=400&fit=crop", badge: "-11%", rating: 4.5, inStock: true },
  { id: "p6", name: "HP LaserJet Pro M404dn Mono Printer", category: "Printers", categorySlug: "imaging-printing", brand: "HP", price: 380000, originalPrice: 420000, image: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=400&h=400&fit=crop", badge: "-10%", rating: 4.4, inStock: true },

  // Inks & Toners
  { id: "it1", name: "Pantum CTL-1100 Black Toner Cartridge", category: "Inks & Toners", categorySlug: "imaging-printing", brand: "Pantum", price: 72000, originalPrice: 80000, image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=400&h=400&fit=crop", badge: "-10%", rating: 4.4, inStock: true },
  { id: "it2", name: "HP 107A Black Original Toner Cartridge", category: "Inks & Toners", categorySlug: "imaging-printing", brand: "HP", price: 48000, originalPrice: 55000, image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=400&h=400&fit=crop", badge: "-13%", rating: 4.3, inStock: true },
  { id: "it3", name: "Canon PG-445XL Black Ink Cartridge", category: "Inks & Toners", categorySlug: "imaging-printing", brand: "Canon", price: 22000, originalPrice: 25000, image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=400&h=400&fit=crop", badge: "-12%", rating: 4.2, inStock: true },
  { id: "it4", name: "Brother TN-2480 Toner Cartridge", category: "Inks & Toners", categorySlug: "imaging-printing", brand: "Brother", price: 38000, image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=400&h=400&fit=crop", rating: 4.5, inStock: true },

  // Scanners
  { id: "sc1", name: "Fujitsu ScanSnap iX1600 Document Scanner", category: "Scanners", categorySlug: "imaging-printing", brand: "Fujitsu", price: 650000, originalPrice: 700000, image: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=400&h=400&fit=crop", badge: "-7%", rating: 4.7, inStock: true },
  { id: "sc2", name: "Canon imageFORMULA DR-C225II Scanner", category: "Scanners", categorySlug: "imaging-printing", brand: "Canon", price: 420000, image: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=400&h=400&fit=crop", rating: 4.5, inStock: true },

  // Projectors
  { id: "pj1", name: "Epson EB-X51 XGA 3LCD Projector 3800 Lumens", category: "Projectors", categorySlug: "imaging-printing", brand: "Epson", price: 480000, originalPrice: 520000, image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=400&h=400&fit=crop", badge: "-8%", rating: 4.4, inStock: true },
  { id: "pj2", name: "BenQ MH733 FHD DLP Projector 4000 Lumens", category: "Projectors", categorySlug: "imaging-printing", brand: "BenQ", price: 720000, image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=400&h=400&fit=crop", rating: 4.6, inStock: true },

  // Barcode
  { id: "bc1", name: "Honeywell Voyager 1250g Barcode Scanner", category: "Barcode", categorySlug: "imaging-printing", brand: "Honeywell", price: 85000, image: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=400&h=400&fit=crop", rating: 4.3, inStock: true },

  // Receipt Printers
  { id: "rp1", name: "Epson TM-T82III Thermal Receipt Printer", category: "Receipt Printers", categorySlug: "imaging-printing", brand: "Epson", price: 165000, originalPrice: 180000, image: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=400&h=400&fit=crop", badge: "-8%", rating: 4.4, inStock: true },

  // === NETWORKING & SURVEILLANCE ===
  // Routers
  { id: "n1", name: "TP-Link Archer AX73 AX5400 Dual-Band WiFi 6 Router", category: "Routers", categorySlug: "networking-surveillance", brand: "TP-Link", price: 145000, originalPrice: 160000, image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&h=400&fit=crop", badge: "-9%", rating: 4.7, inStock: true },
  { id: "n2", name: "Cisco RV340 Dual WAN Gigabit VPN Router", category: "Routers", categorySlug: "networking-surveillance", brand: "Cisco", price: 380000, originalPrice: 420000, image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&h=400&fit=crop", badge: "-10%", rating: 4.6, inStock: true },
  { id: "n3", name: "MikroTik hAP ac3 Dual-Band Router", category: "Routers", categorySlug: "networking-surveillance", brand: "MikroTik", price: 95000, image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&h=400&fit=crop", rating: 4.5, inStock: true },
  { id: "n4", name: "Ubiquiti UniFi Dream Machine Pro", category: "Routers", categorySlug: "networking-surveillance", brand: "Ubiquiti", price: 650000, originalPrice: 700000, image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&h=400&fit=crop", badge: "-7%", rating: 4.8, inStock: true },

  // Switches
  { id: "sw1", name: "Cisco SG350-28 28-Port Managed Switch", category: "Switches", categorySlug: "networking-surveillance", brand: "Cisco", price: 450000, originalPrice: 500000, image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&h=400&fit=crop", badge: "-10%", rating: 4.6, inStock: true },
  { id: "sw2", name: "TP-Link TL-SG108 8-Port Gigabit Switch", category: "Switches", categorySlug: "networking-surveillance", brand: "TP-Link", price: 28000, image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&h=400&fit=crop", rating: 4.5, inStock: true },
  { id: "sw3", name: "HP Aruba 1930 24G PoE Switch", category: "Switches", categorySlug: "networking-surveillance", brand: "HP", price: 580000, originalPrice: 650000, image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&h=400&fit=crop", badge: "-11%", rating: 4.7, inStock: true },
  { id: "sw4", name: "Ubiquiti UniFi Switch 24 PoE", category: "Switches", categorySlug: "networking-surveillance", brand: "Ubiquiti", price: 480000, image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&h=400&fit=crop", rating: 4.6, inStock: true },

  // Cables
  { id: "cb1", name: "Kico Cat5 Outdoor Cable (305m)", category: "Cables", categorySlug: "networking-surveillance", brand: "Kico", price: 76500, originalPrice: 95500, image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&h=400&fit=crop", badge: "-20%", rating: 4.3, inStock: true },
  { id: "cb2", name: "Cat6 UTP Cable (305m Box) Blue", category: "Cables", categorySlug: "networking-surveillance", brand: "Generic", price: 85000, image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&h=400&fit=crop", rating: 4.2, inStock: true },
  { id: "cb3", name: "Fiber Optic Patch Cord SC-SC 3m", category: "Cables", categorySlug: "networking-surveillance", brand: "Generic", price: 8500, image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&h=400&fit=crop", rating: 4.1, inStock: true },

  // Firewalls
  { id: "fw1", name: "Fortinet FortiGate 60F Next-Gen Firewall", category: "Firewalls", categorySlug: "networking-surveillance", brand: "Fortinet", price: 1200000, originalPrice: 1350000, image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&h=400&fit=crop", badge: "-11%", rating: 4.8, inStock: true },
  { id: "fw2", name: "SonicWall TZ370 Firewall", category: "Firewalls", categorySlug: "networking-surveillance", brand: "SonicWall", price: 850000, image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&h=400&fit=crop", rating: 4.6, inStock: true },

  // Access Points
  { id: "ap1", name: "Ubiquiti UniFi AP AC Pro", category: "Access Points", categorySlug: "networking-surveillance", brand: "Ubiquiti", price: 185000, originalPrice: 200000, image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&h=400&fit=crop", badge: "-8%", rating: 4.7, inStock: true },
  { id: "ap2", name: "TP-Link EAP670 AX5400 WiFi 6 Access Point", category: "Access Points", categorySlug: "networking-surveillance", brand: "TP-Link", price: 165000, image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&h=400&fit=crop", rating: 4.6, inStock: true },

  // CCTV & Drones
  { id: "cctv1", name: "Hikvision 4-Channel 2MP CCTV Kit", category: "CCTV & Drones", categorySlug: "networking-surveillance", brand: "Hikvision", price: 285000, originalPrice: 320000, image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&h=400&fit=crop", badge: "-11%", rating: 4.5, inStock: true },
  { id: "cctv2", name: "Dahua 8-Channel 4MP NVR CCTV System", category: "CCTV & Drones", categorySlug: "networking-surveillance", brand: "Dahua", price: 520000, originalPrice: 580000, image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&h=400&fit=crop", badge: "-10%", rating: 4.6, inStock: true },
  { id: "cctv3", name: "DJI Mini 4 Pro Drone", category: "CCTV & Drones", categorySlug: "networking-surveillance", brand: "DJI", price: 1250000, image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&h=400&fit=crop", rating: 4.9, inStock: true },

  // IP Phones
  { id: "ip1", name: "Cisco IP Phone 7821", category: "IP Phones", categorySlug: "networking-surveillance", brand: "Cisco", price: 185000, originalPrice: 200000, image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&h=400&fit=crop", badge: "-8%", rating: 4.4, inStock: true },
  { id: "ip2", name: "Yealink SIP-T54W Prime Business Phone", category: "IP Phones", categorySlug: "networking-surveillance", brand: "Yealink", price: 145000, image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&h=400&fit=crop", rating: 4.5, inStock: true },

  // Racks
  { id: "rk1", name: "42U Server Rack Cabinet 600x1000mm", category: "Racks", categorySlug: "networking-surveillance", brand: "Generic", price: 450000, originalPrice: 500000, image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=400&fit=crop", badge: "-10%", rating: 4.3, inStock: true },
  { id: "rk2", name: "9U Wall Mount Rack Cabinet", category: "Racks", categorySlug: "networking-surveillance", brand: "Generic", price: 85000, image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=400&fit=crop", rating: 4.2, inStock: true },

  // === SERVERS ===
  { id: "sv1", name: "Dell PowerEdge Intel Xeon Silver 4314 32GB RAM 480GB SSD", category: "Tower Servers", categorySlug: "servers", brand: "Dell", price: 8260000, originalPrice: 8300000, image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=400&fit=crop", badge: "SALE!", rating: 4.9, inStock: true },
  { id: "sv2", name: "HP ProLiant ML350 Gen10 Plus Tower Server", category: "Tower Servers", categorySlug: "servers", brand: "HP", price: 5800000, originalPrice: 6200000, image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=400&fit=crop", badge: "-6%", rating: 4.8, inStock: true },
  { id: "sv3", name: "Dell PowerEdge R740 Rack Server", category: "Rack Servers", categorySlug: "servers", brand: "Dell", price: 12500000, originalPrice: 13000000, image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=400&fit=crop", badge: "-4%", rating: 4.9, inStock: true },
  { id: "sv4", name: "HP ProLiant DL380 Gen10 Plus Rack Server", category: "Rack Servers", categorySlug: "servers", brand: "HP", price: 9800000, image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=400&fit=crop", rating: 4.8, inStock: true },
  { id: "sv5", name: "Dell PowerEdge R250 Server", category: "Rack Servers", categorySlug: "servers", brand: "Dell", price: 3200000, originalPrice: 3500000, image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=400&fit=crop", badge: "-9%", rating: 4.6, inStock: true },
  { id: "sv6", name: "APC Smart-UPS 3000VA for Server", category: "Server Accessories", categorySlug: "servers", brand: "APC", price: 680000, originalPrice: 750000, image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=400&fit=crop", badge: "-9%", rating: 4.5, inStock: true },
  { id: "sv7", name: "Seagate Exos 16TB Enterprise HDD", category: "Server Accessories", categorySlug: "servers", brand: "Seagate", price: 420000, image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=400&fit=crop", rating: 4.7, inStock: true },

  // === GAMING & CONSOLE ===
  { id: "g1", name: "Sony PlayStation 5 Slim Digital Edition", category: "Consoles", categorySlug: "gaming", brand: "Sony", price: 580000, originalPrice: 620000, image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=400&h=400&fit=crop", badge: "-6%", rating: 4.9, inStock: true },
  { id: "g2", name: "Microsoft Xbox Series X 1TB", category: "Consoles", categorySlug: "gaming", brand: "Microsoft", price: 650000, originalPrice: 700000, image: "https://images.unsplash.com/photo-1621259182978-fbf93132d53d?w=400&h=400&fit=crop", badge: "-7%", rating: 4.8, inStock: true },
  { id: "g3", name: "Nintendo Switch OLED Model", category: "Consoles", categorySlug: "gaming", brand: "Nintendo", price: 380000, originalPrice: 420000, image: "https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?w=400&h=400&fit=crop", badge: "-10%", rating: 4.7, inStock: true },
  { id: "g4", name: "Sony DualSense Wireless Controller", category: "Controllers", categorySlug: "gaming", brand: "Sony", price: 65000, image: "https://images.unsplash.com/photo-1592840496694-26d035b52b48?w=400&h=400&fit=crop", rating: 4.7, inStock: true },
  { id: "g5", name: "Xbox Elite Wireless Controller Series 2", category: "Controllers", categorySlug: "gaming", brand: "Microsoft", price: 125000, originalPrice: 140000, image: "https://images.unsplash.com/photo-1592840496694-26d035b52b48?w=400&h=400&fit=crop", badge: "-11%", rating: 4.8, inStock: true },
  { id: "g6", name: "SteelSeries Arctis Nova Pro Wireless Headset", category: "Game Accessories", categorySlug: "gaming", brand: "SteelSeries", price: 280000, originalPrice: 320000, image: "https://images.unsplash.com/photo-1592840496694-26d035b52b48?w=400&h=400&fit=crop", badge: "-13%", rating: 4.7, inStock: true },
  { id: "g7", name: "Razer BlackWidow V4 Mechanical Keyboard", category: "Game Accessories", categorySlug: "gaming", brand: "Razer", price: 120000, image: "https://images.unsplash.com/photo-1592840496694-26d035b52b48?w=400&h=400&fit=crop", rating: 4.6, inStock: true },
  { id: "g8", name: "ASUS ROG Strix G16 Gaming Laptop, i9, RTX 4070", category: "Gaming Laptops", categorySlug: "gaming", brand: "ASUS", price: 2800000, originalPrice: 3000000, image: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=400&h=400&fit=crop", badge: "-7%", rating: 4.8, inStock: true },
  { id: "g9", name: "MSI Katana 15 B13V Gaming Laptop, i7, RTX 4060", category: "Gaming Laptops", categorySlug: "gaming", brand: "MSI", price: 1850000, originalPrice: 2000000, image: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=400&h=400&fit=crop", badge: "-8%", rating: 4.6, inStock: true },

  // === STORAGE ===
  { id: "st1", name: "WD Elements 2TB External Hard Drive", category: "Hard Drives", categorySlug: "storage", brand: "WD", price: 58000, originalPrice: 65000, image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=400&h=400&fit=crop", badge: "-11%", rating: 4.5, inStock: true },
  { id: "st2", name: "Seagate Backup Plus 4TB External HDD", category: "Hard Drives", categorySlug: "storage", brand: "Seagate", price: 95000, originalPrice: 110000, image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=400&h=400&fit=crop", badge: "-14%", rating: 4.4, inStock: true },
  { id: "st3", name: "Toshiba Canvio Basics 1TB External HDD", category: "Hard Drives", categorySlug: "storage", brand: "Toshiba", price: 35000, image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=400&h=400&fit=crop", rating: 4.3, inStock: true },
  { id: "st4", name: "SanDisk Ultra 128GB USB 3.0 Flash Drive", category: "Flash Drives", categorySlug: "storage", brand: "SanDisk", price: 12000, originalPrice: 15000, image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=400&h=400&fit=crop", badge: "-20%", rating: 4.6, inStock: true },
  { id: "st5", name: "Samsung BAR Plus 256GB USB 3.1 Flash Drive", category: "Flash Drives", categorySlug: "storage", brand: "Samsung", price: 25000, image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=400&h=400&fit=crop", rating: 4.7, inStock: true },
  { id: "st6", name: "SanDisk Extreme 256GB MicroSD Card", category: "Memory Cards", categorySlug: "storage", brand: "SanDisk", price: 32000, originalPrice: 38000, image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=400&h=400&fit=crop", badge: "-16%", rating: 4.6, inStock: true },
  { id: "st7", name: "Samsung 980 PRO 1TB NVMe M.2 SSD", category: "SSD", categorySlug: "storage", brand: "Samsung", price: 185000, originalPrice: 210000, image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=400&h=400&fit=crop", badge: "-12%", rating: 4.8, inStock: true },
  { id: "st8", name: "WD Blue 500GB SATA SSD", category: "SSD", categorySlug: "storage", brand: "WD", price: 65000, originalPrice: 75000, image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=400&h=400&fit=crop", badge: "-13%", rating: 4.5, inStock: true },

  // === POWER ===
  { id: "pw1", name: "APC Back-UPS 1100VA (BX1100LI)", category: "UPS", categorySlug: "power", brand: "APC", price: 165000, originalPrice: 185000, image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=400&h=400&fit=crop", badge: "-11%", rating: 4.5, inStock: true },
  { id: "pw2", name: "APC Smart-UPS 1500VA LCD", category: "UPS", categorySlug: "power", brand: "APC", price: 380000, originalPrice: 420000, image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=400&h=400&fit=crop", badge: "-10%", rating: 4.7, inStock: true },
  { id: "pw3", name: "Mercury Elite 2000VA UPS", category: "UPS", categorySlug: "power", brand: "Mercury", price: 85000, image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=400&h=400&fit=crop", rating: 4.2, inStock: true },
  { id: "pw4", name: "APC Replacement Battery RBC7", category: "Batteries", categorySlug: "power", brand: "APC", price: 95000, image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=400&h=400&fit=crop", rating: 4.4, inStock: true },
  { id: "pw5", name: "TEC Stabilizer 5000VA (TEC-5000)", category: "Stabilizers", categorySlug: "power", brand: "TEC", price: 120000, originalPrice: 140000, image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=400&h=400&fit=crop", badge: "-14%", rating: 4.3, inStock: true },
  { id: "pw6", name: "Luminous 3.5KVA Pure Sine Wave Inverter", category: "Inverters", categorySlug: "power", brand: "Luminous", price: 450000, originalPrice: 500000, image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=400&h=400&fit=crop", badge: "-10%", rating: 4.5, inStock: true },
];

// Open Box products (discounted display/returned items)
export const openBoxProducts: Product[] = [
  { id: "ob1", name: 'MacBook Pro 14" M3 Pro [Open Box] - Like New', category: "Open Box", categorySlug: "open-box", brand: "Apple", price: 2450000, originalPrice: 2850000, image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=400&fit=crop", badge: "-14%", rating: 4.8, inStock: true },
  { id: "ob2", name: "Dell XPS 15 9530 [Open Box] - Excellent", category: "Open Box", categorySlug: "open-box", brand: "Dell", price: 2700000, originalPrice: 3200000, image: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=400&h=400&fit=crop", badge: "-16%", rating: 4.7, inStock: true },
  { id: "ob3", name: "Sony PlayStation 5 [Open Box]", category: "Open Box", categorySlug: "open-box", brand: "Sony", price: 480000, originalPrice: 580000, image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=400&h=400&fit=crop", badge: "-17%", rating: 4.6, inStock: true },
  { id: "ob4", name: "HP Color LaserJet Pro MFP [Open Box]", category: "Open Box", categorySlug: "open-box", brand: "HP", price: 420000, originalPrice: 520000, image: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=400&h=400&fit=crop", badge: "-19%", rating: 4.4, inStock: true },
  { id: "ob5", name: "Apple iPhone 16 Pro [Open Box] 256GB", category: "Open Box", categorySlug: "open-box", brand: "Apple", price: 1550000, originalPrice: 1810000, image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400&h=400&fit=crop", badge: "-14%", rating: 4.8, inStock: true },
  { id: "ob6", name: "Samsung Galaxy Tab S9 [Open Box]", category: "Open Box", categorySlug: "open-box", brand: "Samsung", price: 380000, originalPrice: 450000, image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=400&fit=crop", badge: "-16%", rating: 4.5, inStock: true },
];

// Pre-owned products
export const preOwnedProducts: Product[] = [
  { id: "po1", name: "Dell Latitude 7480 [Pre-owned] Grade A", category: "Pre-owned", categorySlug: "pre-owned", brand: "Dell", price: 185000, originalPrice: 285000, image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=400&h=400&fit=crop", badge: "-35%", rating: 4.3, inStock: true },
  { id: "po2", name: "HP EliteBook 840 G5 [Pre-owned] Grade A", category: "Pre-owned", categorySlug: "pre-owned", brand: "HP", price: 220000, originalPrice: 380000, image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=400&fit=crop", badge: "-42%", rating: 4.2, inStock: true },
  { id: "po3", name: "Lenovo ThinkPad T480 [Pre-owned] Grade B", category: "Pre-owned", categorySlug: "pre-owned", brand: "Lenovo", price: 165000, originalPrice: 320000, image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=400&h=400&fit=crop", badge: "-48%", rating: 4.0, inStock: true },
  { id: "po4", name: 'Apple iMac 21.5" [Pre-owned] Grade A', category: "Pre-owned", categorySlug: "pre-owned", brand: "Apple", price: 650000, originalPrice: 1100000, image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400&h=400&fit=crop", badge: "-41%", rating: 4.4, inStock: true },
  { id: "po5", name: "Dell OptiPlex 7070 SFF [Pre-owned]", category: "Pre-owned", categorySlug: "pre-owned", brand: "Dell", price: 195000, originalPrice: 350000, image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400&h=400&fit=crop", badge: "-44%", rating: 4.1, inStock: true },
  { id: "po6", name: "HP ProDesk 400 G5 [Pre-owned] Grade A", category: "Pre-owned", categorySlug: "pre-owned", brand: "HP", price: 145000, originalPrice: 280000, image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400&h=400&fit=crop", badge: "-48%", rating: 4.0, inStock: true },
];

// Helper to get products by category slug and optional subcategory
export const getProductsByCategory = (categorySlug: string, subcategory?: string): Product[] => {
  let products = allProducts.filter(p => p.categorySlug === categorySlug);
  if (subcategory) {
    products = products.filter(p => p.category.toLowerCase() === subcategory.toLowerCase());
  }
  return products;
};

export const getProductById = (id: string): Product | undefined => {
  return [...allProducts, ...openBoxProducts, ...preOwnedProducts].find(p => p.id === id);
};
