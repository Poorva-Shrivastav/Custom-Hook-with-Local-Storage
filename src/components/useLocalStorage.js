import React, {useState, useEffect} from 'react'

function useLocalStorage(key, defaultValue){
    const storedKey = localStorage.getItem(key);
    const storedValue = storedKey ? JSON.parse(storedKey) : defaultValue;

    const [value, setValue] = useState(storedValue);

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
    }, [key, value])

    return([value, setValue]);
}

export default useLocalStorage;

