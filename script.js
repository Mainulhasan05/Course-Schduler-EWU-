

function btnClicked(){
    console.log("hi, there");
    var x = document.getElementById("days").value;
    console.log(x);
    var s="";
    for(var i=1; i<=10; i++){
        s+=i+" x "+x+" = "+(i*x)+"<br>";
    }
    document.getElementById("output").innerHTML=s;
}