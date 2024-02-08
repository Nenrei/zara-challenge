import React from 'react';
import styles from './icons.modules.css';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export const ICON_TYPES = {
    HEART: '--heart',
    HEART_LINE: '--heart-line',
    HEART_LINE_BOLD: '--heart-line-bold',
    SEARCH: '--search',
};
const Icon = ({ type, className }) => {
    const iconClass = classNames(styles.icon, styles[`icon${type}`], className);
    return <div className={iconClass}></div>;
};

Icon.propTypes = {
    type: PropTypes.string.isRequired,
    className: PropTypes.string,
};

export default Icon;
