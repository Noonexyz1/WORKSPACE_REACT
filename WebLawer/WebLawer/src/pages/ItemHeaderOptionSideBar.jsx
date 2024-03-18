import './ItemHeaderOptionSideBar.css'

function ItemHeaderOptionSideBar(props) {
    return(
        <div className='space-between-item-sidebar hover-item-sidebar'>
            <label className='space-between-item-list-sidebar'>{props.nameItem}</label>
        </div>
    );
}

export default ItemHeaderOptionSideBar;