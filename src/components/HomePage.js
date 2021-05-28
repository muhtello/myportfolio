import React, {Component} from 'react';
import Header from "./header/Header";
import TabDisplay from "./TabDisplay";
import DisplayGames from "./display/Game/DisplayGames";
import DisplaySoftware from "./display/software/DisplaySoftware";

import "./Home.css"


class HomePage extends Component
{

  constructor(){
    super();
    this.state ={
      indexTabe: 0
    }
  }
  render()
  {
    const indexTabe = this.state.indexTabe;
    const label = {
      game: "game",
      software: "software"
    }

    return(
      <div className="home">
        <div className="title">
          <Header /> 
        </div>
        <div className="display">
          <TabDisplay 
            label={label} 
            handleTabChange={(index) => this.setState({indexTabe: index})} 
          />

          <div className="content">
            {indexTabe === 1 ? 
              <DisplayGames />
              :
              <DisplaySoftware />
            }
          </div>
        
        </div>
      </div>
    )
  }
}


export default HomePage;


