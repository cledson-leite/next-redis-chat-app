'use client'

import { MoonIcon, SunIcon, Volume2Icon, VolumeXIcon } from "lucide-react";
import { Button } from "./ui/button";
import { useTheme } from "next-themes"
import { useSound } from "use-sound";
import { usePreferences } from "@/store/Preferences";

export default function PreferencesTab() {
  const { setTheme, theme } = useTheme()
  const {soundEnabled, setSound} = usePreferences()
  const [playMouseClick] = useSound('/sounds/mouse-click.mp3')
  const [playSoundOn] = useSound('/sounds/sound-on.mp3', {volume: 0.3})
  const [playSoundOff] = useSound('/sounds/sound-off.mp3', {volume: 0.3})
  return (
    <div className="flex flex-wrap gap-2 px-1 md:px-2 transition-all duration-200">
      <Button 
        variant={'outline'} 
        size='icon' 
        onClick={() => {
          setTheme(theme === 'light' ? 'dark' : 'light')
          soundEnabled && playMouseClick()
        }}
      >
        {theme === 'light' ? <MoonIcon className="size-[1.2rem] text-muted-foreground"/> : <SunIcon className="size-[1.2rem] text-muted-foreground"/>}
      </Button>
      <Button 
        variant={'outline'} 
        size='icon' 
        onClick={() => {
          setSound()
          soundEnabled ? playSoundOff() : playSoundOn()
        }}>
        {soundEnabled ? <VolumeXIcon className="size-[1.2rem] text-muted-foreground"/> : <Volume2Icon className="size-[1.2rem] text-muted-foreground"/>}
      </Button>
    </div>
  )
}
