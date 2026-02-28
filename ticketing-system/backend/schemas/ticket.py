"""
Ticket Schemas
"""

from pydantic import BaseModel
from datetime import datetime
from typing import Optional
from enum import Enum

class TicketStatusEnum(str, Enum):
    OPEN = "open"
    IN_PROGRESS = "in_progress"
    RESOLVED = "resolved"
    CLOSED = "closed"

class TicketPriorityEnum(str, Enum):
    LOW = "low"
    MEDIUM = "medium"
    HIGH = "high"
    CRITICAL = "critical"

class TicketBase(BaseModel):
    title: str
    description: str
    priority: TicketPriorityEnum = TicketPriorityEnum.MEDIUM

class TicketCreate(TicketBase):
    pass

class TicketUpdate(BaseModel):
    title: Optional[str] = None
    description: Optional[str] = None
    status: Optional[TicketStatusEnum] = None
    priority: Optional[TicketPriorityEnum] = None
    assigned_to_id: Optional[int] = None

class Ticket(TicketBase):
    id: int
    status: TicketStatusEnum
    creator_id: int
    assigned_to_id: Optional[int] = None
    created_at: datetime
    updated_at: datetime
    
    class Config:
        from_attributes = True
