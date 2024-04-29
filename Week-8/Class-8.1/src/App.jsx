import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {


  return (
    <>
      {/* <div style={{ display:'flex', justifyContent:"center" }}>{/* in raw html we write like style="display:flex" */}
        {/* <div style={{backgroundColor:"red"}}>hi</div>
        <div style={{backgroundColor:"green"}}>hi</div>
        <div style={{backgroundColor:"blue"}}>hi</div>
      </div> */}

      {/* // <div className='flex justify-between'>
      //   <div className='bg-red-500'>hi</div>
      //   <div className='bg-yellow-500'>hi</div>
      //   <div className='bg-blue-500'>hi</div>

      // </div> */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3'>
        <div className='bg-red-500' >hi</div>
        <div className='bg-yellow-500'>hi</div>
        <div className='bg-blue-500 '>hi</div>
      </div>
    </>
  )
}

export default App
