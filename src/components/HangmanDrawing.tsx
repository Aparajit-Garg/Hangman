import classes from '../styles/HangmanDrawing.module.css'

const HEAD = () => (
    <div className={classes.head}></div>
)

const BODY = () => (
    <div className={classes.body}></div>
)

const LeftHand = () => (
    <div className={classes.left_hand}></div>
)

const RightHand = () => (
    <div className={classes.right_hand}></div>
)

const LeftLeg = () => (
    <div className={classes.left_leg}></div>
)

const RightLeg = () => (
    <div className={classes.right_leg}></div>
)

const HangmanDrawing = () => {
  return (
    <div className={classes.container}>
        <div className={classes.top_horizontal}>
            <div className={classes.hanging_line}>
                <HEAD />
                <BODY />
                <LeftHand />
                <RightHand />
                <LeftLeg />
                <RightLeg />

            </div>
        </div>
        <div className={classes.vertical_line}></div>
        <div className={classes.base}></div>
    </div>
  )
}

export default HangmanDrawing