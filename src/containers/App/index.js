import { Routes, Route } from "react-router-dom";
import User from '../User';
import Map from '../Map';

const App=()=>{
    return (
        <Routes>
            <Route path="/" element={<User />} />
            <Route path="/places" element={<Map />} />
        </Routes>
    );
}

export default App;  