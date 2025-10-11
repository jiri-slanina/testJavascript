/*              --pomůcky--
.addEventListener - „naslouchá“ události, která se stane na určitém HTML prvku-(třeba kliknutí, stisk klávesy, pohyb myši, apod.).
*/

/* 
    první odstavec kontrolaBtn řekne, že má po kliknutí provést / zkontrolvat a vypsat následující kod pod ním.
*/

let heslo = "2589"; //heslo které bude požadováno

document.getElementById("kontrolaBtn").addEventListener("click", function(){ // tady mi po kliknutí na tlacitko udela nasledujici
    let input = document.getElementById("hesloInput").value;
// uložena proměnná input - hesloInput
    if(input === heslo){ // čisla input + heslo musí být stejné
        document.getElementById("vysledek").innerHTML =`Zadali jste správné heslo <br>😊`
        document.getElementById("vysledek").style.color = "green"
//zobrazi zpravu o spravnem hesle
//napis se zobrazi zelenou barvou
        setTimeout(function(){
            window.location.href = "accept.html"
        }, 1000) //přehodí na jinou stranku .html po zadani spravneho hesla

    } else { // kdyz se heslo neshoduje - vypíše
        document.getElementById("vysledek").textContent = "Zadali jste chybné heslo.😞"
        document.getElementById("vysledek").style.color = "red"
    }
})
/*------------------------------
*/


/*
            jednotlivé funkce tlačítka nápovědy
        */

function zobrazNapovedu1(){ //nazev funkce
    document.getElementById("napoveda1").innerHTML = "Kolik je 20:10?" //funkce vypíše po kliknutí na tlačítko

    document.getElementById("smazat1").style.display = "none"
    document.getElementById("smazat1").style.display = "block"
}// tato funkce mi skryje talčítko smazat Napovedu

function smazatNap1() {
    document.getElementById("napoveda1").innerHTML = ""
// toto tlačítko smaže text <p> nápovědy
    document.getElementById("smazat1").style.display = "block"
    document.getElementById("smazat1").style.display = "none"
}// tyto 2 tlačítko opět skryjí tlačítko po kliknutí

/*--------------------------------
*/

function zobrazNapovedu2() {//nazev funkce
    document.getElementById("napoveda2").innerHTML = "Kolik je 150-145?"
    //funkce vypíše po kliknutí na tlačítko

    document.getElementById("smazat2").style.display = "none"
    document.getElementById("smazat2").style.display = "block"
}// tato funkce mi skryje talčítko smazat Napovedu


function smazatNap2() {
    document.getElementById("napoveda2").innerHTML = ""
    // toto tlačítko smaže text <p> nápovědy

    document.getElementById("smazat2").style.display = "block"
    document.getElementById("smazat2").style.display = "none"
}// tyto 2 tlačítko opět skryjí tlačítko po kliknutí


/*---------------------------------
*/

/* funkce tlačítka nápovědy č.3*/
function zobrazNapovedu3() {
    document.getElementById("napoveda3").innerHTML = "Kolik je 224:28?"

    document.getElementById("smazat3").style.display = "none"
    document.getElementById("smazat3").style.display = "block"
}

/* tlačítko nápovědy pro skrytí*/
function smazatNap3() {
    document.getElementById("napoveda3").innerHTML = ""

    document.getElementById("smazat3").style.display = "block"
    document.getElementById("smazat3").style.display = "none"
}
/*---------------------------------
*/


/* funkce tlačítka nápovědy č. 4*/
function zobrazNapovedu4() {
    document.getElementById("napoveda4").innerHTML = "Kolik je 108:12?"

    document.getElementById("smazat4").style.display = "none"
    document.getElementById("smazat4").style.display = "block"
}

/* tlačítko nápovědy pro skrytí*/
function smazatNap4() {
    document.getElementById("napoveda4").innerHTML = ""

    document.getElementById("smazat4").style.display = "block"
    document.getElementById("smazat4").style.display = "none"
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

/*  funkce skrytí tlačítka a vymazaní původního obsahu  */
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

/*  funkce skrytí tlačítka a vymazaní původního obsahu  */
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

/*  funkce skrytí tlačítka a vymazaní původního obsahu  */
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

/*  funkce skrytí tlačítka a vymazaní původního obsahu  */
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

/*  funkce skrytí tlačítka a vymazaní původního obsahu  */
function skrytPatek() {
    document.getElementById("patek").innerHTML = ""

    document.getElementById("skrytBtn_Pa").style.display = "block"
    document.getElementById("skrytBtn_Pa").style.display = "none"
}
/*-----------------------------------------------------------------*/


/*  
            PÁTRACÍ APLIKACE    */

let height = ["90", "80", "70", "75", "60", "50", "55" ];
let hight = ["178", "170", "180", "190", "173", "150", "160"];

document.getElementById("kontrola_tl").addEventListener ("click", function(){
    let input_1 = document.getElementById("vyska").value
    let input_2 = document.getElementById("vaha").value

    let nalezeno = false;

    for(let i = 0; i < hight.length; i++) {
        if (input_1 === hight[i] && input_2 === height[i]) {
            nalezeno = true
            break
        }
    }

    if(nalezeno){
        document.getElementById("vysledek_ap").innerHTML = "😜Jste v Evidenci hledaných osob.😜"
        document.getElementById("vysledek_ap").style.color = "red"

        setTimeout(function() {
            document.getElementById("vysledek_ap").innerHTML = ""
        }, 2000);

    } else{
        document.getElementById("vysledek_ap").innerHTML = "😍Nejste v Evidenci hledaných osob.😍"
        document.getElementById("vysledek_ap").style.color = "blue"
    }

    setTimeout(function() {
            document.getElementById("vysledek_ap").innerHTML = ""
        }, 2000);
});
/*-----------------------------------------------------*/


/* 
    KONTROLA VĚKU - APLIKACE 
                            */

    document.getElementById("overit_vek").addEventListener("click", function(){
        let input = document.getElementById("zadej_vek").value;

        if(input <= 17){
            document.getElementById("text_overeni").innerHTML = `Vstup zamítnut <br> Nejste plnoletý`
            document.getElementById("text_overeni").style.color = "red"
            document.getElementById("text_overeni").style.border = "3px solid red"

        } else{
            document.getElementById("text_overeni").innerHTML = `Vstup povolen.`;
            document.getElementById("text_overeni").style.color = "green"
            document.getElementById("text_overeni").style.border = "3px solid green"
        }
    });

    /*  KONEC KONTROLY VĚKU */

    
/*      INFORMACE K MISCE / GALERIE
                                    */

function zobrazInfo_1(){
    document.getElementById("info_1").innerHTML = `Miska z Olše (placatka) <br> Průměr: 200_mm, <br> Výška 110_mm`
}