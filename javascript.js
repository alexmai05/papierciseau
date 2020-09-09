const jouer = document.querySelector(".jouer");

jouer.addEventListener("click", () => {
    document.querySelector(".boxFormulaire").classList.add("none");
    document.querySelector(".fondFormulaire").classList.add("none");
    document.querySelector(".formulaire").classList.add("none");
})

class Game{
    constructor() {

        this.afficherNomJoueur();

        this.listArmes = [
            ["✊", "✋", "✌️"]
            ["✊🏻", "✋🏻", "✌🏻"]
            ["✊🏽", "✋🏽", "✌🏽"]
            ["✊🏿", "✋🏿", "✌🏿"]
        ];

        this.afficherChoixJoueur();
      }

      afficherNomJoueur(){
        const nomFormulaire = document.querySelector("nomTexte").value;
        const nomEnJeu = document.querySelector("nomJoueur");
        nomEnJeu.innerHTML = nomFormulaire;
      }

      afficherChoixJoueur(){
          const choixPeauList = document.querySelector("[name = choixPeau]:checked").value;

          const choixArmeList = document.querySelector("[name = armes]");
          const choixArme = choixArmeList.value;

          const couleurPeauJoueur = this.listArmes[choixPeauList];
          const armeJoueur = couleurPeauJoueur[choixArme];

          const resultatJoueur = document.querySelector(".emojiJoueur");
          resultatJoueur.innerHTML = armeJoueur;
       
      }
}

