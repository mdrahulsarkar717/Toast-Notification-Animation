let notifi = document.querySelector('.notifications')

let wr = "This is a wrong";
let su = "This is a successful";
let th = "This is a Thank you";





function show(msg){
    let toast = document.createElement('div');
    toast.classList.add('toast');
    notifi.appendChild(toast);
    toast.innerHTML = msg;
    
    
    setTimeout(()=>{
        toast.remove();
    },6000);
    
    
    
    
  };
