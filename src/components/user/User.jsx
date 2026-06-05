const User = ({user}) =>{
    return(
        <div>
            <b>{user.id}. {user.username}</b> <span>({user.email}) </span>
            <button>x</button>
        </div>
    )
}

export default User;