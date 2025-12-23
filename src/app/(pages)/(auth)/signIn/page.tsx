'use client'

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from "@/components/ui/input";
import InputCon from './InputCon';
import { useState } from "react";
import { useRouter } from 'next/navigation';

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email || !password) return alert("Please fill in all fields");
    
    console.log("Login submitted:", { email, password });
  };

  return (
    <div className='bg-[#F2F2F2] min-h-[calc(100vh-157px)] flex items-center justify-center px-4 py-13 xl:pt-26'>
      <form
        onSubmit={handleSubmit}
        className='w-full max-w-md rounded-md py-8 px-6 sm:px-8 text-center bg-white shadow-lg'
      >
        <h1 className='text-[35px] sm:text-[40px] 2xl:text-[45px] font-semibold text-[#1A1A1A] mb-7'>
          Sign In
        </h1>

        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className='mb-4'
          required
        />

        <InputCon
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />

        <div className='text-right mt-2'>
          <Link href='/forget'>
            <p className='text-sm text-[#666666] hover:text-[#EA5326] cursor-pointer'>
              Forget Password
            </p>
          </Link>
        </div>

        <Button
          type="submit"
          onClick={()=>router.push('/')}
          className='w-full mt-6 rounded-full bg-[#EA5326] hover:bg-[#d44920] transition-colors'
        >
          Login
        </Button>

        <p className='mt-6 text-[#666666] text-sm'>
          Don’t have an account?{' '}
          <Link className='font-semibold text-[#1A1A1A] hover:text-[#EA5326]' href='/register'>
            Register
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignIn;
