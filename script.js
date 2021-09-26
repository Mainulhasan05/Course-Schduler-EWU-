function validityCheck(){
    let index=2;
    var whichOne=document.querySelectorAll("input");
    for(let x=0; x<whichOne.length; x++){
        if(whichOne[index].checked){
            //
        }
        index+=3;
    }
}
function classCheck(){
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
                conflict[flag]="Course"+(i+1)+" & Course"+(j+1)+" class time conflicts <br>";
                flag++;
            }
        }
    }

    
    //var s="Congratulations, There is no conflicts in class Times.";
    if(flag==0)
    //document.getElementById("output").innerHTML=s;
   // return s;
   return "";
    else{
       // document.getElementById("output").innerHTML=conflict;
       return conflict;
    }
}

function labCheck(){//classTime er sathe Lab conflict check
 //labobj index=0 Day, index=1 Time, index=2 checkbox   
    let x1=document.getElementById("time1").value;
let y1=document.getElementById("days1").value;

let x2=document.getElementById("time2").value;
let y2=document.getElementById("days2").value;

let x3=document.getElementById("time3").value;
let y3=document.getElementById("days3").value;

const labObj=document.querySelectorAll("select");
let whichOne=document.querySelectorAll("input");
var obj=[];
 obj[0]={time:x1,
    days:y1};
 obj[1]={time:x2,
        days:y2};
 obj[2]={time:x3,
            days:y3};
        let flag=0,conflict=[];
    let chk=2;     let d=2,t=3;
    let out="";
    for(let w=0; w<3; w++){
        if(whichOne[chk].checked){
           // console.log(labObj[d].value);//{2,3} ,{6,7}, {10,11} labobj Lab day,time
           // console.log(labObj[t].value);

            for(let pp=0; pp<3; pp++){
                var s=String(obj[pp].days);
                if(s[0]==labObj[d].value || s[1]==labObj[d].value){
                   // console.log((pp+1)+" no row er sathe "+(w+1) +" no Lab day milse");
                    var tm=obj[pp].time;
                    //console.log("class tm "+tm);
                   // console.log("lab time "+labObj[t].value);
                    if((tm==1 && labObj[t].value==1)||(tm==1 && labObj[t].value==2)){
                        //console.log("Course "+(pp+1)+" no  er sathe Course "+(w+1) +" no er Lab conflict kore");
                        out+="Course "+(pp+1)+"  classtime conflicts with Course"+(w+1) +"  Lab time<br>";
                    }
                    else if((tm==2 && labObj[t].value==3)||(tm==2 && labObj[t].value==4)){
                        out+="Course "+(pp+1)+"  classtime conflicts with Course"+(w+1) +"  Lab time<br>";
                    }
                    else if(tm==3 && labObj[t].value==4){
                        out+="Course "+(pp+1)+"  classtime conflicts with Course"+(w+1) +"  Lab time<br>";
                    }
                    else if(tm==4 && labObj[t].value==5){
                        out+="Course "+(pp+1)+"  classtime conflicts with Course"+(w+1) +"  Lab time<br>";
                    }
                }
            }
            chk+=3;
            d+=4;
            t+=4;
        }
        else{
            chk+=3;
            d+=4;
            t+=4;
        }
    }
    //console.log(out);
    //console.log(obj[0].days);
    return out;
}


function btnClicked(){
let finalOutput="";
finalOutput+=classCheck();
finalOutput+=String(labCheck());
if(finalOutput.length==0){
    finalOutput="Congratulations,No conflicts with this schedule.";
}
//validityCheck();
document.getElementById("output").innerHTML=finalOutput;

}
/*checkbox indexs 2,5,8  */
/*var labObj=[];
labObj[0]={
    labD:
}*/

function myFunction(param) {
     let whichOne=document.querySelectorAll("input");
     const labObj=document.querySelectorAll("select");
     let index=2;
     let d=2,t=3;
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


/* for lab needed indexs {2,3} ,{6,7}, {10,11} labobj*/


  }