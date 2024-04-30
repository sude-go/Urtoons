import './App.css';
import HomePage from "../Home/HomePage";
import {BrowserRouter as Router, Routes, Route, useParams} from 'react-router-dom';
import MangaDetail from "../Manga/MangaDetail";
import MangaList from "../Manga/MangaList";
import MangaRead from "../Manga/MangaRead";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/mangalar" element={<MangaList/>}/>
                <Route path="/mangalar/:mangaId" element={<MangaDetailWrapper/>}/>
                <Route path="/mangalar/:mangaId/read" element={<MangaReaderWrapper/>}/>
            </Routes>
        </Router>
    );
}

export default App;

const MangaDetailWrapper = () => {
    const {mangaId} = useParams();
    return <MangaDetail mangaId={mangaId}/>;
};

const MangaReaderWrapper = () => {
    const {mangaId} = useParams();
    return <MangaRead mangaId={mangaId}/>;
}