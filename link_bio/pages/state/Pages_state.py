import reflex as rx
from ...api.controller.api_controller import live


class Page_State(rx.State):
    is_live: bool
    live_title: str

    async def live_status(self):
        live_data = await live("david2405s")
        self.is_live = live_data['live']
        self.live_title = live_data['title']
