// Fonction asynchrone qui retourne une promesse
function chargerDonnees(id) {
    return new Promise((resolve, reject) => {
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
  
  // Utilisation avec async/await
  async function chargerTroisProduits() {
    try {
      console.log("Début du chargement");
  
      // Séquentiel
      const donnees1 = await chargerDonnees(123);
      console.log("Données 1:", donnees1);
  
      const donnees2 = await chargerDonnees(456);
      console.log("Données 2:", donnees2);
  
      const donnees3 = await chargerDonnees(789);
      console.log("Données 3:", donnees3);
  
      return [donnees1, donnees2, donnees3];
    } catch (erreur) {
      console.error("Erreur de chargement:", erreur.message);
      throw erreur; // Re-throw ou gérer
    } finally {
      console.log("Opération terminée");
    }
  }
  
  // Parallélisation avec async/await
  async function chargerEnParallele() {
    try {
      // Lancement simultané
      const promesse1 = chargerDonnees(111);
      const promesse2 = chargerDonnees(222);
      const promesse3 = chargerDonnees(333);
  
      // Attente des résultats
      const resultats = await Promise.all([promesse1, promesse2, promesse3]);
  
      console.log("Tous les résultats:", resultats);
      return resultats;
    } catch (erreur) {
      console.error("Erreur:", erreur);
    }
  }
  
  // Exécution
  chargerTroisProduits().then((resultats) => {
    console.log("Résultats finaux:", resultats);
  });
  
  chargerEnParallele();
  