var i=0;
    var jiandao=document.getElementById("jiandao");
    var shitou=document.getElementById("shitou");
    var bu=document.getElementById("bu");
      jiandao.onclick=function(){
        document.getElementById("my-result").src="images/jiandao.png";
        var computerresult = Math.random();
        if(computerresult<0.33){
          document.getElementById("computer-result").src="images/shitou.png";
          document.getElementById("result-text").innerHTML="<p class='txt'>lose</p>"
        }else if(computerresult<0.67){
          document.getElementById("computer-result").src="images/jiandao.png";
          document.getElementById("result-text").innerHTML="<p class='txt'>equal</p>"
        }else{
          document.getElementById("computer-result").src="images/bu.png";
          document.getElementById("result-text").innerHTML="<p class='txt'>win</p>";
          i++;
          document.getElementById('score').innerHTML = i;
        }
      }
      shitou.onclick=function(){
        document.getElementById("my-result").src="images/shitou.png";
        var computerresult = Math.random();
        if(computerresult<0.33){
          document.getElementById("computer-result").src="images/shitou.png";
          document.getElementById("result-text").innerHTML="<p class='txt'>equal</p>"
        }else if(computerresult<0.67){
          document.getElementById("computer-result").src="images/jiandao.png";
          document.getElementById("result-text").innerHTML="<p class='txt'>win</p>";
          i++;
          document.getElementById('score').innerHTML = i;
        }else{
          document.getElementById("computer-result").src="images/bu.png";
          document.getElementById("result-text").innerHTML="<p class='txt'>lose</p>";
        }
      }
      bu.onclick=function(){
        document.getElementById("my-result").src="images/bu.png";
        var computerresult = Math.random();
        if(computerresult<0.33){
          document.getElementById("computer-result").src="images/shitou.png";
          document.getElementById("result-text").innerHTML="<p class='txt'>win</p>"
          i++;
          document.getElementById('score').innerHTML = i;
        }else if(computerresult<0.67){
          document.getElementById("computer-result").src="images/jiandao.png";
          document.getElementById("result-text").innerHTML="<p class='txt'>lose</p>"
        }else{
          document.getElementById("computer-result").src="images/bu.png";
          document.getElementById("result-text").innerHTML="<p class='txt'>equal</p>";
        }
      }

