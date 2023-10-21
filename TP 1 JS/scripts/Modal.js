import { livres } from "./livres.js";

export class Modal {
    constructor(el, i, elPrecis) {
        this._el = el;
        this.i = i;
        this.elPrecis = elPrecis;
        this.index = this.elPrecis.parentNode.id
        this.init();
    }

    init() {

        const livre = livres[this.index]; 

        const dom = 
            `<ul>
            <li><img src="${livre.image}" alt="${livre.titre}"></li>
            <li>${livre.titre}</li>
            <li>${livre.auteur}</li>
            <li><p>${livre.description}</p></li>
            <li>${livre.prix}</li>
            <li>${livre.editeur}</li>
            <li>${livre.pages}</li>
            <li>${livre.nouveaute}</li>
            <li>${livre.categorie}</li>
            <button class="btnFerme">Ferme</button>
            </ul>`;
        this._el.innerHTML = dom;
    }
}

