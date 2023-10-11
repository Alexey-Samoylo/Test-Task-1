import { Link } from "react-router-dom";

const NavigateButtonStyle = {
    
}

const NavigateButton = (props: {name: string, path: string}) => {
    return (
        <Link style={{backgroundColor: 'blue', color: 'white'}} to={`${props.path}`}>{props.name}</Link>
    )
}

export default NavigateButton;