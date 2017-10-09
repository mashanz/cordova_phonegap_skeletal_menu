
	$(document).ready(function(){
		siswa();
		UTS();
	});

	function siswa() {
		var out = "<table><tr><td width='100px'>ID</td>";
		out += "<td>"+"1104131113"+"</td></tr>";
		out += "<tr><td>Start Up</td>";
		out += "<td>"+"Aplikasi Main Bola"+"</td></tr>";
		out += "<tr><td>Katagory</td>";
		out += "<td>"+"Innovative idea"+"</td></tr>";
		out += "<tr><td>Sub Katagory</td>";
		out += "<td>"+"Personal Apps"+"</td></tr></table>";
		document.getElementById("id00").innerHTML = out;
	}

	function UTS() {
		var mapel = ["Problem","Solution","Market Size","Product","Busines Model","Competition","Market Adoption","Current Traction","Future Dev"];
		var mapel2 = ["Stiff Done","Team Bonding","Team Risk","Team Cappabilites","Team Comitment"];
		var nilai = [3,2,3,2,3,2,3,2,2];
		var nilai2 = [3,2,3,2,3];
		var nprod = parseInt(nilai[0])+parseInt(nilai[1])+parseInt(nilai[2])+parseInt(nilai[3])+parseInt(nilai[4])+parseInt(nilai[5])+parseInt(nilai[6])+parseInt(nilai[7])+parseInt(nilai[8]);
		var nprod2 = parseInt(nilai[0])+parseInt(nilai[1])+parseInt(nilai[2])+parseInt(nilai[3])+parseInt(nilai[4]);
		var totalscore = nprod+nprod2;
		var finalscore = nprod*40/100 + nprod2*60/100 ;
		var i;
		var i2
		var num;
		var num2
		var out = "<table style='text-align:center;'><tr style='background-color: #ccc; font-weight:bold;'><td width='30px'>No</td><td>Product Assasment</td><td>Nilai</td></tr>";
		for(i = 0; i < mapel.length; i++) {
			num=i+1;
			out +=
				"<tr>"+
				"<td>" + num + "</td>"+
				"<td>" + mapel[i] +"</td>"+
				"<td>" + nilai[i] +"</td>"+
				"</tr>";
		}
		out +=
				"<tr>"+
				"<td>" + "" + "</td>"+
				"<td>" + "<b>Total Product Assasment (40%)</b>" +"</td>"+
				"<td><b>" + nprod +"</b></td>"+
				"</tr>";
		for(i2 = 0; i2 < mapel2.length; i2++) {
			num2=i2+1;
			out +=
				"<tr>"+
				"<td>" + num2 + "</td>"+
				"<td>" + mapel2[i2] +"</td>"+
				"<td>" + nilai2[i2] +"</td>"+
				"</tr>";
		}
		out +=
				"<tr>"+
				"<td>" + "" + "</td>"+
				"<td>" + "<b>Total Founder Assasment (60%)</b>" +"</td>"+
				"<td><b>" + nprod2 +"</b></td>"+
				"</tr>";
		out +=
				"<tr>"+
				"<td>" + "" + "</td>"+
				"<td>" + "<b>Total Score</b>" +"</td>"+
				"<td><b>" + totalscore +"</b></td>"+
				"</tr>";
		out +=
				"<tr>"+
				"<td>" + "" + "</td>"+
				"<td>" + "<b>Final Score</b>" +"</td>"+
				"<td><b>" + finalscore +"</b></td>"+
				"</tr>";
		//out += "</table>";
		document.getElementById("id01").innerHTML = out;
	}