"""
Role Schemas
"""

from pydantic import BaseModel
from datetime import datetime

class RoleBase(BaseModel):
    name: str
    description: str

class RoleCreate(RoleBase):
    pass

class Role(RoleBase):
    id: int
    created_at: datetime
    
    class Config:
        from_attributes = True
