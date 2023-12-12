import { useState } from "react"
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

	console.log('random word to guess: ', wordToGuess)
	return (
		<div className={classes.outer_container}>
			<div className={classes.inner_container}>
				Lose Win
			</div>
			<HangmanDrawing />
			<HangmanWord />
			<HangmanKeyboard />
		</div>
	)
}

export default App
