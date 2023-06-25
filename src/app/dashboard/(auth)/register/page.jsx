"use client"
import React, { useState } from 'react'
import styles from "./register.module.css"
import FormInput from './FormInput/FormInput'
import { LogInRegisterBtn } from '@/components /button/Button';

function Register() {

  const [values, setValues] = useState({
    fullName:"",
    birthDay:"",
    email:"",
    userName:"",
    password:"",
    confirmPassword:"",
});

const handleSubmit =(e)=>{
    e.preventDefault();
}

const onChange = (e)=>{
    setValues({...values, [e.target.name]: e.target.value})
}

    // User Input Data.
    const InputData=[
      {
      id:1,
      name:"fullName",
      type:"text",
      placeholder:"FullName",
      errorMessage:"* Name should be between 3-16 characters and shouldn't contain any special character!",
      label:"FullName",
      pattern:"^[a-zA-Z]{4,}(?: [a-zA-Z]+)?(?: [a-zA-Z]+)?$",
      required:true,
      autoFocus:true,
      
      
  },
  // {
  //     id:2,
  //     name:"birthDay",
  //     type:"date",
  //     errorMessage:"* Date CAN NOT be empty!",
  //     placeholder:"Birth-Day",
  //     label:"BirthDay",
  //     required:true,
  // },
  {
      id:3,
      name:"email",
      type:"email",
      placeholder:"Email",
      errorMessage:"* Email should be a valid email address!",
      label:"Email",
      required:true,
  },
  // {
  //     id:4,
  //     name:"userName",
  //     type:"text",
  //     placeholder:"UserName",
  //     errorMessage:"* UserName should be 3-16 characters and shouldn't include any special characters!",
  //     label:"UserName",
  //     pattern:"^[A-Za-z0-9]{3,16}$",
  //     required:true,

  // },
  {
      id:5,
      name:"password",
      type:"password",
      placeholder:"Password",
      errorMessage:"* Password should be between 8-20 characters. MUST include 1 uppercase and lowe case letter, 1 digit and 1 special character! (eg. asdASD123*)",
      label:"Password",
      pattern:"^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,20}$",
      required:true,
  },
  {
      id:6,
      name:"confirmPassword",
      type:"password",
      placeholder:"Confirm Password",
      errorMessage:"* Passwords DO NOT match!",
      label:"ConfirmPassword",
      pattern:values.password,
      required:true,
  },
]

  return (
    <div className={styles.container}>
              <h1>Snip Tech</h1>
        <span>Welcome</span>
        <h2>Enter the following fields</h2>
      <form className={styles.form}>
      {InputData.map((input)=>(
                <FormInput 
                names={input.label}
                    key={input.id} 
                    {...input} 
                    value={values[input.name]} 
                    onChange={onChange}
                    
                 />
                ))}
        <LogInRegisterBtn text={"Register"}/>
      </form>
      <span>or</span>
      <div>Register with google</div>
    </div>
  )
}

export default Register