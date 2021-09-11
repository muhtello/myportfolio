import React, {Component} from 'react';
import CardGameDisplay from "./CardGameDisplay";
import Grid from '@material-ui/core/Grid';
import {getGameContent} from "./gameContent/gameContent";
import {getGameProfiles} from "./gameProfile/gameProfile";
import Model from "../protal/Model";
import ModelGameProfile from "../protal/ModelGameProfile";
import Container from '@material-ui/core/Container';




class DisplayGames extends Component
{
  constructor()
  {
    super()
    this.state = {
      gameContent: [],
      portals: false,
      selectedProfile: []
    }
    
  }

  componentDidMount()
  {
    const gameContent = getGameContent();
    this.setState({gameContent: gameContent});
    
  }

  handleSelectProfile(nameGame)
  {
    const currentProfile = getGameProfiles(nameGame);
    this.setState({
      portals: true,
      selectedProfile: currentProfile
    });
  }

  render()
  {
    const {gameContent, portals, selectedProfile} = this.state;
    
    return(
      <div>
        <Container>
          <Grid container spacing={5}  direction="row"
            justify="center"
            alignItems="flex-start">
            {gameContent && gameContent.length > 0 && 
              gameContent.map((game) => 
                {
                  return(
                    <Grid
                    key={game.id}
                    item 
                    xs={12} md={6} lg={5}
                    onClick = {() => this.handleSelectProfile(game.nameGame)}
                    >
                      <CardGameDisplay 
                        image={game.image}
                        header = {game.header}
                        discreption = {game.discription}
                        gameEngine = {game.gameEngine}
                        script = {game.script}
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
                  <ModelGameProfile 
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




export default DisplayGames