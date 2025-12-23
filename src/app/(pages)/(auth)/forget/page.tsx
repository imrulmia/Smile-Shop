'use client'

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { useState } from "react";

const ForgetPass = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return alert("Please enter your email");
    router.push('/newpass'); // navigate to new password page
  };

  return (
    <div className='bg-[#F2F2F2] min-h-[calc(100vh-57px)] flex items-center justify-center px-4'>
      <form
        onSubmit={handleSubmit}
        className='w-full max-w-md rounded-md py-8 px-6 sm:px-8 text-center bg-white shadow-lg'
      >
        <h3 className='text-[35px] sm:text-[30px] 2xl:text-[45px] font-semibold text-[#1A1A1A] mb-7 whitespace-nowrap'>
          Forgot password
        </h3>

        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className='mb-4'
          required
        />

        <Button
          type="submit"
          className='w-full mt-6 rounded-full bg-[#EA5326] hover:bg-[#d44920] transition-colors'
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default ForgetPass;
