import React from 'react'

export default function Card(props) {
  return (
    <div className='m-3 shadow p-3 bg-gradient-to-r from-neutral-300  to- stone-400'>
        {props.children}
    </div>
  )
}
