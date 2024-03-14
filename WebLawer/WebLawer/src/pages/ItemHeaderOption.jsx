import './ItemHeaderOption.css'

function ItemHeaderOption(props) {
    return(
        <div className='space-between-item hover-item'>
            <h2>{props.nameItem}</h2>
        </div>
    );
}

export default ItemHeaderOption;