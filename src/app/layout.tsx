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
  Kablammo,
  Syne,
  Space_Mono,
  Rubik_Mono_One,
  Imperial_Script,
  Poiret_One,
  Barlow_Condensed,
  Ubuntu,
  Nothing_You_Could_Do,
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

const syne = Syne({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-syne",
  display: "swap",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-space-mono",
  display: "swap",
});

const rubikMonoOne = Rubik_Mono_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-rubik-mono-one",
  display: "swap",
});

const imperialScript = Imperial_Script({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-imperial-script",
  display: "swap",
});

const poiretOne = Poiret_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-poiret-one",
  display: "swap",
});

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-barlow-condensed",
  display: "swap",
});

const ubuntu = Ubuntu({

  subsets: ["latin"],
  weight: "400",
  variable: "--font-ubuntu",
  display: "swap",
});

const nothingYouCouldDo = Nothing_You_Could_Do({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-nothing-you-could-do",
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
          ${syne.variable}
          ${spaceMono.variable}
          ${rubikMonoOne.variable}
          ${imperialScript.variable}
          ${poiretOne.variable}
          ${barlowCondensed.variable}
          ${ubuntu.variable}
          ${nothingYouCouldDo.variable}
      `}>
        {children}
      </body>
    </html>
  );
}