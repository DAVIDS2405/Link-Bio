import reflex as rx
from ..styles import Styles as styles
from ..styles.Colors import Text_Colors as text_color
from ..styles.Colors import Base_Colors as color


def info_text(color_text_span: str, normal_text_span) -> rx.Component:
    return rx.hstack(
        rx.text.span(
            color_text_span,
            color=color.SECONDARY.value,
            size=styles.Text_Size.MEDIUM.value,
        ),
        f' {normal_text_span}',
        font_size='0.75rem',
        width='100%',
        align='center',
        color=text_color.BODY.value
    )
