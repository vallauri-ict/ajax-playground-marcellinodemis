"use strict"

$(document).ready(function(){
	
	$("#aggiungiSushi").on("click",function(){
		let _id=$("#sId").val();
		let _nome=$("#sNome").val();
		let _tipologia=$("#sTipologia").val();
		let _pesce=$("#sPesce").val();
		let _verdura=$("#sVerdura").val();
		let _salsa=$("#sSalsa").val();
		
		let _aggiungiSushi= inviaRichiesta("POST", "server/aggiungiSushi.php", {"id":_id, "nome":_nome, "tipologia":_tipologia, "pesce":_pesce, "verdura":_verdura, "salsa":_salsa} );
		_aggiungiSushi.fail(function(jqXHR, test_status, str_error) {
			if (jqXHR.status == 403)
			{
				//Unauthorized
				window.location.href="login.html";
			}
			else
			{
				error(jqXHR, test_status, str_error);
			}
		});
		_aggiungiSushi.done(function(data) {
			console.log(data);
			alert("Sushi inserito correttamente");
		});	
	});
});