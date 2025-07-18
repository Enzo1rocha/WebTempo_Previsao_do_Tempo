import api from "./api";

const LocationsPageService = {
    async getBootLocation() {
        try {
            const response = await api.get('boot_location/', {
                withCredentials: true,
            })
            if (response.status === 200) {
                return response.data;
            }
            throw new Error('Failed to fetch boot location'); 
        } catch (error) {
            console.log('Erro ao obter localização inicial', error);
            throw error;
        }
    },

    async getFavoriteLocations() {
        try {
            const response = await api.get('favorite_locations/', {
                withCredentials: true
            })
            if (response.status === 200) {
                return response.data;
            }
        } catch (error) {
            console.log('Erro ao obter locais favoritos', error);
            throw error;
        }
    },

    async addFavoriteLocations(LocationData) {
        try {
            const ressponse = await api.post('favorite_locations/', LocationData, {
                withCredentials: true
            });
            if (ressponse.status === 201) {
                return ressponse.data;
            }
            throw new Error('Failed to add favorite location');
        } catch (error) {
            console.log('Erro ao adicionar local favorito', error);
            throw error;
        }
    },

    async addNewBootLocation(LocationData) {
        try {
            const response = await api.post('boot_location/', LocationData, {
                withCredentials: true,
            })
            if (response.status == 201) {
                return response.data
            }
            throw new Error('Failed to add new boot location');
        } catch (error) {
            console.log('Erro ao adicionar uma nova localização inicial', error);
            throw error;
        }
    },

    async removeFavoriteLocation(locationID) {
        try {
            const response = await api.delete('favorite_locations/', {
                data: { id: locationID },
                withCredentials: true
            })
            
            if (response.status === 204) {
                return true; // Successfully removed
            }
            throw new Error('Failed to remove favorite location');
        } catch (error) {
            console.log('Erro ao remover local favorito', error);
            throw error;
        }   
    },

    async getForecast(params) {
        try {
            const response = await api.get(`search-city/`, {
                params: {
                    name: params.location_name,
                    country: params.country,
                    state: params.state,
                    lon: params.lon,
                    lat: params.lat
                },

                withCredentials: true
            })
            if (response.status == 200) {
                return response.data
            }
            throw new Error('falha ao pegar a previsão do tempo')
        } catch (error) {
            console.log('Erro ao pegar a previsão do tempo');
            throw error
        }
    }
}

export default LocationsPageService;