"use strict"

$(document).ready(function() {
    let _img = $("#img");
    let _dettagli = $("li");
    let _lblFrase = $("#lblFrase");
    let _lblInfo = $("#lblInfo");
    let _radioButton = $(".rdbGenere");
    let _range = $("#numeroPersone");
	let _btnGenera = $("#btnGenera");
	let _liGeneralita = $("#liGeneralita");
	let _liEmail = $("#_liEmail");
    let _liCompleanno = $("#liCompleanno");
    let _liIndirizzo = $("#liIndirizzo");
    let _liTelefono = $("#liTelefono");
    let _liPassword = $("#_liPassword");
	let _numeroPersone = $("#numeroPersone");
	let _lastLi
	let persone
	let risultati
	let i = 0
	let pos = 0

	inviaRichiesta();
	_btnGenera.on("click", inviaRichiesta)
	_liGeneralita.on("mouseover", mostraDettagli(_liGeneralita))
	_liGeneralita.on("mouseover", mostraDettagli(_liGeneralita))
	_liGeneralita.on("mouseover", mostraDettagli(_liGeneralita))
	_liGeneralita.on("mouseover", mostraDettagli(_liGeneralita))
	_numeroPersone.on("mouseover", cambiaValore())

	function inviaRichiesta() {
		let numPersone = _range.prop("value");
		let genere = $(_radioButton[0]).prop("checked") ? "" : $(_radioButton[1]).prop("checked") ? "female" : "male";
		if(genere == "all")
			genere = "";
		let nazioni = "";
		for(let i = 0; i < document.getElementsByName("chkNazione").length; i++)
			if(document.getElementsByName("chkNazione")[i].checked == true)
				nazioni += document.getElementsByName("chkNazione")[i].id.split('-')[1] + ",";
		let par = "?results=" + numPersone + "&gender=" + genere + "&nat=" + nazioni
		console.log(par)
		pos=0
		inviaRichiestaAlServer(par, aggiornaPagina);
	}

	function inviaRichiestaAlServer(parametri, callBack) {
		$.ajax({
			"url": "https://randomuser.me/api",
			"type": "GET",
			"data": parametri,
			"contentType": "application/x-www-form-urlencoded; charset=UTF-8",
			"dataType": "json",
			"async": true,
			"timeout": 5000,
			"success": callBack,
			"error": function (jqXHR, test_status, str_error) {
				alert(`Server Error: ${jqXHR.status} - ${jqXHR.responseText}`);
			}
		});
	}

	function aggiornaPagina(data) {
		risultati = data.results[0];
		console.log(risultati)
		visualizzaPersona()
	}

	function visualizzaPersona() {
		document.getElementById("img").src = (risultati.picture.large);
		_lblInfo.innerHTML = risultati.name.first + " " + risultati.name.last;
		if(_lastLi)
			_lastLi.style.cssText += "background-position-y: -48px";
		_lastLi = document.getElementById("liGeneralita");
		mostraDettagli(_liGeneralita);
	}

	function mostraDettagli(_li){
		if (_lastLi) {
			_lastLi.css("background-position-y", "-48px");
		}
		_li.css("background-position-y", "-96px");
		_lastLi = _li;
		switch (_li.attr("id")) {
			case "liGeneralita":
				_lblFrase.text("Hi, my name is");
				_lblInfo.text(risultati.name.first + " " + risultati.name.last)
				break;
			case "liEmail":
				_lblFrase.text("My email address is");
				_lblInfo.text(risultati.email);
				break;
			case "liCompleanno": 
				_lblFrase.text("My birthday is");
				_lblInfo.text(risultati.dob.date.split("T")[0]);
				break;
			case "liIndirizzo":
				_lblFrase.text("My address is");
				_lblInfo.text(risultati.location.street.number + " " +  risultati.location.street.name);
				break;
			case "liTelefono":
				_lblFrase.text("My phone number is");
				_lblInfo.text(risultati.phone);
				break;
			case "liPassword":
				_lblFrase.text("My password is");
				_lblInfo.text(risultati.login.password);
				break;
		}
	}

	function cambiaValore() {
		let _numCorrente = $("#numCorrente");
		let _numPersone = $("#numeroPersone");
		_numCorrente.innerHTML = _numPersone.value;
	}
})