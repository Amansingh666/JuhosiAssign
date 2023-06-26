-- MySQLShell dump 2.0.1  Distrib Ver 8.0.33 for Win64 on x86_64 - for MySQL 8.0.33 (MySQL Community Server (GPL)), for Win64 (x86_64)
--
-- Host: localhost    Database: world    Table: country
-- ------------------------------------------------------
-- Server version	8.0.33

--
-- Table structure for table `country`
--

/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE IF NOT EXISTS `country` (
  `Code` char(3) NOT NULL DEFAULT '',
  `Name` char(52) NOT NULL DEFAULT '',
  `Continent` enum('Asia','Europe','North America','Africa','Oceania','Antarctica','South America') NOT NULL DEFAULT 'Asia',
  `Region` char(26) NOT NULL DEFAULT '',
  `SurfaceArea` decimal(10,2) NOT NULL DEFAULT '0.00',
  `IndepYear` smallint DEFAULT NULL,
  `Population` int NOT NULL DEFAULT '0',
  `LifeExpectancy` decimal(3,1) DEFAULT NULL,
  `GNP` decimal(10,2) DEFAULT NULL,
  `GNPOld` decimal(10,2) DEFAULT NULL,
  `LocalName` char(45) NOT NULL DEFAULT '',
  `GovernmentForm` char(45) NOT NULL DEFAULT '',
  `HeadOfState` char(60) DEFAULT NULL,
  `Capital` int DEFAULT NULL,
  `Code2` char(2) NOT NULL DEFAULT '',
  PRIMARY KEY (`Code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;
