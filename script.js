function validate(){
    let name=document.getElementById("name");
    let lastname=document.getElementById("lastname");
    let mail=document.getElementById("mail");
    let phone=document.getElementById("phone");


  

    if(name.value==""||lastname.value==""||mail.value==""||phone.value==""){
        document.getElementById("demo").innerHTML = "ERROR please enter the valid values in the form";
      

    }
    else{
       
        console.log(user);
        
    }
}
let user = {
    name: '<firstname> <firstname>',
    email:'<email>',
    phone:'<phone>'  
  };
  
 