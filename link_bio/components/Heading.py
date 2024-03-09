import reflex as rx
from ..styles import Styles as styles


def heading_title(text: str) -> rx.Component:
    return rx.heading(
        text,
        size=styles.Heading_Size.MEDIUM.value,
        style=styles.heading_style,
        margin_top=styles.Global_Size.BIG.value
    )
