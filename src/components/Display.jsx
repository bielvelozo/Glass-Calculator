export default props => {
 return(
    <div className="display">
        <div className="memory">{props.memory}</div>
        <div>{props.value}</div>
    </div>
 )
}