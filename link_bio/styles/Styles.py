from enum import Enum
import reflex as rx
from .Colors import Base_Colors as color
from .Colors import Text_Colors as text_color

MAX_WIDTH_CONTAINER = '38rem'


class Global_Size(Enum):
    ZERO = "0"
    SMALL = '0.5rem'
    MEDIUM = '0.8rem'
    DEFAULT = '1rem'
    BIG = '3rem'


class Icon_Size(Enum):
    SMALL = 10
    MEDIUM = 20
    DEFAULT = 30
    BIG = 40


class Avatar_Size(Enum):
    SMALL = '3'
    MEDIUM = '4'
    DEFAULT = '5'
    BIG = '6'


class Spacing_Size(Enum):
    VERY_SMALL = '2'
    SMALL = '4'
    MEDIUM = '5'
    DEFAULT = '6'
    BIG = '7'


class Heading_Size(Enum):
    ULTRA_SMALL = "1"
    VERY_SMALL = "2"
    SMALL = '3'
    MEDIUM = '4'
    DEFAULT = '5'
    BIG = '6'


class Text_Size(Enum):
    SMALL = '1'
    MEDIUM = '2'
    DEFAULT = '3'
    BIG = '4'


BASE_STYLE = {
    "background-color": color.BACKGROUND.value,
    "font-family": "PressStart2P",
    "font-weight": "normal",
    "cursor": "url('cursor/cursor.png'), default",

    rx.heading: {
        "font-family": "PressStart2P",
        "font-weight": "normal",
    },
    rx.icon: {
        "cursor": "url('cursor/cursorclick.png'), pointer",
    },
    rx.button: {
        'width': '100%',
        'height': '100%',
        'display': 'flex',
        'align_items': 'center',
        'justify-content': 'start',
        'white_space': 'normal',
        'padding': Global_Size.SMALL.value,
        'color': text_color.HEADER.value,
        "background-color": color.CONTENT.value,
        "_hover": {
            "background-color": color.SECONDARY.value,
        },
        "cursor": "url('cursor/cursorclick.png'), pointer",
    },
    rx.link: {
        'text-decoration': 'none',
        "_hover": 'none',
        "cursor": "url('cursor/cursorclick.png'), pointer",
    }
}

heading_style = dict(
    width='100%',
    margin_top=Global_Size.MEDIUM.value,
    color=text_color.HEADER.value
)
button_title_style = dict(
    color=text_color.HEADER.value
)
button_subtitle_style = dict(
    color=text_color.BODY.value
)
