import React from 'react'
import { Button } from './ui/button'

export default function AuthButtons() {
  return (
    <div className='flex flex-col md:flex-row gap-3 justify-center relative z-50'>
      <Button className='w-full' variant={'outline'}>Cadastrar</Button>
      <Button className='w-full' >Entrar</Button>
    </div>
  )
}
