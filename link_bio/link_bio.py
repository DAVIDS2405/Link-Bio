import reflex as rx
import link_bio.styles.Styles as styles
from fastapi.responses import RedirectResponse
from .pages.index import index
app = rx.App(style=styles.BASE_STYLE, stylesheets=['fonts/font.css'])

app.add_page(index, route="/")
