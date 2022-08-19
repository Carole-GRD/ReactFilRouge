// import logo from './logo.svg';
import './App.css';


import { useState } from 'react';
import Header from './containers/header/header';
import NavBar from './containers/nav-bar/nav-bar';
import { Drawer } from '@mui/material';
function App() {

  const [menuVisible, setMenuVisible] = useState(false); 

  return (
    <>
      <Header 
        onOpenMenu={() => setMenuVisible(true)} />
        
        <Drawer
            anchor='left'
            open={menuVisible}
            onClose={() => setMenuVisible(false)}>
            <NavBar />
        </Drawer>

      <main className="App">
        
      </main>
    </>
  );
}

export default App;
