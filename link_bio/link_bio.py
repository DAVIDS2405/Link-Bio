import reflex as rx
import link_bio.styles.Styles as styles
from fastapi.responses import RedirectResponse
from .pages.index import index
from .api.router import api_router
app = rx.App(style=styles.BASE_STYLE, stylesheets=['fonts/font.css'])

app.api.include_router(api_router.router)
app.add_page(index, route="/")


# @app.api.get("/", include_in_schema=False)
# async def redirect_doc():
#     return RedirectResponse("/docs")
