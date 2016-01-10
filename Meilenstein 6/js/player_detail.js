var tabledata = new XMLHttpRequest();
var tableSelect = 0;
tabledata.open("GET","../js/data.json");
tabledata.onreadystatechange = callbackHandler;
tabledata.send();

function callbackHandler(){
	if((tabledata.readyState==4)&&(tabledata.status==200)&&tabledata.responseText!=null){
		tabledraw(tabledata.responseText, false);
	}
}

function onClick(element) {
	switch(element.id) {

		case "tableButton1":
			if(tableSelect != 1) {
				tabledraw(tabledata.responseText, false);
				tableSelect = 1;
			}
			break;

		case "tableButton2":
			if(tableSelect != 2) {
				tabledraw(tabledata.responseText, true);
				tableSelect = 2;
			}

	}
}

function tabledraw(data,showFavourites) {
	var arr = eval(data);
	var tableString = '<table>' +
					'<tr>'+
					'<th>Spieler</th>'+
					'<th>Verein</th>'+
					'<th>Head&shy;coach</th>'+
					'<th>Assistant&shy;coach</th>'+
					'<th>Position</th>'+
					'<th>Aktiv</th>'+
					'<th>Rücken&shy;nummer</th>'+
					'<th>Geburts&shy;jahr</th>'+
					'</tr>';

	for(var i = 0 ; i < arr.length ; i++){
		if(!showFavourites || arr[i].isFavorite) {
		tableString += "<tr><td>" + arr[i].firstname + ", " + arr[i].surname + "</td>"
					+ "<td>" + arr[i].team + "</td>"
					+ "<td>" + arr[i].headcoach + "</td>"
					+ "<td>" + arr[i].asisstantcoach + "</td>"
					+ "<td>" + arr[i].position + "</td>"
					+ "<td>" + (arr[i].isActive ? "Ja" : "Nein") + "</td>"
					+ "<td>" + arr[i].number + "</td>"
					+ "<td>" + arr[i].year + "</td></tr>";
		}
	}
	tableString += "</table>";
	document.getElementById("table01").innerHTML = tableString;

	if(showFavourites) {
		var element2 = document.getElementById("tableButton2");
		element2.style.backgroundColor = "rgb(0,38,255)";
		element2.style.color = "rgb(255,255,255)";
		var element1 = document.getElementById("tableButton1");
		element1.style.backgroundColor = "rgb(153,217,234)";
		element1.style.color = "black";
		tableSelect = 2;
	}
	else {
		var element1 = document.getElementById("tableButton1");
		element1.style.backgroundColor = "rgb(0,38,255)";
		element1.style.color = "rgb(255,255,255)";
		var element2 = document.getElementById("tableButton2");
		element2.style.backgroundColor = "rgb(153,217,234)";
		element2.style.color = "black";
		tableSelect = 1;
	}
}
