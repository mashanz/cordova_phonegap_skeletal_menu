
	$(document).ready(function(){
		siswa();
		UAS();
	});
	
	function siswa() {
		//var out = "<img src='./img/3.png' alt='Smiley face' height='100' width='100'>";
		var out = "";
		out += "<table><tr>";
		out += "<td><h4>App Name</h4>"+"Indigo Id<br>(Agregasi Telkom Indigo)"+"</td></tr>";
		out += "<tr>";
		out += "<td><h4>Versi</h4>"+"0.0.1a"+"</td></tr>";
		out += "<tr>";
		out += "<td><h4>Author</h4>"+"Hanjara<br>mangatkk@gmail.com<br>Khafi<br>Khafi@gmail.com"+"</td></tr>";
		out += "<tr>";
		out += "<td><h4>Release</h4>"+"2016"+"</td></tr></table>";
		document.getElementById("id00").innerHTML = out;
	}