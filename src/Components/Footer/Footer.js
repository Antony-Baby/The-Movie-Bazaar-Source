import React from 'react'
import './Footer.css'
import {Link} from 'react-router-dom'

function Footer() {
    return (
        <div className="footer-container">
        <div className="footer-col1">
            <div className="footer-category">
                <h3>Main</h3>
                <div className="footer-subcategory">
        <Link className="footer-links" to="/The-Movie-Bazaar">Home Page</Link>
        {/* <a className="footer-links" href="https://google.com">About Us</a> */}
        <Link className="footer-links" to="/about" >About us</Link>
        </div></div>
        </div>
        <div className="footer-col2">
        <h1 className="title">The Movie Bazaar</h1>
        <h4>Designed and Developed By <span>Antony baby</span></h4>
        </div>
        <div className="footer-col3">
        <div className="footer-category">
            <h3>Main -2</h3>
        <div className="footer-subcategory">
        <a className="footer-links" href="https://google.com">Header link 3</a>
        <a className="footer-links" href="https://google.com">Header link 4</a>
        </div>
        </div>
        
</div>

        </div>
    )
}

export default Footer
