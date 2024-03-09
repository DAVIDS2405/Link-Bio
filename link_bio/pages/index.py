import reflex as rx
from ..styles import Styles as styles
from ..components.Navbar import navbar
from ..views.Hero import hero
from ..components.Footer import footer
from ..views.Links import link


def index() -> rx.Component:
    return rx.box(
        navbar(),
        rx.center(
            rx.vstack(
                hero(),
                link(),
                align='center',
                max_width=styles.MAX_WIDTH_CONTAINER,
                width='100%',
                margin_y=styles.Global_Size.BIG.value,
                padding='1rem'
            ),
        ),

        footer(),
        align='center',


    )
