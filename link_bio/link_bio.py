import reflex as rx
from .pages.index import index


app = rx.App()
app.add_page(
    index,
    title='David Basantes - Desarrollador y Programador Web',
)
