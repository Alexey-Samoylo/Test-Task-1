import { Link } from "react-router-dom";

const NavigateButton = (props: {name: string, path: string}) => {
    return (
        <Link to={`${props.path}`}>{props.name}</Link>
    )
}

export default NavigateButton;