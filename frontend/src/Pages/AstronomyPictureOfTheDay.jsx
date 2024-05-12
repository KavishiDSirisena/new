import { useEffect, useState } from "react";
import { Card,Button } from 'antd';
import axios from "axios";
import NavBar from "../Components/NavBar";
import AOS from 'aos';
import 'aos/dist/aos.css';
import MoreInformation from "../Components/MoreInformation";
import 'animate.css';
import Footers from "../Components/Footer";
AOS.init();

export default function AstronomyPictureOfTheDay() {
    const [APOD, setAPOD] = useState([]);
    const [showMoreInfo, setShowMoreInfo] = useState(false);

    useEffect(() => {
        
        axios
            .get("https://api.nasa.gov/planetary/apod?api_key=fdNSKBqbucYi4XGdZy0f0ZBNDITXO91dpMdlj36x")
            .then((response) => setAPOD(response.data))
            .catch((error) => console.error(error));
    }, []);

    useEffect(() => {
        document.body.style.backgroundImage = `url('https://www.worldatlas.com/upload/7d/db/c3/shutterstock-1558058690.jpg')`;
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundPosition = "center";
        document.body.style.backgroundAttachment = "fixed";
    }, [APOD]);

    // const handleShowMoreInfo = () => {
    //     setShowMoreInfo(true);
    // };

    // const handleHideInfo = () => {
    //     setShowMoreInfo(false);
    // };

    return (
        <div>
            <NavBar />
            <p style={{ textAlign: 'center', fontSize: 30, fontWeight: 'bold' }}> {APOD.title}</p>

            <Card style={{margin: 50,padding:5,backgroundColor:"rgba(255, 255, 255, 0.60)"}} 
                                cover={
                                    <img
                                        alt='apod image'
                                        src={APOD.hdurl}
                                        style={{
                                            objectFit: "cover",
                                            height: "600px",
                                            width: "100%",
                                            borderRadius: 10
                                        }}
                                    />
                                }>

                <p>Title: {APOD.title}</p>
                <p>Explanation: {APOD.explanation}</p>
                <p>Date: {APOD.date}</p>
                
            </Card>

            <Footers/>
        </div>
    );
}
