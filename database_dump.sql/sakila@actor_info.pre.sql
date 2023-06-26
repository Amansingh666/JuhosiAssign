-- MySQLShell dump 2.0.1  Distrib Ver 8.0.33 for Win64 on x86_64 - for MySQL 8.0.33 (MySQL Community Server (GPL)), for Win64 (x86_64)
--
-- Host: localhost    Database: sakila    Table: actor_info
-- ------------------------------------------------------
-- Server version	8.0.33

--
-- Temporary view structure for view `actor_info`
--

DROP TABLE IF EXISTS `actor_info`;
/*!50001 DROP VIEW IF EXISTS `actor_info`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `actor_info` AS SELECT 
 1 AS `actor_id`,
 1 AS `first_name`,
 1 AS `last_name`,
 1 AS `film_info` */;
SET character_set_client = @saved_cs_client;
