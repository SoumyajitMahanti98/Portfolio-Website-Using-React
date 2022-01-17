import React from 'react';
import Typical from "react-typical";
import './Profile.css';

const Profile = () => {
    return (
        <div className='profile-container'>
            <div className='profile-parent'>
                <div className='profile-details'>
                    <div className='colz'>
                        <div className='colz-icon'>
                            <a href='https://www.facebook.com/soumyajit.mahanti.5'>
                                <i className='fa fa-facebook-square'></i>
                            </a>
                            <a href='https://www.instagram.com/mahantisoumyajit/'>
                                <i className='fa fa-instagram'></i>
                            </a>
                            <a href='https://github.com/SoumyajitMahanti98'>
                                <i className='fa fa-github'></i>
                            </a>
                            <a href='https://www.quora.com/profile/Soumyajit-Mahanti-1'>
                                <i className='fa fa-quora'></i>
                            </a>
                        </div>
                    </div>
                    <div className='profile-details-name'>
                        <span className='primary-text'>
                            {" "}
                            Hello,  I'M  <span className='highlighted-text'>Soumyajit Mahanti</span>
                        </span>
                    </div>
                    <div className='profile-details-role'>
                        <span className='primary-text'>
                            {" "}
                            <h1>
                                {""}
                                <Typical
                                    loop={Infinity}
                                    steps={[
                                        "FrontEnd Dev 🌐",
                                        2000,
                                        "React Developer 💻",
                                        2000,
                                        "Web Developer 💻",
                                        2000,
                                        "BCA Freshers 🧑‍🎓",
                                        2000,
                                    ]}
                                />
                            </h1>
                            <span className='profile-role-tagline'>
                                Knack of Building Application With FrontEnd Operations.
                            </span>
                        </span>
                    </div>
                    <div className='profile-options'>
                        <a href='https://www.linkedin.com/in/soumyajit-mahanti-672b8620b/'>
                            <button className='btn primary-btn'>
                                {""}
                                Hire Me
                            </button>
                        </a>

                        <a href='Soumyajit Mahanti.pdf' download=" Soumyajit Mahanti.pdf">
                            <button className='btn highlighted-btn'>Get Resume</button>
                        </a>
                    </div>
                </div>
                <div className='profile-picture'>
                    <div className='profile-picture-background'>

                    </div>
                </div>
            </div>
        </div>
    )
}
export default Profile;
