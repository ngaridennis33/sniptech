"use client"
import {createContext, useEffect, useState} from 'react'

export const ModalContext = createContext()

export const ModalProvider = ({children})=>{
    const [showModal, setShowModal] = useState(false);
    const handleModalClose = () => {
        setShowModal(!showModal);
    };

      // Add a useEffect to manage scrolling when the modal is open
  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = 'hidden'; // Disable scrolling
    } else {
      document.body.style.overflow = 'auto'; // Enable scrolling
    }

    // Cleanup by resetting the overflow property when the component unmounts
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [showModal]);
    
    // Handle logic when user clicks outside the modal
    const domNodeClick = () => setShowModal(false);

    return (
    <ModalContext.Provider value={{handleModalClose, showModal, domNodeClick}}>
        {children}
    </ModalContext.Provider>
    );
};