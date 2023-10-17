import { DEFAULT_TYPOGRAPHY_STYLES } from 'constants/index';
import { TypographyProps } from 'models';
import { CSSProperties } from 'react';

const Typography = (props: TypographyProps) => {
    const { style = {}, children, onClick = () => {}, ref, className } = props;
    const styleTypography: CSSProperties = Object.assign(
        {},
        DEFAULT_TYPOGRAPHY_STYLES,
        style
    );
    return (
        <div
            className={className}
            style={styleTypography}
            ref={ref}
            onClick={onClick}>
            {children}
        </div>
    );
};

export default Typography;
