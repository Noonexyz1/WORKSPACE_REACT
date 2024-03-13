import './ItemHeaderOption.css'

function ItemHeaderOption() {
    //debo recibir este valor por parametro
    let nombreItem = "Item..."

    return(
        <div className='space-between-item'>
            <h2>{nombreItem}</h2>
        </div>
    );
}

export default ItemHeaderOption;