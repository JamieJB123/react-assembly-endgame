export default function Chips(props) {
    return (
    <div className={props.classes} style={{ backgroundColor: props.bgColor, color: props.color}}>
        {props.name}
    </div>
    )
}
