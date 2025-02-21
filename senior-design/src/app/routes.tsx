import {Route, Routes} from 'react-router-dom';
import {ErrorPage} from "../components/ErrorPage/error-page.tsx";
import {Query} from "../components/Query/query.tsx";
import {Utilities} from "../components/Utilities/Utilities.tsx";

const App = () => {
    return (
        <Routes>
            <Route path='/' element={<Query/>}/>
            <Route path='/Utilities' element={<Utilities/>}/>
            <Route path='*' element={<ErrorPage/>}/>
        </Routes>
    )
};

export default App;
