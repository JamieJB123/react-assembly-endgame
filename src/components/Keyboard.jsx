export default function Keyboard({letter, letterGuessed, classes, gameOver}) {
    return (
        <button
        className={classes}
        onClick={() => letterGuessed(letter)}
        disabled={gameOver}
        aria-disabled={gameOver}
        aria-label={`Letter ${letter}`}>
            {letter}
        </button>
    )
}
