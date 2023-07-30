"use client"
import React, { useContext } from 'react'
import styles from './page.module.css'
import Link from 'next/link'
import Image from 'next/image'
import { ThemeContext } from '../../../../../context/ThemeContext'
import { LogInRegisterBtn } from '@/components /button/Button'
import LogoImg from "/public/logoipsum-261.svg"

const Login = () => {
  const {mode} = useContext(ThemeContext);
  const containerClass = `${styles.container} ${mode === 'dark' ? styles.dark : ''}`;
  const socialLogin = `${styles.socialLogin} ${mode === 'dark' ? styles.dark : ''}`;
  const inputLabel = `${styles.inputLabel} ${mode === 'dark' ? styles.dark : ''}`;
  const inputLabelName = `${styles.inputLabelName} ${mode === 'dark' ? styles.dark : ''}`;
  const input = `${styles.input} ${mode === 'dark' ? styles.dark : ''}`;
  const header = `${styles.header} ${mode === 'dark' ? styles.dark : ''}`;


  return (
    <div className={styles.wrapper}>
    <div className={containerClass}>
      <div className={header}>
      <Link href="/" className='logoText'><Image src={LogoImg} className={styles.logoImage} alt="logoImage" /></Link>
        <h3 className='text-heading'>Welcome</h3>
        <span className={styles.textbody}> Log in to SnipTech to continue to site</span>
      </div>
      <form className={styles.form}>

        {/* Email Container */}
        <div className={styles.inputCont}>
        <input className={input} style={{ backgroundColor: mode === 'dark' ? '#031a31' : '#fff' }} autoFocus type="text" required/>
          <label htmlFor="input" className={inputLabel}>
            <span className={inputLabelName}>Email Address</span>
          </label>
        </div>

        {/* Password Container */}
        <div className={styles.inputCont}>
        <input className={input}style={{ backgroundColor: mode === 'dark' ? '#031a31' : '#fff' }} type="password" required/>
          <label htmlFor="input" className={inputLabel}>
            <span className={inputLabelName}>Password</span>
          </label>
        </div>

        <span className='text-link'> Forgot Password? </span>
        <LogInRegisterBtn text={"Continue"}/>
      </form>

    <div className={styles.register}>
      <span> Don&apos;t have an account?</span>
      <Link className='text-link' href={'/dashboard/register'}>Sign Up</Link>
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
    </div>
  )
}

export default Login