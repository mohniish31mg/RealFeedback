'use client'
import React from 'react'
import { AiFillHeart } from "react-icons/ai";
import { Separator } from './ui/separator';
import { FaGithub } from 'react-icons/fa';
import { Code } from 'lucide-react';
import Image from 'next/image';
import Profile from '../assets/Vishal Image.svg'
import Link from 'next/link';
import { useSession } from 'next-auth/react';

const Footer = () => {

  const {data:session} = useSession()

  return (
    <div>
       <footer className='h-auto bg-gray-900 flex flex-col justify-center items-center z-20
    font  gap-3 dark:bg-DarkGrey text-gray-400'>
      <div className='mt-4 flex gap-6'>
       <Link href={'/'}>Home</Link>
       {
        session? (
          <Link href={'/dashboard'}>Dashboard</Link>
        ) : (
          <div className='space-x-6'>
            <Link href={'/sign-up'}>Sign-up</Link>
            <Link href={'/sign-in'}>Sign-in</Link>
          </div>
        )
       }
       
      </div>
      <Separator className='opacity-30'/>
    </footer>
    </div>
  )
}

export default Footer