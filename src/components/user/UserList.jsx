// 컴포넌트 분리
const User = ({user}) =>{
    return(
        <div>
            <b>{user.id}. {user.username}</b> <span>({user.email})</span>
        </div>
    )
}


function UserList(){
    const users = [
        {
            id: 1,
            username: 'hong',
            email: 'publicHong@naver.com'
        },
        {
            id: 2,
            username: 'kim',
            email: 'kim@naver.com'
        },
        {
            id: 3,
            username: 'lee',
            email: 'leeTest@gmail.com'
        },
    ];
    return(
        <div>
            {/* <div>
                <b>{users[0].username}</b> <span>({users[0].email})</span>
            </div>
            <div>
                <b>{users[1].username}</b> <span>({users[1].email})</span>
            </div>
            <div>
                <b>{users[2].username}</b> <span>({users[2].email})</span>
            </div> */}
            {/* 반복문을 통한 값 출력 => map */}
            {
                users.map(user => (
                    // <h3>{user.username} / {user.email}</h3>
                    <User user={user} key={user.id} />
                ))
            }
            {/* 만약 key로 사용할 값이 없다면... array index 사용 */}
            {
                users.map((user, index) => (
                    <User user={user} key={index} />
                ))
            }


        </div>
    )
}

export default UserList;