import React from 'react'
import Button from '@material-ui/core/Button'
import ticket_icon from '../../resources/icons/ticket.png'

export default function MyButton(props) {
  return (
   <Button href={props.link} variant="contained" size="small" style={{background: props.bck, color: props.color}}>
     <img src={ticket_icon} className="iconImage" alt="icon_button"/>{props.text}
   </Button>
  )
}
