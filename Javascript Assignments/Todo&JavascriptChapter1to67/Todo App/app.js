var list = document.getElementById('list');
function todo(){
    var items = document.getElementById('todo-item');
    
    var li = document.createElement('li');
    var liText = document.createTextNode(items.value);
    li.appendChild(liText)


    var dltBtn = document.createElement('button');
    var btnText = document.createTextNode('Delete');
    dltBtn.appendChild(btnText)
    dltBtn.setAttribute('onclick','deleteItem(this)');
    li.appendChild(dltBtn)


    var editBtn = document.createElement('button');
    var editBtnText = document.createTextNode('Edit');
    editBtn.appendChild(editBtnText);
    editBtn.setAttribute('onclick','editIntem(this)')
    li.appendChild(editBtn);


    items.value ="";
    list.appendChild(li);
}

function deleteItem(i){
    i.parentNode.remove();
}


function editIntem(i){
    var edit = prompt("Edit your value : ",i.parentNode.firstChild.nodeValue);
    i.parentNode.firstChild.nodeValue = edit;
}


function deleteAll(){
    list.innerHTML ="";
}

