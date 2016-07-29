function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
    //it changes the text
var clickedTime; var createdTime; var reactionTime;

    function makeBox(){

      var time= Math.random();

      time=time*3000;
      setTimeout(function() {
        if(Math.random()>0.5){
        document.getElementById("circle").style.borderRadius="0px";
        }
        else{
        document.getElementById("circle").style.borderRadius="100px";
      }
      var top= Math.random();
      top =top * 400;
      var left= Math.random();
      left =left * 400;
      document.getElementById("circle").style.top= top +"px";
      document.getElementById("circle").style.left= left +"px";
      document.getElementById("circle").style.backgroundColor=getRandomColor();
      document.getElementById("circle").style.display="block";
      createdTime=Date.now();
    }, time);
  }

//function is declared to change the text
        document.getElementById("circle").onclick= function(){
            clickedTime=Date.now();


            reactionTime=(clickedTime-createdTime)/1000;
            document.getElementById("time").innerHTML=reactionTime;
            this.style.display="none";
            makeBox();
        }
makeBox();
