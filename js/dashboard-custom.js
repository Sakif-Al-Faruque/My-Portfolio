 //dashboard tabs
 const dashboardButton01 = document.getElementById("dashboard-btn1");
 const dashboardButton02 = document.getElementById("dashboard-btn2");
 const dashboardButton03 = document.getElementById("dashboard-btn3");

 const dashboardBar01 = document.getElementById("dashboard-bar-01");
 const dashboardBar02 = document.getElementById("dashboard-bar-02");
 const dashboardBar03 = document.getElementById("dashboard-bar-03");

console.log("hello")

 dashboardButton01.addEventListener("click", ()=>{
   if(dashboardButton02.classList.contains("dashboard-btn-active") || dashboardBar02.classList.contains("dashboard-bar-active")){
       dashboardButton02.classList.remove("dashboard-btn-active");
       dashboardButton02.classList.add("dashboard-btn-deactive");

       dashboardBar02.classList.remove("dashboard-bar-active");
       dashboardBar02.classList.add("dashboard-bar-deactive");
   }
   if(dashboardButton03.classList.contains("dashboard-btn-active") || dashboardBar03.classList.contains("dashboard-bar-active")){
       dashboardButton03.classList.remove("dashboard-btn-active");
       dashboardButton03.classList.add("dashboard-btn-deactive");

       dashboardBar03.classList.remove("dashboard-bar-active");
       dashboardBar03.classList.add("dashboard-bar-deactive");
   }
   
   dashboardButton01.classList.remove("dashboard-btn-deactive");
   dashboardButton01.classList.add("dashboard-btn-active");

   dashboardBar01.classList.remove("dashboard-bar-deactive");
   dashboardBar01.classList.add("dashboard-bar-active");
 });











 dashboardButton02.addEventListener("click", ()=>{
    if(dashboardButton01.classList.contains("dashboard-btn-active") || dashboardBar01.classList.contains("dashboard-bar-active")){
        dashboardButton01.classList.remove("dashboard-btn-active");
        dashboardButton01.classList.add("dashboard-btn-deactive");
        
        dashboardBar01.classList.remove("dashboard-bar-active");
        dashboardBar01.classList.add("dashboard-bar-deactive");
    }
    if(dashboardButton03.classList.contains("dashboard-btn-active") || dashboardBar03.classList.contains("dashboard-bar-active")){
        dashboardButton03.classList.remove("dashboard-btn-active");
        dashboardButton03.classList.add("dashboard-btn-deactive");
        
        dashboardBar03.classList.remove("dashboard-bar-active");
        dashboardBar03.classList.add("dashboard-bar-deactive");
    }
    
    dashboardButton02.classList.remove("dashboard-btn-deactive");
    dashboardButton02.classList.add("dashboard-btn-active");
    
    dashboardBar02.classList.remove("dashboard-bar-deactive");
    dashboardBar02.classList.add("dashboard-bar-active");

    console.log(dashboardBar02.classList.value);
  });

  dashboardButton03.addEventListener("click", ()=>{
    if(dashboardButton01.classList.contains("dashboard-btn-active") || dashboardBar01.classList.contains("dashboard-bar-active")){
        dashboardButton01.classList.remove("dashboard-btn-active");
        dashboardButton01.classList.add("dashboard-btn-deactive");
        
        dashboardBar01.classList.remove("dashboard-bar-active");
        dashboardBar01.classList.add("dashboard-bar-deactive");
    }
    if(dashboardButton02.classList.contains("dashboard-btn-active") || dashboardBar02.classList.contains("dashboard-bar-active")){
        dashboardButton02.classList.remove("dashboard-btn-active");
        dashboardButton02.classList.add("dashboard-btn-deactive");
        
        dashboardBar02.classList.remove("dashboard-bar-active");
        dashboardBar02.classList.add("dashboard-bar-deactive");
    }
    
    dashboardButton03.classList.remove("dashboard-btn-deactive");
    dashboardButton03.classList.add("dashboard-btn-active");
    
    dashboardBar03.classList.remove("dashboard-bar-deactive");
    dashboardBar03.classList.add("dashboard-bar-active");

    console.log(dashboardBar03.classList.value);
  });