var uiPagei = document.getElementById("intro");
var btnNexti = document.getElementById("nexti");
    btnNexti.addEventListener("click", nexti); 
var uiPage1 = document.getElementById("page1");
var btnPrev1 = document.getElementById("prev1");
	btnPrev1.addEventListener("click", prev1);
var btnNext1 = document.getElementById("next1");
    btnNext1.addEventListener("click", next1);
var uiPage2 = document.getElementById("page2");
var btnPrev2 = document.getElementById("prev2");
	btnPrev2.addEventListener("click", prev2);
var btnNext2 = document.getElementById("next2");
    btnNext2.addEventListener("click", next2);
var uiPage3 = document.getElementById("page3");
var btnPrev3 = document.getElementById("prev3");
	btnPrev3.addEventListener("click", prev3);
var btnNext3 = document.getElementById("next3");
    btnNext3.addEventListener("click", next3);
var uiPage4 = document.getElementById("page4");
var btnPrev4 = document.getElementById("prev4");
	btnPrev4.addEventListener("click", prev4);
var btnNext4 = document.getElementById("next4");
    btnNext4.addEventListener("click", next4);
var uiPage5 = document.getElementById("page5");
var btnPrev5 = document.getElementById("prev5");
	btnPrev5.addEventListener("click", prev5);
var btnNext5 = document.getElementById("next5");
    btnNext5.addEventListener("click", next5);
var uiPage6 = document.getElementById("page6");
var btnPrev6 = document.getElementById("prev6");
	btnPrev6.addEventListener("click", prev6);
var btnNext6 = document.getElementById("next6");
    btnNext6.addEventListener("click", next6);	
var uiClose = document.getElementById("close");
var btnClose = document.getElementById("nextc");
	btnClose.addEventListener("click", nextc);
function nexti(event){
	event.preventDefault;
	uiPagei.classList.add("hidden");
	uiPage1.classList.remove("hidden");
	uiInsPop1.style.display=""	;}
function prev1(event){
	event.preventDefault;
	uiPagei.classList.remove("hidden");
	uiPage1.classList.add("hidden");	}
function next1(event){
	event.preventDefault;
	uiPage1.classList.add("hidden");
	uiPage2.classList.remove("hidden");	
	uiInsPop2.style.display=""	}
function prev2(event){
	event.preventDefault;
	uiPage1.classList.remove("hidden");
	uiPage2.classList.add("hidden");	}
function next2(event){
	event.preventDefault;
	uiPage2.classList.add("hidden");
	uiPage3.classList.remove("hidden");
	uiInsPop3.style.display=""	}
function prev3(event){
	event.preventDefault;
	uiPage3.classList.add("hidden");
	uiPage2.classList.remove("hidden");	}	
function next3(event){
	event.preventDefault;
	uiPage3.classList.add("hidden");
	uiPage4.classList.remove("hidden");	
	uiInsPop4.style.display=""	}
function prev4(event){
	event.preventDefault;
	uiPage4.classList.add("hidden");
	uiPage3.classList.remove("hidden");	}
function next4(event){
	event.preventDefault;
	uiPage4.classList.add("hidden");
	uiPage5.classList.remove("hidden");	
	uiInsPop5.style.display=""	}
function prev5(event){
	event.preventDefault;
	uiPage5.classList.add("hidden");
	uiPage4.classList.remove("hidden");	}
function next5(event){		
	event.preventDefault;
	uiPage5.classList.add("hidden");
	uiPage6.classList.remove("hidden");
	uiInsPop6.style.display=""	}
function prev6(event){
	event.preventDefault;
	uiPage6.classList.add("hidden");
	uiPage5.classList.remove("hidden");	}
function next6(event){		
	event.preventDefault;
	uiPage6.classList.add("hidden");
	uiPagei.classList.remove("hidden");
	uiClose.style.display=""}	
function nextc(event){		
	event.preventDefault;
	uiClose.style.display="none";
	fullreset1();
	fullreset2();
	fullreset3();
	fullreset4();
	fullreset5();
	fullreset6();	}		
var uiInsPop1 = document.getElementById("ins_popup_1");
var btnOk1_1 = document.getElementById("ok1_1");
var btnStart1 = document.getElementById("start1");
var uiTimer1 = document.getElementById("timer1");
var uiTimePop1 = document.getElementById("time_popup_1");
var btnOk1_2 = document.getElementById("ok1_2");
var btnReset1 = document.getElementById("reset1");
 btnOk1_1.addEventListener('click', popupclose1); 
 btnStart1.addEventListener("click", stage1);
 btnOk1_2.addEventListener('click', popupclose1_2); 
 btnReset1.addEventListener('click', fullreset1); 
var count1;
var counter1;
function fullreset1(){
	var gall1 = document.getElementById("table1");
	var all1 = gall1.getElementsByTagName("button");
	for(var m=0; m < all1.length; m++){
	all1[m].style.opacity="1.0"}
	btnReset1.style.visibility="hidden";
	btnStart1.style.visibility="visible";};	
function popup1(){
	uiTimePop1.style.display=""; };		
function popupclose1(){
	uiInsPop1.style.display="none";		};		
function popupclose1_2(){
	uiTimePop1.style.display="none"; 
	resetpopup1();};		
function resetpopup1(){
	btnStart1.style.visibility="hidden";
	btnReset1.style.visibility="visible"; };
function stage1 () {
	count1=21;
counter1=setInterval(function() {
 count1=count1-1;
     if (count1 <= -1)  {
	 delTable1();
	 return;
  }
  addTable1();
  uiTimer1.innerHTML =count1;
  }, 1000); //1000 will  run it every 1 second
function addTable1(){
var n = document.getElementById("table1");
var c = n.getElementsByTagName("button");
   for(var m=0; m < c.length; m++){
      c[m].addEventListener("click",hideshow1 );
	  c[m].addEventListener("touchstart",hideshow1 );}
}
function delTable1(){
var n = document.getElementById("table1");
var c = n.getElementsByTagName("button");
   for(var m=0; m < c.length; m++){
      c[m].removeEventListener("click",hideshow1 );
	  c[m].removeEventListener("touchstart",hideshow1 ); }
	  reset1();
}
function reset1() {
   clearInterval(counter1);
   count1=20;
   popup1();
    return;}
function hideshow1(){
this.style.opacity="0.2"}
};
var uiInsPop2 = document.getElementById("ins_popup_2");
var btnOk2_1 = document.getElementById("ok2_1");
var btnStart2 = document.getElementById("start2");
var uiTimer2 = document.getElementById("timer2");
var uiTimePop2 = document.getElementById("time_popup_2");
var btnOk2_2 = document.getElementById("ok2_2");
var btnReset2 = document.getElementById("reset2");
 btnOk2_1.addEventListener('click', popupclose2); 
 btnStart2.addEventListener("click", stage2);
 btnOk2_2.addEventListener('click', popupclose2_2); 
 btnReset2.addEventListener('click', fullreset2); 
var count2;
var counter2;
function fullreset2(){
	var gall2 = document.getElementById("table2");
	var all2 = gall2.getElementsByTagName("button");
	for(var m=0; m < all2.length; m++){
	all2[m].style.opacity="1.0"}
	btnReset2.style.visibility="hidden";
	btnStart2.style.visibility="visible";
};	
function popup2(){
	uiTimePop2.style.display=""; };		
function popupclose2_2(){
	uiTimePop2.style.display="none";
	resetpopup2();	};		
function popupclose2(){
	uiInsPop2.style.display="none"; };		
function resetpopup2(){
	btnStart2.style.visibility="hidden";
	btnReset2.style.visibility="visible"; };
function stage2 () {
	count2=21;
counter2=setInterval(function() {
 count2=count2-1;
     if (count2 <= -1)  {
	 delTable2();
	 return;
  }
  addTable2();
  uiTimer2.innerHTML =count2;
  }, 1000); //1000 will  run it every 1 second
function addTable2(){
var n = document.getElementById("table2");
var c = n.getElementsByTagName("button");
   for(var m=0; m < c.length; m++){
      c[m].addEventListener("click",hideshow2 );
	  c[m].addEventListener("touchstart",hideshow2 );}
}
function delTable2(){
var n = document.getElementById("table2");
var c = n.getElementsByTagName("button");
   for(var m=0; m < c.length; m++){
      c[m].removeEventListener("click",hideshow2 );
	  c[m].removeEventListener("touchstart",hideshow2 ); }
	  reset2();
}
function reset2() {
   clearInterval(counter2);
   count2=20;
   popup2();
    return;}
function hideshow2(){
this.style.opacity="0.2"}
};
var uiInsPop3 = document.getElementById("ins_popup_3");
var btnOk3_1 = document.getElementById("ok3_1");
var btnStart3 = document.getElementById("start3");
var uiTimer3 = document.getElementById("timer3");
var uiTimePop3 = document.getElementById("time_popup_3");
var btnOk3_2 = document.getElementById("ok3_2");
var btnReset3 = document.getElementById("reset3");
 btnOk3_1.addEventListener('click', popupclose3); 
 btnStart3.addEventListener("click", stage3);
 btnOk3_2.addEventListener('click', popupclose3_2); 
 btnReset3.addEventListener('click', fullreset3); 
var count3;
var counter3;
function fullreset3(){
	var gall3 = document.getElementById("table3");
	var all3 = gall3.getElementsByTagName("button");
	for(var m=0; m < all3.length; m++){
	all3[m].style.opacity="1.0"}
	btnReset3.style.visibility="hidden";
	btnStart3.style.visibility="visible";
	};	
function popup3(){
	uiTimePop3.style.display=""; };		
function popupclose3_2(){
	uiTimePop3.style.display="none";
	resetpopup3();	};		
function popupclose3(){
	uiInsPop3.style.display="none"; };		
function resetpopup3(){
	btnStart3.style.visibility="hidden";
	btnReset3.style.visibility="visible"; };
function stage3 () {
	count3=21;
counter3=setInterval(function() {
 count3=count3-1;
     if (count3 <= -1)  {
	 delTable3();
	 return;
  }
  addTable3();
  uiTimer3.innerHTML =count3;
  }, 1000); //1000 will  run it every 1 second
function addTable3(){
var n = document.getElementById("table3");
var c = n.getElementsByTagName("button");
   for(var m=0; m < c.length; m++){
      c[m].addEventListener("click",hideshow3 );
	  c[m].addEventListener("touchstart",hideshow3 );}
}
function delTable3(){
var n = document.getElementById("table3");
var c = n.getElementsByTagName("button");
   for(var m=0; m < c.length; m++){
      c[m].removeEventListener("click",hideshow3 );
	  c[m].removeEventListener("touchstart",hideshow3 ); }
	  reset3();
}
function reset3() {
   clearInterval(counter3);
   count3=20;
   popup3();
    return;}
function hideshow3(){
this.style.opacity="0.2"}
};
var uiInsPop4 = document.getElementById("ins_popup_4");
var btnOk4_1 = document.getElementById("ok4_1");
var btnStart4 = document.getElementById("start4");
var uiTimer4 = document.getElementById("timer4");
var uiTimePop4 = document.getElementById("time_popup_4");
var btnOk4_2 = document.getElementById("ok4_2");
var btnReset4 = document.getElementById("reset4");

 btnOk4_1.addEventListener('click', popupclose4); 
 btnStart4.addEventListener("click", stage4);
 btnOk4_2.addEventListener('click', popupclose4_2); 
 btnReset4.addEventListener('click', fullreset4); 

var count4;
var counter4;

function fullreset4(){
	var gall4 = document.getElementById("table4");
	var all4 = gall4.getElementsByTagName("button");
	for(var m=0; m < all4.length; m++){
	all4[m].style.opacity="1.0"}
	btnReset4.style.visibility="hidden";
	btnStart4.style.visibility="visible";
//	uiInsPop4.style.display="";
	};	
function popup4(){
	uiTimePop4.style.display=""; };		
function popupclose4_2(){
	uiTimePop4.style.display="none";
	resetpopup4();	};		
function popupclose4(){
	uiInsPop4.style.display="none"; };		
function resetpopup4(){
	btnStart4.style.visibility="hidden";
	btnReset4.style.visibility="visible"; };
function stage4 () {
	count4=21;
counter4=setInterval(function() {
 count4=count4-1;
     if (count4 <= -1)  {
	 delTable4();
	 return;
  }
  addTable4();
  uiTimer4.innerHTML =count4;
  }, 1000); //1000 will  run it every 1 second
function addTable4(){
var n = document.getElementById("table4");
var c = n.getElementsByTagName("button");
   for(var m=0; m < c.length; m++){
      c[m].addEventListener("click",hideshow4 );
	  c[m].addEventListener("touchstart",hideshow4 );}
}
function delTable4(){
var n = document.getElementById("table4");
var c = n.getElementsByTagName("button");
   for(var m=0; m < c.length; m++){
      c[m].removeEventListener("click",hideshow4);
	  c[m].removeEventListener("touchstart",hideshow4 ); }
	  reset4();
}
function reset4() {
   clearInterval(counter4);
   count4=20;
   popup4();
    return;}
function hideshow4(){
this.style.opacity="0.2"}
};

// 5th Level
var uiInsPop5 = document.getElementById("ins_popup_5");
var btnOk5_1 = document.getElementById("ok5_1");
var btnStart5 = document.getElementById("start5");
var uiTimer5 = document.getElementById("timer5");
var uiShift5 = document.getElementById("shift5");
var uiTimePop5 = document.getElementById("time_popup_5");
var btnOk5_2 = document.getElementById("ok5_2");
var btnReset5 = document.getElementById("reset5");

 btnOk5_1.addEventListener('click', popupclose5); 
 btnStart5.addEventListener("click", stage5);
 btnOk5_2.addEventListener('click', popupclose5_2); 
 btnReset5.addEventListener('click', fullreset5); 

var count5;
var counter5;

var btncheck5 = document.getElementById("check5");
var shift5;
var uiTimer5_2 = document.getElementById("timer5_2");
var uiShift5_2 = document.getElementById("shift5_2"); 
var uiTimwPop5 = document.getElementById("timw_popup_5");
var btnOk5_3 = document.getElementById("ok5_3");
 btnOk5_3.addEventListener('click', popupclose5_3); 
 
function popupclose5(){
	uiInsPop5.style.display="none";	};
function stage5 () {
	count5=21;
	shift5=1;
	uiShift5.innerHTML =shift5;
	counter5=setInterval(function() {
	count5=count5-1;
	if (count5<=-1){
		if(shift5<3){
		shift5++;}
		else{
		reset5_2();
		}
	uiShift5.innerHTML =shift5;
	count5=21;
	return;
  }

   	uiTimer5.innerHTML =count5;
	btncheck5.addEventListener("click", check5);

   }, 1000); //1000 will  run it every 1 second

function check5() {
var x1=document.getElementById("tab5_1");
var x2=document.getElementById("tab5_2");
	if (x1.value=="I" && x2.value=="R") {
	reset5();
	return;
  }
}
function reset5() {
    clearInterval(counter5);
	popup5();
     return;} 

};
// If check correct	
function popup5(){
	uiTimePop5.style.display=""; 
	uiTimer5_2.innerHTML=count5;
	uiShift5_2.innerHTML=shift5;
	};	
function popupclose5_2(){
	uiTimePop5.style.display="none";
	resetpopup5();	};	
// If Time too Long
function reset5_2() {
    clearInterval(counter);
	popup5_3();
     return;} 
function popup5_3(){
	uiTimwPop5.style.display=""; };	
function popupclose5_3(){
	uiTimwPop5.style.display="none";
	resetpopup5();	};	
// Reset Display	
function resetpopup5(){
	btnStart5.style.visibility="hidden";
	btnReset5.style.visibility="visible"; };	
function fullreset5(){
	count5=20;
	uiTimer5.innerHTML =count5;
	shift5=1;
	uiShift5.innerHTML =shift5;
	var y1=document.getElementById("tab5_1");
	y1.value="";
	var y2=document.getElementById("tab5_2");
	y2.value="";
	btnReset5.style.visibility="hidden";
	btnStart5.style.visibility="visible";
//	uiInsPop5.style.display="";	
};	
	
// 6th Level
var uiInsPop6 = document.getElementById("ins_popup_6");
var btnOk6_1 = document.getElementById("ok6_1");
var btnStart6 = document.getElementById("start6");
var count6;
var counter6;
var shift6;
var uiTimer6 = document.getElementById("timer6");
var uiShift6 = document.getElementById("shift6");
var uiTimePop6 = document.getElementById("time_popup_6");
var btnOk6_2 = document.getElementById("ok6_2");
var btnReset6 = document.getElementById("reset6");
var btncheck6 = document.getElementById("check6");

 btnOk6_1.addEventListener('click', popupclose6); 
 btnStart6.addEventListener("click", stage6);
 btnOk6_2.addEventListener('click', popupclose6_2); 
 btnReset6.addEventListener('click', fullreset6); 
 
var uiTimer6_2 = document.getElementById("timer6_2");
var uiShift6_2 = document.getElementById("shift6_2"); 
 
function popupclose6(){
	uiInsPop6.style.display="none";		};	
function stage6 () {
	count6=21;
	shift6=1;
	uiShift6.innerHTML =shift6;
	counter6=setInterval(function() {
	count6=count6-1;
	if (count6<=-1){
	shift6++;
	uiShift6.innerHTML =shift;
	count6=21;
	return;
  }
   uiTimer6.innerHTML =count6;
	btncheck6.addEventListener("click", check6);
   }, 1000); //1000 will  run it every 1 second
function check6() {
var x1=document.getElementById("tab6_1");
var x2=document.getElementById("tab6_2");
	if (x1.value=="I" && x2.value=="R") {
	reset6();
	return;
  }
}
function reset6() {
    clearInterval(counter6);
	popup6();
     return;
}  
};
function fullreset6(){
	count6=20;
	uiTimer6.innerHTML =count6;
	shift6=1;
	uiShift6.innerHTML =shift6;
	var z1=document.getElementById("tab6_1");
	z1.value="";
	var z2=document.getElementById("tab6_2");
	z2.value="";
	btnReset6.style.visibility="hidden";
	btnStart6.style.visibility="visible";
//	uiInsPop6.style.display="";
	};	
function popup6(){
	uiTimePop6.style.display="";
	uiTimer6_2.innerHTML=count6;
	uiShift6_2.innerHTML=shift6;
	};		
function popupclose6_2(){
	uiTimePop6.style.display="none";
resetpopup();	};		
function resetpopup(){
	btnStart6.style.visibility="hidden";
	btnReset6.style.visibility="visible"; };
		

// Info
var btnInfo1 = document.getElementById("info1");
	btnInfo1.addEventListener("click", info1);
function info1() { uiInsPop1.style.display=""; }
var btnInfo2 = document.getElementById("info2");
	btnInfo2.addEventListener("click", info2);
function info2() { uiInsPop2.style.display=""; }
var btnInfo3 = document.getElementById("info3");
	btnInfo3.addEventListener("click", info3);
function info3() { uiInsPop3.style.display=""; }
var btnInfo4 = document.getElementById("info4");
	btnInfo4.addEventListener("click", info4);
function info4() { uiInsPop4.style.display=""; }
var btnInfo5 = document.getElementById("info5");
	btnInfo5.addEventListener("click", info5);
function info5() { uiInsPop5.style.display=""; }
var btnInfo6 = document.getElementById("info6");
	btnInfo6.addEventListener("click", info6);
function info6() { uiInsPop6.style.display=""; }
