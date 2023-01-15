import { useRef } from 'react';
import './App.css';
import Menu from './Components/Menu';
import NewsPrincipal from './Components/NewsPrincipal';
import NewsText from './Components/NewsText';
import NewsWithImage from './Components/NewsWithImage';

function App() {

  const backgroundMain = useRef()

  return (
      <div className="main" ref={backgroundMain}>
        <Menu backgroundMain={backgroundMain}/>
        <NewsPrincipal/>
        <NewsText/>
        <NewsWithImage/>
      </div>
  );
}

export default App;
