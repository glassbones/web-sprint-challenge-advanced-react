import { useState } from 'react'


export default function useDarkMode(){
    //grab state from local storage
    const [value, setValue] = useState(false)

    // bool switch // on or off 
    const toggleMode = e => {
        e.preventDefault()
        setValue(!value)
        console.log('clicky')
    }

    var body = document.getElementsByTagName("BODY")[0]; 
    body.classList.toggle('dark-mode')

    return [value, toggleMode];
};
