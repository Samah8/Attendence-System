

    var input=document.createElement("input")
    var table=document.createElement("table")
    var charts=document.getElementsByClassName("charts__left")[0]
    var input1=document.createElement("input")
    var input2=document.createElement("input")
    var h=document.createElement("h1");
    var hh=document.createElement("h1");
    var childDiv=document.createElement("div");
    var checked=true;
    var checked1=true;
    $("table").DataTable();

 // design table
 function Table()
 {
    var div=document.getElementById("apex1");
    div.appendChild(table)
    var tr=document.createElement("tr");
    var th1=document.createElement("th");
    th1.innerText="FirstName"
    tr.appendChild(th1)
    var th2=document.createElement("th");
    th2.innerText="LastName"
    tr.appendChild(th2)
    var th3=document.createElement("th");
    th3.innerText="Email"
    tr.appendChild(th3)
    var th4=document.createElement("th");
    th4.innerText="Address"
    tr.appendChild(th4)
    var th5=document.createElement("th");
    th5.innerText="Age"
    tr.appendChild(th5)
    var th6=document.createElement("th");
    th6.innerText="Attendance_time"
    tr.appendChild(th6)
    var th7=document.createElement("th");
    th7.innerText="Departure_time"
    tr.appendChild(th7)
    table.appendChild(tr)
 }

 // when i click on daily report
function dailyReport(){
    if(checked1)
    {
    checked1=false;
     input.setAttribute("type","date")
    document.getElementById("span1").appendChild(input)
     var parentDiv= document.getElementsByClassName("charts__left__title")[0];
     charts.style.backkgroundColor="white";
     charts.style.boxShadow="5px 5px 13px #ededed, -5px -5px 13px #ffffff";
    parentDiv.appendChild(childDiv);
    }
   }

    
 // when i click on calender
    input.addEventListener("change",function(){
    hh.remove();
    table.innerHTML="";
    Table();
    h.innerText="Daily Reports";
    childDiv.appendChild(h);
    $.get("http://localhost:3000/attendanceUser",function(data){
        
        data.forEach(element => {
        console.log(element.date)
      if( input.value==element.date){
      createdtr=document.createElement("tr");
       createdtd1=document.createElement("td");
       createdtd1.innerText=element.firstName;
       createdtr.appendChild(createdtd1);
       createdtd2=document.createElement("td");
       createdtd2.innerText=element.lastName;
       createdtr.appendChild(createdtd2);
       createdtd3=document.createElement("td");
       createdtd3.innerText=element.email;
       createdtr.appendChild(createdtd3);
       createdtd4=document.createElement("td");
       createdtd4.innerText=element.address;
       createdtr.appendChild(createdtd4);
       createdtd5=document.createElement("td");
       createdtd5.innerText=element.age;
       createdtr.appendChild(createdtd5);
       createdtd6=document.createElement("td")
       createdtd6.innerText=element.attendance_time;
       createdtr.appendChild(createdtd6);
       createdtd7=document.createElement("td");
       createdtd7.innerText=element.departure_time;
       createdtr.appendChild(createdtd7);
       table.appendChild(createdtr);
    } // end of if 
    });
        
        }) 

    }) // end of change event

 // when i click on monthly report
 function monthlyReport(){
    if(checked)
    {
     checked=false;
     var label1=document.createElement("label")
     label1.innerText="Start"
     document.getElementById("span2").appendChild(label1)
     input1.setAttribute("type","date")
    document.getElementById("span2").appendChild(input1)
    var label2=document.createElement("label")
     label2.innerText="End"
     document.getElementById("span2").appendChild(label2)
     input2.setAttribute("type","date")
    document.getElementById("span2").appendChild(input2)
     var parentDiv= document.getElementsByClassName("charts__left__title")[0];
     charts.style.backkgroundColor="white";
     charts.style.boxShadow="5px 5px 13px #ededed, -5px -5px 13px #ffffff";
    var childDiv=document.createElement("div");
    parentDiv.appendChild(childDiv);
    }
   }



   // when i click on monthly calender
   input2.addEventListener("change",function(){
    h.remove();
    table.innerHTML = "";
    hh.innerText="Monthly Reports";
    childDiv.appendChild(hh);
    Table();
    $.get("http://localhost:3000/attendanceUser",function(data){
        console.log(input1.value)
        console.log(input2.value) 
        data.forEach(element => {
      if(element.date <= input1.value || element.date <= input2.value){
      createdtr=document.createElement("tr");
       createdtd1=document.createElement("td");
       createdtd1.innerText=element.firstName;
       createdtr.appendChild(createdtd1);
       createdtd2=document.createElement("td");
       createdtd2.innerText=element.lastName;
       createdtr.appendChild(createdtd2);
       createdtd3=document.createElement("td");
       createdtd3.innerText=element.email;
       createdtr.appendChild(createdtd3);
       createdtd4=document.createElement("td");
       createdtd4.innerText=element.address;
       createdtr.appendChild(createdtd4);
       createdtd5=document.createElement("td");
       createdtd5.innerText=element.age;
       createdtr.appendChild(createdtd5);
       createdtd6=document.createElement("td")
       createdtd6.innerText=element.attendance_time;
       createdtr.appendChild(createdtd6);
       createdtd7=document.createElement("td");
       createdtd7.innerText=element.departure_time;
       createdtr.appendChild(createdtd7);
       table.appendChild(createdtr);
    } // end of if 
    });
        
        }) 

    }) // end of change event

   