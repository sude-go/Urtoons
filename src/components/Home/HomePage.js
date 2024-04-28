import React from 'react';
import './HomePage.css';
import Navbar from "../Containers/Navbar/Navbar";
import Button from "@mui/material/Button";
import Mangas from "../Manga/MangaList";
// import {Link} from "react-router-dom";
import {Link as ScrollLink} from 'react-scroll';

const HomePage = () => {

    return (
        <div className="HomePage">
            <Navbar/>
            <div className="Banner">
                <h1>Manga Okuyucu</h1>
                <p>En sevdiğiniz mangaları keşfedin ve okuyun!</p>

                <Button variant="contained" color="secondary" style={{margin: 10}}>
                    <ScrollLink
                        to="mangalarSection" // Kaydırılacak hedefin id'si
                        smooth={true}
                        duration={500}
                    >
                        Şimdi Oku
                    </ScrollLink>
                </Button>
            </div>
            <div id="mangalarSection">
                <Mangas/>
            </div>

        </div>
    );
};

export default HomePage;
