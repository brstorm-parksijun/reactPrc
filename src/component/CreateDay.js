import useFetch from '../hooks/useFetch';
import { useNavigate } from 'react-router-dom';

const CreateDay = () => {
  const days = useFetch('http://localhost:3001/days');
  const navigate = useNavigate();
  function addDay() {
    fetch('http://localhost:3001/days/', {
      method: 'POST',
      headers: {
        'Context-Type': 'application/json',
      },
      body: JSON.stringify({
        day: Number(days.length) + 1,
      }),
    }).then((res) => {
      if (res.ok) {
        alert('날짜 생성 완료');
        navigate('/');
      }
    });
  }
  return (
    <div>
      <h3>현재 일수 : {days.length}</h3>
      <button onClick={addDay}>Day 추가</button>
    </div>
  );
};

export default CreateDay;
