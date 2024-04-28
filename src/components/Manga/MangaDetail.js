import React from 'react';
import './MangaDetail.css'
import {styled} from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import {Grid} from "@mui/material";
import logo from '../../assest/logo.jpg'
import Navbar from "../Containers/Navbar/Navbar";


const MangaDetail = ({mangaId}) => {

    const mangas = [
        {id: 1, title: 'One Piece', author: 'Eiichiro Oda', description: 'Bu, korsanlar hakkında bir manga...'},
        {id: 2, title: 'Attack on Titan', author: 'Hajime Isayama', description: 'Bu, devler hakkında bir manga...'},
        {
            id: 3,
            title: 'My Hero Academia',
            author: 'Kohei Horikoshi',
            description: 'Bu, süper kahramanlar hakkında bir manga...'
        },
    ];

    const Item = styled(Paper)(({theme}) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    const manga = mangas.find((manga) => manga.id === parseInt(mangaId));

    if (!manga) {
        return <div>Manga bulunamadı.</div>;
    }

    return (
        <div className="MangaDetail">
            <Navbar/>
            <Box sx={{flexGrow: 1}}>
                <Grid
                    container
                    spacing={2}
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Grid item xs={4}>
                        <Item>
                            <img src={logo} alt="Logo"/>
                        </Item>
                    </Grid>
                    <Grid item xs={6}>
                        <Item>
                            <h1>{manga.title}</h1>
                            <h3>{manga.author}</h3>
                            <p>{manga.description}</p>
                        </Item>
                    </Grid>

                </Grid>
            </Box>
        </div>
    );
};

export default MangaDetail;
