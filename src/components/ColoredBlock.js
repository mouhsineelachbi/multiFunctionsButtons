import React from 'react';
import ChangeColorButton from './ChangeColorButton';


class ColoredBlock extends React.Component {
    constructor(props){
        super(props);
        this.changeColor = this.changeColor.bind(this);
        this.state = {
            backgroundColor : "red"
        };
    }

    changeColor(){
        this.setState((prevState) => {
            var newColor = prevState.backgroundColor === "red" ? "blue": "green";
            return {
                backgroundColor : newColor
            }
        });
    }
    render(){
        return (
            <div style={{width:"200px", height:"200px", backgroundColor:this.state.backgroundColor}}>
            <ChangeColorButton onClick={this.changeColor} />
            </div>
        )
    }
}

export default ColoredBlock;