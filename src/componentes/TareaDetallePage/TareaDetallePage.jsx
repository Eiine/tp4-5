import React from 'react'
import { useParams } from 'react-router-dom'
export default function TareaDetallePage() {
  const {id}=useParams()
  return (
    <div>{"id numero: "+ id}</div>
  )
}
