// Création d'une promesse
function chargerDonnees(id) {
    return new Promise((resolve, reject) => {
      console.log("Chargement des données...");
  
      // Simulation d'opération asynchrone
      setTimeout(() => {
        if (id <= 0) {
          reject(new Error("ID invalide"));
        } else {
          const data = { id, nom: "Produit " + id };
          resolve(data);
        }
      }, 1000);
    });
  }
  
  // Utilisation avec chaînage
  chargerDonnees(123)
    .then((donnees) => {
      console.log("Données reçues:", donnees);
      return chargerDonnees(456);
    })
    .then((donnees2) => {
      console.log("Données 2:", donnees2);
      return chargerDonnees(789);
    })
    .then((donnees3) => {
      console.log("Données 3:", donnees3);
    })
    .catch((erreur) => {
      console.error("Une erreur est survenue:", erreur.message);
    })
    .finally(() => {
      console.log("Opération terminée (succès ou échec)");
    });
  
  // Combinaison de promesses
  const promesse1 = chargerDonnees(111);
  const promesse2 = chargerDonnees(222);
  const promesse3 = chargerDonnees(333);
  
  // Attend toutes les promesses
  Promise.all([promesse1, promesse2, promesse3])
    .then((resultats) => {
      console.log("Tous les résultats:", resultats);
    })
    .catch((erreur) => {
      console.error("Une des promesses a échoué:", erreur);
    });
  
  // Première promesse terminée
  Promise.race([promesse1, promesse2, promesse3]).then((premierResultat) => {
    console.log("Premier résultat:", premierResultat);
  });
  