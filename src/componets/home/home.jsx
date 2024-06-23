import React from 'react'
import "./home.css"
import Card from "../card/card"
import { useState, useEffect } from 'react';
import Loader from "../card/loader";

const home = () => {


    const [date1, setDate1] = useState([]);
    const [date2, setDate2] = useState([]);
    const [max1, setMax1] = useState([]);
    const [max2, setMax2] = useState([]);
    const [min1, setMin1] = useState([]);
    const [min2, setMin2] = useState([]);
    const [loder, setloder] = useState(true);

    const sheetUrl = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSY71RytscIo4MAR-e9ZuySCD7OL2ZYHWpjMST9EPFWHcWTk1vwiB2ePkzu3swAO6x7sEj7jWtjkk1W/pub?gid=0&single=true&output=csv';

    useEffect(() => {
        async function fetchSheetData(url) {
            try {
                const response = await fetch(url);
                const data = await response.text();
                const parsedData = parseCSV(data);
                
               
                setDate1(parsedData[10][3]);
                setDate2(parsedData[12][3]);
                setMax1(parsedData[10][9]);
                setMin1(parsedData[10][10])
                setMax2(parsedData[12][8]);
                setMin2(parsedData[12][9])
               
                setloder(false)
                console.log(parsedData);
                console.log(loder);

            } catch (error) {
                console.error('Error fetching or parsing data:', error);
            }
        }

        function parseCSV(data) {
            const rows = data.split('\n').map(row => row.split(','));
            

            return rows;
        }

        fetchSheetData(sheetUrl);
    }, []);


    // useEffect(() => {
    //     // This effect runs when `max1` changes
    //     if (!max1=="") {
    //         console.log(max1)
    //       console.log("max1 has been set to false");
    //       setloder(false)
    //     }
    //   }, []);






    return (
        <>
       
            <div className="hero">
                <h1 className="title">
                    Cardamom Price Live
                </h1>
                <p>
                comprehensive platform dedicated to providing real-time and accurate information about the current market price
                </p>
                <div className="btncontainer">
                    <div className="btn-hero active-btn">
                        Support us
                    </div>
                    <div className="btn-hero">
                       <a href="https://www.youtube.com/@sbeauctionputtady/streams">Watch live</a>
                    </div>
                </div>

            </div>
            <div className="cardholder">


                <div className="cardcontain">
                    <div className="cardc">
                        <img src="https://d3kgrlupo77sg7.cloudfront.net/media/chococoorgspice.com/images/products/coorg-organic-green-cardamom.20220908235005.webp" alt="" />
                        <div className="">
                            <h1>{date1}</h1>
                            <p>Date/last auction</p>
                        </div>

                    </div>
                    <div className="pricecard">
                        <div className="pricearea">

                            <div className="maxmin">
                                <p>Max price</p>
                                <h1>₹{max1}
                                  
                                    
                                </h1>

                            </div>
                            <div className="maxmin">
                                <p>Min price</p>
                                <h1>₹{min1}</h1>

                            </div>

                            <p>
                            DAILY AUCTION PRICE OF SMALL CARDAMOM
                            </p>

                        </div>
                    </div>

                </div>
                <div className="cardcontain">
                    <Card image="https://www.greenspices.in/wp-content/uploads/2021/07/Cardamom.jpg" />
                    <div className="cardc">
                        <img src="https://d3kgrlupo77sg7.cloudfront.net/media/chococoorgspice.com/images/products/coorg-organic-green-cardamom.20220908235005.webp" alt="" />
                        <div className="">
                            <h1>Small Cardamom</h1>
                            <p>Green/Small Cardamom</p>
                        </div>

                    </div>
                </div>
                <div className="cardcontain">
                    <div className="cardc">
                        <img src="https://d3kgrlupo77sg7.cloudfront.net/media/chococoorgspice.com/images/products/coorg-organic-green-cardamom.20220908235005.webp" alt="" />
                        <div className="">
                            <h1>{date2}</h1>
                            <p>Date/2nd last auction</p>
                        </div>

                    </div>
                    <div className="pricecard">
                        <div className="pricearea">

                            <div className="maxmin">
                                <p>Max price</p>
                                <h1>₹{max2}</h1>

                            </div>
                            <div className="maxmin">
                                <p>Min price</p>
                                <h1>₹{min2}</h1>

                            </div>

                            <p>
                            DAILY AUCTION PRICE OF SMALL CARDAMOM
                            </p>

                        </div>
                    </div>

                </div>

            </div>
          
{loder && <Loader/>}
        </>

    )
}

export default home
