var mezzo, rilevatore, nCorsa = 0, mezziPossibili;

window.onload = init;

function init(){
    
    mezzo = document.getElementById("mezzo");
    rilevatore = document.getElementById("rilevatore");

    mezziPossibili = [new Mezzo("/van.jpeg","van"),new Mezzo("/camion.jpg","camion"),new Mezzo("/auto_mod.png","auto")];

    nuovaCorsa();
}

function nuovaCorsa(){
    rilevatore.classList.remove("nuovoRilevamento");
    mezzo.classList.remove("nuovaCorsa");
    
    //Questo timer è necessario altrimenti non lascio il tempo al browser di aggiornare classList
    setTimeout(() => {
        nCorsa++;

        controlloVelocita();
        avvioNuovaCorsa();
    }, 500);
}

async function controlloVelocita(){
    if(nCorsa!=0){
        let multa = false;
        //Richiedo la velocità al "sensore" (simulato dal server)
        let busta = await fetch("http://localhost:1337/velocita");
        let risposta = await busta.json();
        console.log(risposta.velocità);
        let vel = risposta.velocità;
        // console.log(mezzo.style.backgroundImage);

        mezziPossibili.forEach(element => {

            if(element.img == mezzo.style.backgroundImage.split("\"")[1])
            {
                
                if(vel > element.LimiteVelocita)
                {
                    multa = true;
                }
            }
            // console.log(element.img);
            // console.log(mezzo.style.backgroundImage.split("\"")[1]);
            
        });
        // console.log(multa);

        if(multa)
        {
            window.location.href = "http://localhost:1337/multa.html";
            sessionStorage.setItem("SPEED", vel.toString());
            sessionStorage.setItem("photo", mezzo.style.backgroundImage);
        }
    }
}


function avvioNuovaCorsa(){



    //2.Prelevo l'immagine del mezzo scelto
    mezzo.style.backgroundImage = `url("${mezziPossibili[Math.floor(Math.random() * 3)].img}")`;
    
    //3.Avvio l'animazione
    mezzo.classList.add("nuovaCorsa");
    rilevatore.classList.add("nuovoRilevamento");

    setInterval(nuovaCorsa, 10000);
}

class Mezzo{
    #img;
    #tipo;
    constructor(img,tipo){
        this.#img=img;
        this.#tipo=tipo;
    }

    get img()
    {
        return this.#img;
    }

    get LimiteVelocita()
    {
        let limite;
        if(this.#tipo == "auto")
        {
            limite=90;
        }
        else if(this.#tipo == "camion")
        {
            limite=50;
        }
        else if(this.#tipo == "van")
        {
            limite=70;
        }

        return limite;
    }
}