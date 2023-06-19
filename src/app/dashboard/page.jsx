import React from 'react'
import styles from './page.module.css'
import Link from 'next/link'
import Image from 'next/image'

const Dashboard = () => {

  

  return (
    <div className={styles.wrapper}>
    <div className={styles.container}>
      <div className={styles.header}>
      <Link href="/" className='logoText'>Sniptech</Link>
        <h1 className='text-heading'>Welcome</h1>
        <span className={styles.textbody}> Log in to SnipTech to continue to site</span>
      </div>
      <form className={styles.form}>

        {/* Email Container */}
        <div className={styles.inputCont}>
        <input className={styles.input} autoFocus type="text" required/>
          <label htmlFor="input" className={styles.inputLabel}>
            <span className={styles.inputLabelName}>Email Address</span>
          </label>
        </div>

        {/* Password Container */}
        <div className={styles.inputCont}>
        <input className={styles.input} type="password" required/>
          <label htmlFor="input" className={styles.inputLabel}>
            <span className={styles.inputLabelName}>Password</span>
          </label>
        </div>

        <span className='text-link'> Forgot Password? </span>
        <button className={styles.button}>Continue</button>
      </form>

    <div className={styles.register}>
      <span> Don&apos;t have an account?</span>
      <Link className='text-link' href={"dashboard/register"}>Sign Up</Link>
    </div>

{/* Or Container */}
    <div className={styles.orCont}>
      <hr className={styles.hr}/>
      <span className={styles.orText}>OR</span>
      <hr className={styles.hr}/>

    </div>

    <div className={styles.socialLogin}>
      <Image width={20} height={20} src="/5.png" alt="google" />
      <span>Continue with Google</span>
    </div>
    </div>
    </div>
  )
}

export default Dashboard