import React , {useContext} from 'react'
import './footer.css'
import Theme from '../../Contexts/MoodContext'

function Footer() {
  const theme=useContext(Theme);
  const classes=["footer",theme.theme];

  return (
    <div className={classes.join(" ")} ></div>
  )
}

export default Footer