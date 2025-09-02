export default function Chips(props) {
    return (
    <div className="chips" style={{ backgroundColor: props.bgColor, color: props.color}}>
        {props.name}
    </div>
    )
}
