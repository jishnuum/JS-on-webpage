const form=document.getElementById('formvalidation')


    let showHide = false;
    const showEye = document.getElementById('showeye')
    const showEyes = document.getElementById('showeyes')

    showEye.addEventListener('click' , () =>{
        showHide = !showHide
        document.getElementById('password').type = showHide ? "text" : "password"
        showEye.innerHTML = showHide ? '<i class="bi bi-eye-slash"></i>' : '<i class="bi bi-eye"></i>'
        
    })
    showEyes.addEventListener('click' , () =>{
        showHide = !showHide
        document.getElementById('cpassword').type = showHide ? "text" : "password"
        showEyes.innerHTML = showHide ? '<i class="bi bi-eye-slash"></i>' : '<i class="bi bi-eye"></i>'
        
    })


form.addEventListener('submit',(event) =>{
    event.preventDefault()

    const username = form.name.value
    const password = form.password.value
    const cpassword = form.cpassword.value
    let isValid = true;


    

   



    if(username.length<3){
        
        const errorName = document.getElementById('nameError')
        console.log(errorName);
        errorName.innerText = 'Minimum 3 characters required'
        isValid = false
         
    }

    const uppercase = /[A-Z]/
    const splchar = /[@$!%&#]/

    if(password.length <6){

        const errorPassword = document.getElementById('passwordError')
        errorPassword.innerText = "Password must be at least 6 characters long, contain at least one uppercase letter, one number, and one special character"
        isValid = false
    }
    if(!password.match(uppercase)){

         const errorPassword = document.getElementById('passwordError')
        errorPassword.innerText = "Password must be at least 6 characters long, contain at least one uppercase letter, one number, and one special character"
        isValid = false
    }
    if(!password.match(splchar)){
         const errorPassword = document.getElementById('passwordError')
        errorPassword.innerText = "Password must be at least 6 characters long, contain at least one uppercase letter, one number, and one special character"
        isValid = false

    }
    if(!cpassword.match(password)){
        const cpasserror = document.getElementById('cpasserror')
        cpasserror.innerText = "Passwords does not match"
        isValid = false
    }

    if(isValid){
        form.submit()
        form.reset()
    }

   

 



    
    
})