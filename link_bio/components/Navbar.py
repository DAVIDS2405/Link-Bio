import reflex as rx


def navbar() -> rx.Component:
    return rx.hstack(
        rx.text('David', class_name='text-white'),
        class_name='bg-black p-4'
    )
