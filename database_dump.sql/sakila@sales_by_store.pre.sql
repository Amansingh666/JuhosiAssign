-- MySQLShell dump 2.0.1  Distrib Ver 8.0.33 for Win64 on x86_64 - for MySQL 8.0.33 (MySQL Community Server (GPL)), for Win64 (x86_64)
--
-- Host: localhost    Database: sakila    Table: sales_by_store
-- ------------------------------------------------------
-- Server version	8.0.33

--
-- Temporary view structure for view `sales_by_store`
--

DROP TABLE IF EXISTS `sales_by_store`;
/*!50001 DROP VIEW IF EXISTS `sales_by_store`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `sales_by_store` AS SELECT 
 1 AS `store`,
 1 AS `manager`,
 1 AS `total_sales` */;
SET character_set_client = @saved_cs_client;
