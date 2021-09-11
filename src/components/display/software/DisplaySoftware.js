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
      portals: false,
      selectedProfile: {}
    }

    
  }

  componentDidMount(){
   
    const por = getSoftwareContent(() => this.handleOpenPortal.bind(this));
    this.setState({projects: por});
  }

  handleViewClick(e, action){
    e.preventDefault();
    if (action.type === "link"){
      window.open(action.src);
      return;
       
    }
    this.setState({
      portals: true,
      selectedProfile: action
    });
    
  }

  render(){
    const {projects, portals, selectedProfile} = this.state;
    
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
                    item 
                    xs={12} md={6} lg={5}
                  >
                    <CardSoftwareDisplay
                      header={project.header}
                      discreption= {project.discreption}
                      view ={project.scriptView}
                      info = {project.info}
                      handleViewClick = {
                        (e, action) => this.handleViewClick(e, action)
                      }
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
                    selectedProfile = {selectedProfile}
                  />
                </Model>
              </div>
            ) : (
              <div>
              </div>
            )
          }
        </div>
      </div>
    )
  }
}

export default DisplaySoftware;