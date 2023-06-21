import Image from 'next/image'
import React from 'react'


const Logo = () => {
  return (
    <div>
    <Image width={100} height={100} alt="logoImage" src="/logo.png"/>
    </div>
  )
}

export default Logo