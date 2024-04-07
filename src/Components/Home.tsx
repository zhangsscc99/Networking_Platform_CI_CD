import user_4_fill from '../Images/user_4_fill.png';
import React, { useState, useEffect } from 'react';
import humaaansGraph from '../Images/Humaaans Graphs.png';
import '../Styles/Home.modules.css';

interface Props {
    getStartedHandler: () => void;
    aboutUsHandler: () => void;
    contactHandler: () => void;
    FAQHandler: () => void;
    ProfileHandler: () => void;
}

function Home({getStartedHandler, aboutUsHandler, contactHandler, FAQHandler, ProfileHandler}: Props) {
    const [testVariable, setTestVariable] = useState(0);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        // 确保URL与后端API端点匹配
        fetch('http://localhost:8080/api/users/testVariable')
            .then(response => response.json())
            .then(data => setTestVariable(data));
    }, []);

    const showUsersHandler = () => {
        fetch('http://localhost:8080/api/users')
            .then(response => response.json())
            .then(data => {
                setUsers(data); // 假设返回的数据是用户对象的数组
            });
    };

    
    
    return (
        <div>
            <div id="website-title">Website.com</div>
            <h1> Welcome To Our Computer Networking World!</h1>
            <div id="intro">

                {/* 在这里使用testVariable */}
                <p>Test Variable Value: {testVariable}</p>
        
                This is the website that helps you understand everything of computer networking through games
            </div>
            <button id="get-started" onClick={getStartedHandler}>
                Get Started
            </button>
            <div id="top-buttons">
                <button className="info-button" onClick={aboutUsHandler}> About Us </button>
                <button className="info-button" onClick={contactHandler}> Contact </button>
                <button className="info-button" onClick={FAQHandler}> FAQ </button>
                <button className="info-button" onClick={ProfileHandler}> Profile </button>
            </div>
            <img id="icon" src={user_4_fill} alt="user icon" />
            <img id="cover" src={humaaansGraph} alt="front page image" />
        </div>
    )
}

export default Home;