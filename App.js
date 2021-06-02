import List from './components/List';


function App() {
  const arr=[{title:1},{title:2},{title:3},{title:4}];
  return (
    <div>
    <div className="left-side">
      <List items={arr}/>
    </div>
    </div>
  );
}

export default App;

