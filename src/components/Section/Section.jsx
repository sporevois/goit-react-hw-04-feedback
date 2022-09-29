import PropTypes from 'prop-types';
import styles from "../Section/Section.module.css"

const Section = ({ title, children }) => {
    return (
        <div className={styles.wrapper}>
            <h2>{title}</h2>
            {children}
        </div >
    )

}
export default Section;

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.element.isRequired
}