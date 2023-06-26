-- MySQLShell dump 2.0.1  Distrib Ver 8.0.33 for Win64 on x86_64 - for MySQL 8.0.33 (MySQL Community Server (GPL)), for Win64 (x86_64)
--
-- Host: localhost    Database: sakila    Table: customer_list
-- ------------------------------------------------------
-- Server version	8.0.33

--
-- Temporary view structure for view `customer_list`
--

DROP TABLE IF EXISTS `customer_list`;
/*!50001 DROP VIEW IF EXISTS `customer_list`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `customer_list` AS SELECT 
 1 AS `ID`,
 1 AS `name`,
 1 AS `address`,
 1 AS `zip code`,
 1 AS `phone`,
 1 AS `city`,
 1 AS `country`,
 1 AS `notes`,
 1 AS `SID` */;
SET character_set_client = @saved_cs_client;
