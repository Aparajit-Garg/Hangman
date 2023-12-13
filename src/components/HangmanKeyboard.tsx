import classes from '../styles/HangmanKeyboard.module.css'
import keys from '../keyboardKeys'

type HangmanKeyboardProps = {
	activeLetter: string[],
	inActiveLetters: string[],
	addGuessedLetters: (letter: string) => void,
	disabled?: boolean
}

const HangmanKeyboard = ({ activeLetter, inActiveLetters, addGuessedLetters, disabled=false } : HangmanKeyboardProps) => {
	if (disabled) return;
	return (
		<div className={classes.container}>
			{keys.map((key) => {
				const isActive = activeLetter.includes(key)
				const inActive = inActiveLetters.includes(key)
				return (
					<button 
					disabled={isActive || inActive}
					onClick={() => addGuessedLetters(key)} 
					className={`${classes.keys} ${isActive ? classes.active : ''} ${inActive ? classes.inactive : ''}`} 
					key={key}
					>
						{key}
					</button>
				)
			})}
		</div>
	)
}

export default HangmanKeyboard