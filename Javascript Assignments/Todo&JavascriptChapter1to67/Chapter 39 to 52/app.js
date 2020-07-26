// ============chapter 38-44 Task 1================
// function power(a,b){
//     var result = 1;
//     for(var i=1;i<=b.length;i++){
//         result *=a**b;
//     }
//     document.write(result);
// }
// var a =prompt('Enter value of a : ');
// var b =prompt('Enter value of b : ');
// power(a,b);


// ========chapter 38-44 Task 2==============


// function check_leapyear(){
//     var year = prompt("Enter year: ");
//     if( (0 == year % 4) && (0 != year % 100) || (0 == year % 400) )
//     {
//         alert(year+" is a leap year");  
//     }
//     else
//     {
//         alert(year+" is not a leap year");  
//     }
// }
// check_leapyear();


// ========chapter 38-44 Task 3==============
// function aera(){
//     var a = +prompt("Enter length of side 1: ");
//     var b = +prompt("Enter length of side 2: ");
//     var c = +prompt("Enter length of side 3: ");
//     var s =(a+b+c)/2;
//     var aera = s*(s-a)*(s-b)*(s-c);
//     alert("Aera of trangle is : "+aera);
// }
// aera()



// ========chapter 38-44 Task 4==============
// var sub1 = +prompt("Enter your 1st subjects marks : ");
// var sub2 = +prompt("Enter your 2nd subjects marks : ");
// var sub3 = +prompt("Enter your 3rd subjects marks : ");
// function mainFuction(){
//     var avr = average();
//     var perc = percentage();
//     alert("Your average is "+avr+" and your percentage is "+perc)
// }
// function average(){
//      var avr = (sub1+sub2+sub3)/3;
//      return avr;
// }
// function percentage(){
//     var avr = average();
//    var perc = (avr/100)*100;
//    return perc;
// }
// mainFuction();



// ========chapter 38-44 Task 5==============
// function forIndexOf(str,charac){
//     var a ;
//     for(var i=0;i<=str.length-1;i++){
//         if(str[i] ==charac){
//             a =i;
//         }
//     }
//     alert('Index of '+charac+" is "+a);
// }
// forIndexOf("Ahad","a");



// ========chapter 38-44 Task 6==============
// var arr = ['a', 'e', 'i', 'o', 'u'];
// function removeVowel(sentence) {
//     sentence = sentence.toLowerCase();
//     if (sentence.length > 25) {
//         alert("String length must be under 25 charachter.");
//     } else {
//         for (var i = 0; i <= arr.length; i++) {
//             for (var j = 0; j <= sentence.length; j++) {
//                 if (arr[i] == sentence.charAt(j)) {
//                     sentence = sentence.replace(arr[i], "");
//                 }
//             }
//         }
//         alert(sentence);
//     }
// }
// removeVowel('AHAD');




// ========chapter 38-44 Task 7==============
// function findOccurrences() {
//     var str = "Pleases read this application and give me gratuity";
//     var count = 0;

//     switch (str) {
//         case 'a':
//             count++;
//         case 'A':
//             count++
//         case 'e':
//         case 'E':
//         case 'i':
//         case 'I':
//         case 'o':
//         case 'O':
//         case 'u':
//         case 'U':
//             return 1;
//         default:
//             return 0;
//     }
// }

// findOccurrences();




// ========chapter 38-44 Task 8==============
// var km = +prompt("Enter kilo meter : ");


// function meter(km){
//     var meters = km * 1000;
//     return meters
// }
// function feets(){
//     var feets = _meter * 3.28;
//     return feets
// }
// function inches(){
//     var inches = _feets * 12;
//     return inches
// }
// function centimeters(){
//     var cm = _inches * 30;
//     return cm
// }

// var _meter = meter(km);
// var _inches = inches();
// var _feets = feets();
// var _cm = centimeters();

// document.write("Meter of "+km+"km is :"+_meter+"<br>");
// document.write("Feets of "+km+"km is :"+_feets+"<br>");
// document.write("Centimeters of "+km+"km is :"+_cm+"<br>");
// document.write("Inches of "+km+"km is :"+_inches);



// ========chapter 38-44 Task 10==============
// var amount = +prompt("Enter cash you want to withdraw : ");
// var notesOf100 = amount/100;
// var notsOf50 = (amount % 100) / 50;
// var notsOf10 = (((amount % 100) % 50) / 10);

// alert("You will have "+Math.floor(notesOf100)+" hundered notes "+Math.floor(notsOf50)+" fifty notes "+notsOf10+" ten notes");











// ========chapter 43-48 task# 02==============
// function imageChanger(pera){
//     var image = document.getElementById('img');
//     image.src = pera
// }





// ========chapter 43-48 task# 03==============

// function deleteInfo(pera){
//     document.getElementById(pera).innerHTML= "";
// }




// ========chapter 43-48 task# 04==============

// function start(){
//     var btn = document.getElementById('count');
//     btn.value++
// }
// function stop(){
//     var btn = document.getElementById('count');
//     btn.value--
// }


// ===== chapter 49 to 52 task == 1 ======= 

// function formSubmit(){
//     document.getElementById('tab').className = 'show'
//     var name = document.getElementById('name').value;
//     var Sname = document.getElementById('sName').value;
//     var phone = document.getElementById('phone').value;
//     var mail = document.getElementById('mail').value;
//     var pass = document.getElementById('pass').value;
//     var dob = document.getElementById('dob').value;
//     var gender = document.getElementsByName('gender');
//     for(var i=0;i<=gender.length;i++){
//         if(gender[i].checked){
//             gender = gender[i].value;
//             break;
//         }
//     }

//     btn(name,Sname,phone,mail,pass,dob,gender)
    
// }

// function btn(name,Sname,phone,mail,pass,dob,gender){
// 	var tr = document.createElement('tr');
// 	var td1 = document.createElement('td');
// 	var td1Text = document.createTextNode(name);
// 	td1.appendChild(td1Text);


// 	var td2 = document.createElement('td');
// 	var td2Text = document.createTextNode(Sname);
// 	td2.appendChild(td2Text);


// 	var td3 = document.createElement('td');
// 	var td3Text = document.createTextNode(phone);
// 	td3.appendChild(td3Text);



// 	var td4 = document.createElement('td');
// 	var td4Text = document.createTextNode(mail);
// 	td4.appendChild(td4Text);



// 	var td5 = document.createElement('td');
// 	var td5Text = document.createTextNode(pass);
// 	td5.appendChild(td5Text);


// 	var td6 = document.createElement('td');
// 	var td6Text = document.createTextNode(dob);
//     td6.appendChild(td6Text);
    


//     var td7 = document.createElement('td');
//     var td7Text = document.createTextNode(gender);
// 	td7.appendChild(td7Text);


	
// 	tr.appendChild(td1);
// 	tr.appendChild(td2);
// 	tr.appendChild(td3);
// 	tr.appendChild(td4);
// 	tr.appendChild(td5);
// 	tr.appendChild(td6);
// 	tr.appendChild(td7);

// 	document.getElementById('tab').appendChild(tr);
// }





// ===== chapter 49 to 52 task == 2 ======= 
// function show(){
//     var txt = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus est, nisi accusamus aperiam cum eos libero illo accusantium ducimus aut impedit dolores non ea soluta voluptates architecto laborum ut ad!"
//     var a = document.getElementById('p1').innerHTML =txt ;
//     a.innerText = " ";
// }




// ===== chapter 49 to 52 task == 3 ======= ========================================================
// function markSheet() {
// 	document.getElementById('tab').className = 'show';
// 	var name = document.getElementById('name').value;
// 	var fName = document.getElementById('fName').value;
// 	var iName = document.getElementById('iName').value;
// 	var rollNo = document.getElementById('rollNo').value;
// 	var dep = document.getElementById('dep').value;
// 	var batch = document.getElementById('batch').value;


// 	document.getElementById('name').value = "";
// 	document.getElementById('fName').value="";
// 	document.getElementById('iName').value="";
// 	document.getElementById('rollNo').value="";
// 	document.getElementById('batch').value="";
// 	document.getElementById('dep').value="";

// 	btn(name,fName,iName,rollNo,dep,batch);
// }
// function btn(name,fName,iName,dep,rollNo,batch){
// 	var tr = document.createElement('tr');
// 	var td1 = document.createElement('td');
// 	var td1Text = document.createTextNode(name);
// 	td1.appendChild(td1Text);


// 	var td2 = document.createElement('td');
// 	var td2Text = document.createTextNode(fName);
// 	td2.appendChild(td2Text);


// 	var td3 = document.createElement('td');
// 	var td3Text = document.createTextNode(iName);
// 	td3.appendChild(td3Text);



// 	var td4 = document.createElement('td');
// 	var td4Text = document.createTextNode(rollNo);
// 	td4.appendChild(td4Text);



// 	var td5 = document.createElement('td');
// 	var td5Text = document.createTextNode(dep);
// 	td5.appendChild(td5Text);


// 	var td6 = document.createElement('td');
// 	var td6Text = document.createTextNode(batch);
//     td6.appendChild(td6Text);
    



//     var editBtn = document.createElement('button');
//     var editBtnText = document.createTextNode('EDIT');
//     editBtn.appendChild(editBtnText);
//     editBtn.setAttribute('onclick','editBtn(this)');



//     var deleteBtn= document.createElement('button');
//     var deleteBtnText = document.createTextNode('DELETE');
//     deleteBtn.appendChild(deleteBtnText);
//     deleteBtn.setAttribute('onclick','deleteBtn(this)');


	
// 	tr.appendChild(td1);
// 	tr.appendChild(td2);
// 	tr.appendChild(td3);
// 	tr.appendChild(td4);
// 	tr.appendChild(td5);
//     tr.appendChild(td6);
//     tr.appendChild(editBtn);
//     tr.appendChild(deleteBtn);

//     tr.setAttribute('id','tr');

// 	document.getElementById('tab').appendChild(tr);
// }

// function deleteBtn(e){
//     e.parentNode.remove();
// }   


// function editBtn(e){
//     document.getElementById('name').value = e.parentNode.firstChild.innerHTML;
// 	document.getElementById('fName').value= e.parentNode.childNodes[1].innerHTML;
//     document.getElementById('iName').value=e.parentNode.childNodes[2].innerHTML;
// 	document.getElementById('rollNo').value=e.parentNode.childNodes[3].innerHTML;
// 	document.getElementById('batch').value=e.parentNode.childNodes[4].innerHTML;
//     document.getElementById('dep').value=e.parentNode.childNodes[5].innerHTML;
    

//     document.getElementById('submit').className="hide";
//     document.getElementById('reset').className="hide";



//     var updateBtn = document.createElement('button');
//     var btnText = document.createTextNode('UPDATE');
//     updateBtn.appendChild(btnText);
//     updateBtn.setAttribute('onclick','update()');
//     updateBtn.setAttribute('id','updateShow');
//     document.getElementById('show').appendChild(updateBtn);

//     e.parentNode.remove();

// }

// function update(){
//     document.getElementById('tab').className = 'show';
// 	var name = document.getElementById('name').value;
// 	var fName = document.getElementById('fName').value;
// 	var iName = document.getElementById('iName').value;
// 	var rollNo = document.getElementById('rollNo').value;
// 	var dep = document.getElementById('dep').value;
// 	var batch = document.getElementById('batch').value;


// 	document.getElementById('name').value = "";
// 	document.getElementById('fName').value="";
// 	document.getElementById('iName').value="";
// 	document.getElementById('rollNo').value="";
// 	document.getElementById('batch').value="";
// 	document.getElementById('dep').value="";

//     btn(name,fName,iName,rollNo,dep,batch);
    
//     document.getElementById('submit').className="show";
//     document.getElementById('reset').className="show";
//     document.getElementById('updateShow').className="hide";
// }








