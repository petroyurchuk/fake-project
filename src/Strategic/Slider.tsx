import strageticInfo from '../data/strategic.json'

const Slider = () => {
    return (
        <div className="strategic__slider slider-strategic">
            <h2 className="slider-strategic__title">
                {strageticInfo[1].title}
            </h2>
            <p className="slider-strategic__description">
                {strageticInfo[1].description}
            </p>
        </div>
    )
}

export default Slider
