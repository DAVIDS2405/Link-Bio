from dotenv import load_dotenv
import os
import requests
import time


class TwitchAPI:
    load_dotenv()
    CLIENT_ID = os.environ.get('ID_CLIENT_TWITCH')
    SECRET_ID = os.environ.get('SECRET_CLIENT_TWITCH')

    def __init__(self) -> None:
        self.token = None
        self.token_exp = 0

    def get_token(self):
        response = requests.post(
            'https://id.twitch.tv/oauth2/token',
            data={
                "client_id": self.CLIENT_ID,
                "client_secret": self.SECRET_ID,
                "grant_type": "client_credentials",
            }
        )
        if response.status_code == 200:
            data = response.json()
            self.token = data['access_token']
            self.token_exp = time.time() + data['expires_in']
        else:
            self.token = None
            self.token_exp = 0

    def token_valid(self) -> bool:
        return time.time() < self.token_exp

    def live(self, user: str) -> dict:
        if not self.token_valid():
            self.get_token()

        response = requests.get(
            f"https://api.twitch.tv/helix/streams?user_login={user}",
            headers={
                "Client-Id": self.CLIENT_ID,
                "Authorization": f"Bearer {self.token}"
            }
        )

        if response.status_code == 200 and response.json()['data']:
            data = response.json()['data']

            return {"live": True, "title": data[0]['title']}

        return {"live": False, "title": ""}
