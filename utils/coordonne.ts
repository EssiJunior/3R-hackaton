interface Coordinates {
    latitude: number;
    longitude: number;
  }
  
  export function getUserCoordinates(): Promise<Coordinates> {
    return new Promise((resolve, reject) => {
      if (!navigator.geolocation) {
        reject(new Error("La géolocalisation n'est pas supportée par ce navigateur."));
      } else {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const coordinates: Coordinates = {
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
            };
            resolve(coordinates);
          },
          (error) => {
            reject(new Error(`Erreur lors de la récupération des coordonnées : ${error.message}`));
          }
        );
      }
    });
  }
  
  // Exemple d'utilisation
  getUserCoordinates()
    .then((coords) => {
      console.log(`Latitude: ${coords.latitude}, Longitude: ${coords.longitude}`);
    })
    .catch((error) => {
      console.error(error.message);
    });
  