import World from './World';
import styles from './Hello.module.css';

const Hello = () => {
  let showName = () => {
    console.log('Mike');
  };
  function showAge(age) {
    console.log(age);
  }

  let showText = (txt) => {
    console.log(txt);
  };

  return (
    <div>
      <h1>Hello</h1>
      <button onClick={showName}>show name</button>
      <button
        onClick={() => {
          showAge(30);
        }}
      >
        show age
      </button>
      <button onClick={showAge}>showshow age</button>
      <input
        type='text'
        onChange={(e) => {
          const txt = e.target.value;
          showText(txt);
        }}
      />
    </div>
  );
};

export default Hello;
