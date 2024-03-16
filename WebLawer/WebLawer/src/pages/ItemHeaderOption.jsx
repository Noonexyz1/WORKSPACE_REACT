import './ItemHeaderOption.css'

function ItemHeaderOption(props) {
    return(
        <div className='space-between-item hover-item'>
            <label className='space-between-item-list'>{props.nameItem}</label>
        </div>
    );
}

export default ItemHeaderOption;