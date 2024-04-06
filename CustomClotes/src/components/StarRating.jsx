import './StarRating.css'
import StarLogo from '../assets/star.png'

function StarRating(props){
    const iterable = Array.from({length: props.valueToShow}, (_, i) => i)
    return(
        <div className='flex flex-row'>
            {iterable.map((star) => (
                <img
                src={StarLogo}
                alt="str"
                className="h-7 w-7"/>
            ))}
        </div>
    )
}

export default StarRating;