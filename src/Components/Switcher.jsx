import { useState } from 'react'
import useDarkMode from '../Hooks/useDarkMode'
import { Switch } from '@headlessui/react'

export default function Switcher() {
  const [colorTheme, setTheme] = useDarkMode();
  const [darkmode, setDarkmode] = useState( colorTheme === 'light' ? true : false);

  const toggleDarkMode = (checked) => {
    setTheme(colorTheme)
    setDarkmode(checked);
  }
  

  return (
      <>
      <Switch
        checked={darkmode}
        onChange={toggleDarkMode}
        className={`${darkmode ? 'bg-gray-900' : 'bg-gray-300'}
          relative inline-flex h-6 w-16 py-2 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
      >
        <span className="sr-only">Use setting</span>
        <span
          className={`${darkmode ? 'translate-x-9' : 'translate-x-0'}
            pointer-events-none absolute inset-0 h-4 w-4 transform rounded-full bg-sky-900 dark:bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
        />
      </Switch>
      </>
  )
}
