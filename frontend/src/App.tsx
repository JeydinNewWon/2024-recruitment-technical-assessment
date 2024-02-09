import './App.css';
import { Sidebar } from './components/Sidebar/Sidebar';
import { Title } from './Title';
import { NavHeader } from './components/NavHeader/NavHeader';
import { LandingBody } from './LandingBody';

function App() {
  return (
    <>
      <Sidebar/>
      <div className='ml-20 xs:ml-15'>
        <div className='mb-20'>
          <NavHeader/>
          <Title/>
          <LandingBody/>
        </div>
      </div>
    </>
  )
}

export default App
