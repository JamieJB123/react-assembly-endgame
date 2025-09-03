export default function Status(props) {

    return (
        <section className={props.classes} aria-live="polite" role="status">
            {props.gameOver ? (
                <>
                    <h2>{props.gameWon ? "You win!" : props.gameLost ? "Game over!" : ""}</h2>
                    <p>{ props.gameWon ? "Well done! 🎉" : props.gameLost ? "You lose! Better start learning Assembly 😭" : ""}</p>
                </>) : props.lastGuessedIncorrect &&
                <p>{props.farewellMessage}</p>}
        </section>
    )
}
