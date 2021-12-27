let btn1=document.createElement("div");
btn1.innerText="Submit";
let val=document.getElementById("submit_btn").appendChild(btn1);
val.addEventListener('click',()=>{
    let a=document.getElementById("email").value;
    let b=document.getElementById("psw").value;
    let c=document.getElementById("cpsw").value;
    if(a==""){
        
        document.querySelector('.error').innerHTML="Username is required";
        return false;
        }
    if(b==""){
    document.querySelector('.error').innerHTML="Password is required";
    return false;
    }
    if(c==""){
        document.querySelector('.error').innerHTML="Confirm Password is required";
        return false;
    }

    if(b!=c){
        document.querySelector('.error').innerHTML="Password must be same";
        return false;
    }
    else{
       document.querySelector(".error").style.cssText="display:none";
       let ans=document.createElement("div");
        ans.innerHTML=a + "<b> You are Successfully logged in </b>";
        let val1=document.body.appendChild(ans);
        return true;
    }
    

    
})


// setTimeout(()=>{
//     alert("san")
// },2000)
