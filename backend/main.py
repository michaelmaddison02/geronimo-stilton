from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from nrclex import NRCLex

app = FastAPI(
    title="Geronimo Stilton API",
    description="Backend API for the Geronimo Stilton application",
    version="1.0.0"
)

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "http://localhost:3001"],  # Frontend URLs
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Data model for POST request
class Message(BaseModel):
    wordList: list[str]

@app.get("/")
async def root():
    """Root endpoint"""
    return {
        "message": "Welcome to Geronimo Stilton API",
        "docs": "/docs",
        "version": "1.0.0"
    }

@app.get("/health")
async def health_check():
    """Health check endpoint"""
    return {"status": "healthy", "service": "geronimo-stilton-api"}

@app.post("/api/sentimentAnalysis")
async def sentiment_analysis(message: Message):
    """
    Analyzes the emotional content of text by identifying words with strong emotional associations.
    
    This function processes text input and returns a dictionary mapping word positions to their 
    dominant emotions (fear, anger, sadness, disgust, joy). It includes all words with emotion 
    scores above 0, without sentence limits.
    """

    words = message.wordList
    # key: word index, value: dominant sentiment
    sentiment_dict = {}

    for word_idx, word in enumerate(words):
        # Create NRCLex object for individual word to get its emotion scores
        word_nrc = NRCLex(word)
        emotion_scores = word_nrc.affect_frequencies
        
        # Filter to only consider specific emotions: fear, anger, sadness, disgust, joy
        target_emotions = ['fear', 'anger', 'sadness', 'disgust', 'joy']
        filtered_emotions = {k: v for k, v in emotion_scores.items() if k in target_emotions}
        
        # Find the emotion with the highest score for this word
        if filtered_emotions:
            max_emotion = max(filtered_emotions.items(), key=lambda x: x[1])
            if max_emotion[1] > 0:  # Only include words with emotion scores > 0
                sentiment_dict[word_idx] = {
                    'word': word,
                    'emotion': max_emotion[0],
                    'score': max_emotion[1]
                }

    return {
        "sentiment_analysis": sentiment_dict,        
    }
