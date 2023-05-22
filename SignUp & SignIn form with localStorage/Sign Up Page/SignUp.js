const signUp = e => {
    let fname=document.getElementById('fname').value,
    lname=document.getElementById('lname').value,
    email=document.getElementById('email').value,
    pwd=document.getElementById('pwd').value;

    let formData=JSON.parse(localStorage.getItem('formData')) || [];

    let exist = formData.length && 
    JSON.parse(localStorage.getItem('formData')).some(data=>
        data.fname.toLowerCase() == fname.toLowerCase() &&
        data.lname.toLowerCase() == lname.toLowerCase()
        );
    
        if(!exist){
            formData.push({fname, lname, email, pwd});
            localStorage.setItem('formData', JSON.stringify(formData));
            document.querySelector('form').reset();
            document.getElementById('fname').focus();
            alert("User Registered.");
        }
        else{
            alert("You're already a member.");
            // location.href="/Sign In Page/SignIn.html";
        }
        location.href="/Sign In Page/SignIn.html";
        e.preventDefault();
}