import React from 'react';
import './MangaList.css'
import {Link} from 'react-router-dom';
import Typography from "@mui/material/Typography";
import {Card, CardActionArea, CardContent, CardMedia} from "@mui/material";
import Divider from '@mui/material/Divider';
import Navbar from "../Containers/Navbar/Navbar";
import MangaImg1 from "../../assest/7.png";

const MangaList = () => {

    const mangas = [
        {id: 1, title: 'One Piece', author: 'Eiichiro Oda', mangaImg: MangaImg1},
        {id: 2, title: 'Attack on Titan', author: 'Hajime Isayama', mangaImg: MangaImg1},
        {id: 3, title: 'My Hero Academia', author: 'Kohei Horikoshi', mangaImg: MangaImg1},
    ];
    const style = {
       marginTop: 10,
    };

    return (
        <div className="MangaList">
            <Navbar/>
            <Divider style={style}><h2>Mangalar</h2></Divider>
            <div className="Mangas">
                {mangas.map((manga) => (
                    <div key={manga.id}>
                        <Card
                            sx={{width: 225, height: 350}}
                            style={{margin: 20}}
                        >
                            <Link to={`/mangalar/${manga.id}`}
                                  style={{textDecoration: 'none', color: 'inherit'}}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image=""
                                        alt=""
                                    />
                                    <CardContent sx={{height: 184}}>
                                        <Typography gutterBottom variant="h5" component="div">
                                            <h3>{manga.title}</h3>
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {manga.author}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Link>
                        </Card>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MangaList;
