function genererTexteAleatoire(longueur) {
    let message = ["Aimer quelqu'un pour une raison ne pas vraiment de l'amour","parce que quand cette raison cessera d'exister on suppose aussi que l'amour cessera également d'exister","mais je crois qu'on parvient à aimer une personne pour une certaine harmonie qu'on ressent lorsqu'on se rapproche d'elle","la paix qu'on ressent quand on la parle quand on la touche l'accélération de la respiration quand elle se rapproche un peu trop de nous","on aime pour cette folie cette complicité qui règne entre deux personnes","on aime quand on parvient à trouver ce que l'on cherche chez l'autre ","l'estime l'attention la grandeur d'ame de l'imagination la tendresse la sagesse et l'intelligence qui nous complète","et tout ça je le trouve chez toi"];
  
   const index = Math.floor(Math.random() * message.length);
  const mess = message[index];
  console.log(message[index]);
      
  };
  genererTexteAleatoire();