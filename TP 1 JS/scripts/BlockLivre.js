import { livres } from "./livres.js";
import { afficheModal } from "./main.js"

//Inject le block avec les infos des livre dynamiquement dans l'article detail

export class BlockLivre {
    constructor(el, i) {
        this._el = el;
        this.i = i;

        this.init();
    }
    
    init() {
            const livre = livres[this.i]; 
            const dom = `
                <div class="livre" id="${this.i}" data-js-livre">
                    <img src="${livre.image}" alt="${livre.titre}">
                    <h1>${livre.titre}</h1>
                    <p>${livre.prix}$</p>
                    <button class="ajout" type="button">Ajouter</button> 
                </div>`;
            this._el.innerHTML += dom;
        
    }
    
    

    
};






