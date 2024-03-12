import reflex as rx
from ..styles import Styles as styles
from ..components.Link_icon import link_icon
from ..components.Info_text import info_text
from ..styles.Colors import Text_Colors as text_color
from ..utils import Constants as constants
from ..components.Link_button import link_button


def hero(live=False, live_title='') -> rx.Component:
    return rx.vstack(
        rx.hstack(
            rx.box(
                rx.cond(
                    live,
                    rx.link(
                        rx.icon(
                            'twitch',
                            color='white',
                            size=20,

                        ),
                        href=constants.TWITCH_URL,
                        border_radius='50%',
                        background='#9146FF',
                        position='absolute',
                        padding='0.3rem',
                        bottom="0",
                        right="0"
                    ),
                ),
                rx.avatar(
                    src='https://avatars.githubusercontent.com/u/85196670?v=4',
                    fallback='David Basantes',
                    radius='full',
                    size=styles.Avatar_Size.BIG.value,
                    width='auto',


                ),
                position="relative",
            ),
            rx.vstack(
                rx.heading(
                    'David Basantes',
                    size=styles.Heading_Size.SMALL.value,
                    color=text_color.HEADER.value,
                ),
                rx.text(
                    '@david2405',
                    size=styles.Heading_Size.VERY_SMALL.value,
                    color=text_color.BODY.value
                ),
                rx.hstack(
                    link_icon('https://github.com/DAVIDS2405', 'github'),
                ),
                align='start'

            ),
            spacing=styles.Spacing_Size.DEFAULT.value,
            align='center'

        ),
        rx.flex(
            info_text('1', 'año de experiencia'),
            rx.spacer(),
            info_text('1', 'año en creación de contenido'),
            rx.spacer(),
            width='100%',
        ),
        rx.cond(live,
                link_button(
                    "En directo",
                    live_title,
                    "",
                    "twitch",
                )
                ),
        rx.text("""Soy desarrollador de software desde hace 1 año.
                Actualmente trabajo como Jr full-stack developer.
                Además creo contenido formativo sobre programación y tecnología en redes.
                Aquí podrás encontrar todas mis redes. ¡Bienvenidos!""",
                text_wrap='pretty',
                color=text_color.BODY.value,
                size=styles.Heading_Size.ULTRA_SMALL.value,
                ),
        align='start',
        justify='center',
        spacing=styles.Spacing_Size.BIG.value


    )
