import React,{Component} from "react";
import { Tabs ,Tab,Grid,Cell ,Card,CardTitle,CardActions,Button,CardMenu,IconButton, CardText} from "react-mdl";

class Projects extends Component{
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
      }  
      toggleCategories(){
    if(this.state.activeTab === 0){
        return(

            //Projects

            <Card shadow={5} style={{minWidth:"450",margin:"auto"}}>
                <CardTitle style={{color:"#fff",height:"176px", background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}}>Portfolio React</CardTitle>
            
            <CardText>
                Portfolio In reactjs with help React Router and by using react-mdl ui components
            </CardText>
            <CardActions>
              <a href="https://github.com/krishnadevz/portefeulje"  ><Button colored>Github</Button></a>
                <a href=""><Button colored>Live Demo</Button></a>

            </CardActions>
            <CardMenu style={{color:"#fff"}}>
                <IconButton name="share"/>
            </CardMenu>
            
            </Card>






            )
    }else if(this.state.activeTab ===1){
        return(
            <div> 
            
            <h1>This is nodejs coming </h1>
                </div>                                                                                                                                                                                                                                                    
        )
    }else if(this.state.activeTab ===2){
        return(
        <div><h1>This HTML CSS JAVASCRIPT</h1></div>
        )
    }
    else if(this.state.activeTab ===3){
        return(
        <div><h1>This MongoDB coming soon</h1></div>
        )
    }
    }
    
    render()
    {
        return(
            <div className="cateogory-tabs">
            <Tabs activeTab={this.state.activeTab} onChange={(tabId)=>this.setState({activeTab:tabId})}  ripple>
            <Tab>React</Tab>
            <Tab>HTML+CSS+JS</Tab>
            <Tab>Nodejs</Tab>
            <Tab>MongoDB</Tab>


 </Tabs>
 <section className="projects-grid">
 <Grid className="projects-grid">


<Cell col={12}>
    <div className="content">{this.toggleCategories()}</div>
</Cell>


 </Grid>
 </section>


         </div>
        )
    }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       

}

export default Projects;


           





   