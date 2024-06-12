import { Button } from '@mui/material'
import React from 'react'

const ModalButton = ({onClick, label}) => {
  return (
       <Button onClick={onClick} sx={{ color: "white" }}>
       {label}
     </Button>
  )
}

export default ModalButton