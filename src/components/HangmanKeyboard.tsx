import classes from '../styles/HangmanKeyboard.module.css'
import keys from '../keyboardKeys'

const HangmanKeyboard = () => {
	return (
		<div className={classes.container}>
			{keys.map((key) => {
				return (
					<button className={`${classes.keys}`} key={key}>
						{key}
					</button>
				)
			})}
		</div>
	)
}

export default HangmanKeyboard