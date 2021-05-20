import React, {Component} from "react";
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import CardSoftwareDisplay from "./CardSoftwareDisplay";
import {getSoftwareContent} from "./softwareContent/softwareContent";
import ModelSoftwareProfile from "../protal/ModelSoftwareProfile";
import Model from "../protal/Model";



class DisplaySoftware extends Component
{
  constructor(){
    super();
    this.state = {
      projects: [],
      portals: false
    }

    
  }

  componentDidMount(){
   
    const por = getSoftwareContent(() => this.handleOpenPortal.bind(this));
    this.setState({projects: por});
  }

  handleViewClick(e, action){
    console.log(e, action);
    this.setState({portals: true});
  }

  render(){
    const {projects, portals} = this.state;
    console.log(portals);
    return(
      <div>
        <Container>
        <Grid container spacing={5}  direction="row"
          justify="center"
          alignItems="flex-start"
        >
          {projects && projects.length > 0 && 
            projects.map((project, index) => 
              {
                return(
                  <Grid
                    key={index}
                    item xs ={5}
                  >
                    <CardSoftwareDisplay
                      header={project.header}
                      discreption= {project.discreption}
                      view ={project.scripView}
                      handleViewClick = {(e, action) => this.handleViewClick(e, action)}
                    />
                  </Grid>
                )  
              }
            )
          
          }
        </Grid>
        </Container>
        <div>
          {
            portals ? (
              <div>
                <Model>
                  <ModelSoftwareProfile 
                    closeModel={() => this.setState({portals : false})}
                    selectedProfile = {{gf: true}}
                  />
                </Model>
              </div>
            ) : (
              <div>
                dfsdgdfgdfgf
              </div>
            )
          }
        </div>
      </div>
    )
  }
}

export default DisplaySoftware;