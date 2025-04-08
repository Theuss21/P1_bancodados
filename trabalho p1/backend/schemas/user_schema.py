from pydantic import BaseModel

class UserBase(BaseModel):
    nome: str
    email: str

class UserCreate(UserBase):
    pass

class UserOut(UserBase):
    id: int

    class Config:
        orm_mode = True
