var firstError = null;

function onSubmit() {
    firstError = null;
    var name = document.getElementById('name');
    var vorname = document.getElementById('vorname');
    var verein = document.getElementById('verein');
    var coach = document.getElementById('coach');
    var assistentencoach = document.getElementById('assistentencoach');
    var position = document.getElementById('position');
    var trikotnummer = document.getElementById('trikotnummer');
    var jahrgang = document.getElementById('jahrgang');
    var favorit = document.getElementById('favorit');
    checkName(name);
    checkName(vorname);
    checkName(verein);
    checkName(coach);
    checkName(assistentencoach);
    if (trikotnummer.value == '' || parseInt(trikotnummer.value) > 15 || parseInt(trikotnummer.value) < 4) {
        trikotnummer.style.borderColor = 'red';
        if (firstError == null) {
            firstError = trikotnummer;
        }
    } else {
        trikotnummer.style.borderColor = 'green';
    }
    if (jahrgang.value == '' || parseInt(jahrgang.value) > 2015 || parseInt(jahrgang.value) < 0) {
        jahrgang.style.borderColor = 'red';
        if (firstError == null)
            firstError = jahrgang;
    } else {
        jahrgang.style.borderColor = 'green';
    }
    if (firstError != null) {
        alert('Einige Eingaben sind fehlerhaft. Bitte überprüfen Sie ihre Eingaben');
        firstError.focus();
        return false;
    }
    else {
    	return true;
    }
}

function checkBoxes(box) {
    var aktivJa = document.getElementById('aktivJa');
    var aktivNein = document.getElementById('aktivNein');
    if (aktivJa.checked == true && aktivNein.checked == true) {
        if (box == aktivJa) {
            aktivNein.checked = false;
        } else {
            aktivJa.checked = false;
        }
    } else if (aktivJa.checked == false && aktivNein.checked == false) {
        box.checked = true;
    }
}

function checkName(name) {
    if (name.value == "" || name.value.search(/^[a-zA-Z]*$/) == -1) {
        name.style.borderColor = 'red';
        if (firstError == null)
            firstError = name;
        return false;
    } else {
        name.style.borderColor = 'green';
        return true;
    }
}