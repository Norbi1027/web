function hiba(){
    alert("Ez itt egy figyelmeztetés");
}

function kerdezget()
{
    valasz = confirm("Akarsz megadni nevet?");
    console.log(valasz);
    if(valasz)
    {
        nev = prompt("Kérem a nevet: ");
        alert("Szia"+nev+"!");
    }
    else{
        alert("Szia névtelen.");
    }
}
function osszead(a,b){
    console.log(a+b);
    return a+b;
}

function osszead2(a,b){