import classes from '../styles/HangmanWord.module.css'

type HangmanWordProps = {
    guessedLetters: string[],
    wordToGuess: string
}

const HangmanWord = ({ guessedLetters, wordToGuess } : HangmanWordProps) => {
    return (
        <div className={classes.container}>
            {wordToGuess.split('').map((letter: string, index: number) => {
                return (
                    <span className={classes.letters} key={index}>
                        <span className={classes.guessed} style={{visibility: guessedLetters.includes(letter) ? 'visible' : 'hidden'}}> {letter} </span>
                    </span>
                )
            })}
        </div>
    )
}

export default HangmanWord