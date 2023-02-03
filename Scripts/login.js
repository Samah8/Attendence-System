
 $(document).ready(function() {
    const date = new Date();
    const current_time=date.getHours() +":"+date.getMinutes();
    const leaveTime='15:30'; 
   
    
    
    $("#form").submit(function(event) {
      event.preventDefault();
      var username = $("#username").val();
      var password = $("#password").val();

      $.get("http://localhost:3000/attendanceUser",function(data){
        var users=data;
        var attendanceUser = users.find(function(user) {
          return user.username === username && user.password === password;
        });
        if(attendanceUser)
        {
          $.ajax({
            url: `http://localhost:3000/attendanceUser/${attendanceUser.id}`,
            method: 'PUT',
            data: {
                 username:attendanceUser.username,
                 password:attendanceUser.password,
                 userId:attendanceUser.userId,
                 attendance_time:attendanceUser.attendance_time,
                departure_time:new Date().getHours()+":"+new Date().getMinutes()
            },
            success: function(data) {
                console.log('Data updated successfully', data);
            },
            error: function(error) {
                console.log('Error updating data', error);
            }
        });
        }
        else
        {

          $.get("http://localhost:3000/users", function(data) {
            var users = data;
            // console.log(users)
            var user = users.find(function(user) {
              return user.username === username && user.password === password;
            });
            console.log(user);
            if (user) {
              user.absent="no";
              console.log("Login successful!");
             attendanceObject= 
             {
                username: username,
                password:password,
                firstName:user.firstName,
                lastName:user.lastName,
                email:user.email,
                address:user.address,
                age:user.age,
                attendance_time:current_time,
                departure_time:leaveTime,
                date:`${new Date().getFullYear()}-0${new Date().getMonth()+1}-${new Date().getDate()}`,
                userId:user.id,
             }
                $.post("http://localhost:3000/attendanceUser", attendanceObject, function(data) {
                alert("User added to attendanceUsers.");
                $.ajax({
                  url: `http://localhost:3000/users/${user.id}`,
                  method: 'PUT',
                  data: {
                    firstName:user.firstName,
                    lastName:user.lastName,
                    email:user.email,
                    address:user.address,
                    age:user.age,
                    username: username,
                    password:password,
                    absent:"no"
                  },
                  success: function(data) {
                      console.log('Data updated successfully', data);
                  },
                  error: function(error) {
                      console.log('Error updating data', error);
                  }
              });

             }); 
            } 
           else if(username==="admin1" && password==="adm123")
            {
             window.location.href="../HTML/admin.html";
            
            }
           else if (username==="employee1" && password==="emp123")
            {
              window.location.assign("../HTML/employee.html")
            }
            
            else {
              alert("Invalid username or password.");
            }
          });

        }
      })
  
     
    });
  });
