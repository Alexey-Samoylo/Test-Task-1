import { CSSProperties } from "react";
import { Link } from "react-router-dom";

const NavigateButtonStyle: CSSProperties  = {
    backgroundColor: 'blue',
    color: 'white',
    maxWidth: 'fit-content',
    padding: '2px 5px',
    borderRadius: '5px',
    textDecoration: 'none'
}

const NavigateButton = (props: {name: string, path: string}) => {
    return (
        <Link style={NavigateButtonStyle} to={`${props.path}`}>{props.name}</Link>
    )
}

export default NavigateButton;