export default function GameStatus ({renderGameStatus,gameStatusClass}){
    return (
        <section
                aria-live="polite"
                role="status"
                className={gameStatusClass}
            >
                {renderGameStatus()}
            </section>
    )
}