const User = ({user, onRemove, onToggle}) =>{
    return(
        <div>
            <b>{user.id}. {user.username}</b> <span>({user.email}) </span>
            {/* 삭제하고자 하는 대상의 id를 전송  ()=>{ 함수명(값) }*/}
            <button onClick={()=>{onRemove(user.id)}}>x</button>
        </div>
    )
}

export default User;