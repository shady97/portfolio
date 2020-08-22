import React from 'react';

import './App.css';
import {Layout, Header, HeaderRow, Textfield, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Particles from 'particlesjs';

const API_PATH = 'http://localhost:3000/portfolio/api/contact/index.php'

function App() {

    window.onload = function() {
        Particles.init({
            selector: '.background',
            connectParticles: true,
            speed: 0.8
        
        });
    };

  return (
    <div className="demo-big-content" >
    <Layout>
        <Header className="header-color" title = {<Link style={{textDecoration: 'none', color: 'white' }}
            to="/">MyPortfolio</Link>} scroll waterfall>
            {/* <HeaderRow title={<Link style={{textDecoration: 'none', color: 'white' }}
            to="/">MyPortfolio</Link>} scroll>
                <Textfield
                    value=""
                    onChange={() => {}}
                    label="Search2"
                    expandable
                    expandableIcon="search"
                />
            </HeaderRow> */}
            {/* <HeaderRow> */}
                <Navigation>
                    <Link to="/">Home</Link>
                    <Link to="/resume">Resume</Link>
                    <Link to="/about">About</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/contact">Contact</Link>
                </Navigation>
            {/* </HeaderRow> */}
        </Header>
        <Drawer title={<Link style={{textDecoration: 'none', color: 'black' }}
            to="/">MyPortfolio</Link>} scroll>
            <Navigation>
                    <Link to="/resume">Resume</Link>
                    <Link to="/about">About</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/contact">Contact</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>
  );
}

export default App;
