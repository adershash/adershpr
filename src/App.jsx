import { useContext, useEffect, useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import './App.css'
import Banner from './components/Banner/Banner'
import Rowspan from './components/Rowspan/Rowspan'
import Contact from "./components/Contact/Contact"
import { scrollcontext, ScrollProvider } from './components/Scrollcomponent/ScrollProvider'
function App() {


  const data=[
  {subname:"Btech",des1:"Government Engineering college Idukki",des2:"CGPA: 7.2",img:"/engineering.jpg"},
   {subname:"Diploma",des1:"Government Polytechnic College Attingal",des2:"CGPA: 9.4",img:"/diploma.png"},
    {subname:"Higher Scecondary",des1:"GHSS Bhoothakulam",des2:"Percentage: 85%",img:"/higher.png"}
]
const projects=[
  {subname:"College Event Management",des1:"Ticket booking,Seat slection features",des2:"React,Firebase",img:"/event.jpg"},
  {subname:"Handwritten Exam Paper Evaluation",des1:"Subjective answer evaluation using LLMs",des2:"Flutter,FastAPI,Google Cloud Vision,LLMs",img:"/exam.png"}
]


  const [loading,setLoading]=useState(true)
  useEffect(()=>{
    const timer=setTimeout(()=>{
     
      setLoading(false);
    },2000)
    return ()=> clearTimeout(timer);
  },[loading]);
  if(loading){
    return(
      <div className='flex items-center justify-center min-h-screen bg-white transition-all ease-in-out duration-700'>
        
        <div className='w-12 h-12 border-4 rounded-full border-blue-500 border-t-transparent animate-spin'>

        </div>

      </div>
    );
  }
else{
  const {education,project}=useContext(scrollcontext)
  return (
    <div className='min-h-screen bg-gradient-to-r from-blue-950 via-blue-900 to-blue-500 pb-4'>
     
     <Navbar/>
     <Banner/>
     <Rowspan heading="Education" data={data} refval={education}/>
     <Rowspan heading="Project" data={projects} refval={project}/>
     <Contact/>
    
    
     
    </div>
  )
}
}

export default App
