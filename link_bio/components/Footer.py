import reflex as rx


def footer() -> rx.Component:
    return (
        rx.flex(
            rx.text("2024 David Basantes", class_name='text-white'),
            rx.image(),
            class_name='bg-black',
            align='center',
            justify='center'

        )
    )
