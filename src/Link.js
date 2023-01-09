function Link(props) {
    return (
        <div className="link">
            <a href={props.link}>
                <img className="icon" src={props.icon} />
                <h4>{props.name}</h4>
            </a>
        </div>
    )
}

export default Link;