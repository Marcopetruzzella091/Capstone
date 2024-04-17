import React from 'react'
import { Link } from '@inertiajs/react'
import Navbarcomponents from '@/Components/Navbarcomponents'

export default function NavbarFooterTemplate( { children } , props) {
  return (
    <>
    <Navbarcomponents />

    {children}

    <footer className="bg-white border-t border-gray-200"> 

    </footer>


    </>
  )
}
