import './App.css'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import { Outlet } from 'react-router-dom'
import { ThemeProvider } from './Contexts/Theme'
import { useEffect, useState } from 'react'
import ThemeBtn from './Components/ThemeButton/ThemeBtn'

function App() {
  const [themeMode, setThemeMode] = useState("light")

  const lightTheme = () => {
    setThemeMode("light")
  }

  const darkTheme = () => {
    setThemeMode("dark")
  }

  // actual change in theme

  useEffect(() => {
    document.querySelector('html').classList.remove("light", "dark")
    document.querySelector('html').classList.add(themeMode)
  }, [themeMode])
  

  return (
    <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>
      <Header />
      <ThemeBtn />
      <Outlet />
      <Footer />
    </ThemeProvider>
  )
}

export default App
