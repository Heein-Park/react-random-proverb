import logo from './logo.svg';
import './App.css';

const proverbs = [
  "자신이 해야 할 일을 결정하는 사람은 세상에서 단 한 사람, 오직 나 자신뿐이다. -오손 웰스-",
  "이 세상에서 가장 친절한 선생은 자기 자신이다. 가장 진실한 책도 자기 자신이다. 또한 가장 훌륭한 교육도 자기 자신이다. -법구 비유경-",
  "호기심이란 무지의 고백인데, 그것은 의도적이며 당당하며 열렬하다. -류빈슈타인-",
  "우리가 두려워하는 공포는 종종 허깨비이지만, 그럼에도 불구하고 실제 고통을 초래한다. -실러-"
]

// 배열을 받아서 그 안의 한 요소를 무작위로 고르는 함수
function getRandomItem(array) {
  if(Array.isArray(array) && array.length > 0) {
    const index = parseInt(Math.random() * array.length) - 1
    return array[index]
  } else {
    return null
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div>
          {getRandomItem(proverbs)}
        </div>
      </header>
    </div>
  );
}

export default App;
