import React, { useEffect, useRef, useState } from 'react'
import './Popup.css'


const PopupWindow = ({handleClose}) => {

  const popupRefWrapper = useRef(null);

  const popupRef = useRef(null);

  useEffect(() => {
    const handleClick = (e) => {

      if(popupRef.current && popupRefWrapper.current){

        if(popupRefWrapper.current.contains(e.target) && !popupRef.current.contains(e.target)){
          handleClose();
        }
      }
    }

    document.addEventListener('click', handleClick)

    return () => {
      document.removeEventListener('click', handleClick)
    }

  }, [])


  return (
    <div className='popup-wrapper' ref={popupRefWrapper}>
      <div className='popup_div' ref={popupRef}>
          <h2>PopUp</h2>
          <p>Popup Text... blablabla</p>
          <button className='btn' onClick={handleClose}>Close</button>
      </div>
    </div>
  )
}

const Popup = () => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='main'>
      {isOpen && <PopupWindow handleClose={()=>setIsOpen(!isOpen)}/>}
            
      <button className='btn' onClick={() => setIsOpen(!isOpen)}>Open Popup</button>

     
          
    </div>
    
  )
}

export  {Popup}