(()=>{
const poster=document.getElementById('rulesPoster');if(!poster)return;
const title=poster.querySelector('.rules-top h2'),grid=poster.querySelector('.rules-grid'),foot=poster.querySelector('.rules-foot');
const tt={title:title.textContent,grid:grid.innerHTML,foot:foot.innerHTML};
const sports={
badminton:{title:'BADMINTON',foot:'Le volant sur la ligne est bon. Le service est diagonal.',parts:[
['LE SERVICE','Servir en diagonale dans le carré opposé.','Au service, si mon score est pair (0, 2, 4…), je sers depuis le carré de droite ; s’il est impair (1, 3, 5…), depuis le carré de gauche.','Au service, frappe le volant par-dessous, avec un mouvement continu vers l’avant. En compétition officielle, le volant doit être frappé sous 1,15 m.'],
['FILET ET LIGNES','Un volant sur la ligne est bon.','Un volant qui touche le filet et passe correctement reste valable, y compris au service.','Un seul service par échange.'],
['FAUTES','Volant dehors, dans le filet ou tombé de son côté.','Toucher le filet pendant le jeu.','Frapper deux fois ou porter le volant.'],
['SIMPLE ET DOUBLE','En simple, les couloirs latéraux sont exclus.','En double, les couloirs latéraux sont inclus.','Au service en double, la limite du fond est la ligne intérieure.'],
['SCORE','Chaque échange gagné vaut un point.','Set de 21 points, avec deux points d’écart.','À 29 partout, le prochain point gagne.'],
['FAIR-PLAY','Annoncer le score avant de servir.','Respecter adversaires et arbitre.','Se saluer après la rencontre.']]},
pickleball:{title:'PICKLEBALL',foot:'Après le service, chaque camp doit laisser rebondir la balle une fois avant de pouvoir jouer de volée. Pas de volée dans la kitchen.',parts:[
['LE SERVICE','Servir derrière la ligne de fond, en diagonale.','La balle doit dépasser la zone de non-volée (« kitchen »).','Service frappé de bas en haut sous la taille ou service après rebond ; un seul essai.'],
['DEUX REBONDS','1er rebond : le receveur doit laisser rebondir le service avant de renvoyer.','2e rebond : le serveur (ou son partenaire) doit laisser rebondir le retour avant de frapper.','Ensuite, les deux camps peuvent frapper après un rebond ou directement de volée, sauf dans la kitchen.'],
['LA KITCHEN','Pas de volée en touchant la zone ou sa ligne.','On peut y entrer pour jouer après le rebond.','L’élan après une volée ne doit pas entraîner le joueur dans la zone.'],
['FAUTES','Balle dehors ou deux rebonds avant le renvoi.','Service dans la kitchen ou sur sa ligne.','Toucher le filet ou jouer une volée depuis la kitchen.'],
['SCORE','En décompte classique, seul le camp au service marque.','On joue généralement en 11 points, avec deux points d’écart.','En double, chaque partenaire sert à son tour, sauf au tout premier service.'],
['FAIR-PLAY','Annoncer le score avant de servir.','Respecter les annonces de ligne.','Préciser la variante de score utilisée en EPS.']]}
};
const racket=(sport)=>{const head=sport==='tennis'?'🏓':sport==='badminton'?'🏸':'🎾';return head};
const sel=document.createElement('select');sel.id='rulesSport';sel.setAttribute('aria-label','Choisir un sport');[['tennis','🏓 Tennis de table'],['badminton','🏸 Badminton'],['pickleball','🎾 Pickleball']].forEach(([v,n])=>{const o=document.createElement('option');o.value=v;o.textContent=n;sel.append(o)});
poster.querySelector('.rules-controls').prepend(sel);
const css=document.createElement('style');css.textContent='#rulesSport{width:auto;min-width:175px;padding:10px;background:white;color:#173c35;font-weight:700}#rulesPoster .rules-controls{flex-wrap:wrap}';document.head.append(css);
sel.onchange=()=>{if(sel.value==='tennis'){title.textContent=tt.title;grid.innerHTML=tt.grid;foot.innerHTML=tt.foot;return}
const d=sports[sel.value];title.textContent=racket(sel.value)+' '+d.title+' — RÈGLES ESSENTIELLES';foot.textContent=d.foot;grid.innerHTML=d.parts.map((p,i)=>'<section class="rules-panel"><h3>'+String(i+1).padStart(2,'0')+' · '+p[0]+'</h3><ul>'+p.slice(1).map(x=>'<li>'+x+'</li>').join('')+'</ul></section>').join('')};
})();