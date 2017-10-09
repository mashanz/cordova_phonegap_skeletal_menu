	$(document).ready(function(){
		siswa();
		UAS();
	});

	function siswa() {
		var out = "<table><tr><td width='45px'>NIM</td>";
		out += "<td>"+"1104131113"+"</td></tr>";
		out += "<tr><td>Nama</td>";
		out += "<td>"+"Hanjara Cahya Adhyatma"+"</td></tr>";
		out += "<tr><td>Kelas</td>";
		out += "<td>"+"SK 37 01"+"</td></tr></table>";
		document.getElementById("id00").innerHTML = out;
	}

	function UAS() {
		var mapel = ["MTK","IPA","IPS","BHS IND","BHS ING","BHS ARB","PNJ"];
		var nilai = [100,80,90,100,80,90,97];
		var i;
		var num;
		var out = "<table style='text-align:center;'><tr style='background-color: #ccc; font-weight:bold;'><td width='30px'>No</td><td>Mapel</td><td>Nilai</td></tr>";
		for(i = 0; i < mapel.length; i++) {
			num=i+1;
			out +=
				"<tr>"+
				"<td>" + num + "</td>"+
				"<td>" + mapel[i] +"</td>"+
				"<td>" + nilai[i] +"</td>"+
				"</tr>";
		}
		out += "</table>";
		document.getElementById("id02").innerHTML = out;
	}