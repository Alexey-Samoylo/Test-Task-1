import { CSSProperties } from 'react'
import { Link } from 'react-router-dom'

const NavigateButton = (props: { name: string; path: string }) => {
    return (
        <Link className="navigateButton" to={`${props.path}`}>
            {props.name}
        </Link>
    )
}

export default NavigateButton
