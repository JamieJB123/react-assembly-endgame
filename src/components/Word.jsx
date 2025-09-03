export default function Word({letter, isGuessed}) {
    return (
        <span className="letter">{isGuessed ? letter : ""}</span>
    )
}
