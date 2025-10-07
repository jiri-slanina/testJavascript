/*              --pomůcky--
.addEventListener - „naslouchá“ události, která se stane na určitém HTML prvku-(třeba kliknutí, stisk klávesy, pohyb myši, apod.).
*/

/* 
    první odstavec kontrolaBtn řekne, že má po kliknutí provést / zkontrolvat a vypsat následující kod pod ním.
*/

let heslo = "2589";

document.getElementById("kontrolaBtn").addEventListener("click", function(){
    let input = document.getElementById("hesloInput").value;

    if(input === heslo){
        document.getElementById("vysledek").innerHTML =`Zadali jste správné heslo <br> Můžete vstoupit.😊 <br><img src="img/200w.gif" alt="">`
        document.getElementById("vysledek").style.color = "green"
    } else {
        document.getElementById("vysledek").textContent = "Zadali jste chybné heslo."
        document.getElementById("vysledek").style.color = "red"
    }
})
/*------------------------------
*/


/*
            jednotlivé funkce tlačítka nápovědy
        */
function zobrazNapovedu1(){
    document.getElementById("napoveda1").innerHTML = "Kolik je 20/10?"
}

function zobrazNapovedu2() {
    document.getElementById("napoveda2").innerHTML = "Kolik je 150-145?"
}

function zobrazNapovedu3() {
    document.getElementById("napoveda3").innerHTML = "Kolik je 224:28?"
}

function zobrazNapovedu4() {
    document.getElementById("napoveda4").innerHTML = "Kolik je 108:12?"
}
/*  --------------------------------------------
*/












