"use client" 
import React, { useContext } from 'react'
import styles from "./signin.module.scss"
import Link from 'next/link'
import Image from 'next/image'
import { ThemeContext } from '../../../components /context/ThemeContext'
import LogoImg from "/public/sniptech-logos_transparent.png"
import AuthLinks from '@/components /authLinks/AuthLinks'

const SignIn = () => {
  const {mode} = useContext(ThemeContext);
  const containerClass = `${styles.container} ${mode === 'dark' ? styles.dark : ''}`;
  const socialLogin = `${styles.socialLogin} ${mode === 'dark' ? styles.dark : ''}`;
  const inputLabel = `${styles.inputLabel} ${mode === 'dark' ? styles.dark : ''}`;
  const inputLabelName = `${styles.inputLabelName} ${mode === 'dark' ? styles.dark : ''}`;
  const input = `${styles.input} ${mode === 'dark' ? styles.dark : ''}`;


  return (
    <div className={containerClass}>
      <div className={styles.header}>
        <div className={styles.logo}>
            <Image src={LogoImg} fill className={styles.logoImage} alt="logoImage" />
        </div>
        <h3 className='text-heading'>Sign in to SnipTech</h3>
      </div>
      
      <form className={styles.form}>
        {/* Email Container */}
        <div className={styles.inputCont}>
        <input className={input} placeholder=" " style={{ backgroundColor: mode === 'dark' ? '#031a31' : '#fff' }} autoFocus type="email" required/>
          <label htmlFor="input"  className={inputLabel}>
            <span className={inputLabelName}>Email Address</span>
          </label>
        </div>

        {/* Password Container */}
        <div className={styles.inputCont}>
        <input className={input} placeholder=" " style={{ backgroundColor: mode === 'dark' ? '#031a31' : '#fff' }} type="password" required />
          <label htmlFor="input" className={inputLabel}>
            <span className={inputLabelName}>Password</span>
          </label>
        </div>

        <span className='text-link'> Forgot Password? </span>
        <AuthLinks/>
        {/* <Link className={styles.authLink} href="/"><button className={styles.authButton}>Continue</button></Link> */}
      </form>

    <div className={styles.register}>
      <span> Don&apos;t have an account?</span>
      <Link className='text-link' href={'/auth/register'}>Sign Up</Link>
    </div>

{/* Or Container */}
    <div className={styles.orCont}>
      <hr className={styles.hr}/>
      <span className={styles.orText}>OR</span>
      <hr className={styles.hr}/>
    </div>

    <div className={socialLogin}>
      <Image width={20} height={20} src="/5.png" alt="google"  priority={true}/>
      <span>Continue with Google</span>
    </div>
    </div>
  )
}

export default SignIn