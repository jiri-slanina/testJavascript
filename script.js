
let heslo = "2589";

document.getElementById("kontrolaBtn").addEventListener("click", function(){
    let input = document.getElementById("hesloInput").value;

    if(input === heslo){
        document.getElementById("vysledek").innerHTML ="Zadali jste správné heslo <br> Můžete vstoupit.😊"
        document.getElementById("vysledek").style.color = "green"
    } else {
        document.getElementById("vysledek").textContent = "Zadali jste chybné heslo."
        document.getElementById("vysledek").style.color = "red"
    }

})


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






// let person = {
//     name: "",
//     secName: "",
//     age: "",
//     city: ""
// }
// console.log(`Ahoj, jmenuji se ${person.name} ${person.secName}. Je mi ${person.age} let, a bydlím ve městě ${person.city}.`)






