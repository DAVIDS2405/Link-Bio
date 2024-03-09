import reflex as rx
from ..styles import Styles as styles


def link_button(button_title: str, button_subtitle: str, link: str, icon: str) -> rx.Component:

    return rx.link(
        rx.button(
            rx.hstack(

                rx.icon(
                    tag=icon,
                    size=styles.Icon_Size.DEFAULT.value),
                rx.vstack(
                    rx.text(
                        button_title,
                        size=styles.Text_Size.MEDIUM.value,
                        style=styles.button_title_style
                    ),
                    rx.text(
                        button_subtitle,
                        size=styles.Text_Size.SMALL.value,

                        style=styles.button_subtitle_style
                    ),
                    spacing=styles.Spacing_Size.VERY_SMALL.value
                ),
                align='center',
                spacing='4'
            ),
            radius='large',
            padding=styles.Global_Size.DEFAULT.value
        ),
        href=link,
        is_external=True,
        width='100%'
    )
