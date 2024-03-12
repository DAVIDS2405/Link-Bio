from fastapi import APIRouter
from ..controller.api_controller import repo, live
router = APIRouter()


@router.get('/twitch')
async def test_api():
    response = await repo()
    return response


@router.get('/live')
async def test_api(user: str):
    response = await live(user)
    return response
