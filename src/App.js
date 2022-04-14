import './App.css';
import leaf from "./assets/leaf.png";

function App() {
  return (
    <div className="app">
      <form>
        <div>
        <img src={leaf} />
          <label for="event">Событие</label>
          <textarea id="event" type="text" />
        </div>
        <div>
        <img src={leaf} />
          <label for="minds">Мои мысли</label>
          <textarea id="minds" type="text" />
        </div>
        <div>
          <img src={leaf} />
          <label for="feelings">Мои чувства</label>
          <textarea id="feelings" type="text" />
        </div>
        <div>
        <img src={leaf} />
          <label for="activities">Мои действия</label>
          <textarea id="activities" type="text" />
        </div>
        <button>Сохранить</button>
      </form>
    </div>
  );
}

export default App;
