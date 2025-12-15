import { useEffect, useState } from "react";
import { capitalize, getSline } from "../utils/helper";

export default function Popup({ name, age, gender, handleClose }) {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        setIsOpen(true);
    }, []);

    const handleLocalClose = () => {
        setIsOpen(false);
        setTimeout(() => {
            handleClose();
        }, 350);
    };

    const toGenderString = (char) => {
      switch(char) {
        case 'm': return "Male";
        case 'f': return "Female";
        case 'l': return "Kaichi Samaaj";
        case 'g': return "Meetha";
        case 't': return "Transistor";
        case 'a': return "Aaloo";
        case 'b': return "Bicycle";
        case 'o': return "Kuchh Aur";
      }
    };
    

    return (
        <div className="w-full h-screen fixed top-0 left-0 overflow-hidden bg-black/50 flex justify-center" onClick={handleLocalClose}>
            <div className={`w-4xl mt-24 transform transition-all ease-in-out duration-300 ${isOpen ? "scale-100":"scale-25 opacity-0"} `} onClick={e => e.stopPropagation()}>
                <div className='flex justify-end'>
                    <button
                        type='button'
                        className='p-2 hover:text-white text-lg font-bold select-none'
                        onClick={handleLocalClose}
                    >✕</button>
                </div>
                <div className="bg-zinc-300 py-10 rounded-2xl shadow-lg flex flex-col items-center">
                    <div className="mb-4 border-b-1 border-zinc-500 text-4xl font-bold">
                        <span className='text-red-700'>S</span>
                        <span className=''>Line Score</span>
                    </div>
                    <div className={`mb-4 text-6xl font-bold`}>{getSline(name, age, gender)}</div>
                    <div>
                    {capitalize(name)}
                    <span className="text-lg text-zinc-700 font-bold"> | </span> 
                    {age} yrs
                    <span className="text-lg text-zinc-700 font-bold"> | </span> 
                    {toGenderString(gender)}
                    </div>
                </div>
            </div>
        </div>
    )
}
