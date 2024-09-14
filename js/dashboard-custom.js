 //dashboard tabs
 const dashboardButton01 = document.getElementById("dashboard-btn1");
 const dashboardButton02 = document.getElementById("dashboard-btn2");
 const dashboardButton03 = document.getElementById("dashboard-btn3");

console.log("hello")

 dashboardButton01.addEventListener("click", ()=>{
   if(dashboardButton02.classList.contains("dashboard-btn-active")){
       dashboardButton02.classList.remove("dashboard-btn-active");
       dashboardButton02.classList.add("dashboard-btn-deactive");
   }
   if(dashboardButton03.classList.contains("dashboard-btn-active")){
       dashboardButton03.classList.remove("dashboard-btn-active");
       dashboardButton03.classList.add("dashboard-btn-deactive");
   }
   
   dashboardButton01.classList.remove("dashboard-btn-deactive");
   dashboardButton01.classList.add("dashboard-btn-active");
 });

 dashboardButton02.addEventListener("click", ()=>{
    if(dashboardButton01.classList.contains("dashboard-btn-active")){
        dashboardButton01.classList.remove("dashboard-btn-active");
        dashboardButton01.classList.add("dashboard-btn-deactive");
    }
    if(dashboardButton03.classList.contains("dashboard-btn-active")){
        dashboardButton03.classList.remove("dashboard-btn-active");
        dashboardButton03.classList.add("dashboard-btn-deactive");
    }
    
    dashboardButton02.classList.remove("dashboard-btn-deactive");
    dashboardButton02.classList.add("dashboard-btn-active");
  });

  dashboardButton03.addEventListener("click", ()=>{
    if(dashboardButton01.classList.contains("dashboard-btn-active")){
        dashboardButton01.classList.remove("dashboard-btn-active");
        dashboardButton01.classList.add("dashboard-btn-deactive");
    }
    if(dashboardButton02.classList.contains("dashboard-btn-active")){
        dashboardButton02.classList.remove("dashboard-btn-active");
        dashboardButton02.classList.add("dashboard-btn-deactive");
    }
    
    dashboardButton03.classList.remove("dashboard-btn-deactive");
    dashboardButton03.classList.add("dashboard-btn-active");
  });