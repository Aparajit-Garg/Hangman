import { useState, useEffect, useCallback } from "react"
import words from './wordList.json'
import classes from './App.module.css'
import HangmanWord from "./components/HangmanWord";
import HangmanDrawing from "./components/HangmanDrawing";
import HangmanKeyboard from "./components/HangmanKeyboard";

function App() {
	const [wordToGuess, setWordToGuess] = useState(() => {
		return words[Math.floor(Math.random() * words.length)];
	})

	const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

	const incorrectLetters = guessedLetters.filter(letter => !wordToGuess.includes(letter))
	
	const addGuessedLetter = useCallback((key: string) => {
		if (guessedLetters.includes(key)) return
		
		setGuessedLetters(prev => [...prev, key])
	}, [guessedLetters])

	useEffect(() => {
		const handler = (e: KeyboardEvent) => {
			const key = e.key;
			if (!key.match(/^[a-z]$/)) return;
			
			e.preventDefault()
			addGuessedLetter(key)
		}

		document.addEventListener('keypress', handler)

		return () => document.removeEventListener('keypress', handler)
	}, [guessedLetters])

	console.log('random word to guess: ', wordToGuess)
	return (
		<div className={classes.outer_container}>
			<div className={classes.inner_container}>
				Lose Win
			</div>
			<HangmanDrawing numberOfGuesses={incorrectLetters.length} />
			<HangmanWord guessedLetters={guessedLetters} wordToGuess={wordToGuess} />
			<HangmanKeyboard activeLetter={guessedLetters.filter(letter => wordToGuess.includes(letter))} inActiveLetters={incorrectLetters} addGuessedLetters={addGuessedLetter} />
		</div>
	)
}

export default App
