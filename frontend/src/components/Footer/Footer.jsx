import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className="footer-content">
                <div className="footer-content-left">
                    <img src={assets.logo} alt="" />
                    <p>Bringing delicious dishes straight to your doorstep with speed, convenience, and a sprinkle of gastronomic delight.</p>
                    <div className="footer-social-icons">
                        <img src={assets.facebook_icon} alt="" />
                        <img src={assets.linkedin_icon} alt="" />
                        <img src={assets.twitter_icon} alt="" />
                    </div>
                </div>
                <div className="footer-content-centre">
                    <h2>COMPANY</h2>
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li>
                    </ul>

                </div>
                <div className="footer-content-right">
                    <h2>Get in touch!</h2>
                    <ul>
                        <li>0123456789</li>
                        <li>contact@dish-dash-delivery.com</li>
                    </ul>

                </div>
            </div>
            <hr />
            <p className="footer-copyright">
                © 2024 Dummy Lorem Ipsum Delivery App. All rights reserved. Created with ❤️ by Hannah Curran</p>


        </div>
    )
}

export default Footer
