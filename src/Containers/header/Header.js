import React,{useContext} from 'react'
import Theme from '../../Contexts/MoodContext'
import './header.css'


function Header() {
  const theme =useContext(Theme)
  const classes =["header",theme.theme];
  return (
    <div className={classes.join(" ")} ></div>
  )
}

export default Header