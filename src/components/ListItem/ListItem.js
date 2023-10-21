import './ListItem.css'

const ListItem=(props)=>{
    return(
        <li>
            {props.username} {'('} {props.age} Years Old {')'} {' -'} {props.collegeName}
        </li>
    )
}

export default ListItem;