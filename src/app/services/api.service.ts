export class ApiService{
citations: any = [
      
    {
      excuse: "T'as essayé depuis un autre PC ?",
      id: 1,
      

    },

    {
      excuse: "Vous devez avoir une mauvaise version.",
      id: 2,
     
    },

    {
      excuse: "Oui mais le client il sait.",
      id: 3,
     

    },

    {
      excuse: "Renvoies moi un mail quand le bug se produira.",
      id: 4,
    

    },

    {
      excuse: "Avez-vous essayé de plonger votre ordinateur dans l'eau ?",
      id: 5,
     
    },

    {
      excuse: "Office 365 n'est pas disponible le 29 févriert",
      id: 6,
     

    },

    {
      excuse: "Je n'ai trouvé aucune librairie qui puisse faire cela.",
      id: 7,
      

    },

    {
      excuse: "Renvoies moi un mail quand le bug se produira.",
      id: 8
    },

    {
      excuse: "Je ne comprends pas, je ping bien pourtant !",
      id:9
    },

    {
      excuse:"Je n'ai pas touché à ce module depuis des semaines !",
      id:10
    }
  ];

getCitations(){
    return this.citations
}
}