import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function Activities() {

    const [activities, setActivities] = useState([])
    const navigate = useNavigate();

    useEffect(() => {
        console.log('inside use effect');
        axios.get('http://localhost:8080/activites/')
            .then((res) => {

                setActivities(res.data)
                console.log(res.data);
            })
            .catch((err) => {
                console.log('error');
            });

    }, [])

  

    return (
        <>
            <section className="activityRegistered">
                <div className='container'>
                    <div className="row m-0">
                        <div className="card--wrapper d-flex">
                            {/* <ul className=" user--wapper" >
                                {
                                    activities.map((a, i) => {
                                        return (
                                            <li key={a._id} >
                                                Full Name: {a.name}
                                                Description: {a.description}
                                                {a.activityType}
                                                {a.duration}
                                                {new Date(a.date).toLocaleString("en-us", {
                                                    weekday: "short",
                                                    day: 'numeric',
                                                    month: "short",
                                                    year: "numeric",
                                                })}
                                                <button onClick={() => navigate('/registeractivity/' + a._id)} className='btn btn-secondary'>Edit</button>
                                                <button onClick={() => handleDelete(a._id)} className='btn btn-danger'>Delete</button>
                                            </li>
                                        )
                                    })
                                }
                            </ul> */}

                            { 
                                activities.map((a, i) => {
                                    return (
                                        <div className='user--wrapper'>
                                            <div className="card" style={{ width: 18 + 'rem' }}>
                                                <div className="card-body">
                                                    <h5 className="card-title">Activity One</h5>
                                                    <h6>Full Name: {a.name}</h6>
                                                    <h6>Description: <span>{a.description}</span></h6> 
                                                    <button onClick={() =>  navigate('/card/' + a._id)} className="btn-sm btn-secondary">See More Detail</button>
                                                </div>
                                            </div>
                                        </div>

                                        // <li key={a._id} >
                                        //     {a.name}
                                        //     {a.description}
                                        //     {a.activityType}
                                        //     {a.duration}
                                        //     {new Date(a.date).toLocaleString("en-us", {
                                        //         weekday: "short",
                                        //         day: 'numeric',
                                        //         month: "short",
                                        //         year: "numeric",
                                        //     })}
                                        //     <button onClick={() => navigate('/registeractivity/' + a._id)} className='btn btn-secondary'>Edit</button>
                                        //     <button onClick={() => handleDelete(a._id)} className='btn btn-danger'>Delete</button>
                                        // </li>
                                    )
                                })
                            }
                            
                            

                        </div>
                        <button className='btn btn-success' onClick={() => { navigate('/registerActivity') }}>Insert Data</button>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Activities