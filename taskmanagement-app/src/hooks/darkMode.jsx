import React, { useState, useEffect } from 'react'

function darkMode() {
//   return 
    const [theme, setTheme] = useState(locale.Storage.theme)
    const colorTheme = theme ==='dark' ? 'light' : 'dark'
    useEffect(() => {
      const root = window.document.documentElement
      root.classList.remove(colorTheme)
      root.classList.add(theme)
      localStorage.setItem('theme', theme)
      

    }, [theme, colorTheme])
    
    return[colorTheme , setTheme]

}

export default darkMode