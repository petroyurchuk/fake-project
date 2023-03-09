import './ContactUs.css'

const ContactUS = () => {
    return (
        <div className="wrapper-form">
            <form className="main-form">
                <input type="text" className="form__name" placeholder="Name" />
                <input
                    type="tel"
                    className="form__tel"
                    placeholder="Number phone"
                />
                <input
                    type="email"
                    className="form__email"
                    placeholder="Email"
                    pattern="[a-z]"
                />
                <button className="form__btn">Send</button>
            </form>
        </div>
    )
}

export default ContactUS
