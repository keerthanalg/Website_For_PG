import React from 'react';
import './default.css';
import { Button, Image } from 'semantic-ui-react';
import logo from '../../assets/images/logo_placeholder.jpeg';
import 'semantic-ui-css/semantic.min.css';
import { Link, useNavigate } from 'react-router-dom';

const DefaultHeader = () => {
const navigate = useNavigate();
    return (
        <div className="defaultHeaderWrapper">
            <div className="headerLeft">
                <Image src={logo} alt="logo" size="small" style={{
                    borderRadius: '50%',
                    width: '100px',
                    height: '100px',
                    objectFit: 'cover'
                }} />
                <h1>Happy Stay</h1>
            </div>

            <div className="headerMiddle">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </div>

            <div className="headerRight">
                <Button onClick={()=>navigate('/login')}>Login</Button>
            </div>
        </div>
    );
};
export default DefaultHeader;