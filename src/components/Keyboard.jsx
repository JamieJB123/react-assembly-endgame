export default function Keyboard({letter, letterGuessed, classes, gameOver}) {
    return (
        <button className={classes} onClick={() => letterGuessed(letter)} disabled={gameOver}>{letter}</button>
    )
}
