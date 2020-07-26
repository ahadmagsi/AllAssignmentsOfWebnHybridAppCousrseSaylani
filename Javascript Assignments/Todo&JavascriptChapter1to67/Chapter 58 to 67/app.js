var main_content = document.getElementById('main-content');
// console.log(main_content.childNodes);
var render = document.getElementsByClassName("render");
// for(var i=0; i<render.length;i++){
//     console.log(render[i].innerHTML)
// }
// var fName = document.getElementById('first-name').value = "Alex";
// var lName = document.getElementById('last-name').value = "Bank";
// var email = document.getElementById('email').value = "alexbank@example.com";

// =============chapter 58 tp 67 task 2==========
// document.write(main_content.nodeType);

var lName = document.getElementById('lastName');
// document.write(lName.nodeType);
// var arr = lName.childNodes;
// for(var i=0;i<arr.length;i++){
//     document.write(arr[i].nodeValue);
// }



// var arr = lName.childNodes;
// for(var i=0;i<arr.length;i++){
//     arr[i].nodeValue = "Last Name : Joe"
//     document.write(arr[i].nodeValue);
// }



console.log(main_content.firstChild);
console.log(main_content.lastChild);


console.log(lName.nextSibling);
console.log(lName.previousSibling);


var a = document.getElementById('email');
console.log(a.nodeType)
console.log(a.parentNode);