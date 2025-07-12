"use client";

import React, { useState, useEffect } from "react";
import { Textarea } from "@/components/retroui/Textarea";
import { Button } from "@/components/retroui/Button";
import { Select } from "@/components/retroui/Select";
import { Label } from "@/components/retroui/Label";
import { getRandomEmotionStyle } from "@/lib/constants";
import { Menu } from "@/components/retroui/Menu";

export default function Home() {
  const [text, setText] = useState("");
  const [styledText, setStyledText] = useState<React.JSX.Element[]>([]);
  const [selectedFont, setSelectedFont] = useState("font-sans");

  const [cycleButtonIndex, setCycleButtonIndex] = useState<number>(0)
  const cycleButtonOptions = [
    "It was a cloudy morning when I, Geronimo Stilton, found myself in the most extraordinary situation! As the chief editor of the Rodent's Gazette, I was wearing my trusty turtleneck and sitting in my cozy office when a mysterious newcomer burst through the gate. \"Signor Stilton!\" the itinerant messenger chirped, \"I have a remarkable manuscript that will change everything!\" With remarkable gall, he slammed a chunk of ancient paper on my desk. The manuscript looked as rickety as an old sledge, covered in mossy residue and mysterious illustrations. My whiskers twitched with suspicion! The document appeared to be a clandestine report about a financial cabal involving a sovereign financier and a physicist with an extraordinary intellect. My diurnal routine was completely interrupted!"
  ]

  useEffect(() => {
    if (selectedFont && styledText.length > 0) {
      updateBodyTextFont(selectedFont);
    }
  }, [selectedFont]);

  const updateBodyTextFont = (newfont: string) => {
    const updatedStyledText: React.JSX.Element[] = [];

    styledText.forEach((wordElement, index) => {
      if (!wordElement) {
        return;
      }

      const spanId = wordElement.props?.id;
      if (spanId === "body-text") {
        updatedStyledText.push(
          React.cloneElement(wordElement, {
            className: selectedFont
          })
        );
      } else {
        updatedStyledText.push(
          React.cloneElement(wordElement)
        );
      }
    });
    setStyledText(updatedStyledText);
  };

  const handleCycleButtonClick = () => {
    setCycleButtonIndex(prev => (prev + 1) % cycleButtonOptions.length)
    setText(cycleButtonOptions[cycleButtonIndex])
  };

  const getNewEmotiveStyling = (event: React.MouseEvent<HTMLSpanElement>) => {
    const target = event.currentTarget;
    const emotion = target.getAttribute('data-emotion');
    const prevClassName = target.className;

    console.log(`Clicked element emotion: ${emotion}, Previous className: ${prevClassName}`);

    // if the element does not have an emotion attribute
    if (!emotion) {
      console.log('No emotion found');
      return;
    }

    var newEmotionStyle = getRandomEmotionStyle(emotion);
    
    // Extract just the emotion style from the previous className (remove hover effects)
    const prevEmotionStyle = prevClassName.split(' ')[0]; // Get first class (emotion style)
    
    while (newEmotionStyle === prevEmotionStyle) {
      newEmotionStyle = getRandomEmotionStyle(emotion);
    }

    console.log(`New emotion style: ${newEmotionStyle}`);

    // Preserve hover effects and other styling
    const hoverEffects = "hover:scale-105 transition-all duration-200 cursor-pointer";
    const newClassName = `${newEmotionStyle} ${hoverEffects}`;

    console.log(`New className: ${newClassName}`);

    // Update the element directly
    target.className = newClassName;
    
    console.log('Element updated directly');
  };

  const handleGenerate = async () => {
    // Clear styled text if there's no input text
    if (!text.trim()) {
      setStyledText([]);
      return;
    }

    try {
      const words = text.split(' ');

      const response = await fetch("http://127.0.0.1:8000/api/sentimentAnalysis", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ wordList: words }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const sentiment_data = await response.json();

      // Process the sentiment data and style the words
      if (sentiment_data.sentiment_analysis) {
        const styledWords: React.JSX.Element[] = [];
        
        words.forEach((word: string, index: number) => {
          const sentimentInfo = sentiment_data.sentiment_analysis[index];
          
          if (sentimentInfo) {
            // Get random emotion style for this word
            const emotionStyle = getRandomEmotionStyle(sentimentInfo.emotion);
            
            styledWords.push(
              <span 
                key={index} 
                id="styled-text"
                className={`${emotionStyle || ''} hover:opacity-80 transition-all duration-200 cursor-pointer`}
                data-emotion={sentimentInfo.emotion}
                onClick={getNewEmotiveStyling}
              >
                {word}{index < words.length - 1 ? ' ' : ''}
              </span>
            );
          } else {
            // No emotion detected for this word, render normally
            styledWords.push(
              <span key={index} id="body-text" className={selectedFont}>
                {word}{index < words.length - 1 ? ' ' : ''}
              </span>
            );
          }
        });
        
        setStyledText(styledWords);
      }
    } catch (error) {
      console.error("Error sending sentiment analysis request:", error);
    }
  }

  return (
    <div className="flex flex-col">
      <div id="header" className="flex flex-row items-center px-4 py-2 color-foreground border-b-2 border-border">
        <h1 className="text-3xl font-head text-foreground">
          GERONIMO STILTON
        </h1>
      </div>
      <div id="body" className="flex flex-col">
        <div id="text-editing-bar" className="flex flex-row justify-between px-4 pt-6 pb-2">
          <div id="body-text-font-selector">
            <Select onValueChange={(value) => setSelectedFont(value)}>
              <Select.Trigger id="body-text-font-selector" className={`w-60 text-base ${selectedFont}`}>
                <Select.Value placeholder="Default Body Font"/>
              </Select.Trigger>
              <Select.Content>
                <Select.Group>
                  <Select.Item value="font-sans" className="font-sans">Default Body Font</Select.Item>
                  <Select.Item value="font-barlow-condensed" className="font-barlow-condensed">Barlow Condensed</Select.Item>
                  <Select.Item value="font-imperial-script" className="font-imperial-script">Imperial Script</Select.Item>
                  <Select.Item value="font-poiret-one" className="font-poiret-one">Poiret One</Select.Item>
                  <Select.Item value="font-syne" className="font-syne">Syne</Select.Item>
                  <Select.Item value="font-ubuntu" className="font-ubuntu">Ubuntu</Select.Item>
                </Select.Group>
              </Select.Content>
            </Select>
          </div>
          <div id="example-text-button">
            <Button variant="secondary" onClick={handleCycleButtonClick}>Example</Button>
          </div>
        </div>
        <div id="text-input-display-area" className="flex flex-row justify-end px-4 py-2 gap-4">
            <div id="text-display-area" className="px-4 py-2 w-full border-2 border-border shadow-md-yellow transition focus:outline-none focus:shadow-sm bg-background text-foreground min-h-[200px] relative">
              <div>{styledText}</div>
            </div>
          <div className={`w-full max-w-md ${selectedFont}`}>
            <Textarea
              rows={10}
              placeholder="type something..."
              value={text}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setText(e.target.value)}
            />
            <Button onClick={handleGenerate}>
              {styledText.length === 0 ? "Generate" : "Restyle"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
