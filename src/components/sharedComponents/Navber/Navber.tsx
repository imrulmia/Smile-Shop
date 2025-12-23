'use client'

import Image from 'next/image'
import logo from '../../../assets/images/Group 11.png'
import React, { useState } from 'react'
import { CiSearch, } from 'react-icons/ci'
import { Button } from "@/components/ui/button"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import Link from 'next/link'
import { FaBars, FaRegHeart, FaRegUser } from 'react-icons/fa'
import { PiShoppingCartSimpleBold } from 'react-icons/pi'
import { usePathname } from 'next/navigation'
import { MdClose } from 'react-icons/md'
import User from './User'


const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className='fixed top-0 left-0 right-0 z-50 bg-white shadow-md'>
      <div className='flex justify-between px-4 md:px-24 py-6 shadow-md  relative'>
        <Link href={'/'}>
          <Image
            className='md:w-[150px] w-[100px] max-h-[86px]'
            src={logo}
            alt="Logo"
            priority
          />
        </Link>
        <div className='flex items-center'>
          <div className="hidden lg:flex justify-center items-center h-[46px]">
            <div className="relative">
              <CiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

              <input
                className="outline-none border border-[#E6E6E6] max-w-[498px] w-full h-[46px] pl-12 rounded-l-full"
                type="search"
                placeholder="Search"
              />
            </div>

            <Button className="bg-[#EA5326] h-[46px] w-[98px] text-white rounded-r-full">
              Search
            </Button>
          </div>

          <div className='hidden xl:flex'>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem className='flex space-x-10 items-center justify-center '>
                  <NavigationMenuTrigger className='ml-10 '>All Category</NavigationMenuTrigger>
                  <Link className={pathname === '/about' ? 'text-red-600' : ''} href={'/about'}>About</Link>
                  <Link className={pathname === '/contact' ? 'text-red-600' : ''} href={'/contact'}>Contact Us</Link>

                  <NavigationMenuContent className=' px-7'>
                    <Link href={'/'}>About</Link>
                    <Link href={'/'}>Contact Us</Link>
                    <Link href={'/'}>About</Link>
                    <Link href={'/'}>Contact Us</Link>
                    <Link href={'/'}>About</Link>
                    <Link href={'/'}>Contact Us</Link>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

          </div>
        </div>
        <div className='hidden  xl:flex justify-center items-center gap-x-3'>

          <FaRegHeart size={20} />
          <PiShoppingCartSimpleBold size={20} />  
          <User/> 
        </div>

        {/* mobile device ar jonno */}
        <div className='flex xl:hidden justify-center items-center'>
          <Button className='bg-[#EA5326]  rounded-full ' onClick={() => setIsOpen(!isOpen)}>
            {
              isOpen ?  <MdClose />:<FaBars /> 
            }

          </Button>
        </div>

        {/* show data ? */}

        
          {
            isOpen && <div className='absolute top-25 pt-7  fixed  right-0 z-50 bg-white  shadow-2xl w-full h-4/2 rounded-md'> 
              <div className='flex flex-col justify-center items-center space-y-4'>
                <div className="flex justify-center items-center h-[46px]">
                  <div className="relative">
                    <CiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                    <input
                      className="outline-none border border-[#E6E6E6] max-w-[498px] w-full h-[46px] pl-12 rounded-l-full"
                      type="search"
                      placeholder="Search"
                    />
                  </div>

                  <Button className="bg-[#EA5326] h-[46px] w-[98px] text-white rounded-r-full">
                    Search
                  </Button>
                </div>

                <div className='text-center mx-auto'>
                  <NavigationMenu>
                    <NavigationMenuList>
                      <NavigationMenuItem className='flex flex-col mx-auto space-y-2 items-center justify-center text-center'>
                        <Link onClick={()=>setIsOpen(false)} className={pathname === '/' ? 'text-red-600' : ''} href={'/'}>All Category</Link>
                        <Link onClick={()=>setIsOpen(false)} className={pathname === '/about' ? 'text-red-600' : ''} href={'/about'}>About</Link>
                        <Link onClick={()=>setIsOpen(false)} className={pathname === '/contact' ? 'text-red-600' : ''} href={'/contact'}>Contact Us</Link>
                      </NavigationMenuItem>
                    </NavigationMenuList>
                  </NavigationMenu>
                
                </div>
                <div className='flex justify-center items-center gap-x-3'>

                  <FaRegHeart />
                  <PiShoppingCartSimpleBold />
                  <FaRegUser />
                </div>
              </div>
            </div>
            
          }
       
      </div>
    </div>
  )
}

export default Navbar
