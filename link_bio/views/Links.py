import reflex as rx
from ..components.Link_button import link_button
from ..components.Heading import heading_title
import link_bio.utils.Constants as Constants


def link() -> rx.Component:
    return rx.vstack(
        heading_title('Comunidad'),
        link_button(
            'Twitch',
            'Directos sobre programación',
            Constants.TWITCH_URL,
            'twitch'
        ),
        link_button(
            'YouTube',
            'Tutoriales semanales',
            Constants.YOUTUBE_URL,
            'youtube'
        ),

        link_button(
            'Tiktok',
            'Cortos sobre informática',
            Constants.TIKTOK_URL,
            'music-2'
        ),
        heading_title('Contacto'),
        link_button(
            'Email',
            'Correo electrónico principal',
            Constants.EMAIL_URL,
            'mail'
        ),
        link_button(
            'Instagram',
            'Cuenta oficial',
            Constants.INSTAGRAM_URL,
            'instagram'
        ),

        link_button(
            'LinkedIn',
            'Perfil de LinkedIn',
            Constants.LINKEDIN_URL,
            'linkedin'
        ),
        width='100%',
        spacing='4'
    )
