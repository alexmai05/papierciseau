const jouer = document.querySelector(".jouer");
const rejouer = document.querySelector(".rejouer");

jouer.addEventListener("click", () => {

    const game = new Game();

    const tl = gsap.timeline({
        defaults: {
            ease: "linear"
        }
    })
    .to(".boxFormulaire", {ease: "back.in(1)", y: "100vh", duration: 1})
    .to(".fondFormulaire", {
        opacity: 0,
        onComplete: () => document.querySelector(".fondFormulaire").classList.add("none")
    })
})

rejouer.addEventListener("click", () => {

    const tl = gsap.timeline({
        defaults: {
            ease: "linear"
        }
    })
    .to(".fondFormulaire", {
        onStart: () => document.querySelector(".fondFormulaire").classList.remove("none"),
        opacity: 1
    })
    .to(".boxFormulaire", {ease: "back.out(1)", y: "0", duration: 1})
})

class Game{
    constructor(){
        this.listMain = [
            ["✊", "✋", "✌️"],
            ["✊🏻", "✋🏻", "✌🏻"],
            ["✊🏽", "✋🏽", "✌🏽"],
            ["✊🏿", "✋🏿", "✌🏿"]
        ];

        this.afficherNomJoueur();
        this.afficherActionJoueur();
        this.afficherActionCpu();
        this.resultatMatch();
    }

    afficherNomJoueur(){
        const txtNom = document.querySelector(".nomTexte");
        document.querySelector(".nomJoueur").innerHTML = txtNom.value;
    }

    afficherActionJoueur(){
        //Couleur Peau
        const peauMain = document.querySelector("[name = choixPeau]:checked").value;
        //action main
        this.actionMain = document.querySelector(".armes").selectedIndex;
        //resultats
        const collectionCouleur = this.listMain[peauMain];
        const resultatJoueur = collectionCouleur[this.actionMain];
        //affichage
        document.querySelector(".emojiJoueur").innerHTML = resultatJoueur;
    }

    afficherActionCpu(){
        const peauMainCpu = Math.round(Math.random() * 3);

        this.actionMainCpu = Math.round(Math.random() * 2);

        const collectionCouleurCpu = this.listMain[peauMainCpu];
        const resultatCpu = collectionCouleurCpu[this.actionMainCpu];

        document.querySelector(".emojiCpu").innerHTML = resultatCpu;
    }

    resultatMatch(){
        const fondJoueur = document.querySelector(".joueur");
        const fondCpu = document.querySelector(".cpu");
        const txtResultat = document.querySelector(".resultat");

        if(this.actionMain == this.actionMainCpu){
            fondJoueur.style.setProperty("--fondJoueur", "#3F88C5");
            fondCpu.style.setProperty("--fondCpu", "#3F88C5");
            txtResultat.innerHTML = "Égalité";
        }
        else if(
            this.actionMain == 0 && this.actionMainCpu == 1 ||
            this.actionMain == 1 && this.actionMainCpu == 2 ||
            this.actionMain == 2 && this.actionMainCpu == 0 ){
            fondJoueur.style.setProperty("--fondJoueur", "#D16D82");
            fondCpu.style.setProperty("--fondCpu", "#7FD8BE");
            txtResultat.innerHTML = "Défaite";
        }
        else{
            fondJoueur.style.setProperty("--fondJoueur", "#7FD8BE");
            fondCpu.style.setProperty("--fondCpu", "#D16D82");
            txtResultat.innerHTML = "Victoire";
        }
    }
}
