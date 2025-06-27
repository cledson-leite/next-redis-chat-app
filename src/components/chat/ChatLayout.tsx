'use client'

import { useState } from "react"
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "../ui/resizable"
import { cn } from "@/lib/utils"
import Sidebar from "./Sidebar"

type ChatLayoutProps = {
  defaultLayout?: number[]
}

export default function ChatLayout({defaultLayout = [320, 480]}: ChatLayoutProps) {
  const [isCollapsed, setIsCollapsed] = useState(false)
  return (
    <ResizablePanelGroup 
      direction="horizontal"
      className="h-full items-stretch bg-background rounded-lg"
      onLayout={(size: number[]) => {
        document.cookie = `react-resizable-panels:layout=${JSON.stringify(size)};`;
      }}
    >
      <ResizablePanel 
        defaultSize={defaultLayout[0]}
        collapsedSize={8}
        collapsible={true}
        minSize={24}
        maxSize={30}
        onCollapse={() =>{ 
          setIsCollapsed(true)
          document.cookie = `react-resizable-panels:collapsed=true;`;
        }}
        onExpand={() =>{ 
          setIsCollapsed(false)
          document.cookie = `react-resizable-panels:collapsed=false;`;
        }}
        className={cn(isCollapsed && "min-w-[80px] transition-all duration-300 ease-in-out")}
      ><Sidebar isCollapsed={isCollapsed}/></ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={defaultLayout[1]} minSize={30}>
        <div className="flex justify-center items-center h-full w-full px-10">
          <div className="flex flex-col justify-center items-center gap-4">
            <img src="/logo.png" alt="RediStash Logo" className="w-full md:w-2/3 lg:w-1/2" />
            <p className="text-muted-foreground text-center">Escolha um contato para visualizar a conversa.</p>
          </div>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}
