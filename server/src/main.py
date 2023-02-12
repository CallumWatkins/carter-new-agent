from fastapi import FastAPI
import datetime
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:8080"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Agent(BaseModel):
    id: str
    created: datetime.datetime
    name: str
    personality: set
    useCase: set
    backstory: set

@app.get("/")
def home():
    return "Server is running"

@app.post("/new-agent")
def newAgent():
    return "New agent"
