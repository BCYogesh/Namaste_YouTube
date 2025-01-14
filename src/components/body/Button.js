import React from 'react'

const Button = ({ name }) => {
    return (
        <div>
            <button className="px-5 py-2 mt-5 ml-4 bg-gray-200 rounded-lg">{name}</button>
        </div>
    )
}


export default Button