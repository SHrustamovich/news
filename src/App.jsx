import { Link, Route, Routes } from "react-router-dom";
import LocalNews from "./Local";
import ForignNews from "./Forign";

const App = () => {
  const propsData = {
    username: "Xudayshukur",
    password:"123abs",
   }
    return (
        <div className='container'>
            <div className='header'>
                <Link to='/local' className='link'>
                    Maxalliy yangiliklar
                </Link>
                <Link to='/forign' className='link'>
                    Xalqoro yangiliklar
                </Link>
            </div>
            <div>
                <Routes>
            <Route path='/local' element={<LocalNews data1={propsData} />} />
                    <Route path='/forign' element={<ForignNews/>} />
                </Routes>
            </div>
        </div>
    );
};

export default App;
