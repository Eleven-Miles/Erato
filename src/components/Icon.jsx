import React from 'react';
import { icons } from '../context/icons';

const Icon = ({ icon, block, width, height, fill, ...props }) => {
    return (
        <svg
            viewBox="0 0 1024 1024"
            fill={fill}
            width={width}
            height={height ? height : width}
            block={block}
            {...props}
        >
            <path d={icons[icon]} fill={fill} />
        </svg>
    );
};

export default Icon;
