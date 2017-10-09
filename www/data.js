
	$(document).ready(function(){		
		readTextFile();
	});
	
	
	function readTextFile(){
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", "data.json", true);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            var allText = rawFile.responseText;
            //document.getElementById("id00").innerHTML = allText;
			
			var out = "<table><tr><td>ID</td><td>STARTUP</td><td>DESCRIPTIONS</td><td>CATAGORY</td><td>SUBCATAGORY</td></tr>";
			var arr = JSON.parse(allText);
			for(i = 0; i < arr.length; i++) {
				out +=
					"<tr>"+
					"<td>" + arr[i].id + "</td>"+
					"<td>" + arr[i].startup +"</td>"+
					"<td>" + arr[i].descriptions +"</td>"+
					"<td>"+ arr[i].catagory +"</td>"+
					"<td>"+ arr[i].subcatagory +"</td>"+
					"</tr>";
			}
			out += "</table>";
			document.getElementById("id00").innerHTML = out;
        }
    }

    rawFile.send();
	};