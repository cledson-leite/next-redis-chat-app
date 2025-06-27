import React from 'react'
import { ScrollArea } from '../ui/scroll-area'
import { USERS } from '@/db/dummy'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { Button } from '../ui/button'
import { cn } from '@/lib/utils'
import { LogOutIcon } from 'lucide-react'

export default function Sidebar({isCollapsed}: {isCollapsed: boolean}) {
  const selected = USERS[0]
  return (
    <div className='group relative flex flex-col h-full gap-4 p-2 data-[collapsed=true]:p-2 max-h-full overflow-hidden bg-background'>
      {
        !isCollapsed && (
          <div className="flex justify-between items-center p-2">
              <div className="flex gap-2 items-center text-2xl">
                <p className="font-medium">Contatos</p>
              </div>
          </div>
        )
      }
      <ScrollArea className='gap-2 px-2 group-[[data-collapsed=true]]:justify-center group-[[data-collapsed=true]]:px-2 h-full'>
        {
          USERS.map((user, index) => (
            isCollapsed
            ? (
              <TooltipProvider key={index}>
                  <Tooltip delayDuration={0}>
                    <TooltipTrigger asChild>
                      <div>
                        <Avatar className='my-1 flex justify-center items-center'>
                          <AvatarImage 
                            src={user.image || '/user-placeholder.png'} 
                            alt={user.name} 
                            className='border-2 border-white rounded-full w-10 h-10'
                          />
                          <AvatarFallback>{user.name[0]}</AvatarFallback>
                        </Avatar>
                        <span className="sr-only">{user.name}</span>
                        <TooltipContent side='right' className='flex items-center gap-4'>{user.name}</TooltipContent>
                      </div>
                    </TooltipTrigger>
                  </Tooltip>
              </TooltipProvider>
            )
            :(
              <Button
              key={index}
              variant={'grey'}
              size={'xl'}
              className={cn("w-full justify-start gap-4 my-1", selected.email === user.email && "dark:bg-muded dark:text-white dark:hover:bg-muted dark:hover:text-white shrink")}
              >
                <Avatar className='flex justify-center items-center'>
                  <AvatarImage 
                    src={user.image || '/user-placeholder.png'} 
                    alt={user.name} 
                    className='w-10 h-10'
                    />
                  <AvatarFallback>{user.name[0]}</AvatarFallback>
              </Avatar>
              <div className="flex flex-col max-w-28">
                <span>{user.name}</span>
              </div>
              </Button>
            )
          ))
        }
      </ScrollArea>
      <div className="mt-auto">
        <div className="flex justify-between items-center gap-2 md:px-2 py-2">
          {
            !isCollapsed && (
              <div className="hidden md:flex gap-2 items-center">
                <Avatar className='flex justify-center items-center'>
                  <AvatarImage 
                    src={'/user-placeholder.png'} 
                    alt={'Avatar'}
                    referrerPolicy='no-referrer'
                    className='w-8 h-8 border-2 border-white rounded-full'
                    />
                </Avatar>
                <p className='font-bold'>{'Joe Doe'}</p>
              </div>
            )
          }
          <div>
            <LogOutIcon size={22} cursor={'pointer'} />
          </div>
        </div>
      </div>
    </div>
  )
}
