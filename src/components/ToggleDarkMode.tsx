import { useEffect, useState } from "react"
import { HiOutlineSun, HiOutlineMoon } from "react-icons/hi2"

const ToggleDarkMode: React.FC = () => {
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") ?? "light")

  const handleClick = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
    localStorage.setItem("theme", theme)
  }, [theme])

  return (
    <button className='ml-5' onClick={handleClick}>
      {theme === "dark" ? (
        <HiOutlineSun className='w-6 h-6 dark:text-white' />
      ) : (
        <HiOutlineMoon className='w-6 h-6' />
      )}
    </button>
  )
}

export default ToggleDarkMode
