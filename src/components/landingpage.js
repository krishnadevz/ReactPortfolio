import React,{Component} from "react";
import { Grid ,Cell} from "react-mdl";

class Landing extends Component{
    render(){
        return(
            <div style={{width:"100%",margin:"auto"}}>
            <Grid className="landing-grid">
            <Cell col={12}>
            <img 
            src="https://avatars1.githubusercontent.com/u/42638797?s=460&u=0690dec92c80e9ab0f3b09322272e1cc4cb3ba3f&v=4"
            alt="avatarimage"
            className="avatar-img"
            />
            <div className="banner-text">
         
               <h1>Krishna Kakade🐱‍💻</h1>
               <hr/>
            <p>Learning FullStack Dev(MERN🔧⚙🧱📚) | HTML/CSS | JavaScript | Reactjs | Nodejs | C</p>
            <div className="social-links">

            {/*Social Links*/}


                <a href="https://github.com/krishnadevz"rel="noopener noreferrer" target="_blank">
                    <i className="fab fa-github" aria-hidden="true"/>
                </a>
                <a href="https://twitter.com/krishnadevz"rel="noopener noreferrer" target="_blank">
                    <i className=" fab fa-twitter" aria-hidden="true"/>
                </a>
                <a href="https://dev.to/krishnakakade"rel="noopener noreferrer" target="_blank">
                    <i className="fab fa-dev" aria-hidden="true"/>
                </a>
                <a href="https://stackoverflow.com/users/8926157/krishna-kakade"rel="noopener noreferrer" target="_blank">
                    <i className="fab fa-stack-overflow" aria-hidden="true"/>
                </a>
                <a href="https://www.linkedin.com/in/krishna-kakade-014a70149/"rel="noopener noreferrer" target="_blank">
                    <i className="fab fa-linkedin" aria-hidden="true"/>
                </a>
                <a href="https://medium.com/@krishnakakade"rel="noopener noreferrer" target="_blank">
                    <i className="fab fa-medium" aria-hidden="true"/>
                </a>
                <a href="https://www.quora.com/profile/Krishna-Kakade-2"rel="noopener noreferrer" target="_blank">
                    <i className="fab fa-quora" aria-hidden="true"/>
                </a>
            </div>

            </div>
           </Cell> 
           </Grid>
           </div>
        )
    }
}
export default Landing