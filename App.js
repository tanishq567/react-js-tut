import React from 'react'
import Project2 from "./mycode/project 2"
export default function App() {
  let onTiemesup = () => {
   alert("TimesUp")
  }
  return (
    <div>
      <Project2 
      onTiemesup={onTiemesup}
        duration={6}
        />
    </div>
  )
}
