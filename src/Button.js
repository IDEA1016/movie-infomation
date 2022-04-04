import PropTypes from "prop-types";
import styles from "./Button.module.css";

function Button({text}){
    return <button class={styles.btn}>{text}</button>
}

// Button.PropTypes={
//     text: PropTypes.string.isRequired,
// }


export default Button;