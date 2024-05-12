import { useEffect, useState } from "react";
import { Button, Col, Row,Card } from "antd";
import AOS from "aos";
import "aos/dist/aos.css";
import NavBar from "../Components/NavBar";
import Footers from "../Components/Footer";

AOS.init();
export default function Home() {

    useEffect(() => {
        document.body.style.backgroundImage = `url('https://www.worldatlas.com/upload/7d/db/c3/shutterstock-1558058690.jpg')`;
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundPosition = "center";
        document.body.style.backgroundAttachment = "fixed";
    }, []);

    return (
        <div>
            <NavBar />
            <div style={{ textAlign: "center" }}>
                <Row gutter={[0, 16]}>
                    <Col xs={24} sm={24} md={12} lg={12}>
                        <div style={{ padding: "40px" }}>
                            <img
                               
                                src="https://static.scientificamerican.com/sciam/cache/file/E2BA0402-C14D-484C-9607C354A6DFC36F_source.jpg?w=1200"
                                style={{ width: "100%", borderRadius: "50px", height: 500, objectFit: "cover", }}
                            ></img>
                        </div>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={12} data-aos="fade-up" data-aos-duration="3000">
                        <p style={{ textAlign: "center", color: "#ffffff", fontWeight: "bold", marginTop: "100px", fontSize: "18px" }}>

                        Embark on an interstellar odyssey! Experience a daily visual delight with captivating images and photographs from the boundless cosmos. Accompanied by intriguing insights from seasoned astronomers, each picture unveils the enchanting marvels of space. Immerse yourself in the cosmic spectacle, unraveling mysteries and embracing the celestial beauty, one breathtaking image at a time.<br /><br />


                        </p>

                        
                    </Col>
                    
                </Row>
                <br />
                <br />
                <br />
                <Row gutter={[0, 16]}>
                    <Col xs={24} sm={24} md={12} lg={12}>
                        <div style={{ padding: "40px" }}>
                            <img
                                
                                src="https://www.mining.com/wp-content/uploads/2023/06/mining-moon-nasa.jpeg"
                                style={{ width: "100%", borderRadius: "50px", height: 500, objectFit: "cover", }}
                            ></img>
                        </div>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={12} data-aos="fade-up" data-aos-duration="3000">
                        <p style={{ textAlign: "center", color: "#ffffff", fontWeight: "bold", marginTop: "100px", fontSize: "16px" }}>


                        Mining the moon has long been a topic of fascination and scientific inquiry. With the advancement of space exploration technologies, the idea of extracting resources from the lunar surface has gained traction. Moon mining could potentially unlock valuable resources such as helium-3, a rare isotope with potential applications in fusion energy. Additionally, water ice deposits found in permanently shadowed regions offer a vital resource for sustaining future human colonies in space. However, moon mining poses significant technical and logistical challenges, including developing efficient extraction methods and establishing sustainable operations in the harsh lunar environment. Despite these challenges, the prospect of mining the moon continues to inspire research and exploration efforts aimed at unlocking the moon's hidden treasures..<br /><br />

                        </p>

                        
                    </Col>
                </Row>
                <br /><br /><br />
                <Row gutter={[0, 16]}>
                    <Col xs={24} sm={24} md={12} lg={12}>
                        <div style={{ padding: "40px" }}>
                            <img
                                
                                src="https://helios-i.mashable.com/imagery/articles/030CT4yzqwUoq4lnxIqlaaD/hero-image.fill.size_1248x702.v1696557026.jpg"
                                style={{ width: "100%", borderRadius: "50px", height: 500, objectFit: "cover", }}
                            ></img>
                        </div>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={12} data-aos="fade-up" data-aos-duration="3000">
                        <p style={{ textAlign: "center", color: "#ffffff", fontWeight: "bold", marginTop: "100px", fontSize: "16px" }}>


                            Embark on a visual odyssey with Mars Rover Photos! Dive into<br />
                            a captivating collection of images captured by the intrepid<br />
                            rovers exploring the Red Planet. Each photo tells a unique<br />
                            story, unveiling the rugged terrain, ancient landscapes, <br />
                            and potential clues to Mars' intriguing past. Join us on a<br />
                            journey of discovery as we unravel the mysteries of our <br />
                            neighboring planet through the lens of cutting-edge Martian <br />
                            exploration.<br /><br />

                        </p>

                        
                    </Col>
                </Row>
                

                

                
                
            </div>
            <Footers />
        </div>
    )
}
