import React, {useState} from "react";
import Buttons from './Components/Buttons';
import Data from './Components/Data';

const App = () => {
    const [ data, setData ] = useState('People');
    
    return ( 
        <div className='App'>
            <h1>star war info</h1>
            <Buttons setData={setData}/>
            <Data data={data} />
        </div>
     );
}
 
export default App;