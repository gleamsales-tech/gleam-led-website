from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict, EmailStr
from typing import List, Optional
import uuid
from datetime import datetime, timezone

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")

# Define Models
class ContactInquiry(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    company_name: str
    email: EmailStr
    phone: Optional[str] = None
    requirement: Optional[str] = None
    product_interest: Optional[str] = None
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class ContactInquiryCreate(BaseModel):
    company_name: str
    email: EmailStr
    phone: Optional[str] = None
    requirement: Optional[str] = None
    product_interest: Optional[str] = None

# Product Data
PRODUCTS = {
    "transparent": {
        "id": "transparent",
        "name": "Transparent LED Displays",
        "description": "See-through displays for glass facades and storefronts",
        "image": "https://images.unsplash.com/photo-1677930075348-5933c68cd46d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1ODR8MHwxfHNlYXJjaHwzfHx0cmFuc3BhcmVudCUyMGxlZCUyMHNjcmVlbiUyMGdsYXNzJTIwZmFjYWRlfGVufDB8fHx8MTc3MzM3NjgwM3ww&ixlib=rb-4.1.0&q=85",
        "series": [
            {
                "id": "lucid",
                "name": "LUCID Series",
                "tagline": "The perfect solution for glass wall LED screen",
                "description": "Premium indoor solution designed to transform standard windows into high-impact digital displays without sacrificing natural light.",
                "image": "https://images.unsplash.com/photo-1704392354269-42ad41f15398?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1ODR8MHwxfHNlYXJjaHwxfHx0cmFuc3BhcmVudCUyMGxlZCUyMHNjcmVlbiUyMGdsYXNzJTIwZmFjYWRlfGVufDB8fHx8MTc3MzM3NjgwM3ww&ixlib=rb-4.1.0&q=85",
                "features": ["High Transparency", "Light Weight", "Fast Installation", "Easy Maintenance", "Cost Effective"],
                "specs": {
                    "models": ["L3", "L3-Pro"],
                    "data": [
                        {"feature": "Pixel Pitch", "L3": "3.91/7.8mm", "L3-Pro": "3.91/7.8mm"},
                        {"feature": "Pixel Density/㎡", "L3": "32,768", "L3-Pro": "32,768"},
                        {"feature": "LED Configuration", "L3": "SMD2121", "L3-Pro": "SMD1921"},
                        {"feature": "Brightness", "L3": "800nits", "L3-Pro": "4,200nits"},
                        {"feature": "Transparency Rate", "L3": "60%", "L3-Pro": "60%"},
                        {"feature": "Power Consumption/㎡", "L3": "Max 600w / Avg 150w", "L3-Pro": "Max 600w / Avg 150w"},
                        {"feature": "Panel Dimension", "L3": "1000mm x 1000mm", "L3-Pro": "1000mm x 1000mm"},
                        {"feature": "Panel Resolution", "L3": "256 x 128", "L3-Pro": "256 x 128"},
                        {"feature": "Panel Weight", "L3": "15kg", "L3-Pro": "15kg"},
                        {"feature": "Refresh Rate", "L3": "3,840Hz", "L3-Pro": "3,840Hz"},
                        {"feature": "Viewing Angle", "L3": "160°/160°", "L3-Pro": "160°/160°"},
                        {"feature": "IP Rate", "L3": "IP31", "L3-Pro": "IP43"},
                        {"feature": "Lifespan", "L3": ">100,000 hrs", "L3-Pro": ">100,000 hrs"},
                        {"feature": "Warranty", "L3": "2 Years", "L3-Pro": "2 Years"}
                    ]
                },
                "applications": ["Retail Storefronts", "Showrooms", "Shopping Malls", "Corporate Lobbies", "Airports"]
            },
            {
                "id": "inv",
                "name": "INV Series",
                "tagline": "The Pinnacle of Invisible Display Technology",
                "description": "Ultra-transparency with lightweight, smart, and ultra-thin design. Specifically engineered for modern architecture with flexible panels.",
                "image": "https://images.unsplash.com/photo-1770902971692-e4b9e3cf3933?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzh8MHwxfHNlYXJjaHw0fHxtb2Rlcm4lMjByZXRhaWwlMjBzdG9yZSUyMHdpbmRvdyUyMGRpc3BsYXl8ZW58MHx8fHwxNzczMzc2ODA0fDA&ixlib=rb-4.1.0&q=85",
                "features": ["80-90% Transparency", "Flexible Panels", "High Contrast", "Seamless Screen", "Custom Sizes"],
                "specs": {
                    "models": ["I3M", "I6M", "I3H"],
                    "data": [
                        {"feature": "Installation Method", "I3M": "Glass Mounting", "I6M": "Glass Mounting", "I3H": "Hanging"},
                        {"feature": "Pixel Pitch", "I3M": "3.91mm", "I6M": "6.25mm", "I3H": "3.91mm"},
                        {"feature": "Pixel Density/㎡", "I3M": "65,536", "I6M": "25,600", "I3H": "65,536"},
                        {"feature": "Brightness", "I3M": "3,500nits", "I6M": "4,500nits", "I3H": "3,500nits"},
                        {"feature": "Transparency Rate", "I3M": "80%", "I6M": "90%", "I3H": "80%"},
                        {"feature": "Power Consumption/㎡", "I3M": "Max 800w / Avg 200w", "I6M": "Max 800w / Avg 200w", "I3H": "Max 800w / Avg 200w"},
                        {"feature": "Weight/㎡", "I3M": "6kg", "I6M": "5kg", "I3H": "38kg"},
                        {"feature": "IP Rate", "I3M": "IP31", "I6M": "IP31", "I3H": "IP31"},
                        {"feature": "Grayscale", "I3M": "16 bit", "I6M": "16 bit", "I3H": "16 bit"},
                        {"feature": "Lifespan", "I3M": ">100,000 hrs", "I6M": ">100,000 hrs", "I3H": ">100,000 hrs"},
                        {"feature": "Warranty", "I3M": "2 Years", "I6M": "2 Years", "I3H": "2 Years"}
                    ]
                },
                "applications": ["Curved Glass Facades", "Luxury Retail", "Exhibitions", "Brand Zones", "Museums"]
            }
        ]
    },
    "indoor": {
        "id": "indoor",
        "name": "Indoor LED Displays",
        "description": "High-resolution video walls for showrooms, offices, and events",
        "image": "https://images.unsplash.com/photo-1749310726959-d8fccfef7ee4?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzNTl8MHwxfHNlYXJjaHwxfHxpbmRvb3IlMjBsZWQlMjB2aWRlbyUyMHNjcmVlbiUyMGNvcnBvcmF0ZSUyMGxvYmJ5fGVufDB8fHx8MTc3MzM3NjgxN3ww&ixlib=rb-4.1.0&q=85",
        "series": [
            {
                "id": "wp",
                "name": "WP Series",
                "tagline": "Professional Indoor Video Wall Solution",
                "description": "High-performance indoor LED panels perfect for corporate environments, retail spaces, and control rooms.",
                "image": "https://images.unsplash.com/photo-1758448721149-aa0ce8e1b2c9?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzNTl8MHwxfHNlYXJjaHwyfHxpbmRvb3IlMjBsZWQlMjB2aWRlbyUyMHdhbGwlMjBjb3Jwb3JhdGUlMjBsb2JieXxlbnwwfHx8fDE3NzMzNzY4MTd8MA&ixlib=rb-4.1.0&q=85",
                "features": ["High Resolution", "Seamless Design", "Easy Maintenance", "Wide Viewing Angle", "Energy Efficient"],
                "specs": {
                    "models": ["WP1.9", "WP2.5", "WP3.9"],
                    "data": [
                        {"feature": "Pixel Pitch", "WP1.9": "1.9mm", "WP2.5": "2.5mm", "WP3.9": "3.9mm"},
                        {"feature": "Brightness", "WP1.9": "600nits", "WP2.5": "800nits", "WP3.9": "1000nits"},
                        {"feature": "Refresh Rate", "WP1.9": "3,840Hz", "WP2.5": "3,840Hz", "WP3.9": "3,840Hz"},
                        {"feature": "Viewing Angle", "WP1.9": "160°/140°", "WP2.5": "160°/140°", "WP3.9": "160°/140°"},
                        {"feature": "Panel Size", "WP1.9": "500x500mm", "WP2.5": "500x500mm", "WP3.9": "500x500mm"},
                        {"feature": "Cabinet Weight", "WP1.9": "7kg", "WP2.5": "7kg", "WP3.9": "7kg"},
                        {"feature": "IP Rate", "WP1.9": "IP40", "WP2.5": "IP40", "WP3.9": "IP40"},
                        {"feature": "Lifespan", "WP1.9": ">100,000 hrs", "WP2.5": ">100,000 hrs", "WP3.9": ">100,000 hrs"},
                        {"feature": "Warranty", "WP1.9": "2 Years", "WP2.5": "2 Years", "WP3.9": "2 Years"}
                    ]
                },
                "applications": ["Corporate Offices", "Control Rooms", "Retail Showrooms", "Event Venues", "Experience Centers"]
            },
            {
                "id": "iec",
                "name": "IEC Series",
                "tagline": "Event-Grade Indoor Display",
                "description": "Versatile indoor LED solution designed for events, exhibitions, and large-scale presentations.",
                "image": "https://images.unsplash.com/photo-1771911646904-61f0fc9033e2?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzNTl8MHwxfHNlYXJjaHwzfHxpbmRvb3IlMjBsZWQlMjB2aWRlbyUyMHdhbGwlMjBjb3Jwb3JhdGUlMjBsb2JieXxlbnwwfHx8fDE3NzMzNzY4MTd8MA&ixlib=rb-4.1.0&q=85",
                "features": ["Quick Assembly", "Lightweight", "High Brightness", "Rental Ready", "Modular Design"],
                "specs": {
                    "models": ["IEC2.9", "IEC3.9", "IEC4.8"],
                    "data": [
                        {"feature": "Pixel Pitch", "IEC2.9": "2.9mm", "IEC3.9": "3.9mm", "IEC4.8": "4.8mm"},
                        {"feature": "Brightness", "IEC2.9": "1000nits", "IEC3.9": "1200nits", "IEC4.8": "1500nits"},
                        {"feature": "Refresh Rate", "IEC2.9": "3,840Hz", "IEC3.9": "3,840Hz", "IEC4.8": "3,840Hz"},
                        {"feature": "Panel Size", "IEC2.9": "500x500mm", "IEC3.9": "500x500mm", "IEC4.8": "500x500mm"},
                        {"feature": "Cabinet Weight", "IEC2.9": "8kg", "IEC3.9": "8kg", "IEC4.8": "8kg"},
                        {"feature": "IP Rate", "IEC2.9": "IP43", "IEC3.9": "IP43", "IEC4.8": "IP43"},
                        {"feature": "Lifespan", "IEC2.9": ">100,000 hrs", "IEC3.9": ">100,000 hrs", "IEC4.8": ">100,000 hrs"},
                        {"feature": "Warranty", "IEC2.9": "2 Years", "IEC3.9": "2 Years", "IEC4.8": "2 Years"}
                    ]
                },
                "applications": ["Events", "Exhibitions", "Stage Backdrops", "Concert Venues", "Conference Halls"]
            }
        ]
    },
    "outdoor": {
        "id": "outdoor",
        "name": "Outdoor LED Displays",
        "description": "Weatherproof high-brightness displays for billboards and facades",
        "image": "https://images.unsplash.com/photo-1772147743462-8f3258dc3198?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAxODF8MHwxfHNlYXJjaHw0fHxvdXRkb29yJTIwbGVkJTIwYmlsbGJvYXJkJTIwYnVpbGRpbmclMjBmYWNhZGV8ZW58MHx8fHwxNzczMzc2ODE4fDA&ixlib=rb-4.1.0&q=85",
        "series": [
            {
                "id": "ap",
                "name": "AP Series",
                "tagline": "All-Weather Outdoor Display",
                "description": "Robust outdoor LED display designed for billboards, building facades, and large-scale outdoor advertising.",
                "image": "https://images.unsplash.com/photo-1772147743462-8f3258dc3198?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAxODF8MHwxfHNlYXJjaHw0fHxvdXRkb29yJTIwbGVkJTIwYmlsbGJvYXJkJTIwYnVpbGRpbmclMjBmYWNhZGV8ZW58MHx8fHwxNzczMzc2ODE4fDA&ixlib=rb-4.1.0&q=85",
                "features": ["IP65 Waterproof", "High Brightness", "Wide Temperature Range", "Anti-Corrosion", "Energy Saving"],
                "specs": {
                    "models": ["AP6", "AP8", "AP10"],
                    "data": [
                        {"feature": "Pixel Pitch", "AP6": "6mm", "AP8": "8mm", "AP10": "10mm"},
                        {"feature": "Brightness", "AP6": "6,500nits", "AP8": "7,000nits", "AP10": "8,000nits"},
                        {"feature": "Refresh Rate", "AP6": "3,840Hz", "AP8": "3,840Hz", "AP10": "3,840Hz"},
                        {"feature": "Viewing Angle", "AP6": "140°/140°", "AP8": "140°/140°", "AP10": "140°/140°"},
                        {"feature": "Panel Size", "AP6": "960x960mm", "AP8": "960x960mm", "AP10": "960x960mm"},
                        {"feature": "IP Rate", "AP6": "IP65", "AP8": "IP65", "AP10": "IP65"},
                        {"feature": "Operating Temp", "AP6": "-20° to 60°C", "AP8": "-20° to 60°C", "AP10": "-20° to 60°C"},
                        {"feature": "Lifespan", "AP6": ">100,000 hrs", "AP8": ">100,000 hrs", "AP10": ">100,000 hrs"},
                        {"feature": "Warranty", "AP6": "2 Years", "AP8": "2 Years", "AP10": "2 Years"}
                    ]
                },
                "applications": ["Highway Billboards", "Building Facades", "Sports Stadiums", "Shopping Malls", "Transit Hubs"]
            },
            {
                "id": "diamond",
                "name": "Diamond Series",
                "tagline": "Premium Outdoor Visual Experience",
                "description": "Premium outdoor LED with superior color reproduction and contrast for high-end advertising applications.",
                "image": "https://images.unsplash.com/photo-1772147743462-8f3258dc3198?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAxODF8MHwxfHNlYXJjaHw0fHxvdXRkb29yJTIwbGVkJTIwYmlsbGJvYXJkJTIwYnVpbGRpbmclMjBmYWNhZGV8ZW58MHx8fHwxNzczMzc2ODE4fDA&ixlib=rb-4.1.0&q=85",
                "features": ["Ultra High Brightness", "Superior Color", "Weather Resistant", "Smart Monitoring", "Long Lifespan"],
                "specs": {
                    "models": ["D4", "D6", "D8"],
                    "data": [
                        {"feature": "Pixel Pitch", "D4": "4mm", "D6": "6mm", "D8": "8mm"},
                        {"feature": "Brightness", "D4": "8,000nits", "D6": "8,500nits", "D8": "9,000nits"},
                        {"feature": "Refresh Rate", "D4": "3,840Hz", "D6": "3,840Hz", "D8": "3,840Hz"},
                        {"feature": "Contrast Ratio", "D4": "5000:1", "D6": "5000:1", "D8": "5000:1"},
                        {"feature": "Panel Size", "D4": "960x960mm", "D6": "960x960mm", "D8": "960x960mm"},
                        {"feature": "IP Rate", "D4": "IP65/IP54", "D6": "IP65/IP54", "D8": "IP65/IP54"},
                        {"feature": "Operating Temp", "D4": "-30° to 60°C", "D6": "-30° to 60°C", "D8": "-30° to 60°C"},
                        {"feature": "Lifespan", "D4": ">100,000 hrs", "D6": ">100,000 hrs", "D8": ">100,000 hrs"},
                        {"feature": "Warranty", "D4": "2 Years", "D6": "2 Years", "D8": "2 Years"}
                    ]
                },
                "applications": ["Premium Advertising", "Landmark Buildings", "Entertainment Venues", "Branded Installations", "Digital Art"]
            }
        ]
    }
}

USE_CASES = [
    {
        "id": "storefront",
        "title": "Storefront Glass",
        "description": "Transform your retail storefront into a dynamic digital billboard without blocking the view inside.",
        "image": "https://images.unsplash.com/photo-1767334010488-83cdb8539273?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzh8MHwxfHNlYXJjaHwyfHxtb2Rlcm4lMjByZXRhaWwlMjBzdG9yZSUyMHdpbmRvdyUyMGRpc3BsYXl8ZW58MHx8fHwxNzczMzc2ODA0fDA&ixlib=rb-4.1.0&q=85",
        "benefits": ["24/7 advertising without staff", "Preserve natural light", "Dynamic content updates", "Attract foot traffic"],
        "recommended": ["LUCID Series", "INV Series"]
    },
    {
        "id": "mall",
        "title": "Mall Atriums",
        "description": "Create stunning visual experiences in shopping mall atriums with large-scale transparent displays.",
        "image": "https://images.unsplash.com/photo-1758448721149-aa0ce8e1b2c9?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzNTl8MHwxfHNlYXJjaHwyfHxpbmRvb3IlMjBsZWQlMjB2aWRlbyUyMHdhbGwlMjBjb3Jwb3JhdGUlMjBsb2JieXxlbnwwfHx8fDE3NzMzNzY4MTd8MA&ixlib=rb-4.1.0&q=85",
        "benefits": ["Maximize advertising revenue", "Create immersive experiences", "Wayfinding integration", "Event promotions"],
        "recommended": ["LUCID Series", "WP Series"]
    },
    {
        "id": "showroom",
        "title": "Showrooms",
        "description": "Elevate your showroom presentation with premium LED displays that showcase products beautifully.",
        "image": "https://images.unsplash.com/photo-1770902971692-e4b9e3cf3933?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzh8MHwxfHNlYXJjaHw0fHxtb2Rlcm4lMjByZXRhaWwlMjBzdG9yZSUyMHdpbmRvdyUyMGRpc3BsYXl8ZW58MHx8fHwxNzczMzc2ODA0fDA&ixlib=rb-4.1.0&q=85",
        "benefits": ["Premium brand image", "Interactive product demos", "Custom content scheduling", "Modern aesthetic"],
        "recommended": ["INV Series", "WP Series"]
    },
    {
        "id": "corporate",
        "title": "Corporate Lobbies",
        "description": "Make a lasting first impression with sophisticated LED displays in your corporate lobby.",
        "image": "https://images.unsplash.com/photo-1771911646904-61f0fc9033e2?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzNTl8MHwxfHNlYXJjaHwzfHxpbmRvb3IlMjBsZWQlMjB2aWRlbyUyMHdhbGwlMjBjb3Jwb3JhdGUlMjBsb2JieXxlbnwwfHx8fDE3NzMzNzY4MTd8MA&ixlib=rb-4.1.0&q=85",
        "benefits": ["Brand reinforcement", "Visitor engagement", "Corporate communications", "Modern workspace image"],
        "recommended": ["WP Series", "IEC Series"]
    }
]

# API Routes
@api_router.get("/")
async def root():
    return {"message": "Gleam LED API"}

@api_router.get("/products")
async def get_products():
    return list(PRODUCTS.values())

@api_router.get("/products/{category_id}")
async def get_product_category(category_id: str):
    if category_id not in PRODUCTS:
        raise HTTPException(status_code=404, detail="Category not found")
    return PRODUCTS[category_id]

@api_router.get("/products/{category_id}/{series_id}")
async def get_product_series(category_id: str, series_id: str):
    if category_id not in PRODUCTS:
        raise HTTPException(status_code=404, detail="Category not found")
    
    category = PRODUCTS[category_id]
    for series in category["series"]:
        if series["id"] == series_id:
            return series
    
    raise HTTPException(status_code=404, detail="Series not found")

@api_router.get("/use-cases")
async def get_use_cases():
    return USE_CASES

@api_router.get("/use-cases/{case_id}")
async def get_use_case(case_id: str):
    for case in USE_CASES:
        if case["id"] == case_id:
            return case
    raise HTTPException(status_code=404, detail="Use case not found")

@api_router.post("/contact", response_model=ContactInquiry)
async def create_inquiry(input: ContactInquiryCreate):
    inquiry_dict = input.model_dump()
    inquiry_obj = ContactInquiry(**inquiry_dict)
    
    doc = inquiry_obj.model_dump()
    doc['created_at'] = doc['created_at'].isoformat()
    
    await db.inquiries.insert_one(doc)
    return inquiry_obj

@api_router.get("/inquiries", response_model=List[ContactInquiry])
async def get_inquiries():
    inquiries = await db.inquiries.find({}, {"_id": 0}).to_list(1000)
    for inquiry in inquiries:
        if isinstance(inquiry['created_at'], str):
            inquiry['created_at'] = datetime.fromisoformat(inquiry['created_at'])
    return inquiries

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
