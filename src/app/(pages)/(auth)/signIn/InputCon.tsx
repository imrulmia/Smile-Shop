'use client'
import { Input } from '@/components/ui/input'
import React, { useState } from 'react'
import { FaRegEyeSlash } from 'react-icons/fa'
import { MdOutlineRemoveRedEye } from 'react-icons/md'

const InputCon = () => {
  const [pass,setPass] =useState(false)
  return (
    <div>
      <div className='relative'>
        {pass ? <FaRegEyeSlash onClick={() => setPass(!true)} className='absolute  right-4 top-1/3 -translate-y-1/2' /> : <MdOutlineRemoveRedEye onClick={() => setPass(true)} className='absolute  right-4 top-1/3 -translate-y-1/2' />}
        <Input type={pass ? "text" : 'password'} placeholder='Password' className={'mb-4'} />
      </div>
    </div>
  )
}

export default InputCon