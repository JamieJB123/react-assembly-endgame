export default function Word({letter, isGuessed, gameOver, classes}) {
    return (
        <>
            {gameOver ?
            <span className={classes}>{letter}</span> :
            <span className={classes}>{isGuessed ? letter : ""}</span>}
        </>
    )
}
