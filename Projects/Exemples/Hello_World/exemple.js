// Fonction avec callback
function chargerDonnees(id, callback) {
    console.log("Chargement des données...");
  
    // Simulation d'opération asynchrone
    setTimeout(() => {
      if (id <= 0) {
        callback(new Error("ID invalide"));
      } else {
        const data = { id, nom: "Produit " + id };
        callback(null, data);
      }
    }, 1000);
  }
  
  // Utilisation
  chargerDonnees(123, (erreur, donnees) => {
    if (erreur) {
      console.error("Erreur:", erreur.message);
      return;
    }
  
    console.log("Données reçues:", donnees);
  
    // Callback hell...
    chargerDonnees(456, (erreur2, donnees2) => {
      if (erreur2) {
        console.error("Erreur:", erreur2.message);
        return;
      }
  
      console.log("Données 2:", donnees2);
  
      
      chargerDonnees(789, (erreur3, donnees3) => {
        if (erreur3) {
          console.error("Erreur:", erreur3.message);
          return;
        }
    
        console.log("Données 3:", donnees3);

        chargerDonnees(101112, (erreur4, donnees4) => {
            if (erreur4) {
              console.error("Erreur:", erreur4.message);
              return;
            }
        
            console.log("Données 4:", donnees4);

            chargerDonnees(131415, (erreur5, donnees5) => {
                if (erreur5) {
                  console.error("Erreur:", erreur5.message);
                  return;
                }
            
                console.log("Données 5:", donnees5);

                chargerDonnees(161718, (erreur6, donnees6) => {
                    if (erreur6) {
                      console.error("Erreur:", erreur6.message);
                      return;
                    }
                
                    console.log("Données 6:", donnees6);

                    chargerDonnees(192021, (erreur7, donnees7) => {
                        if (erreur7) {
                            console.error("Erreur:", erreur6.message);
                            return;
                          }
                      
                          console.log("Données 7:", donnees7);
                    });
     
                });
              });
        });
        
      });
    });
  });
  