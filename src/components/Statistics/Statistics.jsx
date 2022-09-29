import PropTypes from 'prop-types';
import styles from "../Statistics/Statistics.module.css";

const Statistics = ({ results, total, positivePercentage }) => {
    const {good, neutral, bad} = results
    return(
        <ul className={styles.list}>
            <li>Good: {good}</li>
            <li>Neutral: {neutral}</li>
            <li>Bad: {bad}</li>
            <li>Total: {total}</li>
            <li>Positive feedback: {positivePercentage} %</li>
        </ul>
    )
}
export default Statistics;

Statistics.propTypes = {
    results: PropTypes.objectOf(PropTypes.number),
	total: PropTypes.number.isRequired,
	positivePercentage: PropTypes.number.isRequired
}