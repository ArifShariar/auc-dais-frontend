import React, {useEffect, useState} from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import axios from "axios";
import {useLocation} from "react-router-dom";
import {Button, Card} from "react-bootstrap";



ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export function AuctionStats() {
    const {state} = useLocation();
    let auction_id = state.auctionId;

    let [labels, setLabels] = useState([]);
    let [data, setData] = useState([]);

    let user_id = localStorage.getItem('user_id');
    let user_token = localStorage.getItem('user');

    const fetchAuctionHistory = () => {
        let url = "http://localhost:8080/history/get/all/auction/" + auction_id + "/user/" + user_id + "/" + user_token;
        axios.get(url).then(r => {
            setLabels(r.data.map(x => x.date));
            setData(r.data.map(x => x.bid_amount));
        }).catch(e => {
            console.log(e);
        })
    }

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Auction History - ' + auction_id
            },
        },
    };

    const dataShow = {
        labels,
        datasets: [
            {
                label: 'Price ($)',
                data: data,
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
        ],
    };


    useEffect(() => {
        fetchAuctionHistory();

    },[]);


    return (
        <div className="home-element-padding">
            <div className="card-container">
                <div className='container-fluid' >
                    <div className="row">
                        <div className=" col-sm-12">
                            <Card className=" bg-warning.bg-gradient">
                                <Card.Header className={"bg-warning text-white text-center"}> Auction Stats</Card.Header>
                                <Bar options={options} data={dataShow} />
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}