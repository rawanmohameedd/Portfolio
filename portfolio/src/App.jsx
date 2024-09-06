
import Aboutme from './Components/Aboutme';
import Contactme from './Components/contactme';

export default function App() {  
  return (  
    <div className='flex  flex-wrap justify-between '>
      <div className='flex-1'>
      <Aboutme/>

      </div>
      <div className='flex-1 '>
      <Contactme/>

      </div>
    </div> 
  );  
}  
