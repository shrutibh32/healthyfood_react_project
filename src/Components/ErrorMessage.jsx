import React from 'react'

export default function ErrorMessage({items}) {
 
  return (
    <>
     {items.length===0 && <h3>I am Still hungry.</h3>}
    </>
  )
}
