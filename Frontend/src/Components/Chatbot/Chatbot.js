import React, { useState, useEffect } from 'react';
import ChatBot from 'react-simple-chatbot';
import { Segment } from 'semantic-ui-react';
import closeIcon from './close.png'; // Adjust the path as necessary
import chatIcon from './Chatbot.png'; // Adjust the path as necessary

export default function Chatbot() {
    const [isChatBotVisible, setIsChatBotVisible] = useState(false);
    const [showChatIcon, setShowChatIcon] = useState(false);

    const steps = [
        {
            id: "Greet",
            message: "Hey traveller,Welcome to Guid e",
            trigger: "Ask Name"
        },
        {
            id: "Ask Name",
            message: "Please Enter your name",
            trigger: "Waiting1"
        },
        {
            id: "Waiting1",
            user: true,
            trigger: "Name"
        },
        {
            id: "Name",
            message: "Hi {previousValue}, please select what do you need to ask?",
            trigger: "issues"
        },
        {
            id: "issues",
            options: [
                { value: "React", label: "React", trigger: "React" },
                { value: "Angular", label: "Angular", trigger: "Angular" }
            ]
        },
        {
            id: "React",
            message: "Thank you for asking about React!",
            end: true
        },
        {
            id: "Angular",
            message: "Thank you for asking about Angular!",
            end: true
        }
    ];

    const handleToggleChatBot = () => {
        setIsChatBotVisible(!isChatBotVisible);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setShowChatIcon(true);
            } else {
                setShowChatIcon(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div>
            {showChatIcon && (
                <img
                    src={chatIcon}
                    alt="Chat Icon"
                    onClick={handleToggleChatBot}
                    style={{
                        cursor: 'pointer',
                        position: 'fixed',
                        bottom: '20px',
                        right: '20px',
                        zIndex: '1000',
                        width: '70px',
                        height: '70px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                />
            )}
            {isChatBotVisible && (
                <Segment
                    floated="right"
                    style={{
                        position: 'fixed',
                        bottom: '100px',
                        right: '20px',
                        zIndex: '1000',
                        width: '80%',
                        maxWidth: '350px',
                        height: '80%',
                        maxHeight: '500px',
                        display: 'flex',
                        flexDirection: 'column'
                    }}
                >
                    <img 
                        src={closeIcon} 
                        alt="Close"
                        onClick={handleToggleChatBot} 
                        style={{
                            cursor: 'pointer',
                            alignSelf: 'flex-end',
                            marginBottom: '10px',
                            width: '30px',
                            height: '30px'
                        }}
                    />
                    <ChatBot steps={steps} />
                </Segment>
            )}
            <style>{`
                @media (max-width: 600px) {
                    img[alt="Chat Icon"] {
                        width: 50px;
                        height: 50px;
                    }
                    .ui.segment {
                        width: 100%;
                        height: 50%;
                    }
                }
            `}</style>
        </div>
    );
}
