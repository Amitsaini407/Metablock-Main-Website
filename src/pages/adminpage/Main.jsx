import React from 'react'

import Header from '../../components/Header';
import { Outlet } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';

export default function Main() {
  return (
    <div className='bg-white min-h-[100vh] w-full'>
        <Sidebar/>
        <Outlet/>
       
    </div>
  )
}
