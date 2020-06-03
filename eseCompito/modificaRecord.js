"use strict"

$(document).ready(function(){
    
    $("#modificaSushi").on("click",function(){
		alert("Purtroppo il modifica non funziona");
		/*
        let _eliminaSushi = inviaRichiesta("GET", "server/eliminaSushi.php");
	    _eliminaSushi.fail(function (jqXHR, test_satus, str_error){
		if(jqXHR.status==403)
		{
			window.location.href="login.html";
		}
		else
		{
			error(jqXHR, test_satus, str_error);
		}
        });
		
        for(let record of data[0])
         {
            let _aggiornaSushi = inviaRichiesta("GET", "server/aggiornaSushi.php");
	        _aggiornaSushi.fail(function (jqXHR, test_satus, str_error){
				if(jqXHR.status==403)
				 {
				   window.location.href="login.html";
				 }
				else
				 {
				   error(jqXHR, test_satus, str_error);
				 }
            });
        }
		*/
    });
	
    /*
	let _richiestaSushi = inviaRichiesta("GET", "server/richiestaSushi.php");
	_richiestaSushi.fail(function (jqXHR, test_satus, str_error){
		if(jqXHR.status==403)
		{
			window.location.href="login.html";
		}
		else
		{
			error(jqXHR, test_satus, str_error);
		}
	});

	_richiestaSushi.done(function(data){
		aggiornaTabella(data);
	});
    
    function aggiornaTabella(data)
    {
        let i=0;
        for(let record of data[0])
        {
            console.log(record);
            let r=$("<tr>");
            let _td=$("<td>").prop("id",record["id"]).appendTo(r);
            $("<input>", {"value": record["id"]}).appendTo(_td);
            _td=$("<td>").prop("id",record["nome"]).appendTo(r);
            $("<input>", {"value": record["nome"]}).appendTo(_td);
            _td=$("<td>").prop("id",record["tipologia"]).appendTo(r);
            $("<input>", {"value": record["tipologia"]}).appendTo(_td);
            _td=$("<td>").prop("id",record["pesce"]).appendTo(r);
            $("<input>", {"value": record["pesce"]}).appendTo(_td);
			_td=$("<td>").prop("id",record["verdura"]).appendTo(r);
            $("<input>", {"value": record["verdura"]}).appendTo(_td);
			_td=$("<td>").prop("id",record["salsa"]).appendTo(r);
            $("<input>", {"value": record["salsa"]}).appendTo(_td);
            r.appendTo(_body);
        }
    }
	*/
});