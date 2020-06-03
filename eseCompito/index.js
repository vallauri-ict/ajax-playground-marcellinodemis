"use strict";

$(function () {		
	let _body= $("#tSushi tbody");
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
		creaTabella(data);
	});

	function creaTabella(data)
	{
		for(let record of data[0])
		{
			let r=$("<tr>");
			$("<td>", {"text" : record["id"]}).appendTo(r);
			$("<td>", {"text" : record["nome"]}).appendTo(r);
			$("<td>", {"text" : record["tipologia"]}).appendTo(r);
			$("<td>", {"text" : record["pesce"]}).appendTo(r);
			$("<td>", {"text" : record["verdura"]}).appendTo(r);
			$("<td>", {"text" : record["salsa"]}).appendTo(r);	
			r.appendTo(_body);
		}
	}

	$("#btnLogout").on("click", function(){
		let _richiestaLogout = inviaRichiesta("POST", "server/logout.php");		
		_richiestaLogout.fail(error);
		_richiestaLogout.done(function (data) { 
			if (data["ok"]==true){
				alert("LogOut avvenuto con successo");	
			    window.location.href="login.html";
			}
		});
	})
});
