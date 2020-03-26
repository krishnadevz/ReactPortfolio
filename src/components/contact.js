import React,{Component} from "react";
import {Grid,Cell, ListItem,ListItemContent,List} from "react-mdl";

class Contact extends Component{
    render(){
        return(
            <div className="contact-body">
            <Grid className="contact-grid">
            <Cell col={6}>
                <h2>Krishna kakade</h2>
            <img
            src="https://thumbs.dreamstime.com/b/disney-vector-illustration-mickey-mouse-isolated-white-background-face-who-laughs-closeup-colored-character-smiles-big-134953070.jpg"

            alt="avatar"
            style={{height:"250px"}}
            />
            <p style={{width:'75%',margin:"auto",paddingTop:"1em"}}> hello their i am Aspiring full stact developer currently learning react but i love MERN Stack and i love computers
            and technology</p>


            </Cell>
            <Cell col={6}>
            <h2>Contact Me</h2>
            <hr/>

            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-phone-square" aria-hidden="true"/>
                    (123) 456-7890
                  </ListItemContent>
                </ListItem>

                

                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-envelope" aria-hidden="true"/>
                    krishnadevz@protonmail.com
                  </ListItemContent>
                </ListItem>

                

              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Contact;