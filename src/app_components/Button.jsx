/* eslint-disable react/prop-types */
import './css/Button.css'

function Button(props) {

    return (
        <button {...props} className='btn'>{props.value}</button>
    )
}

export default Button