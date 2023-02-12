import datetime
from fastapi import FastAPI, status
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

@app.post("/new-agent", status_code=status.HTTP_201_CREATED)
def newAgent(data: Agent):
    print(data)
    return "New agent created"
