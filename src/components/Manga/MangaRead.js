import React from 'react';
import {useNavigate} from 'react-router-dom';
import MangaImg1 from "../../assest/7.png";
import './MangaRead.css'
import ReplyAllTwoToneIcon from '@mui/icons-material/ReplyAllTwoTone';


function MangaRead({mangaId}) {
    const navigate = useNavigate()

    const mangas = [
        {
            id: 1,
            title: 'One Piece',
            author: 'Eiichiro Oda',
            description: 'Bu, korsanlar hakkında bir manga...',
            mangaImg: MangaImg1
        },
        {
            id: 2,
            title: 'Attack on Titan',
            author: 'Hajime Isayama',
            description: 'Bu, devler hakkında bir manga...',
            mangaImg: MangaImg1
        },
        {
            id: 3,
            title: 'My Hero Academia',
            author: 'Kohei Horikoshi',
            description: 'Bu, süper kahramanlar hakkında bir manga...',
            mangaImg: MangaImg1
        },
    ]

    const manga = mangas.find((manga) => manga.id === parseInt(mangaId));

    if (!manga) {
        return <div>Loading...</div>; // Or any other appropriate message or action
    }

    return (
        <div className="MangaRead">
            <button onClick={() => navigate(`/mangalar/${manga.id}`)}>
                <ReplyAllTwoToneIcon fontSize="small"/>
                Go Back
            </button>
            <img src={manga.mangaImg} alt="manga"/>
        </div>
    );
}

export default MangaRead;
