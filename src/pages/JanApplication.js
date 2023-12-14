import React, { useState } from 'react';
import Nav from "../components/Nav/index";
import Header from "../components/Header/index";
import Footer from '../components/Footers/footer';
import './Courses page/formInputs.css';

const SECONDARY_COMBINATIONS = [
    "Computer Science (MEC)",
    "Software Development (SOD)",
    "Others"
];

const UNIVERSITY_COMBINATIONS = [
    "Computer Science",
    "Software Engineering",
    "Information Management",
    "Networking",
    "Networks and Communication Systems",
    "Big Data Analysis"
];

const JanApplication = () => {

    const [formInputs, setFormInputs] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        gender: '',
        age: 0,
        residence: '',
        currentLevelOfEducation: '',
        whatDidYouStudy: '',
        experience: '',
        techstack: '',
        gitHubAccount: '',
        whyDoYouWishToJoinThisProgram: '',
        howThisProgramCanHelpYou: '',
        interviewLocation: '',
    });

    const [errors, setErrors] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        gender: '',
        age: '',
        residence: '',
        currentLevelOfEducation: '',
        whatDidYouStudy: '',
        experience: '',
        techstack: '',
        gitHubAccount: '',
        whyDoYouWishToJoinThisProgram: '',
        howThisProgramCanHelpYou: '',
        interviewLocation: '',
    });

    const handleInput = ({ currentTarget: target }) => {
        setFormInputs({ ...formInputs, [target.name]: target.value })
    }

    const formSubmittion = (e) => {
        e.preventDefault();

        console.log(formInputs);

        // fetch(scriptURL, { method: 'POST', body: formInputs})
        //     .then(response => console.log('Success!', response))
        //     .catch(error => console.error('Error!', error.message))
    }

    return (
        <div>
            <Nav />
            <Header />
            <div className='w-full flex flex-wrap flex-shrink-0 justify-start align-top bg-slate-500 py-10 px-4 sm:px-24'>
                <div className='w-full sm:w-1/3 flex flex-col flex-shrink justify-start gap-4 p-5 sm:p-10 bg-blue-900'>
                    <h1 className='text-white font-black text-base text-left p-0 m-0'>January Mobile Application Program</h1>
                    <p className='text-white'>Unlock Your Potential with Our Mobile Development Program.</p>
                </div>
                <div className='w-full sm:w-8/12 flex flex-col flex-shrink justify-start align-top bg-white p-4 sm:p-10'>
                    <p>1. Enter Your Details</p>
                    <div className='flex w-full gap-0 sm:gap-3 flex-col sm:flex-row'>
                        <div className='form-input'>
                            <label className=''>First name*</label>
                            <input type='text' name='firstName' onChange={handleInput} value={formInputs.firstName || ''} placeholder='First name' />
                            {errors.firstName && <span className='error-message'>{errors.firstName}</span>}
                        </div>
                        <div className='form-input'>
                            <label className=''>Last name*</label>
                            <input type='text' name='lastName' onChange={handleInput} value={formInputs.lastName || ''} placeholder='Last name' />
                            {errors.lastName && <span className='error-message'>{errors.lastName}</span>}
                        </div>
                    </div>
                    <div className='flex w-full gap-3 flex-col sm:flex-row'>
                        <div className='form-input'>
                            <label className=''>Email address*</label>
                            <input type='email' name='firstName' onChange={handleInput} value={formInputs.email || ''} placeholder='Email address' />
                            {errors.email && <span className='error-message'>{errors.email}</span>}
                        </div>
                        <div className='form-input'>
                            <label className=''>Phone number*</label>
                            <input type='phone' name='phone' onChange={handleInput} value={formInputs.phone || ''} placeholder='Phone number' />
                            {errors.phone && <span className='error-message'>{errors.phone}</span>}
                        </div>
                    </div>
                    <div className='flex w-full gap-3 flex-col sm:flex-row'>
                        <div className='form-input'>
                            <label className=''>Gender*</label>
                            <div>
                                <input type='radio' name='gender' onChange={handleInput} value={"Male" || ''} />
                                &nbsp;Male
                            </div>
                            <div>
                                <input type='radio' name='gender' onChange={handleInput} value={"Female" || ''} />
                                &nbsp;Female
                            </div>
                            <div>
                                <input type='radio' name='gender' onChange={handleInput} value={"Prefer not to say" || ''} />
                                &nbsp;Not Prefer to say
                            </div>
                            {errors.gender && <span className='error-message'>{errors.gender}</span>}
                        </div>
                        <div className='form-input'>
                            <label className=''>Age*</label>
                            <input type='number' name='age' onChange={handleInput} value={formInputs.age || ''} placeholder='Age' />
                            {errors.age && <span className='error-message'>{errors.age}</span>}
                        </div>
                    </div>
                    <div className='flex w-full gap-3 flex-col sm:flex-row'>
                        <div className='form-input'>
                            <label className=''>Current level of education*</label>
                            <select name='currentLevelOfEducation' onChange={handleInput}>
                                <option value={""}>Select level of education</option>
                                <option value={"University graduate"}>University graduate</option>
                                <option value={"Attending university"}>Attending university</option>
                                <option value={"A' Level graduate"}>A' Level graduate</option>
                            </select>
                            {errors.currentLevelOfEducation && <span className='error-message'>{errors.currentLevelOfEducation}</span>}
                        </div>
                        <div className='form-input'>
                            <label className=''>What did/do you learn?*</label>
                            <select name='currentLevelOfEducation' onChange={handleInput}>
                                <option value={""}>Choose option</option>
                                {formInputs.currentLevelOfEducation === "University graduate" && 
                                    UNIVERSITY_COMBINATIONS.map((combination, index) => (
                                        <option value={combination} key={index}>{combination}</option>
                                    ))
                                }
                                {formInputs.currentLevelOfEducation === "Attending university" && 
                                    UNIVERSITY_COMBINATIONS.map((combination, index) => (
                                        <option value={combination} key={index}>{combination}</option>
                                    ))
                                }
                                {formInputs.currentLevelOfEducation === "A' Level graduate" && 
                                    SECONDARY_COMBINATIONS.map((combination, index) => (
                                        <option value={combination} key={index}>{combination}</option>
                                    ))
                                }
                            </select>
                            {errors.currentLevelOfEducation && <span className='error-message'>{errors.currentLevelOfEducation}</span>}
                        </div>
                    </div>
                    <div className='flex w-full gap-3 flex-col sm:flex-row'>
                        <div className='form-input'>
                            <label className=''>First Name*</label>
                            <input type='email' name='firstName' onChange={handleInput} value={formInputs.firstName || ''} placeholder='First name' />
                            {errors.firstName && <span className='error-message'>{errors.firstName}</span>}
                        </div>
                        <div className='form-input'>
                            <label className=''>First Name*</label>
                            <input type='phone' name='firstName' onChange={handleInput} value={formInputs.firstName || ''} placeholder='First name' />
                            {errors.firstName && <span className='error-message'>{errors.firstName}</span>}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default JanApplication