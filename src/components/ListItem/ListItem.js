import './ListItem.css'

const ListItem=(props)=>{
    return(
        <li>
            {props.username} {'('} {props.age} Years Old {')'}
        </li>
    )
}

export default ListItem;