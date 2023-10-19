import ListItem from "../ListItem/ListItem";
import './ItemList.css'

const ItemList = (props) => {

    if(props.usersList.length===0){
        return(
            <div className="userList">
                No any user found.
            </div>
        )
    }


    return (
        <div className="userList">
            <ul>
                {
                    props.usersList.map((user) => {
                        return <ListItem key={user.id} username={user.username} age={user.age} ></ListItem>

                    })
                }
            </ul>

        </div>
    )

}

export default ItemList;