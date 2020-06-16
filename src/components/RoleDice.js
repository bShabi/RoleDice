import React from 'react';
import Die from './Die';
import '../css/RoleDice.css'

class RoleDice extends React.Component {
    static defaultProps = {
        side: ["one","two","three","four","five","six"]
    };
    constructor(props) {
        super(props);
        this.state = {
            die1: "one",
            die2: "two"
        };
        this.roll = this.roll.bind(this)
     }
    roll()
    {
        //pick 2 new roll
       const newDieOne = this.props.side[
           Math.floor(Math.random() * this.props.side.length)
        ];
       const newDieTwo = this.props.side[
           Math.floor(Math.random() * this.props.side.length)
        ];
        //Set state with new Roll
       this.setState({die1: newDieOne ,die2: newDieTwo}) ;
       
    }
    render() {
        return(
        <div className="RoleDice">
            
            <div className="RoleDice-container">
            <Die face={this.state.die1}/>
            <Die face={this.state.die2}/>
            </div>
            <button onClick={this.roll}>Roll Dice</button>
            
        </div>)
    }


}
export default RoleDice