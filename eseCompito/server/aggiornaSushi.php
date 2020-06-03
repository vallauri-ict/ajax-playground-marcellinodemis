<?php
    header("Content-type:application/json;charset=utf-8");
    require ("_libreria.php");

    _checkSession("username");

    $con= _connection("4b_sushi");

    //3. Lancio la query.
    $username=$_SESSION["username"];
    $sql="INSERT INTO sushi (id, nome, tipologia, pesce, verdura, salsa, utente) VALUES ()";
    $data = _eseguiQuery($con,$sql);
    echo(json_encode(array($data)));
    $con->close();
?>