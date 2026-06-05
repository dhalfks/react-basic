import { useRef, useState } from "react";

function InputSample2(){

    // input의 값이 여러개 일 경우 하나의 object를 사용하여 key:value로 관리
    const [inputs, setInputs] = useState({
        // {} 안에서 사용할 이름을 key:value 형태로 초기화
        id:'',
        nick:''
    });

    const {id, nick} = inputs;

    const onChange = (e)=>{
        console.log(e.target);
        // name => key  / value => value
        const {name, value} = e.target;
        setInputs({
            ...inputs,
            [name]: value // name 키를 가지는 value 값을 저장
        })

        // setInputs => {id:1234} / {nick:1234}
        // 객체로 useState 구성할 경우 하나의 값이 변경되면 다른 값이 사라지는 현상이 발생
        // 이전에 미리 생성해놓은 값들을 복사
    }

    // useRef() : 특정 DOM을 선택해야 하는 상황에 getElementBy** / querySelector
    const idInput = useRef();


    const onClick=()=>{
        setInputs({
            id:'',
            nick:''
        });
        // id 위치로 focus를 이동해주기.
        idInput.current.focus();
    }

    return(
        <div>
            <input 
                type="text" 
                name="id" 
                value={id} 
                placeholder="ID..." 
                onChange={onChange}
                ref={idInput}
            />
            <input 
                type="text" 
                name="nick" 
                value={nick} 
                placeholder="NICK..." 
                onChange={onChange}
            />
            <button onClick={onClick}>초기화</button>
            <div>ID(nick) : {id}({nick}) </div>
        </div>
    )
}

export default InputSample2;