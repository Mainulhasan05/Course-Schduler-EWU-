

function btnClicked(){
    var x1=document.getElementById("time1").value;
var y1=document.getElementById("days1").value;

var x2=document.getElementById("time2").value;
var y2=document.getElementById("days2").value;

var x3=document.getElementById("time3").value;
var y3=document.getElementById("days3").value;


var obj=[];
 obj[0]={time:x1,
    days:y1};
 obj[1]={time:x2,
        days:y2};
 obj[2]={time:x3,
            days:y3};
        let flag=0,conflict=[];
    for(var i=0; i<2; i++){
        for(var j=i+1; j<3; j++){
            if(obj[i].time==obj[j].time && obj[i].days==obj[j].days){
                conflict[flag]="obj"+(i+1)+" & obj"+(j+1)+" conflicts <br>";
                flag++;
            }
        }
    }

    
    var s="Congratulations, There is no conflicts.";
    if(flag==0)
    document.getElementById("output").innerHTML=s;
    else{
        document.getElementById("output").innerHTML=conflict;
    }
}

function myFunction() {
     var checkBox= document.getElementById("flexCheckDefault").checked;
     console.log(checkBox);
    if(checkBox){
        var v=document.getElementById("l1").disabled = false;
        var v=document.getElementById("l2").disabled = false;
    }
    else{
        var v=document.getElementById("l1").disabled = true;
        var v=document.getElementById("l2").disabled = true;
    }
    
  }