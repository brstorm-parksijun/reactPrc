import { useState } from 'react';

export default function Word({ word: w }) {
  const [word, setWord] = useState(w);
  const [isShow, setIsShow] = useState(false);
  const [isDone, setIsDone] = useState(word.isDone);

  function toggleShow() {
    setIsShow(!isShow);
  }

  function toggleDone() {
    //   setIsDone(!isDone);
    // PUT method
    // 바디값에 들어가는 것은 확인 바디의 문제가 아니라 PUT의 문제로 보임
    fetch(`http://localhost:3001/words/${word.id}`, {
      method: 'PUT',
      headers: {
        'Constent-Type': 'application/json',
      },
      body: JSON.stringify({
        ...word,
        isDone: !isDone,
      }),
    }).then((res) => {
      console.log(res);
      if (res.ok) {
        setIsDone(!isDone);
      }
    });
  }

  function del() {
    if (window.confirm('삭제하시겠습니까?')) {
      fetch(`http://localhost:3001/words/${word.id}`, {
        method: 'DELETE',
      }).then((res) => {
        if (res.ok) {
          setWord({ id: 0 });
        }
      });
    }
  }

  if (word.id === 0) {
    console.log(word.id);
    return null;
  }

  return (
    <div>
      <tr className={isDone ? 'off' : ''}>
        <td>
          <input type='checkbox' checked={isDone} onChange={toggleDone} />
        </td>
        <td>{word.eng}</td>
        <td>{isShow && word.kor}</td>
        <td>
          <button onClick={toggleShow}>뜻 {isShow ? '숨기기' : '보기'}</button>
          <button onClick={del} className='btn_del'>
            삭제
          </button>
        </td>
      </tr>
    </div>
  );
}
