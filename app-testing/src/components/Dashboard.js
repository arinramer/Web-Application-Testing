import React from 'react';
import Display from './Display';
import styled from 'styled-components';

const Buttons = styled.div`
    display: flex;
    justify-content: center;
`
const Button = styled.button`
    margin: 1%;
    font-size: 150%;
    padding: 10px;
`
class Dashboard extends React.Component {
    constructor() {
        super();
        this.state = {
            strikes: 0,
            balls: 0,
        }
    }
    componentDidUpdate() {
        if (this.state.strikes === 3 || this.state.balls === 4) {
            this.setState({strikes: 0, balls: 0})
        }
    }
    handleFoul = () => {
        if (this.state.strikes === 0) {
            this.setState({strikes: 1})
        } else if (this.state.strikes === 1) {
            this.setState({strikes: 2})
        } else {
            return;
        }
    }
    render() {
        return(
            <>
                <Display 
                strikes={this.state.strikes}
                balls={this.state.balls}
                />
                <Buttons>
                    <Button onClick={() => this.setState({strikes: this.state.strikes + 1})}>Strike</Button>
                    <Button onClick={() => this.setState({balls: this.state.balls + 1})}>Ball</Button>
                    <Button onClick={this.handleFoul}>Foul</Button>
                    <Button onClick={() => this.setState({strikes: 0, balls: 0})}>Hit</Button>
                </Buttons>
            </>
        )
    }
}

export default Dashboard;