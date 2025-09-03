export default function Keyboard({letter, letterGuessed, classes}) {
    return (
        <button className={classes} onClick={() => letterGuessed(letter)}>{letter}</button>
    )
}
