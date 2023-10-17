import { DEFAULT_TYPOGRAPHY_STYLES } from 'constant';
import { TypographyProps } from 'models';
import { CSSProperties } from 'react';

const Typography = (props: TypographyProps) => {
    const { style = {}, children, onClick, ref, className } = props;
    const styleTypegraphy: CSSProperties = Object.assign(
        {},
        DEFAULT_TYPOGRAPHY_STYLES,
        style
    );
    console.log(styleTypegraphy);
    return (
        <div
            className={className}
            style={styleTypegraphy}
            ref={ref}
            onClick={onClick}>
            {children}
        </div>
    );
};

export default Typography;
