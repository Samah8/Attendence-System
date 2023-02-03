emailPattern=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
namePattern=/[a-zA-Z]/;


window.addEventListener('load',function(){
    emailtxt=this.document.getElementById("email");
    firstName=this.document.getElementById("firstName");
    lastName=this.document.getElementById("lastName");
    age=this.document.getElementById("age");
    address=this.document.getElementById("address");

    age.addEventListener("blur",function(e){
        if(age.value<=18)
        {
            age.focus();
            age.select();
            age.style.border="1px  red solid" 
        }
        else{
            age.style.border="none"
        }
    })

    this.document.forms[0].addEventListener('submit',function(e){
       
        if(!(isNameValid(firstName)))
        {
            e.preventDefault();
             firstName.focus()
             firstName.style.border="1px solid red"
        }
        if(!(isNameValid(lastName)))
        {
            e.preventDefault();
             lastName.focus()
             lastName.style.border="1px solid red"
        }
        if(!(isEmailValid()))
         {
            e.preventDefault();
            emailtxt.focus();
            email.style.border="1px solid red"
         }  
    }) // end of form

    function isEmailValid(){
        return emailPattern.test(emailtxt.value);
    }
    function isNameValid(name){
        return namePattern.test(name.value)
    }
    
    


    const emailField = document.getElementById('email');
    emailField.addEventListener('blur', (event) => {
        event.preventDefault();
    
        const email = emailField.value;
        fetch(`http://localhost:3000/users?email=${email}`)
            .then(response => response.json())
            .then(data => {
                if (data.length > 0) {
                    // Show an error message or highlight the email field
                    // to indicate that the email is already taken
                    emailField.focus();
                    emailField.select();
                    emailField.style.border="1px  red solid"  
                }
                else{
                    emailField.style.border="none"
                }
            });
    });


      // to get random password
      
      function genPassword() {
        var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        var passwordLength = 9;
        var password = "";
     for (var i = 0; i <= passwordLength; i++) {
       var randomNumber = Math.floor(Math.random() * chars.length);
       password += chars.substring(randomNumber, randomNumber +1);
      }
            return password;
     }

      // to get random username
      
      function genusername() {
        var chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        var usernameLength = 10;
        var username = "";
     for (var i = 0; i <= usernameLength; i++) {
       var randomNumber = Math.floor(Math.random() * chars.length);
       //console.log(randomNumber)
       username += chars.substring(randomNumber, randomNumber +1);
      }
            return username;
     }
   let  Username= genusername()
  let  Password=  genPassword()
     // function to send emails
     function sendMe(e){
        e.preventDefault();
      Email.send({
          SecureToken : "4ad3b8bf-309d-446f-adaf-af6ea8a88b3a",
          To : 'samahayman836@gmail.com',
          From : emailtxt.value,
          Subject : "Registeration Form from Attendance System",
          Body : `Username: ${Username} , Password: ${Password}`
      }).then(
        message => alert(message)
      );
      }


 

const form = document.getElementById('form');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    console.log(formData)
    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });

    data.username=Username;
    data.password=Password;
    data.absent="yes";
    data.date=`${new Date().getFullYear()}-0${new Date().getMonth()+1}-${new Date().getDate()}`

    fetch('http://localhost:3000/users', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' },
        
    })
    .then(response => response.json())
    .then(data => console.log(data));
});

form.addEventListener('submit',sendMe)


}) // end of load