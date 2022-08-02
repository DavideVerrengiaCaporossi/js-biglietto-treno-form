const form = document.getElementById("inserisci");
const km = document.getElementById("km").value;
const eta = document.getElementById("eta").value;




const scontoMinorenni = 0.2 ;
const scontoPiu65 =0.4;

const prezzoBase = 0.21 ;

form.addEventListener("submit",calcolaPrezzo());
function calcolaPrezzo (km,eta)
{    
   
    
    let calcolo
    if(eta < 18) {
        calcolo = (prezzoBase * km)* scontoMinorenni
    }
    else if (eta>64) {
        calcolo = (prezzoBase * km)* scontoPiu65
    }
    else {
        calcolo = (prezzoBase * km)
    }
    console.log = (calcolo);


    

}
