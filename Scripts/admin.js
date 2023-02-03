
  var clickedName = true;
  var charts=document.getElementsByClassName("charts__left")[0]
  var parentDiv= document.getElementsByClassName("charts__left__title")[0];
  var table=document.createElement("table");
  var h=document.createElement("h1");
  var date=`${new Date().getFullYear()}-0${new Date().getMonth()+1}-${new Date().getDate()}`;
  var time="8:30";
  var ex_time="15:30"

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
 function Table2()
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
    table.appendChild(tr)
 }

 function enterName(){
  if(clickedName)
  {
    clicked=false
  var inputName=document.createElement("input");
  inputName.setAttribute("placeholder","Employee Name")
  document.getElementById("inputText").appendChild(inputName)
  searchbtn=document.createElement("button")
  searchbtn.innerText="Search"
  document.getElementById("inputText").appendChild(searchbtn)
  searchbtn.addEventListener("click",function(){
    $.get("http://localhost:3000/attendanceUser",function(data){
        var users=data;
        var attendanceUser = users.filter(function(user) {
          return user.firstName === inputName.value || user.lastName === inputName.value ;
        });
        console.log(attendanceUser)

      if(attendanceUser)
      {
        table.innerHTML = "";
        Table2();
        bodyDesign();
        attendanceUser.forEach(element => {
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
           table.appendChild(createdtr);
       
        });
        
      }
      else
      console.log("not a user")
      })
  })
  }
 }

 function bodyDesign(){
     charts.style.backkgroundColor="white";
     charts.style.boxShadow="5px 5px 13px #ededed, -5px -5px 13px #ffffff";
 }

  function fullEmp(){
    table.innerHTML = "";
    Table2();
    bodyDesign();
    var childDiv=document.createElement("div");
    parentDiv.appendChild(childDiv);
    h.innerText="Full Employees";
    childDiv.appendChild(h);
    $.get("http://localhost:3000/attendanceUser",function(data){  
        data.forEach(element => {
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
       table.appendChild(createdtr);
   
    });  
        }) 
  
  
   }


   function dailyReport(){
    table.innerHTML = "";
    Table();
    bodyDesign();
    var childDiv=document.createElement("div");
    parentDiv.appendChild(childDiv);
    h.innerText=" Daily  Report  In  That  Day ";
    childDiv.appendChild(h);
    $.get("http://localhost:3000/attendanceUser",function(data){
        
        data.forEach(element => {
      if(element.date==date){
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
   }

   function lateReport(){
    table.innerHTML = "";
    Table();
    bodyDesign();
    var childDiv=document.createElement("div");
    parentDiv.appendChild(childDiv);
    h.innerText=" Late Report ";
    childDiv.appendChild(h);
    $.get("http://localhost:3000/attendanceUser",function(data){
        
        data.forEach(element => {

      if(parseInt(element.attendance_time) > parseInt(time)){
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
   }

   
   function  excuseReport(){
    table.innerHTML = "";
    Table();
    bodyDesign();
    var childDiv=document.createElement("div");
    parentDiv.appendChild(childDiv);
    h.innerText="Excuse Report ";
    childDiv.appendChild(h);
    $.get("http://localhost:3000/attendanceUser",function(data){
        
        data.forEach(element => {

      if(parseInt(element.departure_time) < parseInt(ex_time)){
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
   }


  function requets(){
    table.innerHTML = "";
    Table2();
    bodyDesign();
    var childDiv=document.createElement("div");
    parentDiv.appendChild(childDiv);
    h.innerText="Registered Employees";
    childDiv.appendChild(h);
    $.get("http://localhost:3000/users",function(data){  
        data.forEach(element => {
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
       table.appendChild(createdtr);
   
    });  
        }) 
  }




  