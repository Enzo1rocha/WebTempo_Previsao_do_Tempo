import requests
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from django.utils.decorators import method_decorator
from django_ratelimit.decorators import ratelimit
from decouple import config
import datetime

# Functions

def get_week_day(year, month, day):
    data = datetime.date(year, month, day)
    data = data.weekday()
    weekday_name = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo'][data]
    return weekday_name


def get_machine_hour(UTC_ISO_8601):
    from datetime import datetime
    from zoneinfo import ZoneInfo
    hour_utc_obj = datetime.fromisoformat(UTC_ISO_8601.replace('Z', "+00:00"))
    return f'{hour_utc_obj.astimezone()}'


def format_iso(dt):
    return dt.strftime()



# Create your views here.


"""
class TestView(APIView):
    @method_decorator(ratelimit(key='user', rate='5/m', method='GET', block=False))
    def get(self, request):
        if getattr(request, 'limited', False):
            return Response({"message": 'API FUNCIONANDO, VOCE ESTÁ SENDO LIMITADO!'}, status=429)
        return Response({"message": "API ESTÁ FUNCIONANDO!"})
"""

class WeatherLocationView(APIView):
    permission_classes = [IsAuthenticated]

    @method_decorator(ratelimit(key='user', rate='10/m', method='GET', block=True))
    def get(self, request):
        query_params = {
            'name': request.query_params.get('name'),
            'country': request.query_params.get('country'),
            'state': request.query_params.get('state'),
            'lon': request.query_params.get('lon'),
            'lat': request.query_params.get('lat'),
        }
        parametros_faltando = []
        for key, value in query_params.items():
            if not value:
                parametros_faltando.append(key)
            if len(parametros_faltando) != 0:
                return Response({'error': f'Parâmetro {parametros_faltando} é obrigatório'}, status=400)
        
        tomorrow_url = f'https://api.tomorrow.io/v4/weather/forecast'
        tomorrow_current_url = f'https://api.tomorrow.io/v4/weather/realtime'

        try:
            
            params_tomorrow_current = {
                'location': f'{query_params["lat"]},{query_params["lon"]}',
                'apikey': config('TOMORROW_API_KEY'),
                'units': 'metric'
            }
            params_tomorrow_url = {
                'location': f'{query_params['lat']},{query_params['lon']}',
                'apikey': config('TOMORROW_API_KEY'),
                'timesteps': '1d',
                'units': 'metric'
            }
            params_tomorrow_url_1h = {
                'location': f'{query_params['lat']},{query_params['lon']}',
                'apikey': config('TOMORROW_API_KEY'),
                'timesteps': '1h',
                'units': 'metric'
            }

            tomorrow_response_current = requests.get(tomorrow_current_url, params=params_tomorrow_current)
            tomorrow_response_1d = requests.get(tomorrow_url, params=params_tomorrow_url)
            tomorrow_response_1h = requests.get(tomorrow_url, params=params_tomorrow_url_1h)
            

            if tomorrow_response_1d.status_code == 200 and tomorrow_response_1h.status_code == 200 and tomorrow_response_current.status_code == 200:
                tomorrow_data_days = tomorrow_response_1d.json()
                tomorrow_data_hours = tomorrow_response_1h.json()
                tomorrow_data_current = tomorrow_response_current.json()['data']
                
                
                previsao_atual = {
                    "time": tomorrow_data_current['time'][-9:-1],
                    "values": {
                        'temperature': tomorrow_data_current['values'].get('temperature', 0),
                        'temperatureApparent': tomorrow_data_current['values'].get('temperatureApparent', 0),
                        'humidity': tomorrow_data_current['values'].get('humidity', 0),
                        'visibility': tomorrow_data_current['values'].get('visibility', 0),
                        'uvIndex': tomorrow_data_current['values'].get('uvIndex', 0),
                        'dewPoint': tomorrow_data_current['values'].get('dewPoint', 0),
                        'precipitationProbability': tomorrow_data_current['values'].get('precipitationProbability', 0),
                        'rainIntensity': tomorrow_data_current['values'].get('rainIntensity', 0),
                        'cloudCover': tomorrow_data_current['values'].get('cloudCover', 0),
                        'pressureSeaLevel': tomorrow_data_current['values'].get('pressureSeaLevel', 0),
                        'windSpeed': tomorrow_data_current['values'].get('windSpeed', 0)*3.6,
                        'windDirection': tomorrow_data_current['values'].get('windDirection', 0),          
                    }
                }

                days_to_be_shown_by_the_api = [] 
        
                index = 0
                list_of_hours = tomorrow_data_hours['timelines']['hourly']
                list_lenght = len(list_of_hours)
                
                
                
                

                for day in tomorrow_data_days['timelines']['daily']:
                    json_of_each_day = {}

                    date = day['time'][:10]
                    print(date)
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

                        'sunriseTime': (get_machine_hour(day['values'].get('sunriseTime', 0)))[-14:-6],
                        'sunsetTime': (get_machine_hour(day['values'].get('sunsetTime', 0)))[-14:-6],

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
                        time = {}
                        time_data = {
                            'temperature': list_of_hours[index]['values'].get('temperature',0),
                            'temperatureApparent': list_of_hours[index]['values'].get('temperatureApparent', 0),
                            'humidity': list_of_hours[index]['values'].get('humidity', 0),
                            'visibility': list_of_hours[index]['values'].get('visibility', 0),
                            'uvIndex': list_of_hours[index]['values'].get('uvIndex', 0),
                            'dewPoint': list_of_hours[index]['values'].get('dewPoint', 0),
                            'precipitationProbability': list_of_hours[index]['values'].get('precipitationProbability'),
                            'cloudCover': list_of_hours[index]['values'].get('cloudCover', 0),
                            'rainAccumulation': list_of_hours[index]['values'].get('rainAccumulation', 0),
                            'pressureSeaLevel': list_of_hours[index]['values'].get('pressureSeaLevel', 0),
                            'windSpeed': list_of_hours[index]['values'].get('windSpeed', 0)*3.6,
                            'windDirection': list_of_hours[index]['values'].get('windDirection', 0),
                            'weatherCode': list_of_hours[index]['values'].get('weatherCode', 0) 
                        }

                        time[(list_of_hours[index]['time'])[-9:-1]] = time_data

                        json_of_each_day['hours_of_day'].append(time)
                        index+=1

                    days_to_be_shown_by_the_api.append(json_of_each_day)

                return_JSON = {
                    'location_name': query_params['name'],
                    'country': query_params['country'],
                    'state': query_params['state'],
                    'current': previsao_atual,
                    'days': days_to_be_shown_by_the_api,
                }
                return Response({'message': return_JSON}, status=200)
            else:
                return Response({'error': f'As responses retornaram um valor diferente de 200 ok \ntomorrow_response_1d: {tomorrow_response_1d.status_code}\ntomorrow_response_1h: {tomorrow_response_1h.status_code}'}, status=500)
            
        except Exception as error:
            print(f'ESSE ERRO ESTA LIGADO A {error}')
            return Response({'error': f'{error}',}, status=500)