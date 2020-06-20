import React from 'react'

export default function bookViewer({ children }) {
    return (
    <div id="viewerCanvas" style= {{width: 600, height: 500 }}>
        {children}
    </div>
    )
}
