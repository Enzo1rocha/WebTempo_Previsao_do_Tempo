from django.shortcuts import render
import requests
from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
import datetime

# Functions

def get_week_day(year, month, day):
    data = datetime.date(year, month, day)
    data = data.weekday()
    weekday_name = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo'][data]
    return weekday_name



# Create your views here.
class WeatherLocationView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        city = request.query_params.get('city')
        if not city:
            return Response({'error': 'Cidade não fornecida'}, status=400)
        
        tomorrow_url = f'https://api.tomorrow.io/v4/weather/forecast'
        
        nomination_url = f'https://nominatim.openstreetmap.org/search'
        headers_nomination_url = {
            'User-Agent': 'MeuAppClima/1.0 (email@exemplo.com)'
        }
        params_nomination_url = {
            'q': city,
            'format': 'json'
        }

        
        location_response = requests.get(nomination_url, headers=headers_nomination_url, params=params_nomination_url)

        if location_response.status_code == 200:
            try:

                location_data = location_response.json()

                params_tomorrow_url = {
                    'location': f'{location_data[0]['lat']},{location_data[0]['lon']}',
                    'apikey': 'HvcYXEmeMPd6FPJWEGxhZAcbzGMCgcuo',
                    'timesteps': '1d',
                    'units': 'metric'
                }

                params_tomorrow_url_1h = {
                    'location': f'{location_data[0]['lat']},{location_data[0]['lon']}',
                    'apikey': 'HvcYXEmeMPd6FPJWEGxhZAcbzGMCgcuo',
                    'timesteps': '1h',
                    'units': 'metric'
                }

                tomorrow_response_1d = requests.get(tomorrow_url, params=params_tomorrow_url)
                tomorrow_response_1h = requests.get(tomorrow_url, params=params_tomorrow_url_1h)
                

                if tomorrow_response_1d.status_code == 200 and tomorrow_response_1h.status_code == 200:
                    tomorrow_data_days = tomorrow_response_1d.json()
                    tomorrow_data_current = tomorrow_response_1h.json()

                    days_to_be_shown_by_the_api = [] 
                    index = 0
                    list_of_hours = tomorrow_data_current['timelines']['hourly']
                    list_lenght = len(list_of_hours)

                    for day in tomorrow_data_days['timelines']['daily']:
                        json_of_each_day = {}

                        date = day['time'][:10]
                        date_list = date.split('-')
                        week_Day = get_week_day(int(date_list[0]), int(date_list[1]), int(date_list[2]))

                        json_of_each_day['date'] = day['time'][:10]
                        json_of_each_day['weekday'] = week_Day
                        json_of_each_day['values'] = {
                            'temperatureMax': day['values'].get('temperatureMax',0),
                            'temperatureMin': day['values'].get('temperatureMin',0),

                            'humidityAvg': day['values'].get('humidityAvg',0),

                            'windSpeedMax': (day['values'].get('windSpeedMax',0))*3.6,
                            'windSpeedMin': (day['values'].get('windSpeedMin',0))*3.6,

                            'precipitationProbability': day['values'].get('precipitationProbabilityMax',0),

                            'uvIndexMax': day['values'].get('uvIndexMax',0),

                            'weatherCodeMax': day['values'].get('weatherCodeMax',0),

                            'sunriseTime': (day['values'].get('sunriseTime',0))[-9:-1],
                            'sunsetTime': (day['values'].get('sunsetTime',0))[-9:-1],

                            'pressureSeaLevelMax': day['values'].get('pressureSeaLevelMax',0),
                            'pressureSeaLevelMin': day['values'].get('pressureSeaLevelMin',0),

                            'cloudCoverAvg': day['values'].get('cloudCoverAvg', 0),

                            'visibilityMax': day['values'].get('visibilityMax', 0),
                            'visibilityMin': day['values'].get('visibilityMin', 0),

                            'temperatureApparentMax': day['values'].get('temperatureApparentMax', 0),
                            'temperatureApparentMin': day['values'].get('temperatureApparentMin', 0)
                        }
                        json_of_each_day['hours_of_day'] = []

                        while index < list_lenght and list_of_hours[index]['time'][:10] == date:
                            json_of_each_day['hours_of_day'].append(list_of_hours[index])
                            index+=1

                        days_to_be_shown_by_the_api.append(json_of_each_day)

                    
                # É NECESSÁRIO COLOCAR OS DADOS DE CADA HORA DE CADA DIA... PARA SER RETORNADO...

                #terminar de construir a api... 

                    return_JSON = {
                        'name': location_data[0]['name'],
                        'display_name': location_data[0]['display_name'],
                        'days': days_to_be_shown_by_the_api,
                    }
                    return Response({'message': return_JSON})
                else:
                    return Response({'error': 'Erro ao decodificar json tomorrow data'}, status=tomorrow_response_1d.status_code)
                
            except Exception as error:
                print(f'ESSE ERRO ESTA LIGADO A {error}')
                return Response({'error': 'Erro ao decodificar json',}, status=500)
        else:
            return Response({'error': f'erro na requisição {location_response.status_code}'}, status=location_response.status_code)
        #amanha 28/05 verificar o motivo do erro na linha 32