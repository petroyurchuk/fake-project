import Slider from './Slider'
import Button from '../Button/Button'
import strageticInfo from '../data/strategic.json'

import './Strategic.css'
const Strategic = () => {
    return (
        <section className="strategic">
            <div className="strategic__container">
                <div className="strategic__info-wrappper">
                    <h1 className="strategic__title">
                        {strageticInfo[0].title}
                    </h1>
                    <p className="strategic__description">
                        {strageticInfo[0].description}
                    </p>
                    <Button value="Learn more" />
                </div>
                <Slider />
            </div>
        </section>
    )
}

export default Strategic
