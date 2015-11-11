var firstError = null;

function onSubmit() {
    var name  = document.getElementById ("name");
    var vorname  = document.getElementById ("vorname");
    var verein  = document.getElementById ("verein");
    var coach  = document.getElementById ("coach");
    var assistentencoach  = document.getElementById ("assistentencoach");
    var aktiv  = document.getElementById ("aktiv");
    var position  = document.getElementById ("position");
    var trikotnummer  = document.getElementById ("trikotnummer");
    var jahrgang  = document.getElementById ("jahrgang");
    var favorit = document.getElementById ("favorit");

    checkName(name);
    checkName(vorname);
    checkName(verein);
    checkName(coach);
    checkName(assistentencoach);

    if(trikotnummer.search(/(^[4-9]$)(^1[0-5]$)/) == -1) {
	trikotnummer.style.borderColor = "red";
	if(firstError == null) {
	    firstError = trikotnummer;
	}
    }

    if(jahrgang.search(/(^1[0-9]{3}$)(^200[0-9]$)(^201[0-5]$)/) == -1) {
	jahrgang.style.borderColor = "red";
	if(firstError == null)
	    firstError = jahrgang;
    }

    if(firstError != null) {
	alert("Einige Eingaben sind fehlerhaft. Bitte überprüfen Sie ihre Eingaben");
	firstError.focus();
    }

    function checkName(name) {
	if(name.search(/^[a-zA-Z]*$/) == -1) {
	    name.style.borderColor = "red";
	    if(firstError == null)
		firstError = name;
	    return false;
	}
	else {
	    name.style.borderColor = "green";
	    return true;
	}
}
