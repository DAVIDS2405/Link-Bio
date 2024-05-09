import reflex as rx


class Page_State(rx.State):
    is_live: bool
    live_title: str

    async def live_status(self):
        self.is_live = False
        self.live_title = ""
