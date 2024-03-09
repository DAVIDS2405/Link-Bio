import reflex as rx
from .pages.index import index
import link_bio.styles.Styles as styles

app = rx.App(style=styles.BASE_STYLE, stylesheets=['fonts/font.css'])
app.add_page(
    index,
    title='David Basantes - Desarrollador y Programador Web',
    description='Desarrollador Web y Creador de Contenido. Especializado en crear aplicaciones únicas.'
)
