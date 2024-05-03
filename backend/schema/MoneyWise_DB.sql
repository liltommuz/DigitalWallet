-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Versione server:              11.4.0-MariaDB - mariadb.org binary distribution
-- S.O. server:                  Win64
-- HeidiSQL Versione:            12.3.0.6589
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Dump della struttura del database money_wise
CREATE DATABASE IF NOT EXISTS `money_wise` /*!40100 DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci */;
USE `money_wise`;

-- Dump della struttura di tabella money_wise.accounts


-- Dump dei dati della tabella money_wise.accounts: ~0 rows (circa)

-- Dump della struttura di tabella money_wise.transactions

-- Dump dei dati della tabella money_wise.transactions: ~0 rows (circa)

-- Dump della struttura di tabella money_wise.users
CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `firstName` varchar(255) NOT NULL,
  `lastName` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=114 DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;



CREATE TABLE IF NOT EXISTS `accounts` (
  `account_id` int(11) NOT NULL AUTO_INCREMENT,
  `typology` varchar(255) NOT NULL CHECK (`typology` in ('Cash','Bank','Savings','Card')),
  `name` varchar(255) NOT NULL,
  `amount` decimal(15,2) NOT NULL,
  `user_id` int(11) NOT NULL,
  PRIMARY KEY (`account_id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `accounts_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

CREATE TABLE IF NOT EXISTS `transactions` (
  `transaction_id` int(11) NOT NULL AUTO_INCREMENT,
  `amount` decimal(15,2) NOT NULL,
  `isIncome` tinyint(1) NOT NULL,
  `date` datetime NOT NULL,
  `account_id` int(11) NOT NULL,
  PRIMARY KEY (`transaction_id`),
  KEY `account_id` (`account_id`),
  CONSTRAINT `transactions_ibfk_2` FOREIGN KEY (`account_id`) REFERENCES `accounts` (`account_id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;


-- Dump dei dati della tabella money_wise.users: ~5 rows (circa)
INSERT INTO `users` (`id`, `firstName`, `lastName`, `email`, `password`) VALUES
	(1, 'Tommaso', 'Fatticcioni', 'fatticcionitommaso@gmail.com', 'Pippo1'),
	(2, 'Nicola', 'Boh', 'alzyontop@gmail.com', 'Pluto1'),
	(111, 'Federico', 'Locci', 'test@gmail.com', 'Ciaociao1'),
	(112, 'Federico', 'Locci', 'test2@gmail.com', 'Ciaociao1'),
	(113, 'Francesco', 'Caianiello', 'giofracai@gmail.com', 'Ciaociao1');

INSERT INTO `accounts` (`account_id`, `typology`, `name`, `amount`, `user_id`) VALUES
	(1, 'Cash', 'Portafoglio', 15.00, 1),
	(2, 'Bank', 'Unicredit', 1000.00, 1),
	(3, 'Savings', 'Salvadanaio', 50.00, 1),
	(4, 'Card', 'Hype', 60.00, 1);

  

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
