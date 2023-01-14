import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const Carddata = () => {
    const [activities, setActivities] = useState([])
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        if (id) {
            axios.get('http://localhost:8080/activites/' + id).then((res) => {
                console.log(res.data)
                setActivities(res.data)
            })
                .catch((err) => {
                    console.log('error');
                });

        }
    }, [])

    function handleDelete(id) {
        axios.delete('http://localhost:8080/activites/' + id)
            .then((res) => {
                console.log(res);
                setActivities(activities.filter((a) => a._id != id))
            })
            .catch((err) => {
                console.log('error');
            });
    }
    return (
        <>
            <section className="activityRegistered">
                <div className='container'>
                    <div className="row m-0">
                        <div className="card--wrapper d-flex">
                            <div className='user--wrapper'>
                                 <div className="card" style={{ width: 18 + 'rem' }}>
                                    <div className="card-body">
                                        <h5 className="card-title">User Acitvity</h5>
                                        <h6>Full Name: {activities.name}</h6>
                                        <h6>Description: <span>{activities.description}</span></h6> 
                                        <h6>activity : <span>{activities.activityType}</span></h6> 
                                        <h6>Duration: <span>{activities.duration}</span></h6>
                                        <h6>Day <span>   {new Date(activities.date).toLocaleString("en-us", {
                                                    weekday: "short",
                                                    day: 'numeric',
                                                    month: "short",
                                                    year: "numeric",
                                                })}</span></h6> 
                                        <div className='card--btn'>
                                        <button onClick={() => navigate('/registeractivity/' + activities._id)} className='btn btn-secondary'>Edit</button>
                                        <button onClick={() => handleDelete(activities._id)} className='btn ms-2 btn-danger'>Delete</button>    
                                        </div>
                                    </div>
                                </div>
                             </div>
                        </div>
                        <button className='btn btn-success' onClick={() => { navigate('/registerActivity') }}>Insert Data</button>
                    </div>

                </div>
            </section>
        </>
    );
}

export default Carddata;
