var tabledata = new XMLHttpRequest();
tabledata.open("GET","./data.json");
tabledata.onreadystatechange = callbackHandler;
tabledata.send();

function callbackHandler(){
	if((tabledata.readyState==4)&&(tabledata.status==200)&&tabledata.responseText!=null){
		tabledraw(tabledata.responseText);
	}
}

function tabledraw(data) {
	var arr = eval(data);
	var tableString = '<table>' +
					'<tr>'+
					'<th>Spieler</th>'+
					'<th>Verein</th>'+
					'<th>Headcoach</th>'+
					'<th>Assistantcoach</th>'+
					'<th>Position</th>'+
					'<th>Aktiv</th>'+
					'<th>Rückennummer</th>'+
					'<th>Geburtsjahr</th>'+
					'</tr>';
	var i;
	for(i = 0 ; i < arr.length ; i++){
		tableString += "<tr><td>" + arr[i].firstname + ", " + arr[i].surname + "</td>"
					+ "<td>" + arr[i].team + "</td>"
					+ "<td>" + arr[i].headcoach + "</td>"
					+ "<td>" + arr[i].asisstantcoach + "</td>"
					+ "<td>" + arr[i].position + "</td>"
					+ "<td>" + (arr[i].isActive ? "Ja" : "Nein") + "</td>"
					+ "<td>" + arr[i].number + "</td>"
					+ "<td>" + arr[i].year + "</td></tr>";
	}
	tableString += "</table>";
	document.getElementById("table01").innerHTML = tableString;
}
