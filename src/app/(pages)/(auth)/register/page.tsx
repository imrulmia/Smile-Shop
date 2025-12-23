'use client'

import React, { useState } from 'react'
import { Input } from "@/components/ui/input"
import { MdOutlineRemoveRedEye } from "react-icons/md"
import { FaRegEyeSlash } from "react-icons/fa"
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import google from '@/assets/images/Icon.png'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const Register = () => {
  const [showPass, setShowPass] = useState(false)
  const [conPass, setConPass] = useState(false)

  const router =useRouter();
  const handleSubmit=(e: React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    router.push('/')

  }

  return (
    <div className='bg-[#F2F2F2] min-h-[calc(100vh-57px)] flex items-center justify-center px-4'>
      <form onSubmit={handleSubmit} className='w-full max-w-md rounded-md py-8 px-6 xl:mt-8 sm:px-8 text-center bg-white shadow-lg'>
        
        <h1 className='text-[30px] sm:text-[35px] md:text-[40px] font-semibold text-[#1A1A1A] mb-7 whitespace-nowrap'>
          Create Account
        </h1>

        <Input type="email" placeholder="Email" className='mb-4' />

        {/* Password */}
        <div className='relative mb-4'>
          <Input
            type={showPass ? "text" : "password"}
            placeholder='Password'
          />
          <span
            onClick={() => setShowPass(!showPass)}
            className='absolute top-1/2 right-4 -translate-y-1/2 cursor-pointer text-gray-500'
          >
            {showPass ? <FaRegEyeSlash /> : <MdOutlineRemoveRedEye />}
          </span>
        </div>

        {/* Confirm Password */}
        <div className='relative mb-4'>
          <Input
            type={conPass ? "text" : "password"}
            placeholder='Confirm Password'
          />
          <span
            onClick={() => setConPass(!conPass)}
            className='absolute top-1/2 right-4 -translate-y-1/2 cursor-pointer text-gray-500'
          >
            {conPass ? <FaRegEyeSlash /> : <MdOutlineRemoveRedEye />}
          </span>
        </div>

        {/* Terms */}
        <div className='flex items-start gap-x-2 text-left text-sm text-[#666666]'>
          <input type="checkbox" className='mt-1' />
          <p>Accept all terms & conditions</p>
        </div>

        <Button  className='cursor-pointer w-full mt-6 rounded-full bg-[#EA5326] hover:bg-[#d44920] transition-colors'>
          Create Account
        </Button>

        {/* Google Login */}
        <div className='relative flex items-center justify-center mt-7 py-3 rounded-md border cursor-pointer hover:bg-gray-50 transition'>
          <Image
            src={google}
            alt="Google"
            className='absolute left-5 w-6 h-6'
          />
          <Link className='font-semibold text-[#1A1A1A]' href='/Register'>
            Continue with Google
          </Link>
        </div>

      </form>
    </div>
  )
}

export default Register
