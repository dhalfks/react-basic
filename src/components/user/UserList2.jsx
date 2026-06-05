import { useRef, useState } from "react";
import UserList1 from "./UserList1";

// users 객체에 [{},{},{}] (등록, 삭제, 리스트보기) 하기위한 컴포넌트
function UserList2(){

    // users의 객체를 등록, 수정, 삭제 하기 위해서 useState()로 관리
    const [users, setUsers] = useState([
        {
            id: 1,
            username: 'hong',
            email: 'publicHong@naver.com',
            active: true
        },
        {
            id: 2,
            username: 'kim',
            email: 'kim@naver.com',
            active: false
        },
        {
            id: 3,
            username: 'lee',
            email: 'leeTest@gmail.com',
            active: false
        },
    ]);

    // 컴포넌트 안에서 관리할 수 있는 변수 생성
    // useRef() : useRef()로 관리하는 변수는 값이 바뀐다고 해서 컴포넌트가 재렌더링 되지 않음.
    const nextId = useRef(4);

    return(
        <div>
            {/* 등록 컴포넌트 => CreateUser */}

            {/* UserList 컴포넌트 => UserList1 users={users} */}
            <UserList1 users={users} />

        </div>
    )
}

export default UserList2;