import React from 'react'
import './NewsLetter.css'

const NewsLetter = () => {
    return (
        <div className='news-letter'>
            <h1>Get Exclusive Offer on YOur Email</h1>
            <p>Subscribe to our website </p>
            <div>
                <input type="email"  placeholder='Email id'/>
                <button>Subscribe</button>
            </div>
        </div>
    )
}

export default NewsLetter