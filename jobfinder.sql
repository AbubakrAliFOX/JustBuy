-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: justbuy
-- ------------------------------------------------------
-- Server version	8.4.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `cache`
--

DROP TABLE IF EXISTS `cache`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cache` (
  `key` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `value` mediumtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `expiration` int NOT NULL,
  PRIMARY KEY (`key`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cache`
--

LOCK TABLES `cache` WRITE;
/*!40000 ALTER TABLE `cache` DISABLE KEYS */;
/*!40000 ALTER TABLE `cache` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cache_locks`
--

DROP TABLE IF EXISTS `cache_locks`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cache_locks` (
  `key` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `owner` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `expiration` int NOT NULL,
  PRIMARY KEY (`key`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cache_locks`
--

LOCK TABLES `cache_locks` WRITE;
/*!40000 ALTER TABLE `cache_locks` DISABLE KEYS */;
/*!40000 ALTER TABLE `cache_locks` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categories` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'beauty'),(2,'fragrances'),(3,'furniture'),(4,'groceries');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `failed_jobs`
--

DROP TABLE IF EXISTS `failed_jobs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `failed_jobs` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `failed_jobs`
--

LOCK TABLES `failed_jobs` WRITE;
/*!40000 ALTER TABLE `failed_jobs` DISABLE KEYS */;
/*!40000 ALTER TABLE `failed_jobs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `job_batches`
--

DROP TABLE IF EXISTS `job_batches`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `job_batches` (
  `id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `total_jobs` int NOT NULL,
  `pending_jobs` int NOT NULL,
  `failed_jobs` int NOT NULL,
  `failed_job_ids` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `options` mediumtext COLLATE utf8mb4_unicode_ci,
  `cancelled_at` int DEFAULT NULL,
  `created_at` int NOT NULL,
  `finished_at` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `job_batches`
--

LOCK TABLES `job_batches` WRITE;
/*!40000 ALTER TABLE `job_batches` DISABLE KEYS */;
/*!40000 ALTER TABLE `job_batches` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `jobs`
--

DROP TABLE IF EXISTS `jobs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `jobs` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `queue` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `attempts` tinyint unsigned NOT NULL,
  `reserved_at` int unsigned DEFAULT NULL,
  `available_at` int unsigned NOT NULL,
  `created_at` int unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `jobs_queue_index` (`queue`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `jobs`
--

LOCK TABLES `jobs` WRITE;
/*!40000 ALTER TABLE `jobs` DISABLE KEYS */;
/*!40000 ALTER TABLE `jobs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `migrations`
--

DROP TABLE IF EXISTS `migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `migrations` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=449 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `migrations`
--

LOCK TABLES `migrations` WRITE;
/*!40000 ALTER TABLE `migrations` DISABLE KEYS */;
INSERT INTO `migrations` VALUES (436,'0001_01_01_000000_create_users_table',1),(437,'0001_01_01_000001_create_cache_table',1),(438,'0001_01_01_000002_create_jobs_table',1),(439,'2024_06_25_153425_create_categories_table',1),(440,'2024_06_25_163425_create_subcategories_table',1),(441,'2024_06_25_163428_create_users_table',1),(442,'2024_06_25_171019_create_orders_table',1),(443,'2024_06_25_171114_create_products_table',1),(444,'2024_06_25_171356_create_product_order_table',1),(445,'2024_06_25_172354_alter_product_order_table',1),(446,'2024_06_25_232525_create_product_subcategory_table',1),(447,'2024_06_26_112034_create_personal_access_tokens_table',1),(448,'2024_06_26_122034_create_wishlist_table',1);
/*!40000 ALTER TABLE `migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orders` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `user_id` bigint unsigned NOT NULL,
  `order_price` decimal(8,2) NOT NULL,
  `date` timestamp NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `password_reset_tokens`
--

DROP TABLE IF EXISTS `password_reset_tokens`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `password_reset_tokens`
--

LOCK TABLES `password_reset_tokens` WRITE;
/*!40000 ALTER TABLE `password_reset_tokens` DISABLE KEYS */;
/*!40000 ALTER TABLE `password_reset_tokens` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `personal_access_tokens`
--

DROP TABLE IF EXISTS `personal_access_tokens`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `personal_access_tokens` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `tokenable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint unsigned NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `personal_access_tokens`
--

LOCK TABLES `personal_access_tokens` WRITE;
/*!40000 ALTER TABLE `personal_access_tokens` DISABLE KEYS */;
/*!40000 ALTER TABLE `personal_access_tokens` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_order`
--

DROP TABLE IF EXISTS `product_order`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product_order` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `order_id` bigint unsigned NOT NULL,
  `product_id` bigint unsigned NOT NULL,
  `quantity` int NOT NULL,
  `item_price` decimal(8,2) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `product_order_order_id_foreign` (`order_id`),
  KEY `product_order_product_id_foreign` (`product_id`),
  CONSTRAINT `product_order_order_id_foreign` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`) ON DELETE CASCADE,
  CONSTRAINT `product_order_product_id_foreign` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_order`
--

LOCK TABLES `product_order` WRITE;
/*!40000 ALTER TABLE `product_order` DISABLE KEYS */;
/*!40000 ALTER TABLE `product_order` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_subcategory`
--

DROP TABLE IF EXISTS `product_subcategory`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product_subcategory` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `subcategory_id` bigint unsigned NOT NULL,
  `product_id` bigint unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `product_subcategory_subcategory_id_foreign` (`subcategory_id`),
  KEY `product_subcategory_product_id_foreign` (`product_id`),
  CONSTRAINT `product_subcategory_product_id_foreign` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE,
  CONSTRAINT `product_subcategory_subcategory_id_foreign` FOREIGN KEY (`subcategory_id`) REFERENCES `subcategories` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_subcategory`
--

LOCK TABLES `product_subcategory` WRITE;
/*!40000 ALTER TABLE `product_subcategory` DISABLE KEYS */;
INSERT INTO `product_subcategory` VALUES (1,1,1),(2,2,2),(3,3,3),(4,4,4),(5,5,5),(6,6,6),(7,6,7),(8,6,8),(9,6,9),(10,6,10),(11,7,11),(12,8,12),(13,9,13),(14,10,14),(15,11,15),(16,12,16),(17,13,17),(18,14,18),(19,15,18),(20,15,19),(21,16,20),(22,17,21),(23,17,22),(24,18,22),(25,19,23),(26,20,24),(27,20,25),(28,20,26),(29,21,27),(30,22,28),(31,23,29),(32,23,30);
/*!40000 ALTER TABLE `product_subcategory` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `category_id` bigint unsigned NOT NULL,
  `price` decimal(8,2) NOT NULL,
  `discount_percentage` double NOT NULL,
  `stock` int NOT NULL,
  `brand` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `sku` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `weight` int NOT NULL,
  `shipping_information` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `availability_status` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image_url` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `thumbnail_url` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  KEY `products_category_id_foreign` (`category_id`),
  CONSTRAINT `products_category_id_foreign` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'Essence Mascara Lash Princess','The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.',1,9.99,7.17,5,'Essence','RCH45Q1A',2,'Ships in 1 month','Low Stock','https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png','https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png'),(2,'Eyeshadow Palette with Mirror','The Eyeshadow Palette with Mirror offers a versatile range of eyeshadow shades for creating stunning eye looks. With a built-in mirror, it\'s convenient for on-the-go makeup application.',1,19.99,5.5,44,'Glamour Beauty','MVCFH27F',3,'Ships in 2 weeks','In Stock','https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/1.png','https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/thumbnail.png'),(3,'Powder Canister','The Powder Canister is a finely milled setting powder designed to set makeup and control shine. With a lightweight and translucent formula, it provides a smooth and matte finish.',1,14.99,18.14,59,'Velvet Touch','9EN8WLT2',8,'Ships in 1-2 business days','In Stock','https://cdn.dummyjson.com/products/images/beauty/Powder%20Canister/1.png','https://cdn.dummyjson.com/products/images/beauty/Powder%20Canister/thumbnail.png'),(4,'Red Lipstick','The Red Lipstick is a classic and bold choice for adding a pop of color to your lips. With a creamy and pigmented formula, it provides a vibrant and long-lasting finish.',1,12.99,19.03,68,'Chic Cosmetics','O5IF1NTA',5,'Ships in 2 weeks','In Stock','https://cdn.dummyjson.com/products/images/beauty/Red%20Lipstick/1.png','https://cdn.dummyjson.com/products/images/beauty/Red%20Lipstick/thumbnail.png'),(5,'Red Nail Polish','The Red Nail Polish offers a rich and glossy red hue for vibrant and polished nails. With a quick-drying formula, it provides a salon-quality finish at home.',1,8.99,2.46,71,'Nail Couture','YUIIIP4W',9,'Ships in 1 week','In Stock','https://cdn.dummyjson.com/products/images/beauty/Red%20Nail%20Polish/1.png','https://cdn.dummyjson.com/products/images/beauty/Red%20Nail%20Polish/thumbnail.png'),(6,'Calvin Klein CK One','CK One by Calvin Klein is a classic unisex fragrance, known for its fresh and clean scent. It\'s a versatile fragrance suitable for everyday wear.',2,49.99,0.32,17,'Calvin Klein','DZM2JQZE',5,'Ships overnight','In Stock','https://cdn.dummyjson.com/products/images/fragrances/Calvin%20Klein%20CK%20One/1.png','https://cdn.dummyjson.com/products/images/fragrances/Calvin%20Klein%20CK%20One/thumbnail.png'),(7,'Chanel Coco Noir Eau De','Coco Noir by Chanel is an elegant and mysterious fragrance, featuring notes of grapefruit, rose, and sandalwood. Perfect for evening occasions.',2,129.99,18.64,41,'Chanel','K71HBCGS',4,'Ships in 1 month','In Stock','https://cdn.dummyjson.com/products/images/fragrances/Chanel%20Coco%20Noir%20Eau%20De/1.png','https://cdn.dummyjson.com/products/images/fragrances/Chanel%20Coco%20Noir%20Eau%20De/thumbnail.png'),(8,'Dior J\'adore','J\'adore by Dior is a luxurious and floral fragrance, known for its blend of ylang-ylang, rose, and jasmine. It embodies femininity and sophistication.',2,89.99,17.44,91,'Dior','E70NB03B',10,'Ships in 2 weeks','In Stock','https://cdn.dummyjson.com/products/images/fragrances/Dior%20J\'adore/1.png','https://cdn.dummyjson.com/products/images/fragrances/Dior%20J\'adore/thumbnail.png'),(9,'Dolce Shine Eau de','Dolce Shine by Dolce & Gabbana is a vibrant and fruity fragrance, featuring notes of mango, jasmine, and blonde woods. It\'s a joyful and youthful scent.',2,69.99,11.47,3,'Dolce & Gabbana','1NBFK980',5,'Ships in 1-2 business days','Low Stock','https://cdn.dummyjson.com/products/images/fragrances/Dolce%20Shine%20Eau%20de/1.png','https://cdn.dummyjson.com/products/images/fragrances/Dolce%20Shine%20Eau%20de/thumbnail.png'),(10,'Gucci Bloom Eau de','Gucci Bloom by Gucci is a floral and captivating fragrance, with notes of tuberose, jasmine, and Rangoon creeper. It\'s a modern and romantic scent.',2,79.99,8.9,93,'Gucci','FFKZ6HOF',10,'Ships in 2 weeks','In Stock','https://cdn.dummyjson.com/products/images/fragrances/Gucci%20Bloom%20Eau%20de/1.png','https://cdn.dummyjson.com/products/images/fragrances/Gucci%20Bloom%20Eau%20de/thumbnail.png'),(11,'Annibale Colombo Bed','The Annibale Colombo Bed is a luxurious and elegant bed frame, crafted with high-quality materials for a comfortable and stylish bedroom.',3,1899.99,0.29,47,'Annibale Colombo','4KMDTZWF',3,'Ships overnight','In Stock','https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Bed/1.png','https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Bed/thumbnail.png'),(12,'Annibale Colombo Sofa','The Annibale Colombo Sofa is a sophisticated and comfortable seating option, featuring exquisite design and premium upholstery for your living room.',3,2499.99,18.54,16,'Annibale Colombo','LUU95CQP',3,'Ships overnight','In Stock','https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Sofa/1.png','https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Sofa/thumbnail.png'),(13,'Bedside Table African Cherry','The Bedside Table in African Cherry is a stylish and functional addition to your bedroom, providing convenient storage space and a touch of elegance.',3,299.99,9.58,16,'Furniture Co.','OWPLTZYX',10,'Ships in 1-2 business days','In Stock','https://cdn.dummyjson.com/products/images/furniture/Bedside%20Table%20African%20Cherry/1.png','https://cdn.dummyjson.com/products/images/furniture/Bedside%20Table%20African%20Cherry/thumbnail.png'),(14,'Knoll Saarinen Executive Conference Chair','The Knoll Saarinen Executive Conference Chair is a modern and ergonomic chair, perfect for your office or conference room with its timeless design.',3,499.99,15.23,47,'Knoll','RKHVJ4FE',3,'Ships in 3-5 business days','In Stock','https://cdn.dummyjson.com/products/images/furniture/Knoll%20Saarinen%20Executive%20Conference%20Chair/1.png','https://cdn.dummyjson.com/products/images/furniture/Knoll%20Saarinen%20Executive%20Conference%20Chair/thumbnail.png'),(15,'Wooden Bathroom Sink With Mirror','The Wooden Bathroom Sink with Mirror is a unique and stylish addition to your bathroom, featuring a wooden sink countertop and a matching mirror.',3,799.99,11.22,95,'Bath Trends','7OLTIEVO',6,'Ships in 3-5 business days','In Stock','https://cdn.dummyjson.com/products/images/furniture/Wooden%20Bathroom%20Sink%20With%20Mirror/1.png','https://cdn.dummyjson.com/products/images/furniture/Wooden%20Bathroom%20Sink%20With%20Mirror/thumbnail.png'),(16,'Apple','Fresh and crisp apples, perfect for snacking or incorporating into various recipes.',4,1.99,1.97,9,NULL,'QTROUV79',8,'Ships in 2 weeks','In Stock','https://cdn.dummyjson.com/products/images/groceries/Apple/1.png','https://cdn.dummyjson.com/products/images/groceries/Apple/thumbnail.png'),(17,'Beef Steak','High-quality beef steak, great for grilling or cooking to your preferred level of doneness.',4,12.99,17.99,96,NULL,'BWWA2MSO',9,'Ships overnight','In Stock','https://cdn.dummyjson.com/products/images/groceries/Beef%20Steak/1.png','https://cdn.dummyjson.com/products/images/groceries/Beef%20Steak/thumbnail.png'),(18,'Cat Food','Nutritious cat food formulated to meet the dietary needs of your feline friend.',4,8.99,9.57,13,NULL,'C3F8QN6O',9,'Ships in 1-2 business days','In Stock','https://cdn.dummyjson.com/products/images/groceries/Cat%20Food/1.png','https://cdn.dummyjson.com/products/images/groceries/Cat%20Food/thumbnail.png'),(19,'Chicken Meat','Fresh and tender chicken meat, suitable for various culinary preparations.',4,9.99,10.46,69,NULL,'G5YEHW7B',7,'Ships in 1 month','In Stock','https://cdn.dummyjson.com/products/images/groceries/Chicken%20Meat/1.png','https://cdn.dummyjson.com/products/images/groceries/Chicken%20Meat/thumbnail.png'),(20,'Cooking Oil','Versatile cooking oil suitable for frying, sautéing, and various culinary applications.',4,4.99,18.89,22,NULL,'Q6ZP1UY8',8,'Ships in 1 month','In Stock','https://cdn.dummyjson.com/products/images/groceries/Cooking%20Oil/1.png','https://cdn.dummyjson.com/products/images/groceries/Cooking%20Oil/thumbnail.png'),(21,'Cucumber','Crisp and hydrating cucumbers, ideal for salads, snacks, or as a refreshing side.',4,1.49,11.44,22,NULL,'6KGF2K6Z',9,'Ships overnight','In Stock','https://cdn.dummyjson.com/products/images/groceries/Cucumber/1.png','https://cdn.dummyjson.com/products/images/groceries/Cucumber/thumbnail.png'),(22,'Dog Food','Specially formulated dog food designed to provide essential nutrients for your canine companion.',4,10.99,18.15,40,NULL,'A6QRCH37',2,'Ships in 1 month','In Stock','https://cdn.dummyjson.com/products/images/groceries/Dog%20Food/1.png','https://cdn.dummyjson.com/products/images/groceries/Dog%20Food/thumbnail.png'),(23,'Eggs','Fresh eggs, a versatile ingredient for baking, cooking, or breakfast.',4,2.99,5.8,10,NULL,'YA617RI7',4,'Ships overnight','In Stock','https://cdn.dummyjson.com/products/images/groceries/Eggs/1.png','https://cdn.dummyjson.com/products/images/groceries/Eggs/thumbnail.png'),(24,'Fish Steak','Quality fish steak, suitable for grilling, baking, or pan-searing.',4,14.99,7,99,NULL,'XNIH1MTA',8,'Ships in 1 month','In Stock','https://cdn.dummyjson.com/products/images/groceries/Fish%20Steak/1.png','https://cdn.dummyjson.com/products/images/groceries/Fish%20Steak/thumbnail.png'),(25,'Green Bell Pepper','Fresh and vibrant green bell pepper, perfect for adding color and flavor to your dishes.',4,1.29,15.5,89,NULL,'HU7S7VQ0',7,'Ships overnight','In Stock','https://cdn.dummyjson.com/products/images/groceries/Green%20Bell%20Pepper/1.png','https://cdn.dummyjson.com/products/images/groceries/Green%20Bell%20Pepper/thumbnail.png'),(26,'Green Chili Pepper','Spicy green chili pepper, ideal for adding heat to your favorite recipes.',4,0.99,18.51,8,NULL,'Y4RM3JCB',2,'Ships in 1-2 business days','In Stock','https://cdn.dummyjson.com/products/images/groceries/Green%20Chili%20Pepper/1.png','https://cdn.dummyjson.com/products/images/groceries/Green%20Chili%20Pepper/thumbnail.png'),(27,'Honey Jar','Pure and natural honey in a convenient jar, perfect for sweetening beverages or drizzling over food.',4,6.99,1.91,25,NULL,'BTBNIIOU',9,'Ships overnight','In Stock','https://cdn.dummyjson.com/products/images/groceries/Honey%20Jar/1.png','https://cdn.dummyjson.com/products/images/groceries/Honey%20Jar/thumbnail.png'),(28,'Ice Cream','Creamy and delicious ice cream, available in various flavors for a delightful treat.',4,5.49,7.58,76,NULL,'VEZMU1EQ',5,'Ships in 2 weeks','In Stock','https://cdn.dummyjson.com/products/images/groceries/Ice%20Cream/1.png','https://cdn.dummyjson.com/products/images/groceries/Ice%20Cream/thumbnail.png'),(29,'Juice','Refreshing fruit juice, packed with vitamins and great for staying hydrated.',4,3.99,5.45,99,NULL,'M2K19S06',2,'Ships in 1-2 business days','In Stock','https://cdn.dummyjson.com/products/images/groceries/Juice/1.png','https://cdn.dummyjson.com/products/images/groceries/Juice/thumbnail.png'),(30,'Kiwi','Nutrient-rich kiwi, perfect for snacking or adding a tropical twist to your dishes.',4,2.49,10.32,1,NULL,'0X3NORB9',8,'Ships in 3-5 business days','Low Stock','https://cdn.dummyjson.com/products/images/groceries/Kiwi/1.png','https://cdn.dummyjson.com/products/images/groceries/Kiwi/thumbnail.png');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sessions`
--

DROP TABLE IF EXISTS `sessions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sessions` (
  `id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` bigint unsigned DEFAULT NULL,
  `ip_address` varchar(45) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `user_agent` text COLLATE utf8mb4_unicode_ci,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `last_activity` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `sessions_user_id_index` (`user_id`),
  KEY `sessions_last_activity_index` (`last_activity`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sessions`
--

LOCK TABLES `sessions` WRITE;
/*!40000 ALTER TABLE `sessions` DISABLE KEYS */;
/*!40000 ALTER TABLE `sessions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `subcategories`
--

DROP TABLE IF EXISTS `subcategories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `subcategories` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `category_id` bigint unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `subcategories_category_id_foreign` (`category_id`),
  CONSTRAINT `subcategories_category_id_foreign` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `subcategories`
--

LOCK TABLES `subcategories` WRITE;
/*!40000 ALTER TABLE `subcategories` DISABLE KEYS */;
INSERT INTO `subcategories` VALUES (1,'mascara',1),(2,'eyeshadow',1),(3,'face powder',1),(4,'lipstick',1),(5,'nail polish',1),(6,'perfumes',2),(7,'beds',3),(8,'sofas',3),(9,'bedside tables',3),(10,'office chairs',3),(11,'bathroom',3),(12,'fruits',4),(13,'meat',4),(14,'pet supplies',4),(15,'cat food',4),(16,'cooking essentials',4),(17,'vegetables',4),(18,'dog food',4),(19,'dairy',4),(20,'seafood',4),(21,'condiments',4),(22,'desserts',4),(23,'beverages',4);
/*!40000 ALTER TABLE `subcategories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `is_admin` tinyint NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_email_unique` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `wishlists`
--

DROP TABLE IF EXISTS `wishlists`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `wishlists` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `product_id` bigint unsigned NOT NULL,
  `user_id` bigint unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `wishlists_product_id_foreign` (`product_id`),
  KEY `wishlists_user_id_foreign` (`user_id`),
  CONSTRAINT `wishlists_product_id_foreign` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE,
  CONSTRAINT `wishlists_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `wishlists`
--

LOCK TABLES `wishlists` WRITE;
/*!40000 ALTER TABLE `wishlists` DISABLE KEYS */;
/*!40000 ALTER TABLE `wishlists` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-07-02 22:22:53
