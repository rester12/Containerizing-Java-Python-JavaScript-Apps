from fastapi import FastAPI

app = FastAPI(title="Solstice Devs Python Service", version="1.0.0")


@app.get("/")
def read_root():
    return {"message": "Solstice Devs Python Service is running", "status": "ok"}


@app.get("/health")
def health_check():
    return {"status": "healthy", "version": "1.0.0"}
