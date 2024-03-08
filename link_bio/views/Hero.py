import reflex as rx
from datetime import datetime


def hero() -> rx.Component:
    return rx.vstack(
        rx.avatar(src='', fallback='David Basantes', radius='full', size='6'),
        class_name='w-full',
        align='center'
    )
