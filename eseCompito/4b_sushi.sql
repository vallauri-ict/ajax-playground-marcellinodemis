-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Creato il: Giu 03, 2020 alle 15:22
-- Versione del server: 10.4.11-MariaDB
-- Versione PHP: 7.4.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `4b_sushi`
--
CREATE DATABASE IF NOT EXISTS `4b_sushi` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `4b_sushi`;

-- --------------------------------------------------------

--
-- Struttura della tabella `sushi`
--

CREATE TABLE `sushi` (
  `id` int(11) NOT NULL,
  `nome` text NOT NULL,
  `tipologia` text NOT NULL,
  `pesce` text NOT NULL,
  `verdura` text NOT NULL,
  `salsa` text NOT NULL,
  `utente` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dump dei dati per la tabella `sushi`
--

INSERT INTO `sushi` (`id`, `nome`, `tipologia`, `pesce`, `verdura`, `salsa`, `utente`) VALUES
(1, 'Special', 'Hosomaki', 'Branzino', 'Cetriolo', 'Soia', 'Milanesi'),
(2, 'Tempura', 'Temaki', 'Gambero', 'Zucchina', 'Soia', 'Marcelo'),
(3, 'Miura', 'Uramaki', 'Salmone', 'Lattuga', 'Philadelphia', 'Lombardi'),
(4, 'Ebi', 'Uramaki', 'Gambero', 'Cetriolo', 'Maionese', 'Trevisano'),
(5, 'Oshi', 'Uramaki', 'Salmone', 'Avocado', 'Soia', 'Marchesi'),
(6, 'Fire', 'Gunkan', 'Surimi', 'Carota', 'Piccante', 'Milanesi'),
(7, 'SpicyTuna', 'Gunkan', 'Tonno', 'Lattuga', 'Piccante', 'Marcelo'),
(8, 'Salmon', 'Sashimi', 'Salmone', 'Carota', 'Philadelphia', 'Lombardi'),
(9, 'Jap', 'Nighiri', 'Surimi', 'Avocado', 'Piccante', 'Trevisano'),
(10, 'Kani', 'Hosomaki', 'Gambero', 'Avocado', 'Agrodolce', 'Marchesi'),
(11, 'Ika', 'Sashimi', 'Branzino', 'Carota', 'Maionese', 'Milanesi'),
(12, 'Maguro', 'Temaki', 'Tonno', 'Avocado', 'Maionese', 'Marcelo'),
(13, 'Tuna', 'Nighiri', 'Tonno', 'Lattuga', 'Philadelphia', 'Lombardi'),
(14, 'Combas', 'Sashimi', 'Branzino', 'Lattuga', 'Soia', 'Trevisano'),
(15, 'Guncom', 'Gunkan', 'Branzino', 'Zucchina', 'Agrodolce', 'Marchesi'),
(16, 'Irama', 'Hosomaki', 'Surimi', 'Cetriolo', 'Philadelphia', 'Milanesi'),
(17, 'Ikura', 'Gunkan', 'Surimi', 'Avocado', 'Soia', 'Marcelo'),
(18, 'Kyo', 'Futomaki', 'Gambero', 'Carota', 'Piccante', 'Lombardi'),
(19, 'Fresh', 'Temaki', 'Branzino', 'Cetriolo', 'Soia', 'Trevisano'),
(20, 'Cale', 'Futomaki', 'Salmone', 'Carota', 'Soia', 'Marchesi');

-- --------------------------------------------------------

--
-- Struttura della tabella `utenti`
--

CREATE TABLE `utenti` (
  `id` int(11) NOT NULL,
  `username` text NOT NULL,
  `password` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dump dei dati per la tabella `utenti`
--

INSERT INTO `utenti` (`id`, `username`, `password`) VALUES
(1, 'Milanesi', '5f4dcc3b5aa765d61d8327deb882cf99'),
(2, 'Marcelo', '5f4dcc3b5aa765d61d8327deb882cf99'),
(3, 'Lombardi', '5f4dcc3b5aa765d61d8327deb882cf99'),
(4, 'Trevisano', '5f4dcc3b5aa765d61d8327deb882cf99'),
(5, 'Marchesi', '5f4dcc3b5aa765d61d8327deb882cf99');

--
-- Indici per le tabelle scaricate
--

--
-- Indici per le tabelle `sushi`
--
ALTER TABLE `sushi`
  ADD PRIMARY KEY (`id`);

--
-- Indici per le tabelle `utenti`
--
ALTER TABLE `utenti`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT per le tabelle scaricate
--

--
-- AUTO_INCREMENT per la tabella `utenti`
--
ALTER TABLE `utenti`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
