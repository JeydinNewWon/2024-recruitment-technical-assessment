import './App.css';
import { Sidebar } from './components/Sidebar/Sidebar';
import { Title } from './Title';
import { NavHeader } from './components/NavHeader/NavHeader';
import { LandingBody } from './components/LandingBody/LandingBody';

function App() {
  return (
    <>
      <Sidebar/>
      <div className='ml-20'>
        <div className='mb-20'>
          <Title/>
          <LandingBody/>
        </div>
      </div>
    </>
  )
}

export default App
