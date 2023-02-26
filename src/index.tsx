import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App/App'

// const title = React.createElement(
//     'h1',
//     {
//         id: 'title',
//         className: 'title',
//     },
//     'Hello React'
// )

//JSX
const title = (
    <h1 className="red" id="title">
        Hello React
    </h1>
)

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
