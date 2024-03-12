import reflex as rx
import datetime
from ..styles import Styles as styles
from ..styles.Colors import Text_Colors as text_color
from ..styles.Colors import Base_Colors as color


def footer() -> rx.Component:
    return (
        rx.vstack(

            rx.text(
                f"© {datetime.datetime.now().year} David. Casi todos los derechos reservados",
                size=styles.Text_Size.SMALL.value
            ),
            rx.text(
                'Building Software with ❤️ from Ecuador for the world.',
                size=styles.Text_Size.SMALL.value,
            ),
            rx.image(),
            background=color.CONTENT.value,
            align='center',
            text_align='center',
            justify='center',
            padding=styles.Global_Size.DEFAULT.value,
            spacing=styles.Global_Size.ZERO.value,
            color=text_color.BODY.value,

        )
    )
