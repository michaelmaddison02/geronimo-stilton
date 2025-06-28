# Geronimo Stilton - Emotional Text Styling

A creative text styling application that analyzes the emotional content of text and applies dynamic, emotion-based styling to individual words. Inspired by the whimsical world of Geronimo Stilton, this app transforms plain text into visually expressive content by detecting emotions and applying appropriate colors and fonts.

## 🎨 Features

### Core Functionality
- **Emotion Detection**: Analyzes text to identify words with emotional content (fear, anger, sadness, disgust, joy)
- **Dynamic Styling**: Applies emotion-appropriate colors and fonts to detected words
- **Interactive Elements**: Click on styled words to cycle through different styling options
- **Font Variety**: Multiple font options for each emotion category
- **Real-time Processing**: Instant sentiment analysis and styling

### Emotion Categories
- **Fear**: Purple/violet tones with gothic, mysterious fonts
- **Anger**: Red tones with aggressive, bold fonts  
- **Sadness**: Blue tones with flowing, melancholic fonts
- **Disgust**: Green tones with distorted, organic fonts
- **Joy**: Yellow/orange tones with playful, energetic fonts

### Technical Features
- **Frontend**: Next.js 15 with TypeScript and Tailwind CSS
- **Backend**: FastAPI with Python sentiment analysis
- **Styling**: Custom emotion-based color palette and font system
- **Responsive Design**: Works on desktop and mobile devices

## 🚀 Quick Start

### Prerequisites
- **Node.js** (v18 or higher)
- **Python** (v3.8 or higher)
- **npm** or **yarn**

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd geronimo-stilton
   ```

2. **Install frontend dependencies**
   ```bash
   npm install
   ```

3. **Set up the Python backend**
   ```bash
   cd backend
   python -m venv venv
   
   # On Windows
   venv\Scripts\activate
   
   # On macOS/Linux
   source venv/bin/activate
   
   pip install fastapi uvicorn nrclex pydantic
   ```

4. **Start the backend server**
   ```bash
   # From the backend directory
   uvicorn main:app --reload --port 8000
   ```

5. **Start the frontend development server**
   ```bash
   # From the root directory
   npm run dev
   ```

6. **Open your browser**
   Navigate to `http://localhost:3000`

## 📁 Project Structure

```
geronimo-stilton/
├── src/
│   ├── app/                    # Next.js app directory
│   │   ├── globals.css         # Global styles and color definitions
│   │   ├── layout.tsx          # Root layout component
│   │   └── page.tsx            # Main application page
│   ├── components/             # Reusable UI components
│   │   ├── retroui/            # Custom UI component library
│   │   └── custom-components/  # Project-specific components
│   └── lib/
│       └── constants.ts        # Emotion styling constants
├── backend/
│   ├── main.py                 # FastAPI application
│   └── venv/                   # Python virtual environment
├── public/                     # Static assets
└── package.json                # Frontend dependencies
```

## 🎯 How to Use

1. **Enter Text**: Type or paste text into the textarea
2. **Generate Styling**: Click "Generate" to analyze and style the text
3. **Customize**: 
   - Change the body font using the font selector
   - Click on styled words to cycle through different styles
   - Use the "Example" button to load sample text
4. **Restyle**: Click "Restyle" to regenerate styling with different random combinations

## 🔧 Configuration

### Adding New Colors
1. Add color variables to `src/app/globals.css` in the `:root` section
2. Add corresponding `--color-` variables in the `@theme` section
3. Update the colors object in `src/lib/constants.ts`

### Adding New Fonts
1. Import the font in your layout or globals.css
2. Add font variables to the CSS
3. Update the fonts object in `src/lib/constants.ts`

### Customizing Emotions
Modify the `target_emotions` list in `backend/main.py` to include different emotion categories.

## 🛠️ Development

### Frontend Development
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

### Backend Development
```bash
cd backend
uvicorn main:app --reload --port 8000
```

### API Documentation
Once the backend is running, visit `http://localhost:8000/docs` for interactive API documentation.

## 🔍 API Endpoints

- `GET /` - Welcome message
- `GET /health` - Health check
- `POST /api/sentimentAnalysis` - Analyze text emotions

### Sentiment Analysis Request
```json
{
  "wordList": ["word1", "word2", "word3"]
}
```

### Response Format
```json
{
  "sentiment_analysis": {
    "0": {
      "word": "fearful",
      "emotion": "fear",
      "score": 0.5
    }
  }
}
```

## 🙏 Acknowledgments

- **Geronimo Stilton** series for inspiration
- **NRCLex** for emotion analysis capabilities
- **Next.js** and **FastAPI** communities
- **RetroUI** for styling components and design system
