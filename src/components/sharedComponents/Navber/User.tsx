"use client"
import { useRouter } from "next/navigation"
import { FaRegUser } from "react-icons/fa"

const User = () => {
  const router = useRouter();
  return (
    <div className="cursor-pointer">
      <p
        
        onClick={() => router.push('/signIn')}
      >
        <FaRegUser size={20} />
      </p>
    </div>
  )
}

export default User