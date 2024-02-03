import React from 'react';
import PropTypes from 'prop-types';
import './Error.css';

const Error = ({ errorText, onErrorButtonClick }) => {
    return (
        <div className="error">
            {errorText}
            <div className="error__button" onClick={onErrorButtonClick}>
                Try again
            </div>{' '}
        </div>
    );
};

Error.propTypes = {
    errorText: PropTypes.string.isRequired,
    onErrorButtonClick: PropTypes.func.isRequired,
};

export default Error;
