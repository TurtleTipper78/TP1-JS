import { livres } from "./livres.js";
import { BlockLivre } from "./BlockLivre.js";
import { Modal } from "./Modal.js";

//J'ai commencé par mettre les fonctions dans leur propre fichier, puis une chose en a entraîné une autre, et là... oups.
//Pour le prochain TP, les fonctions seront mieux organisées.

    let elShop = document.querySelector(".shop");
    
    //Affichage par default à l'ouverture
    function afficheDefault(){
        for (let i = 0; i < 12; i++) {
            new BlockLivre(elShop, i)
        }
        ajoutPannier();
    };
    afficheDefault()

    // Fonction pour afficher tous avec un petit hack : document.querySelector("table").innerHTML = ""; pour éviter des problèmes.


    function afficheTous(){
        let liTous = document.querySelector('.tous')
            liTous.addEventListener("click", function(){
                elShop.innerHTML = ''
                for (let i = 0; i < livres.length; i++) {
                    new BlockLivre(elShop, i)
                }
                document.querySelector("table").innerHTML= "";
                afficheModal();
                ajoutPannier();
            })
    };
    afficheTous()

    // Fonction "Nouveautés" avec un petit hack : document.querySelector("table").innerHTML = ""; pour éviter des problèmes.

    function afficheNouveautes(){
        let liNouveautes = document.querySelector('.nouveautes')
            liNouveautes.addEventListener("click", function(){
                elShop.innerHTML = ''
                for (let i = 0, l = livres.length; i < l; i++) {
                    if(livres[i].nouveaute == true){
                        new BlockLivre(elShop, i)
                    } 
                    document.querySelector("table").innerHTML= "";
                    afficheModal();
                }
                ajoutPannier();
            }) 
    };
    afficheNouveautes()
        
   // Fonction réutilisée pour tous les autres filtres. Si j'avais écouté pendant les cours sur la hiérarchie, je pense que cette section pourrait être mieux organisée.

    function affiche(){
        let li = document.querySelectorAll('.li');
        
        for(let i = 0; i<li.length;i++){
            li[i].addEventListener("click", function(e){
                elShop.innerHTML = '';
                for(let x = 0, l = livres.length; x < l; x++){
                if (e.target.innerHTML == livres[x].categorie){
                    new BlockLivre(elShop, x);
                }}
                document.querySelector("table").innerHTML= "";
                ajoutPannier();
                afficheModal();
            })
        }
    }
    affiche( )


    // Fonction avec beaucoup d'espace pour optimisation. J'avais originellement une classe PanierAchat qui est devenue inutile avec la croissance de cette fonction gargantuesque.
    // 80% du temps de ce TP a été consacré à cette fonction. Il est tard, et j'ai dû précipiter un peu l'élement prix. Désolé.


    function ajoutPannier(){
        let elBtn = document.querySelectorAll('.ajout');
        let aPannier 
        let totalPrix = 0;
        
        if (!sessionStorage.pannier){
            aPannier = [];
        } else {
            aPannier = JSON.parse(sessionStorage.pannier);
        }
        for(let x=0; x<aPannier.length;x++){
            let dom = `<tr>
                            <td>${aPannier[x].titre}</td>
                            <td>${aPannier[x].prix}</td>
                        </tr>`;
            document.querySelector('table').innerHTML += dom;  
            totalPrix += aPannier[x].prix; 
        }
        
        for(let i = 0; i<elBtn.length;i++){
                elBtn[i].addEventListener("click", function(e){
                    e.stopPropagation() 
                    let indexBtn = elBtn[i].parentNode.id;
                        aPannier.push(livres[indexBtn]);
                        sessionStorage.setItem('pannier', JSON.stringify(aPannier));
                        let dom = `<tr>
                                        <td>${aPannier[aPannier.length-1].titre}</td>
                                        <td>${aPannier[aPannier.length-1].prix}</td>
                                        <td>Total Price: $ ${totalPrix}</td>
                                    </tr>`;
                        document.querySelector('table').innerHTML += dom;

                        
                        
                }        
            ) 
        } 
    }

    //Il manque juste un peu plus de css pour le pannier :/

   // Cozy fonction "modal" pour terminer le tout, grandement inspirée de l'épreuve finale.
   // Un petit peu de difficulté avec le clic sur toute la section livre pour ouvrir la fenêtre modale. Dommage !

    export function afficheModal(){   
    
    let secLivre = document.querySelectorAll('.livre');
    let elDetail = document.querySelector('.detail');
    let elActModal = document.querySelector('[data-js-modal]');

        for(let i = 0; i<secLivre.length;i++){
            secLivre[i].addEventListener("click", function(e){
                elActModal.classList.replace('modal--ferme','modal--ouvert');
                    new Modal(elDetail, i, e.target)
                        let buttonFerme = elDetail.querySelector('.btnFerme')
                        buttonFerme.addEventListener('click', function(){
                            elActModal.classList.replace('modal--ouvert','modal--ferme');
                        })
            })
        }
        
    }
    afficheModal()
    
    
    
    
    




