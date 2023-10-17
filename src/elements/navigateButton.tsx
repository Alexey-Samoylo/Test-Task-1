import { CSSProperties } from 'react';
import { Link } from 'react-router-dom';
import Typography from './Typography';

const NavigateButton = (props: { name: string; path: string }) => {
    return (
        <Link className="navigateButton" to={`${props.path}`}>
            <Typography>{props.name}</Typography>
        </Link>
    );
};

export default NavigateButton;
