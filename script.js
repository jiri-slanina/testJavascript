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
        document.getElementById("vysledek").innerHTML =`Zadali jste správné heslo <br>😊`
        document.getElementById("vysledek").style.color = "green"

        setTimeout(function(){
            window.location.href = "accept.html"
        }, 1000)

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
    document.getElementById("napoveda1").innerHTML = "Kolik je 20:10?"
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



/*
        KALENDÁŘ    
    */

        /*  PONDĚLÍ */
function zobrazPondeli() {
    document.getElementById("pondeli").innerHTML = "😊Nový týden, nová šance něco změnit. 💪 <br> Začni v klidu a s úsměvem.😊"

    document.getElementById("skrytBtn_Po").style.display = "none"
    document.getElementById("skrytBtn_Po").style.display = "block"
}

function skrytPondeli() {
    document.getElementById("pondeli").innerHTML = ""

    document.getElementById("skrytBtn_Po").style.display = "block"
    document.getElementById("skrytBtn_Po").style.display = "none"
}
/*---------------------------------------*/



        /*  Úterý    */
function zobrazUtery() {
    document.getElementById("utery").innerHTML ="Dnes už to máš rozjeté! 🚀 <br> Pokračuj, jsi v tempu."

    document.getElementById("skrytBtn_Ut").style.display = "none"
    document.getElementById("skrytBtn_Ut").style.display = "block"
}

function skrytUtery() {
    document.getElementById("utery").innerHTML = ""

    document.getElementById("skrytBtn_Ut").style.display = "block"
    document.getElementById("skrytBtn_Ut").style.display = "none"
}


        /*  STŘEDA  */
function zobrazStredu() {
    document.getElementById("streda").innerHTML ="Polovina týdne! 👌 Je čas se trochu pochválit, ale ještě nekončíme."

    document.getElementById("skrytBtn_Str").style.display = "none"
    document.getElementById("skrytBtn_Str").style.display = "block"
}

function skrytStredu() {
    document.getElementById("streda").innerHTML = ""

    document.getElementById("skrytBtn_Str").style.display = "block"
    document.getElementById("skrytBtn_Str").style.display = "none"
}



        /*  ČTVRTEK */
function zobrazCtvrtek() {
    document.getElementById("ctvrtek").innerHTML = "Už to skoro vidíš — víkend se blíží! <br> 😎 Drž se, jsi skoro v cíli."

    document.getElementById("skrytBtn_Ct").style.display = "none"
    document.getElementById("skrytBtn_Ct").style.display = "block"
}

function skrytCtvrtek() {
    document.getElementById("ctvrtek").innerHTML = ""

    document.getElementById("skrytBtn_Ct").style.display = "block"
    document.getElementById("skrytBtn_Ct").style.display = "none"
}




        /*  PÁTEK   */
function zobrazPatek() {
    document.getElementById("patek").innerHTML = "Skvělá práce celý týden! 🎉 <br> Dnes už jen v klidu dokonči, co je třeba.😋"

    document.getElementById("skrytBtn_Pa").style.display = "none"
    document.getElementById("skrytBtn_Pa").style.display = "block"
}

function skrytPatek() {
    document.getElementById("patek").innerHTML = ""

    document.getElementById("skrytBtn_Pa").style.display = "block"
    document.getElementById("skrytBtn_Pa").style.display = "none"
}
