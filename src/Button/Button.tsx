import './Button.css'

interface ButtonProps {
    value: string
}

const Button = (props: ButtonProps) => {
    return <button className="main-button">{props.value}</button>
}

export default Button
