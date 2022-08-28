import React, {useEffect, useState} from 'react';
import {Button, Card, Table} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import {toast} from "react-toastify";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

import {Bar} from 'react-chartjs-2';


ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);



function ShowMyRatings(){
    let user_id = localStorage.getItem('user_id');

    let [date, setDate] = useState([]);
    let [ratings, setRatings] = useState([]);
    const navigate = useNavigate();


    const fetchRatings= () => {
        let url = "http://localhost:8080/ratingReview/get/myRatings/" + user_id;
        axios.get(url).then(r => {
            console.log(r.data);
            setDate(r.data.map(x => x.date));
            setRatings(r.data.map(x => x.rating));

            console.log(date);
            console.log(ratings);
        }).catch(e => {
            toast.error("Error fetching ratings");
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
                text: 'My Auction Ratings'
            },
        },
    };


    const dataShow = {
        date,
        datasets: [
            {
                label: 'Ratings',
                data: ratings,
                backgroundColor: 'rgba(148,58,31,0.5)',
            },
        ],
    };



    useEffect(() => {
        fetchRatings();
    },[]);


    return(
        <div className="home-element-padding">
            <div className="card-container">
                <div className='container-fluid' >
                    <div className="row">
                        <div className=" col-sm-12">
                            <Card className=" bg-warning.bg-gradient">
                                <Card.Header className={"bg-warning text-white text-center"}>Ratings</Card.Header>
                                <Bar options={options} data={dataShow} />
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ShowMyRatings;