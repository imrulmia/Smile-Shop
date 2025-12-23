'use client'

import React, { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from '@/components/ui/button'
import { MdOutlineRemoveRedEye } from "react-icons/md"
import { FaRegEyeSlash } from "react-icons/fa"
import { useRouter } from 'next/navigation'

const SetPass = () => {
  const [showPass, setShowPass] = useState(false)
  const [conPass, setConPass] = useState(false)

  const router = useRouter()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    router.push('/')
  }

  return (
    <div className='bg-[#F2F2F2] min-h-[calc(100vh-57px)] flex items-center justify-center px-4'>
      <form
        onSubmit={handleSubmit}
        className='w-full max-w-md rounded-md py-8 px-6 sm:px-8 text-center bg-white shadow-lg'
      >
        <h1 className='text-[28px] sm:text-[32px] md:text-[35px] font-semibold text-[#1A1A1A] mb-7 whitespace-nowrap'>
          Set New Password
        </h1>

        {/* New Password */}
        <div className='relative mb-4'>
          <Input
            type={showPass ? 'text' : 'password'}
            placeholder='Enter new password'
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
            type={conPass ? 'text' : 'password'}
            placeholder='Confirm new password'
          />
          <span
            onClick={() => setConPass(!conPass)}
            className='absolute top-1/2 right-4 -translate-y-1/2 cursor-pointer text-gray-500'
          >
            {conPass ? <FaRegEyeSlash /> : <MdOutlineRemoveRedEye />}
          </span>
        </div>

        <Button
          type='submit'
          className='w-full mt-6 rounded-full bg-[#EA5326] hover:bg-[#d44920] transition-colors'
        >
          Create Account
        </Button>
      </form>
    </div>
  )
}

export default SetPass
