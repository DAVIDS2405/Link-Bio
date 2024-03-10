import reflex as rx

index_title = 'David Basantes - Desarrollador y Programador Web'
index_description = 'Desarrollador Web y Creador de Contenido. Especializado en crear aplicaciones únicas.'


def lang() -> rx.Component:
    return rx.script('document.documentElement.lang === "es"')
