import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
// import '../css/activityForm.scss'

function ActivityForm() {
    const [activity, setActivity] = useState({ uname: '', description: '', time: '', date: '', activityType: 'Run' });
    const navigate = useNavigate()
    const { id } = useParams();


    function handleChange(e) {
        let { name, value } = e.target;
        setActivity({ ...activity, [name]: value })
    }

    useEffect(() => {
        if (id) {
            axios.get('http://localhost:8080/activites/' + id).then((res) => {
                const activity = res.data;
                console.log(activity)
                setActivity({
                    uname: activity.name,
                    description: activity.description,
                    time: activity.duration,
                    date: activity.date.substr(0,activity.date.indexOf('T')),
                    activityType: activity.activityType
                })
            })
        }
    }, []);

    async function handleClick(e) {
        e.preventDefault();

        try {
            await axios.post('http://localhost:8080/activites', {
                name: activity.uname,
                duration: activity.time,
                date: activity.date,
                description: activity.description,
                activityType: activity.activityType
            })
        } catch (err) {
            console.log(err)
        }
        setActivity({uname: '', description: '', time: '', date: '', activityType: ''})
        if(!activity?.length) {
           navigate('/')
        }else {
            alert('Please enter the Data')
        }        
    }


    return (
        <>
            <section className="activityForm">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <form className='form--wrapper'>
                                <div className="mb-3">
                                    <label className="form-label">Full Name</label>
                                    <input className="form-control" onChange={handleChange} name="uname" value={activity.uname} type="text" placeholder="Enter Full Name" />
                                    <label className="form-label mt-2">Description</label>
                                    <textarea className="form-control" onChange={handleChange} name="description" value={activity.description} id="exampleFormControlTextarea1" rows="3"></textarea>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Select Activity</label>
                                    <select className="form-select" name="activityType" value={activity.activityType} onChange={handleChange} id="activityList">
                                        <option value="Run" >Run</option>
                                        <option value="Bicycle Ride">Bicycle Ride</option>
                                        <option value="Swim">Swim</option>
                                        <option value="Walk">Walk</option>
                                        <option value="Hike">Hike</option>
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Duration</label>
                                    <input type="text" onChange={handleChange} name="time" className="form-control" value={activity.time} id="" placeholder="Time" />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Date</label>
                                    <input type="date" onChange={handleChange} name="date" className="form-control" id="" value={activity.date} placeholder="Date" />
                                </div>
                                <div className='btn--wrapper'>
                                    { activity?.time == 0 ? 
                                    <button className='btn btn-secondary' onClick={handleClick}>Submit</button> :
                                    <button className='btn btn-secondary' >Update</button>
                                    } 
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ActivityForm;