from ...utils import Constants as constants
from .Twitch_api import TwitchAPI

TWITCH_API = TwitchAPI()


async def repo() -> str:
    return constants.INSTAGRAM_URL


async def live(user: str) -> dict:
    return TWITCH_API.live(user)
