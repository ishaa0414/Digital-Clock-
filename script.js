function ClockStart(){
    let date=new Date();
    let hours=date.getHours();
    let minutes=date.getMinutes();
    let seconds=date.getSeconds();
    if(hours>12){
        hours=hours-12;
        let am=document.getElementById('am');
        am.innerText="PM";
    }
    else{
        let am=document.getElementById('am');
        am.innerText="AM";
    }
   console.log(hours,minutes,seconds);
    let hrs=document.getElementById("hrs");
hrs.innerText=hours;
let min=document.getElementById("min");
min.innerText=minutes;
let sec=document.getElementById("sec");
sec.innerText=seconds;


}
setInterval(()=>{
    ClockStart();
},1000)

let setalarm=document.getElementById('setalarm');
let date=new Date();
  let hours=date.getHours();
  let morning=document.getElementById('morningdrop');
  let lunch=document.getElementById('lunchdrop');
  let nap=document.getElementById('napdrop');
  let night=document.getElementById('nightdrop');

let wakeTime=document.getElementById('wakeTime');
let lunchTime=document.getElementById('lunchTime');
let napTime=document.getElementById('napTime');
let nightTime=document.getElementById('nightTime');

let text=document.getElementById('text');

let wish=document.getElementById('wishtext');
if(hours>=5 && hours< 12){
    wish.innerHTML="GOOD MORNING!!WAKE UP!!";
}
if(hours>=12 && hours< 16){
    wish.innerHTML="GOOD AFTERNOON!TAKE SOME SLEEP";
}
if(hours>=16 && hours< 19){
    wish.innerHTML="GOOD EVENING!!";
}

if(hours>=19 && hours< 5){
    wish.innerHTML="GOOD NIGHT!!";
}
  setalarm.addEventListener("click",function(){
if(hours=== parseInt(morning.value)){
 document.getElementById('image').src="./media/morningimg.png";
 text.innerHTML="GRAB SOME HEALTHY BREAKFAST";
}
 if (parseInt(lunch.value) === hours) {
    document.getElementById("image").src = "./media/lunchimg.png";
    text.innerHTML="LET'S HAVE SOME LUNCH";
  }
 if (parseInt(nap.value) === hours) {
    document.getElementById("image").src = "./media/napimg.png";
    text.innerText="STOP YAWNING!GET SOME TEA..IT'S JUST EVENING";
  }
if (parseInt(night.value) === hours) {
    document.getElementById("image").src = "./media/nightimg2.png";
    text.innerText="CLOSE YOUR EYES AND GO TO SLEEP";
  }
wakeTime.innerHTML=morning.options[morning.selectedIndex].text;
lunchTime.innerHTML=lunch.options[morning.selectedIndex].text;
napTime.innerHTML=nap.options[morning.selectedIndex].text;
nightTime.innerHTML=night.options[morning.selectedIndex].text;

})

setalarm.addEventListener("mouseover" , function(){
    setalarm.innerText="Party Time";
})
setalarm.addEventListener("mouseout" , function(){
    setalarm.innerText="Set Alarm";
})
