import reflex as rx
from ..components.Navbar import navbar
from ..views.Hero import hero
from ..components.Footer import footer


def index() -> rx.Component:
    return rx.box(
        navbar(),
        rx.vstack(
            hero()
        ),
        footer()

    )
