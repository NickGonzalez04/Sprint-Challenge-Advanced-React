import { useEffect } from 'react';
import useLocalStorage from './localStorage';

const useDarkMode = initialValue => {
    const [displayMode, setDisplayMode] = useLocalStorage('Dark Mode', initialValue)

    useEffect(() => {
        displayMode ? document.body.classList.add('dark-mode') : document.body.classList.remove('dark-mode')        
    }, [displayMode])

    return [displayMode, setDisplayMode]
}

export default useDarkMode;