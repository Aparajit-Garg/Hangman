import classes from '../styles/HangmanDrawing.module.css'

const HangmanDrawing = () => {
  return (
    <div className={classes.container}>
        <div className={classes.top_horizontal}>
            <div className={classes.hanging_line}>
        </div>
        </div>
        <div className={classes.vertical_line}></div>
        <div className={classes.base}></div>
       
    </div>
  )
}

export default HangmanDrawing