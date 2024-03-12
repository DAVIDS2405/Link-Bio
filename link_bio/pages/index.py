import reflex as rx
from ..styles import Styles as styles
from ..components.Navbar import navbar
from ..views.Hero import hero
from ..components.Footer import footer
from ..views.Links import link
from ..utils import utils as utils
from ..routes.routes import Route
from .state.Pages_state import Page_State


@rx.page(
    route=Route.INDEX.value,
    title=utils.index_title,
    description=utils.index_description,
    on_load=Page_State.live_status
)
def index() -> rx.Component:
    return rx.box(
        utils.lang(),
        navbar(),
        rx.center(

            rx.vstack(
                hero(live=Page_State.is_live, live_title=Page_State.live_title),
                link(),
                align='center',
                max_width=styles.MAX_WIDTH_CONTAINER,
                width='100%',
                margin_y=styles.Global_Size.BIG.value,
                padding='1rem'
            ),
        ),

        footer(),
        align='center',


    )
