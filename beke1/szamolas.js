function szamol()
{
    var toke = parseInt(document.getElementById('toke').value);
    var kamatlabmin = parseFloat(document.getElementById('kamatlabmin').value);
    var kamatlabmax = parseFloat(document.getElementById('kamatlabmax').value);
    var evek = parseInt(document.getElementById('evek').value);
    eredmeny = "<table>";

    for (var j = kamatlabmin; j < kamatlabmax + 1; j++)
    {
        eredmeny =+ '<tr>';
        var q = 1+j/100;
        for (var i=0; i< evek; i++) {
            var token = toke * Math.pow(q,i);
            eredmeny+='<td>'+ token.toFixed(2) + '</td>' ;
        } 

        eredmeny += '</tr>';
    }
    eredmeny += '</table>';
    documents.getElementById('eredmény').innerHTML =+ eredmeny ;
}
