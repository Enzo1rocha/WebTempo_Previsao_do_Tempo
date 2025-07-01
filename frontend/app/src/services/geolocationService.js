function geolocationService() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        resolve({ lat: latitude, long: longitude });
      },
      (error) => {
        console.error('Erro ao pegar a localização', error);
        reject(error);
      }
    );
  });
}

export default geolocationService;
