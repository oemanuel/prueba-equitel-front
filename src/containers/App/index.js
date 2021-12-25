import { Routes, Route, useLocation } from "react-router-dom";
import User from '../User';
import Map from '../Map';
import Place from "../Place";
const App = () => {

    const location = useLocation();
    const state = location.state;
    console.log(location)
    return (
        <>
            <Routes location={state?.backgroundLocation || location}>
                <Route path="/" element={<User />} />
                <Route path="/places" element={<Map />} />
            </Routes>
            {state?.backgroundLocation && (
                <Routes>
                    <Route path="/place/:id" element={<Place />} />
                </Routes>
            )}
        </>
    );
}

export default App;  