import classes from '../styles/HangmanWord.module.css'

type HangmanWordProps = {
    guessedLetters: string[],
    wordToGuess: string,
    reveal?: boolean
}

const HangmanWord = ({ guessedLetters, wordToGuess, reveal=false } : HangmanWordProps) => {
    return (
        <div className={classes.container}>
            {wordToGuess.split('').map((letter: string, index: number) => {
                return (
                    <span className={classes.letters} key={index}>
                        <span className={classes.guessed} 
                        style={{visibility: guessedLetters.includes(letter) || reveal ? 'visible' : 'hidden', color: !guessedLetters.includes(letter) && reveal ? 'red' : 'black'}}
                        > 
                            {letter} 
                        </span>
                    </span>
                )
            })}
        </div>
    )
}

export default HangmanWord