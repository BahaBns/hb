document.addEventListener("DOMContentLoaded", function(event) {
    var thumbnail= document.getElementById('img');
    thumbnail.addEventListener("click", function() {
    if (thumbnail.style.height=="300px"){
    thumbnail.style.width="50px";
    thumbnail.style.height="50px";
    }else{
        thumbnail.style.width="300px";
        thumbnail.style.height="300px"; 
    }
    });
    });