import reflex as rx
from ..styles import Styles as styles
from ..styles.Colors import Text_Colors as text_color
from ..styles.Colors import Base_Colors as color


def navbar() -> rx.Component:
    return rx.hstack(
        rx.link(
            rx.text(
                'David',
            ),
            href='https://david-dev.dev/',
            is_external=True,
            color='white'
        ),

        padding=styles.Global_Size.DEFAULT.value,
        position='sticky',
        justify='start',
        top='0',
        z_index='9999',
        background=color.CONTENT.value,
        color=text_color.HEADER.value

    )
