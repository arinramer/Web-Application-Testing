import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    justify-content: center;
    margin: 5%;
`
const Col = styled.div`
    display: flex;
    flex-direction: column;
    margin: 5%;
`
const Box = styled.div`
    border: 1px solid black;
    border-radius: 20px;
    width: 100px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Num = styled.div`
    font-size: 200%;
`
class Display extends React.Component {
    render() {
        return(
            <Container>
                <Col label="balls">
                    <h1>Balls</h1>
                    <Box><Num>{this.props.balls}</Num></Box>
                </Col>
                <Col label="strikes">
                    <h1>Strikes</h1>
                    <Box><Num>{this.props.strikes}</Num></Box>
                </Col>
            </Container>
        )
    }
}

export default Display;