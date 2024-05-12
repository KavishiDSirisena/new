import React from "react";
import { Dropdown, Row, Col } from "antd";
import { Link } from "react-router-dom";



export default function NavBar() {

    const items = [
        {
            key: "1",
            label: <a href="/home" style={{ textDecoration: "none" }}>Home Page</a>,
        },
        {
            key: "2",
            label: <a href="/marsroverphotos" style={{ textDecoration: "none" }}>Mars Rover Photos</a>,
        },
        {
            key: "3",
            label: <a href="/APOD" style={{ textDecoration: "none" }}>APOD</a>,
        },
        {
            key: "4",
            label: (
                <li
                    onClick={() => {
                        //localStorage.removeItem("user");
                        window.location.href = "/login";
                    }}
                    style={{ textDecoration: "none" }}>
                    Logout
                </li>
            ),
        },
    ];




    return (
        <>
            <div style={{
                boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
                width:'100%',
                backgroundColor: 'rgba(85, 83, 84, 0.42)',
                marginTop:0
            }}>
                <Row justify="center">
                    <Col lg={20} sm={15} xs={20}>
                        
                            <h1>
                                <b>
                                    <Link
                                        to="/"
                                        style={{
                                            color:' #28489b',
                                            letterSpacing: "1px",
                                            fontSize: "30px",
                                            fontFamily: "serif",
                                            fontWeight: "bold",
                                            display: "flex",
                                            alignItems: "center",
                                            marginTop: "5px",
                                            textDecoration: "none",
                                        }}
                                    >
                                        <img

                                            src="https://www.nasa.gov/wp-content/themes/nasa/assets/images/nasa-logo.svg"

                                            alt="logo"
                                            style={{
                                                width: "100px",
                                                height: "100%",
                                                marginRight: "10px",
                                                textDecoration: "none",
                                            }}
                                        />
                                        Nasa api Dashbord
                                    </Link>
                                </b>
                            </h1>
                            </Col> 
                            <Col lg={2} sm={5} xs={4}>
                                <div style={{
                                            display: "flex",
                                            alignItems: "center",
                                            marginTop: "50px",}}>
                            <Dropdown
                                menu={{
                                    items
                                }}
                                placement="bottom"
                            >
                                <div
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        cursor: "pointer",
                                    }}
                                >
                                
                                    <p style={{color:"white",fontWeight:"bold",fontSize:20}}>Menu</p>
                                    
                                </div>
                                
                                
                            </Dropdown>
                            
                            </div>
                        
                    </Col>
                </Row>
            </div>
        </>
    )
}