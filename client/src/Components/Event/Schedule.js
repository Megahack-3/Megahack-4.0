import React from 'react'
import "./Event.css"

const Schedule = () => {
    return (
        <section className='Event' id='event'>
            <div className="event-content schedule">
                <h3>EVENT SCHEDULE</h3>
                <p>“You gotta make it a priority to make your priorities a priority.” ― Richie Norton</p>
                <div className="schedule">
                    <div className="day">
                        <h2 style={{textAlign:'center'}}>Day 1: March 22, 2024</h2>
                        <div className="event-group">
                            <p className="event-title"><strong>Inauguration</strong></p>
                            <ul>
                                <li style={{textAlign:'center'}}>10:00 AM - 11:45 AM </li>
                            </ul>
                        </div>
                        <div className="event-group">
                            <p className="event-title"><strong>Hacking Starts!</strong></p>
                            <ul>
                                <li>12:00 PM - Hacking Starts!</li>
                                <li>12:00 PM - 12:30 PM - Lighting Talk by Sponsor (Slot 1)</li>
                                <li>12:30 PM - 01:00 PM - Lighting Talk by Sponsor (Slot 2)</li>
                                <li>01:30 PM - 02:00 PM - Lighting Talk by Sponsor (Slot 3)</li>
                            </ul>
                        </div>
                        <div className="event-group">
                            <p className="event-title"><strong>Break</strong></p>
                            <ul>
                                <li>01.00 PM - 01:45 PM - Lunch Break</li>
                                <li>05:00 PM - 05:30 PM - Snacks Break</li>
                                <li>09:30 PM - 10:00 PM - Dinner</li>
                            </ul>
                        </div>
                        <div className="event-group">
                            <p className="event-title"><strong>Lightning Talk</strong></p>
                            <ul>
                                <li style={{textAlign:'center'}}>08:00 PM - 08:15 PM </li>
                                <li style={{textAlign:'center'}}>Talk by Industry Experts followed by short Mentoring</li>
                            </ul>
                        </div>
                        <div className="event-group">
                            <p className="event-title"><strong>Evaluation</strong></p>
                            <ul>
                                <li>03:00 PM - First round of Evaluation</li>
                                <li>10.30 PM - Second round of Evaluation</li>
                            </ul>
                        </div>
                    </div>
                    <div className="day">
                        <h2 style={{textAlign:'center'}}>Day 2: March 23, 2024</h2>
                        <div className="event-group">
                            <p className="event-title"><strong>Games and Fun Activities</strong></p>
                            <ul>
                                <li style={{textAlign:'center'}}>12:00 AM Onwards</li>
                            </ul>
                        </div>
                        <div className="event-group">
                            <p className="event-title"><strong>Break</strong></p>
                            <ul>
                                <li>02.00 AM - 02:30 AM - Refreshments</li>
                                <li>08:30 AM - 09:00 AM - Breakfast</li>
                            </ul>
                        </div>
                        <div className="event-group">
                            <p className="event-title"><strong>Evaluation</strong></p>
                            <ul>
                                <li>07:30 AM - Third round of Evaluation</li>
                            </ul>
                        </div>
                        <div className="event-group">
                            <p className="event-title"><strong>Validatory </strong></p>
                            <ul>
                                {/* <li>10:35 - Dignitaries on dais</li> */}
                                <li>12:00 PM - Introduction of Chief Guest</li>
                                <li>12:10 PM - Chief Guest Talk</li>
                                <li>12:15 PM - Feedback from Hacker 1</li>
                                <li>12:20 PM - Feedback from Hacker 2</li>
                                <li>12:50 PM - Prize Distribution</li>
                                <li>12:55 PM - Vote of Thanks</li>
                                <li>13:05 PM - National Anthem</li>
                            </ul>
                        </div>
                        <div className="event-group">
                            <p className="event-title"><strong>Judging Time</strong></p>
                            <ul>
                                <li>7 minutes of Presentation + 3 minutes of Q&A</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="sep"></div>
            </div>
        </section>
    )
}

export default Schedule
