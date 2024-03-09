import reflex as rx
from ..styles import Styles as styles


def link_icon(url: str, icon: str) -> rx.Component:
    return rx.link(

        rx.icon(
            tag=icon,
            color='white',
            border='2px solid',
            border_color='white',
            border_radius='100%',
            padding='0.082rem',
            size=35
        ),
        href=url,
        is_external=True
    )
