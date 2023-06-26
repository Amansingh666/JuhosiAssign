-- MySQLShell dump 2.0.1  Distrib Ver 8.0.33 for Win64 on x86_64 - for MySQL 8.0.33 (MySQL Community Server (GPL)), for Win64 (x86_64)
--
-- Host: localhost    Database: database_assingment    Table: customer
-- ------------------------------------------------------
-- Server version	8.0.33

--
-- Table structure for table `customer`
--

/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE IF NOT EXISTS `customer` (
  `id` int NOT NULL AUTO_INCREMENT,
  `order_date` date NOT NULL,
  `company` varchar(50) NOT NULL,
  `owner` varchar(50) NOT NULL,
  `item` varchar(50) NOT NULL,
  `quantity` int NOT NULL,
  `weight` float NOT NULL,
  `shipment_request` varchar(50) NOT NULL,
  `tracking_id` varchar(50) NOT NULL,
  `shipment_size` varchar(25) NOT NULL,
  `box_count` int NOT NULL,
  `specification` text NOT NULL,
  `checklist_quantity` int NOT NULL,
  `auth_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `auth_id` (`auth_id`),
  CONSTRAINT `customer_ibfk_1` FOREIGN KEY (`auth_id`) REFERENCES `auth` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;
