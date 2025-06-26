export default function NewButton({isGameOver, startNewGame}) {
    // This component renders a button to start a new game when the current game is over.
    // It receives two props: isGameOver (a boolean indicating if the game is over)

    // and startNewGame (a function to start a new game).   
    const element = isGameOver ? (<button
                        className="new-game"
                        onClick={startNewGame}
                    >
                        New Game
                </button>) : null;
    return (
            element
    )
}