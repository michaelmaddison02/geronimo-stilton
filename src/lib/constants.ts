export const colors = {
    fear: {
        africanViolet: "text-africanViolet",
        amethyst: "text-amethyst",
        burgundy: "text-burgundy",
        byzantium: "text-byzantium",
        cerise: "text-cerise",
        darkPurple: "text-darkPurple",
        eggplant: "text-eggplant",
        grape: "text-grape",
        indigo: "text-indigo",
        magenta: "text-magenta",
        plum: "text-plum",
        purple: "text-purple",
        violet: "text-violet",
        wine: "text-wine",
    },
    anger: {
        barnRed: "text-barnRed",
        crimson: "text-crimson",
        imperialRed: "text-imperialRed",
        bloodRed: "text-bloodRed",
        fireEngineRed: "text-fireEngineRed",
        scarlet: "text-scarlet",
        ruby: "text-ruby",
        maroon: "text-maroon",
        darkRed: "text-darkRed",
        cardinal: "text-cardinal",
        vermillion: "text-vermillion",
        carmine: "text-carmine",
        roseRed: "text-roseRed",
        oxblood: "text-oxblood",
        cherry: "text-cherry",
    },
    sadness: {
        berkeleyBlue: "text-berkeleyBlue",
        bondiBlue: "text-bondiBlue",
        carolinaBlue: "text-carolinaBlue",
        navy: "text-navy",
        midnightBlue: "text-midnightBlue",
        steelBlue: "text-steelBlue",
        slateBlue: "text-slateBlue",
        royalBlue: "text-royalBlue",
        cobalt: "text-cobalt",
        teal: "text-teal",
        azure: "text-azure",
    },
    disgust: {
        avacado: "text-avacado",
        brightGreen: "text-brightGreen",
        darkMossGreen: "text-darkMossGreen",
        olive: "text-olive",
        forestGreen: "text-forestGreen",
        emerald: "text-emerald",
        jade: "text-jade",
        lime: "text-lime",
        chartreuse: "text-chartreuse",
        hunter: "text-hunter",
        moss: "text-moss",
        pine: "text-pine",
        fern: "text-fern",
    },
    joy: {
        amber: "text-amber",
        gold: "text-gold",
        crayolaOrange: "text-crayolaOrange",
        yellow: "text-yellow",
        sunshine: "text-sunshine",
        marigold: "text-marigold",
        saffron: "text-saffron",
        tangerine: "text-tangerine",
        coral: "text-coral",
        mango: "text-mango",
        honey: "text-honey",
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
        NOTHING_YOU_COULD_DO: 'font-nothing-you-could-do',
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
    return `${randomColor} ${randomFont} ${randomWeight} ${randomSize}`;
}