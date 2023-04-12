function szamol()
{
    valA = document.getElementById('valA').value;
    valB = document.getElementById('valB').value;
    valC = document.getElementById('valC').value;
    if (valA == 0)
    {
            alert("Elsőfokú egyenlet!")
            elso = -(valC/valB);
            console.log(elso);
            if (valB ==0 && valC == 0)
            {
                alert("azonosság")
            } 
            else if(valB == 0 && valC !=0)
            {
                alert("ellentmondás")
            }
    }
    if(valA>0)
        {
                alert("másodfokú fügvény")

                d = Math.pow(valB,2)-(4*(valA+valC));
                console.log(d);
            
        }
}