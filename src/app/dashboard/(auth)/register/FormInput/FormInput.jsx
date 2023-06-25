import React, { useState } from 'react'
import styles from "./forminput.module.css"

const FormInput = (props) => {

    // When the user clicks outside the input, validate  their entries.
    // const [focused, setFocused] = useState(false)
    const [list, setList] = useState(false)
    const handleFocus =(e)=>{
    setList(true);
    }

    // Destructure the Props.
    const {label,errorMessage,onChange, id, ...inputProps} = props;


  return (
    <div className={styles.wrapper}>
        <label className={styles.label}>{label}</label>
        <input className={styles.input}
        {...inputProps}
        onChange={onChange} 
        onBlur={handleFocus} 
        list= {list.toString()}
        onFocus = {()=> inputProps.name === "confirmPassword" && setList(true)}
        />
        {/* <span className={styles.errorMessage}>{errorMessage}</span> */}
    </div>
  )
}

export default FormInput