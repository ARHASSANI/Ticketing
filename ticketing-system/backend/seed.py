"""
Database Seeding Script
"""

from database import SessionLocal, engine, Base
from models.role import Role
from models.user import User

def seed_database():
    # Create all tables
    Base.metadata.create_all(bind=engine)
    
    db = SessionLocal()
    
    # Seed roles
    roles = [
        Role(name="Admin", description="Administrator role"),
        Role(name="Support", description="Support staff role"),
        Role(name="User", description="Regular user role"),
    ]
    
    for role in roles:
        db_role = db.query(Role).filter(Role.name == role.name).first()
        if not db_role:
            db.add(role)
    
    db.commit()
    db.close()
    
    print("Database seeded successfully!")

if __name__ == "__main__":
    seed_database()
