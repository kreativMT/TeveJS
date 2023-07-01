function tipp() {
    let teve = document.getElementById('teve').value;
    let strucc = document.getElementById('strucc').value;
    if(teve ===''|| strucc ===''){
        alert ("Hibás adat"); 
    }    
    else if(teve<5){
        alert ("Ennél több teve van");
    }
    else if(teve>5){
        alert ("Ennél kevesebb teve van");
    }
    else if (teve == 5 && strucc == 19 ) {
       document.getElementById("valasz").innerText="Helyes válasz";
    }
}