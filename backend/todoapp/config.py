from typing import List

from pydantic import BaseSettings


class Settings(BaseSettings):
    database_url: str
    origins: List[str]

    class Config:
        env_file = ".env"


settings = Settings()
