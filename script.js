var index =0;
show_image(index);
function show_image(i){
    index+=i;
    var images = document.getElementsByClassName("image");
    var dots = document.getElementsByClassName("dot");
    for (i=0; i<images.length;i++)
    images[i].style.display = "none";
    
    for(i=0; i< dots.length; i++)
    dots[i].className= dots[i].className.replace (" active", "");
if(index > images.length - 1)
 index = 0;
 if(index < 0)
 index = images.length - 1;
 images[index].style.display = "block";
 dots[index].className += " active";
}
window.addEventListener("load",calculateTime)
function calculateTime() {
    var date = new Date ();
 var dayNumber = date.getDay ();
 var hour = date.getHours ();
 var minute = date.getMinutes();
 var ampm = hour >= 12? "PM" : "AM";
 var dayNames = ["SUN","MON","TUE","WED","THU","FRI","SAT",];
 hour = hour % 12;
 hour = hour ? hour : "12";
 hour = hour < 10 ? "0" + hour : hour;
 minute = minute < 10 ? "0" + minute : minute;
 document.getElementById("day").innerHTML = 
 dayNames[dayNumber];
 document.getElementById("hour").innerHTML = hour;
 document.getElementById("minute").innerHTML = minute;
 document.getElementById("ampm").innerHTML = ampm;
 setTimeout(calculateTime, 200);
}
function changeColor () {
    var hex_numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
"A","B","C","D","F"];
    var hexcode = '';
    for (var i=0; i<6;i++) {
        var random_index = Math.floor(Math.random ()
        * hex_numbers.length);
        hexcode += hex_numbers[random_index]
    }
document.getElementsByTagName("body")[0].style.background =
"#" + hexcode;
}
