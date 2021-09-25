

function btnClicked(){
    let x1=document.getElementById("time1").value;
let y1=document.getElementById("days1").value;

let x2=document.getElementById("time2").value;
let y2=document.getElementById("days2").value;

let x3=document.getElementById("time3").value;
let y3=document.getElementById("days3").value;


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
/*checkbox indexs 2,5,8  */
/*var labObj=[];
labObj[0]={
    labD:
}*/

function myFunction(param) {
     var whichOne=document.querySelectorAll("input");
     const labObj=document.querySelectorAll("select");
     var index=2;
     var d=2,t=3;
     if(param==1){
         index=2;
         d=2,t=3;
     }
     else{
         for(let x=0; x<param-1; x++){
             index+=3;
             d+=4;
             t+=4;
         }
     }

     if(whichOne[index].checked){
        labObj[d].disabled=false;
        labObj[t].disabled=false;
    }
    else{
        labObj[d].disabled=true;
        labObj[t].disabled=true;
    }


/* for lab needed indexs {2,3} ,{6,7}, {10,11}*/


  }