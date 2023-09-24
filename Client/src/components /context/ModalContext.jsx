"use client"
import {createContext, useState} from 'react'

export const ModalContext = createContext()

export const ModalProvider = ({children})=>{
    const [showModal, setShowModal] = useState(false);
    const handleModalClose = () => setShowModal(!showModal);
    
    // Handle logic when user clicks outside the modal
    const domNodeClick = () => setShowModal(false);

    return (
    <ModalContext.Provider value={{handleModalClose, showModal, domNodeClick}}>
        {children}
    </ModalContext.Provider>
    );
};