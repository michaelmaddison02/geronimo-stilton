"use client";

import { useState } from "react";
import { Textarea } from "@/components/retroui/Textarea";
import { Button } from "@/components/retroui/Button";
import { Accordion } from "@/components/retroui/Accordion";
import { getRandomEmotionStyle } from "@/lib/constants";

export default function Home() {
  const [text, setText] = useState("");
  
  return (
    <div className="flex flex-col">
      <div id="header" className="flex flex-row items-center p-2 px-4 color-foreground border-b-2 border-border">
        <h1 className="text-3xl font-head text-foreground">
          GERONIMO STILTON
        </h1>
      </div>
      <div className="flex justify-end p-8 gap-4">
        <div className="px-4 py-2 w-full border-2 border-border shadow-md-yellow transition focus:outline-none focus:shadow-sm bg-background text-foreground min-h-[200px] flex flex-col">
          {text}
        </div>
        <div className="w-full max-w-md">
          <Textarea
            rows={10}
            placeholder="type something..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <Button>Refresh</Button>
        </div>
      </div>
    </div>
  );
}
