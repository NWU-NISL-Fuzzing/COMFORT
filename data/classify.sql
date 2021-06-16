-- MySQL dump 10.13  Distrib 5.7.33, for Linux (x86_64)
--
-- Host: localhost    Database: classify
-- ------------------------------------------------------
-- Server version	5.7.33-0ubuntu0.18.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `exists_errortype`
--

DROP TABLE IF EXISTS `exists_errortype`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `exists_errortype` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `error_type` int(11) DEFAULT NULL,
  `engine` varchar(100) DEFAULT NULL,
  `error_info` text,
  `error_api` varchar(50) DEFAULT NULL,
  `count` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `exists_errortype`
--

LOCK TABLES `exists_errortype` WRITE;
/*!40000 ALTER TABLE `exists_errortype` DISABLE KEYS */;
INSERT INTO `exists_errortype` VALUES (1,2,'jerryscript','{\"v8\": \"RangeError: toString() radix argument must be between 2 and 36\", \"spidermonkey\": \"RangeError: radix must be an integer at least 2 and no greater than 36\", \"chakra\": \"RangeError: Number.prototype.toString: invalid argument\", \"javascriptCore\": \"RangeError: toString() radix argument must be between 2 and 36\", \"hermes\": \"RangeError: Invalid radix value\", \"quickjs\": \"RangeError: radix must be between 2 and 36\", \"graaljs\": \"RangeError: toString() expects radix in range 2-36\", \"rhino\": \"\", \"jjs\": \"RangeError: radix argument must be in [2, 36]\"}','NoApi',26),(2,1,'jerryscript','{\"jerryscript\": \"TypeError: Argument is not an object\"}','NoApi',1),(3,1,'jjs','{\"jjs\": \"TypeError: {%1%} is not an Object\"}','NoApi',1);
/*!40000 ALTER TABLE `exists_errortype` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-03-05 20:14:59
