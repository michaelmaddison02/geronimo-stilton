import { 
  Archivo_Black, 
  Space_Grotesk,
  UnifrakturMaguntia,
  Nosifer,
  Henny_Penny,
  Emilys_Candy,
  Mystery_Quest,
  Kings,
  Rubik_Beastly,
  Splash,
  Ballet,
  Meddon,
  Rubik_Glitch,
  Rubik_Microbe,
  Eater,
  Flavors,
  Barrio,
  Kablammo
} from "next/font/google";
import "./globals.css";
 
const archivoBlack = Archivo_Black({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-head",
  display: "swap",
});
 
const space = Space_Grotesk({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-sans",
  display: "swap",
});

const unifrakturMaguntia = UnifrakturMaguntia({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-unifraktur",
  display: "swap",
});

const nosifer = Nosifer({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-nosifer",
  display: "swap",
});

const hennyPenny = Henny_Penny({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-henny-penny",
  display: "swap",
});

const emilysCandy = Emilys_Candy({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-emilys-candy",
  display: "swap",
});

const mysteryQuest = Mystery_Quest({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-mystery-quest",
  display: "swap",
});

const kings = Kings({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-kings",
  display: "swap",
});

const rubikBeastly = Rubik_Beastly({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-rubik-beastly",
  display: "swap",
});

const splash = Splash({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-splash",
  display: "swap",
});

const ballet = Ballet({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-ballet",
  display: "swap",
});

const meddon = Meddon({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-meddon",
  display: "swap",
});

const rubikGlitch = Rubik_Glitch({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-rubik-glitch",
  display: "swap",
});

const rubikMicrobe = Rubik_Microbe({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-rubik-microbe",
  display: "swap",
});

const eater = Eater({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-eater",
  display: "swap",
});

const flavors = Flavors({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-flavors",
  display: "swap",
});

const barrio = Barrio({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-barrio",
  display: "swap",
});

const kablammo = Kablammo({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-kablammo",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`
          ${archivoBlack.variable} 
          ${space.variable} 
          ${unifrakturMaguntia.variable} 
          ${nosifer.variable} 
          ${hennyPenny.variable} 
          ${emilysCandy.variable} 
          ${mysteryQuest.variable} 
          ${kings.variable} 
          ${rubikBeastly.variable} 
          ${splash.variable} 
          ${ballet.variable} 
          ${meddon.variable} 
          ${rubikGlitch.variable} 
          ${rubikMicrobe.variable} 
          ${eater.variable} 
          ${flavors.variable} 
          ${barrio.variable} 
          ${kablammo.variable}
      `}>
        {children}
      </body>
    </html>
  );
}