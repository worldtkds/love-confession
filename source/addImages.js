var inter = null
inter = setInterval(function() {
	if (document.getElementById("wrap")){
		clearInterval(inter)
		console.log("NULL")
		setTimeout(function() {
		var tops = 0;
		$('#text').fadeOut("slow",function(){
			var wrap = document.getElementById("wrap"); 
			var clockBox = document.getElementById("clock-box"); 
			var divs = document.createElement("div")
			divs.style.height = "500px"
			divs.style.width = "350px"
			divs.style.overflow = "auto"
			divs.style.display = "inline-block";
			divs.style.marginLeft = "50px"
			divs.style.marginTop = "50px"
			for(var i=1;i<25;i++) {
				(function(index){
					if (index == 24) {
						var subDiv = document.createElement("div");
						subDiv.style.height = "200px"
						subDiv.style.width = "350px"
						subDiv.style.lineHeight = "200px"
						subDiv.style.textAlign = "center"
						subDiv.style.fontSize = "50px"
						subDiv.style.color = "red"
						subDiv.innerText = "生日快乐"
						divs.appendChild(subDiv);
					} else {
						var img = document.createElement("img");
						img.setAttribute("src", "./img/"+index+".jpg")
						img.style.width = "80%"
						img.style.marginLeft = "10%"
						img.style.marginTop = "30px"
						img.style.display = "inline-block"
						divs.appendChild(img);
					}
				})(i)
			}
			wrap.insertBefore(divs, clockBox);
			})
		}, 50000)
	}
	
},100)