import descriptions from '../data/about-us.json'

import './AboutUs.css'
const AboutUs = () => {
    return (
        <div className="wrapper-about-us">
            <h2 className="about-us__title">{descriptions[0].title}</h2>
            <p className="about-us__description">
                {descriptions[0].description}
            </p>
        </div>
    )
}

export default AboutUs
