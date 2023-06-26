-- MySQLShell dump 2.0.1  Distrib Ver 8.0.33 for Win64 on x86_64 - for MySQL 8.0.33 (MySQL Community Server (GPL)), for Win64 (x86_64)
--
-- Host: localhost    Database: sakila    Table: store
-- ------------------------------------------------------
-- Server version	8.0.33

--
-- Table structure for table `store`
--

/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE IF NOT EXISTS `store` (
  `store_id` tinyint unsigned NOT NULL AUTO_INCREMENT,
  `manager_staff_id` tinyint unsigned NOT NULL,
  `address_id` smallint unsigned NOT NULL,
  `last_update` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`store_id`),
  UNIQUE KEY `idx_unique_manager` (`manager_staff_id`),
  KEY `idx_fk_address_id` (`address_id`),
  CONSTRAINT `fk_store_address` FOREIGN KEY (`address_id`) REFERENCES `address` (`address_id`) ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT `fk_store_staff` FOREIGN KEY (`manager_staff_id`) REFERENCES `staff` (`staff_id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;
