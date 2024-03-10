import reflex as rx

config = rx.Config(
    app_name="link_bio",
    cors_allowed_origins=[
        'linkbio.david-dev.dev',
        'localhost:3000'
    ]
)
