export const colors = {
    fear: {
        africanViolet: "#B284BE",
        amethyst: "#9966CC",
        burgundy: "#800020",
        // byzantium: "#702963",
        // cerise: "#DE3163",
        // darkPurple: "#301934",
    },
    anger: {
        barnRed: "#7C0902",
        crimson: "#DC143C",
        imperialRed: "#ED2939",
    },
    sadness: {
        berkeleyBlue: "#003262",
        bondiBlue: "#0095B6",
        carolinaBlue: "#7BAFD4",
    },
    disgust: {
        avacado: "#568203",
        brightGreen: "#66FF00",
        darkMossGreen: "#4A5D23"
    },
    joy: {
        amber: "#FFBF00",
        gold: "#FFD700",
        crayolaOrange: "#FF7538",
    },
}

export const fonts = {
    fear: {
        UNIFRAKTUR: 'font-unifraktur', 
        NOSIFER: 'font-nosifer', 
        HENNY_PENNY: 'font-henny-penny', 
        EMILYS_CANDY: 'font-emilys-candy', 
        MYSTERY_QUEST: 'font-mystery-quest', 
    },
    anger: {
        KINGS: 'font-kings',
        RUBIK_BEASTLY: 'font-rubik-beastly',
        SPLASH: 'font-splash',
    },
    sadness: {
        BALLET: 'font-ballet',
        MEDDON: 'font-meddon',
    },
    disgust: { 
        RUBIK_GLITCH: 'font-rubik-glitch',
        RUBIK_MICROBE: 'font-rubik-microbe',
        EATER: 'font-eater',
        FLAVORS: 'font-flavors',
    },
    joy: {
        BARRIO: 'font-barrio',
        KABLAMMO: 'font-kablammo',
    },
}

export const weights = {
    NORMAL: 'font-normal',
    MEDIUM: 'font-medium',
    SEMIBOLD: 'font-semibold',
    BOLD: 'font-bold',
}
  
export const sizes = {
    XS: 'text-xs',
    SM: 'text-sm',
    BASE: 'text-base',
    LG: 'text-lg',
    XL: 'text-xl',
    '2XL': 'text-2xl',
    '3XL': 'text-3xl',
    '4XL': 'text-4xl',
    '5XL': 'text-5xl',
    '6XL': 'text-6xl',
}
  
export const styles = {
    ITALIC: 'italic',
    NOT_ITALIC: 'not-italic',
}

/**
 * Helper function to get a random color and font for a given emotion
 * @param emotion - The emotion string ('fear', 'anger', 'sadness', 'disgust', or 'joy')
 * @returns A Tailwind class string with a random color and font for the given emotion
 */
export function getRandomEmotionStyle(emotion: string): string | null {
    const emotionKey = emotion.toLowerCase() as keyof typeof colors;
    
    // Check if the emotion exists in our constants
    if (!colors[emotionKey] || !fonts[emotionKey]) {
        return null;
    }
    
    // Get arrays of available colors and fonts for this emotion
    const emotionColors = Object.values(colors[emotionKey]);
    const emotionFonts = Object.values(fonts[emotionKey]);
    const weightValues = Object.values(weights);
    const sizeValues = Object.values(sizes);
    
    // Random text styling
    const randomColor = emotionColors[Math.floor(Math.random() * emotionColors.length)];
    const randomFont = emotionFonts[Math.floor(Math.random() * emotionFonts.length)];
    const randomWeight = weightValues[Math.floor(Math.random() * weightValues.length)];
    const randomSize = sizeValues[Math.floor(Math.random() * sizeValues.length)];

    // Return as Tailwind classes using arbitrary value syntax for colors
    return `text-[${randomColor}] ${randomFont} ${randomWeight} ${randomSize}`;
}

