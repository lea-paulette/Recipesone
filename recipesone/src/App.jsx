import './App.css'
import { Routes, Route } from 'react-router-dom';
import Liste from './components/Liste'
import Navbar from './components/Navbar'
import RecipePage from './Pages/RecipePage'
import LoginPage from './Pages/LoginPage'
import Search from './components/Search'

function App() {

  return (
    <div className="App">
      <header>
      <Navbar/>
      </header>
      <div className="window">
      <Routes>
       <Route path="/" element={<Liste/>}/>
       <Route path="/Pages/RecipePage" element={<RecipePage/>}/>
       <Route path="/Pages/LoginPage" element={<LoginPage/>}/>
      </Routes>
      </div>
      <div className="searchBlock">
        <h4>Rechercher</h4>
      <Search/>
      </div>
    </div>
  )
}

export default App
