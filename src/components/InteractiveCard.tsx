'use client'
import React from "react";

export default function InteractiveCard({ children, Name } : { children:React.ReactNode, Name:string }) {

    function onCardMouseAction(event: React.SyntheticEvent) {
        if (event.type == 'mouseover') {
            event.currentTarget.classList.remove('shadow-lg');
            event.currentTarget.classList.add('shadow-2xl');

            event.currentTarget.classList.remove('bg-white');
            event.currentTarget.classList.add('bg-neutral-200');
        } else {
            event.currentTarget.classList.remove('shadow-2xl');
            event.currentTarget.classList.add('shadow-lg');

            event.currentTarget.classList.remove('bg-neutral-200');
            event.currentTarget.classList.add('bg-white');
        }
    }

    function onVenueSelected() {
        alert(`You selected ${Name}!`)
    }

    return (
        <div className='w-[300px] h-[250px] rounded-lg shadow-lg bg-white' onClick={ () => onVenueSelected() } onMouseOver={(e) => onCardMouseAction(e)} onMouseOut={(e) => onCardMouseAction(e)}>
            { children }
        </div>
    );
}