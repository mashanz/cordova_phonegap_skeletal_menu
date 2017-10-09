
	$(document).ready(function(){
		siswa();
		UAS();
	});
	
	function siswa() {
		var out = "<img src='./img/logo.png' alt='Smiley face' height='100' width='200'>";
		out += "<table><tr>";
		out += "<td><h4>ID</h4>"+"1104131113"+"</td></tr>";
		out += "<tr>";
		out += "<td><h4>Start Up</h4>"+"Aplikasi Main Bola"+"</td></tr>";
		out += "<tr>";
		out += "<td><h4>Katagori</h4>"+"Inovvative Idea"+"</td></tr>";
		out += "<tr>";
		out += "<td><h4>Sub Katagori</h4>"+"Personal Apps"+"</td></tr>";
		out += "<tr>";
		out += "<td><h4>Keterangan</h4>"+"blablalbal balblalbalbalbla blablalbal balblalbalbalbla blablalbal balblalbalbalbla blablalbal balblalbalbalbla blablalbal balblalbalbalbla blablalbal balblalbalbalbla blablalbal balblalbalbalbla blablalbal balblalbalbalbla blablalbal balblalbalbalbla blablalbal balblalbalbalbla blalbalbalblablalb albla"+"</td></tr></table>";
		document.getElementById("id00").innerHTML = out;
	}