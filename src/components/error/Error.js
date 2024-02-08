import React from 'react';
import styles from './Error.modules.css';
import PropTypes from 'prop-types';

const Error = ({ errorText, onErrorButtonClick }) => {
    return (
        <div className={styles.error}>
            {errorText}
            <div className={styles.error__button} onClick={onErrorButtonClick}>
                Try again
            </div>
        </div>
    );
};

Error.propTypes = {
    errorText: PropTypes.string.isRequired,
    onErrorButtonClick: PropTypes.func.isRequired,
};

export default Error;
