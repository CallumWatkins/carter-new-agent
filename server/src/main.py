from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def home():
    return "Server is running"

@app.post("/new-agent")
def newAgent():
    return "New agent"
