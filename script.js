
//intercettare l'evento di submit della formconst ticketForm = document.getElementById("ticketForm");
const ticketForm = document.getElementById("ticketForm");
//vediamo se mi stampa in consolle l'ogetto giusto tramite l'id
console.log(ticketForm);
//quando faccio clicco il buttton submit mi ritorna la funzione
ticketForm.addEventListener("submit",calcolaPrezzo);
//a cosa serve ?????
//ticketForm.addEventListener






const scontoMinorenni = 0.2 ;
const scontoPiu65 =0.4;

const prezzoBase = 0.21 ;

//la funzione riceve l evento che stiamo aspettantdo in questo caso e l event
function calcolaPrezzo (event)
{  //previene l'evento di default (senza collegamento al database)
    event.preventDefault();  
    
    //voglio leggere i valori di km e eta che mi metti nella form
    const km = document.getElementById("km").value;
    //mostra tutto l'imput della form
    //console.log(km);

    //mostra valore in km
    //console.log(kmImput.value);   

    const eta = document.getElementById("eta").value;
    //mostra tutto l'imput della form
    // console.log(eta);
    // console.log(etaImput.value); 

   //trasformo i valori in numeri per i calcoli
   const kmValue = parseInt (km);
   const etaValue = parseInt (eta);
   //a cosa serve?
   const prezzoInUscita = PrendiPrezzo(kmValue,etaValue);
   //console.log(prezzoInUscita.price);
   //milestone2 inseriamo i valori njel output html
   //*****************CHIEDI A FRANBCESCO COME FORMATTARE IL PREZZO IN OUTPUT COME HA FATTO COSTANZA CREANDO UN NUOVO OGETTO CON IL COSTRUTTORE
   document.getElementById("kmInUscita").innerHTML = kmValue;
   document.getElementById("offertaInUscita").innerHTML = prezzoInUscita.offer;
   document.getElementById("prezzoInUscita").innerHTML = prezzoInUscita.price;
   //mostra la table
   //funzione calcola prezzo del biglietto in base a km e eta
}
//capire se quest'if e corretto con francesco
function PrendiPrezzo(km,eta)
 {
    let calcolo
    let offer = "standard";
    //if per il calcolo del biglietto
    if(eta < 18) {
        calcolo = (prezzoBase * km)* scontoMinorenni
        offer = "Sconto Minorenni"
    }
    else if (eta>65) {
        calcolo = (prezzoBase * km)* scontoPiu65
        offer = "Sconto Over 65"
    }
    else {
        calcolo =(prezzoBase * km)
    }
    console.log = (calcolo);
    //visualizza output
    visualizzaOutPut();
    //per dare due o piu valori 
    return{
        price:calcolo,
        offer:offer,
    }
    
    }
    

//visualizzare la table ***********
function visualizzaOutPut (){
    alert(document.getElementById("output").classList);
    document.getElementById("output").classList.remove("hidden");
    document.getElementById("output").classList.add("visible");
    alert(document.getElementById("output").classList);

}
    

//controlla bene le pareentesi graffe***************
