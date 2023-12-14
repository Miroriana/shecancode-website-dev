import React from 'react'
import Image from './Application-page/she can.jpg'
import '../components/Application/application.css'

const ApplicationPage = () => {
    return (
        <div>
            <div className="all">
                <div className="whole">
                    <div className="apply">

                        <h1>Apply now</h1>
                        <p>You will learn web development and learn <br></br> a  job in the tech industry with 1-on-1 guidance<br></br> from an expert mentor and career coach</p>
                        <div className="overlay"></div>
                        <img src={Image} alt="not found"></img>
                    </div>



                    <div className="form">
                        <form>
                            <div className="Name">
                                <input type="First Name" placeholder="Please provide your First Name"></input>
                                <input type="last Name" placeholder="Please provide your Last Name" id="lastname"></input></div>
                            <br></br>

                            <input type="Email" placeholder="Please provide your Email" id="email"></input><br></br><br></br>
                            <input type="Phone Number" placeholder="Please provide your Phone Number" id="phoneNumber"></input><br></br><br></br>
                            <input type="District of Residency" placeholder="Please provide your District of Residency" id="residency"></input><br></br><br></br>

                            <select id="gender">
                                <option>Gender</option>
                                <option>Male</option>
                                <option>Female</option>
                            </select><br></br><br></br>
                            <select id="age">
                                <option>What is your age range?</option>
                                <option>18-25</option>
                                <option>25-30</option>
                                <option>30-35</option>
                            </select><br></br><br></br>
                            <input type="Education Level" placeholder="Your current level of Education" id="level"></input><br></br><br></br>

                            <input type="Major" placeholder="What did you study at university/High school." id="Major"></input><br></br><br></br>

                            <select id="program">
                                <option >Select Program</option>
                                <option type="checkbox" name="Choose">Front-End Stack</option>
                                <option type="checkbox" name="Choose" >Backend Stack</option>
                            </select> <br></br><br></br>
                            <select id="program">
                                <option >Do you have Github Account?</option>
                                <option type="checkbox" >Yes</option>
                                <option type="checkbox"  >No</option>
                            </select> <br></br><br></br>
                            <input type="Github Account" placeholder="If, yes share with us your account." id="github_acc" ></input>
                            <input placeholder="Are you fully available at the moment?" ></input><br></br><br></br>
                            <textarea> Why do you wish to join SheCanCODE program? Please write in max 100 words:</textarea>
                            <textarea> Why is software development your dream career/Job?</textarea>
                            <textarea> Please explain how this program would help you to achieve your career goals</textarea>
                            <input placeholder='Inline with your choice course, let us know your programming languages you may know since we are looking applicant who have beginner/intermediate coding skills.'></input>
                            <input>How did you hear about SheCanCODE program?</input>

                            <select id="program">
                                <option >Do you Consider yourself as a person with a disability or other chronic conditions?</option>
                                <option type="checkbox" >Yes</option>
                                <option type="checkbox"  >No</option>
                            </select> <br></br><br></br>
                            <select id="program">
                                <option >Are you a refugee living in Kigali?</option>
                                <option type="checkbox" >Yes</option>
                                <option type="checkbox"  >No</option>
                            </select> <br></br><br></br>
                            <input type="Github Account" placeholder=" If, yes. Let us know which refugee camp you come from?" id="github_acc" ></input>
                            <p> Click this link so you can do English exam,<a href="https://docs.google.com/forms/d/1PSsVVIskg8dkHxW39n6_nFAX9W8ibJ2_9cbzcmyu09U/viewform?edit_requested=true">This your English assessment.</a></p>
                            <input type="checkbox" name="Test" value="Done">Done</input>
                            <input type="checkbox" name="Test" value="Not Done">Not Done</input>

                            <div className="btn">
                                <button>Submit</button></div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ApplicationPage
