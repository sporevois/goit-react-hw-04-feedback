import React from 'react';
import PropTypes from 'prop-types';
import styles from "../FeedbackOptions/FeedbackOptions.module.css";


const FeedbackOptions = ({ options, leaveFeedback }) => {
	return (
		<>
            {options.map((option) => {
                return <button key={option} type="button" className={styles.btn} name={option} onClick={leaveFeedback}>
                    {option}
                </button>
            })}
		</>
	);
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    leaveFeedback: PropTypes.func.isRequired
}