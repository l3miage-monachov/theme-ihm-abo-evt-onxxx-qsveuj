// Import stylesheets
import './style.css';

// Fonctions utilitaires
function log(...L: any[]): void {
  console.log(...L);
  const li = document.createElement("li");
  li.textContent = L.join(" ; ");
  ul.appendChild(li);
}

// Référence au paragraphe, au boutton et à la liste
const p     = document.querySelector("p")      as HTMLParagraphElement;
const bt    = document.querySelector("button") as HTMLButtonElement;
const ul    = document.querySelector("ul")     as HTMLUListElement;
const input = document.querySelector("input")  as HTMLInputElement;

// Abonnement au boutton
bt.onclick = () => ul.textContent = '';

// Abonnement à des événements via les attributs onXXX
p.onclick      = (evt: MouseEvent) => log("click", evt.pageX, evt.pageY);
p.onmousedown  = (evt: MouseEvent) => log("mousedown", evt.pageX, evt.pageY);
p.onmouseup    = (evt: MouseEvent) => log("mouseup", evt.pageX, evt.pageY);
p.onmouseenter = (evt: MouseEvent) => log("mouseenter", evt.pageX, evt.pageY);
p.onmouseleave = (evt: MouseEvent) => log("mouseleave", evt.pageX, evt.pageY);

/*
 * A titre d'exemple, essayez de vous abonner aux changement de valeurs 
 * de la balise input de type range (attribut onchange) 
 * pour afficher ces valeurs (attribut value de la balise input) 
 * via la fonction log.
 */
input.onchange = () => log("value", input.value);