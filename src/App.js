
import './App.css';
import Header from './Containers/header/Header';
import Todo from './Containers/Todo/Todo';
import Footer from './Containers/footer/Footer';
import Theme from './Contexts/MoodContext';
import { useState } from 'react';

function App() {
  const [theme,setTheme]=useState("dark")
  
  return (
    <Theme.Provider value={{theme:theme,setTheme:setTheme}} >
      <Header/>
      <Todo/>
      <Footer/>
    </Theme.Provider>
  );
}

export default App;
