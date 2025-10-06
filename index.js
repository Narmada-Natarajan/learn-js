const h=document.querySelector(".hr");
const m=document.querySelector(".min");
const s=document.querySelector(".sec");

function show_time(){
    var hour=new Date().getHours();
    var minute=new Date().getMinutes();
    var second=new Date().getSeconds();

    hour=hour>12?hour-12:hour;
    if(hour===0){
        hour=12;
    }
    var sec_deg=second/60;
    var min_deg=(sec_deg+minute)/60;
    var hr_deg=(sec_deg+hour)/24;

    /*console.log(sec_deg*360,min_deg*360+hr_deg*360);*/
    
    h.style.setProperty("--rotate",hr_deg*360 + 180);
    m.style.setProperty("--rotate",min_deg*360);
    s.style.setProperty("--rotate",sec_deg*360 + 180);
}
setInterval(show_time,1000);
