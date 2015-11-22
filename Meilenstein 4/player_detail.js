


var tabledata = new XMLHttpRequest();
tabledata.open("GET","/data.json");
tabledata.onreadystatechange = callbackHandler;
tabledata.send("GET", "/data.json");

function callbackHandler(){
	if((tabledata.readystate ==4)
		&&(tabledata.status==200)){
		tabledraw(tabledata.responseText);
	}
}

function tabledraw(array) {
	var arr = JSON.parse(array);
	var tableString = '<table border=\"1\">' +
					'<tr>'+
					'<th> Spieler(Vor und Nachname)</th>'+
					'<th>Verein</th>'+
					'<th>Headcoach</th>'+
					'<th>Assistantcoach</th>'+
					'<th>Position</th>'+
					'<th>Aktiv</th>'+
					'<th>Rückennummer</th>'+
					'<th>Geburtsjahr</th>';
	var i;
	for(i = 0 ; i < arr.length ; i++){
		tableString += "<td>" + arr[i].firstname + ", " + arr[i].surname + "</td>"
					+ "<td>" + arr[i].team + "</td>"
					+ "<td>" + arr[i].headcoach + "</td>"
					+ "<td>" + arr[i].assisantcoach + "<td>"
					+ "<td>" + arr[i].position + "</td>"
					+ "<td>" + arr[i].isAktiv + "</td>"
					+ "<td>" + arr[i].number + "</td>"
					+ "<td>" + arr[i].year + "</td>";
	}
	tableString += "</table>";
	document.getElementById("table01").innerHTML = tableString;
}
