import React, { useContext } from 'react'
import {Mail,Phone,Linkedin} from 'lucide-react'
import {FaInstagram} from 'react-icons/fa'
import { scrollcontext } from '../Scrollcomponent/ScrollProvider'


function Contact() {
  const {contact}=useContext(scrollcontext)

  function handleMailto(){
    const isMobile=/iPhone|iPad|iPod|Andriod/i.test(navigator.userAgent)
    const gmailweb="https://mail.google.com/mail/?view=cm&fs=1&to=adershashp17@gmail.com"
    if(isMobile){
      const applink="intent://mail/#Internet;scheme=mailto;package=com.google.android.gm;S.to=adershashp17@gmail.com;end"
      window.location.href=applink

      setTimeout(()=>{
        window.location.href=gmailweb
      },1500)
    }else{
          window.open(gmailweb,"GmailComposePopup","width=800,height=600,scrollbars=yes,resizable=yes")
    }
    

  }

  function handleInsta(){
    const isMobile=/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
   const instaweb="https://www.instagram.com/nameisadersh"
   if(isMobile){
    const applink="instagram://user?username=nameisadersh"
    window.location.href=applink
    setTimeout(()=>{
      window.location.href=instaweb
    },1500)
   }else{
      window.open(instaweb,"InstagramProfilePopup","width=800,height=600,scrollbars=yes,resizable=yes")
   }
    
  }


  function handlelinkedin(){
    const isMobile=/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
   const instaweb="https://www.linkedin.com/in/adershpr"
   if(isMobile){
    const applink="linkedin://in/adershpr"
    window.location.href=applink
    setTimeout(()=>{
      window.location.href=instaweb
    },1500)
   }else{
      window.open(instaweb,"LinkedInProfilePopup","width=800,height=600,scrollbars=yes,resizable=yes")
   }
    
  }

  function handlephone(){
    const isMobile=/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
    console.log(isMobile)
   if(isMobile){
    const applink="tel:+919061119356"
    window.location.href=applink
    
   }else{
      alert("dailing is not supported in desktop")
   }
    
  }


  return (
    <div ref={contact} className='max-w-full  m-5'>
      <div className='text-white mt-3 font-bold'>
            <h2 className='text-3xl'>Contact me</h2>
            <hr />
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-5 text-white' >
        <div className='transition-all ease-in-out duration-300 hover:text-orange-400 hover:translate-x-2' onClick={handleMailto}>
            <Mail></Mail>
            <h3>Email</h3>
            <h4>adershashp17@gmail.com</h4>
        </div>
        <div className='transition-all ease-in-out duration-300 hover:text-orange-400 hover:translate-x-2'onClick={handlephone}>
            <Phone></Phone>
            <h3>Phone</h3>
            <h4>+91 9061119356</h4>
        </div>
        <div className='transition-all ease-in-out duration-300 hover:text-orange-400 hover:translate-x-2'onClick={handlelinkedin}>
            <Linkedin></Linkedin>
            <h3>LinkedIn</h3>
            <h4>linkedin.com/in/adershpr</h4>
        </div>
        <div className='transition-all ease-in-out duration-300 hover:text-orange-400 hover:translate-x-2' onClick={handleInsta}>
            <FaInstagram size={26}/>
            <h3>Instagram</h3>
            <h4>instagram.com/nameisadersh</h4>
        </div>
            
      </div>
    </div>
  )
}

export default Contact
