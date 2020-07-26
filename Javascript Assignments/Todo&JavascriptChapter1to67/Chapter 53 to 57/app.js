function model(pera){
    var modelImg = document.getElementById('modelImg');
    modelImg.src = pera;
    var modelDiv = document.getElementById('modelDiv');
    modelDiv.className = "model";
    modelDiv.style.display = "block"
    console.log(modelImg);
    document.getElementById('wrapper').style.opacity = 0.3;
    modelDiv.style.zIndex = 1;
}

function closeModel(){
    var modelDiv = document.getElementById('modelDiv');
    modelDiv.style.display = "none"
    document.getElementById('wrapper').style.opacity = 1;

    console.log('Fired');
    // setTimeout(()=>{ modal.style.display = "none"; }, 550)
}