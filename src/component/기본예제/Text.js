import { useState } from 'react';
import UserName from './UserName';

const Text = ({ age }) => {
  //   let name = 'Mike'; //변수지 state가 아니다 그래서 리액트에서 확인하고 바꿔주지 못하는것

  const [name, setName] = useState('Mike'); //name = 변수 setName = 실행되는 함수 구조분해할당
  const msg = age > 19 ? '성인입니다.' : '미성년자 입니다.';

  //   const [age, setAge] = useState(props.age);

  //   function changeName() {
  //     const newName = name === 'Mike' ? 'Jane' : 'Mike';
  //     setName(newName);
  //     // document.getElementById('name').innerText = name; // 돔을 업데이트 해주는 자바스크립트 코드
  //   }
  //   function changeAge() {
  //     const newAge = age + 1;
  //     setAge(newAge);
  //   }

  return (
    <div>
      <h1>state</h1>
      <h2 id='name'>
        {name}({age} : {msg})
      </h2>
      <UserName name={name} />
      <button
        onClick={() => {
          setName(name === 'Mike' ? 'Jane' : 'Mike');
          //   setAge(age +1);
        }}
      >
        Change
      </button>
    </div>
  );
};

export default Text;
