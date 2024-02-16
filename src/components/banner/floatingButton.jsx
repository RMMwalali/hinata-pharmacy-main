import React, { useState } from 'react';
import { Fab, Zoom } from '@mui/material';
import { BsWhatsapp }  from "react-icons/bs";

const FloatingChatButton = () => {
    const [expanded, setExpanded] = useState(false);

    const toggleExpanded = () => {
        setExpanded(!expanded);
    };

    return (
        <>
            <Zoom in={!expanded}>
                <Fab
                    color="primary"
                    aria-label="chat"
                    style={{
                        position: 'fixed',
                        bottom: 16,
                        right: 16,
                        zIndex: 1000,
                        backgroundColor: 'green',
                    }}
                    onClick={toggleExpanded}
                >
                    <BsWhatsapp />
                </Fab>
            </Zoom>

            {expanded && (
                <div
                    style={{
                        position: 'fixed',
                        bottom: 20,
                        right: 20,
                        zIndex: 20,
                        backgroundColor: 'rgba(255, 255, 255, 0.4)', // Adjust opacity as needed
                        backdropFilter: 'blur(2px)', // Adjust blur intensity as needed
                        borderRadius: 10,
                        padding: 16,
                        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)', // Optional: Add shadow for better visibility
                    }}
                >
                    {/* Close button */}
                    <button
                        onClick={toggleExpanded}
                        style={{
                            position: 'absolute',
                            top: 8,
                            right: 8,
                            backgroundColor: 'transparent',
                            border: 'none',
                            cursor: 'pointer',
                            fontSize: 24, // Adjust the size of the close button
                            padding: '4px 8px', // Add padding for better spacing
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <span aria-hidden="true" style={{ fontSize: 26 }}>&times;</span>
                    </button>
                    {/* Heading */}
                    <h2 style={{ marginBottom: 16 }}>Hinata Pharmacy Chatbot</h2>
                    {/* Here you can add your WhatsApp chatbot component */}
                    {/* For now, let's just show a placeholder */}
                    <div
                        style={{
                            width: 300,
                            height: 400,
                            backgroundColor: 'rgba(255, 255, 255, 0.4)',
                            border: '2px solid green',
                            borderRadius: 10,
                            padding: 16,
                        }}
                    >
                        {/* Placeholder text */}
                        WhatsApp Chatbot
                    </div>
                </div>
            )}

        </>
    );
};

export default FloatingChatButton;
