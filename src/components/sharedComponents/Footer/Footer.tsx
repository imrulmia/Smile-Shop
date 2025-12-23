import logo from '@/assets/images/Group 10.png'
import qr from '@/assets/images/QR Code.png'
import playStore from '@/assets/images/Google Play Link.png'
import appStore from '@/assets/images/App Store Link.png'


import { FaLinkedinIn, FaInstagram, FaFacebookF } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import Image from 'next/image'
import { Button } from '@/components/ui/button';
import Link from 'next/link';



const Footer = () => {
  return (
    <footer className='2xl:px-[204px] xl:px-[104px]   bg-[#232323] '>
      <div className=' text-[#F8FAFC]  grid grid-cols-1 my-auto items-center gap-3 xl:justify-between xl:flex'>
        <div className='pt-[63px] pb-[81px] px-4 xl:px-0'>
          <Image src={logo} alt="" />
          <p className='max-w-[306px] mt-2.5'>Ecommerce is a free UI Kit from Paperpillar that you can use for your personal or commercial project.</p>
          <div className='flex gap-3 mt-6'>
            <input type="text" name="" id="" placeholder='Type your email address' className='w-[260px] outline-none border-1 border-[#F8FAFC] pl-3 rounded-full text-[13px]' />

            <Button className="bg-[#F8FAFC] text-[#232323] hover:bg-[#d44920] py-3.5 px-6 rounded-full  ">
              Search
            </Button>
          </div>
        </div>

        <div className='flex-1 px-4 grid md:grid-cols- grid-cols-3 gap-6 xl:flex xl:gap-0 xl:justify-around items-start'>

          <div className='flex flex-col space-y-2 '>
            <h5 className='font-semibold'>Account</h5>
            <Link href='/'>My Account</Link>
            <Link href='/'>Login</Link>
            <Link href='/'>Register</Link>
            <Link href='/'>Cart</Link>
            <Link href='/'>Wishlist</Link>
            <Link href='/'>Shop</Link>
          </div>

          <div className='flex flex-col space-y-3'>
            <h5 className='font-semibold'>Quick Link</h5>
            <a>Privacy Policy</a>
            <a>Terms Of Use</a>
            <a>FAQ</a>
            <a>Contact</a>
          </div>

          <div className='flex flex-col col-span-2  space-y-4 w-fit '>
            <h5 className='font-semibold'>Support</h5>
            <p className='max-w-[175px]'>
              111 Bijoy Sarani, Dhaka, DH 1515, Bangladesh.
            </p>
            <a>exclusive@gmail.com</a>
            <p>+88015-88888-9999</p>
          </div>


        </div>

        <div className='xl:space-y-5 space-y-3 pb-4 px-4  -mt-7'>
          <h5 className='font-semibold mt-9'>Download App</h5>
          <div className='flex gap-x-2'>
            <Image src={qr} alt="" />
            <div>
              <Image src={playStore} alt="" />
              <Image src={appStore} alt="" />
            </div>
          </div>
          <div className='flex gap-x-6'>
            <FaFacebookF />
            <CiTwitter />
            <FaInstagram />
            <FaLinkedinIn />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer