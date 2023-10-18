import { Link } from 'react-router-dom';
import { Typography } from 'components';

const NavigateButton = (props: { name: string; path: string }) => {
    return (
        <Link className="navigateButton" to={`${props.path}`}>
            <Typography style={{ color: 'white' }}>{props.name}</Typography>
        </Link>
    );
};

export default NavigateButton;
