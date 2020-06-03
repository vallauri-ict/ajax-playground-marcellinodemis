<?php
    header("Content-type:application/json;charset=utf-8");
    require ("_libreria.php");

    _checkSession("username");

    //1. Controllo parametri.
	if(!isset($_REQUEST["id"]))
    {
        http_response_code(400);
        die("Parametro mancante: id.");
    }
	
    if(!isset($_REQUEST["nome"]))
    {
        http_response_code(400);
        die("Parametro mancante: nome.");
    }
    if(!isset($_REQUEST["tipologia"]))
    {
        http_response_code(400);
        die("Parametro mancante: tipologia.");
    }
    if(!isset($_REQUEST["pesce"]))
    {
        http_response_code(400);
        die("Parametro mancante: pesce.");
    }
    if(!isset($_REQUEST["verdura"]))
    {
        http_response_code(400);
        die("Parametro mancante: verdura.");
    }
    if(!isset($_REQUEST["salsa"]))
    {
        http_response_code(400);
        die("Parametro mancante: salsa.");
    }

    //2. Connessione.
    $con= _connection("4b_sushi");

    //3.Query
	$id=$_REQUEST["id"];
    $nome=$_REQUEST["nome"];
    $tipologia=$_REQUEST["tipologia"];
    $pesce=$_REQUEST["pesce"];
    $verdura=$_REQUEST["verdura"];
    $salsa=$_REQUEST["salsa"];
    $username=$_SESSION["username"];
    $sql="INSERT INTO sushi (id, nome, tipologia, pesce, verdura, salsa, utente) VALUES ('$id', '$nome', '$tipologia', '$pesce', '$verdura', '$salsa', '$username');";
    $data=_eseguiQuery($con, $sql);
    echo($data);

    //4. Chiusura connessione.
    $con->close();
?>