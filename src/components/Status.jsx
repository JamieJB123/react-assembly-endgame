export default function Status(props) {
    return (
        <section className={props.classes}>
            <h2>{props.gameWon ? "You win!" : props.gameLost ? "Game over!" : ""}</h2>
            <p>{ props.gameWon ? "Well done! 🎉" : props.gameLost ? "You lose! Better start learning Assembly 😭" : ""}</p>
        </section>
    )
}
