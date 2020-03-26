import React,{Component} from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from "./components/main"
import {Link} from 'react-router-dom';
class App extends Component {
  render(){
  return (
    <div className="demo-big-content">
    <Layout>
        <Header className="header-color" title={<Link style={{textDecoration:"none",color:"white"}} to="/">MyPortfolio</Link> }scroll>
            <Navigation>
                <Link to="/Aboutme">About Me</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
                <a href="https://gitconnected.com/krishnadevz/resume">Resume</a>
            </Navigation>
        </Header>
        <Drawer title={<Link style={{textDecoration:"none",color:"white"}} to="/">MyPortfolio</Link> }>
            <Navigation>
                <Link to="/Aboutme">About Me</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
                <a href="https://gitconnected.com/krishnadevz/resume">Resume</a>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>
  );
}}

export default App;
