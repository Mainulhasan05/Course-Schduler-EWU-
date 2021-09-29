function createSection(){
    let noOfCourse=document.getElementById("no-of-course").value;
    console.log(noOfCourse);
    if(noOfCourse<=5){
        let item=document.querySelectorAll(".hide");
        console.log(item);
        for(let i=0; i<item.length; i++){
            item[i].style.display="none";
        }
        for(let i=0; i<noOfCourse; i++){
            item[i].style.display="block";
        }
    }
    else{
        alert("Can't take more than 5 courses.")
    }

}