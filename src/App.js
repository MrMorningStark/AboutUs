import { useMediaQuery } from '@mui/material';
import { useEffect, useState } from 'react';
import './App.css'
import { About } from './components/About';
function App() {
  const isMobile = useMediaQuery('(max-width: 600px)')
  const isTablet = useMediaQuery('(min-width: 800px)')
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    // clean up code
    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return <>

    {/* navabr */}
    <div className='navbar' >
      <h1>About Us</h1>
    </div>


    {/* main */}
    <div className=''>
      <h1 className='h1 text-center'>PDM University</h1>
      <h3 className='text-center'>Minor Group Project</h3>
      <h3 className='text-center'>Drawing App</h3>
      <h3 className='h3 text-center'>Developed By   -</h3>
      <div className='row m-0'>
        <div className='col-6'>
        <About id='1' name='Rajat Khatri' rollNo='A40320014' />
        </div>
        <div className='col-6'>
        <About id='2' name='Manish Sharma' rollNo='A40320017' />
        </div>
        <div className='col-6'>
        <About id='3' name='Vanshul Dahiya' rollNo='A40320026' />
        </div>
        <div className='col-6'>
        <About id='4' name='Prashant' rollNo='A40320036' />
        </div>
        <div className='col-6'>
        <About id='5' name='Nikhil Chillar' rollNo='A40320042' />
        </div>
        
      </div>
    </div>
  </>
}

export default App;


