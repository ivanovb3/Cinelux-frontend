import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import NumericInput from 'react-numeric-input';

export default class Projections extends Component {

    constructor() {
        super()
        this.state = {
            chosenProjection: 0,
            value: 0
        }
        this.handleChangeProjection = this.handleChangeProjection.bind(this)
        this.handleChangeSeatAmount = this.handleChangeSeatAmount.bind(this)
        this.confirm = this.confirm.bind(this)
    }

    handleChangeProjection(event) {
        this.setState({ chosenProjection: event.target.value })
    }

    confirm(event) {
        console.log("id:" + event.target.value + " seats" + this.state.value)
    }

    handleChangeSeatAmount(value) {
        this.setState({ value: value })
    }

    render() {
        const projections = []
        if (this.props.projectionsInSelectedDate[0] != null) {
            for (const [index, value] of this.props.projectionsInSelectedDate.entries()) {
                projections.push(
                    <div className="projectionWrapper">
                        <Button
                            variant="outline-flat"
                            /* active={{color:"red"}} */
                            value={this.props.projectionsInSelectedDate[index].id}
                            name={this.props.projectionsInSelectedDate[index].id}
                            onClick={this.handleChangeProjection}>
                            {this.props.projectionsInSelectedDate[index].time.substring(0, 5)}
                        </Button>
                        {this.state.chosenProjection == this.props.projectionsInSelectedDate[index].id ?
                            <div className="seatsToChoose">
                                <h3 className="instruction">Please choose amount of seats</h3>
                                <NumericInput mobile min={0} max={50} value={this.state.value} onChange={this.handleChangeSeatAmount} size="7" />
                                <Button
                                    variant="dark"
                                    value={this.props.projectionsInSelectedDate[index].id}
                                    style={{ float: "right" }}
                                    onClick={this.confirm}
                                >Confirm</Button>{' '}
                            </div>
                            : null}
                    </div>
                )
            }
        }
        else{
              projections.push(
                <h1 className="instruction">There are currently no projections scheduled on this date</h1>
            )  
        }



        return (
            <div>
                {projections}
            </div>
        )
    }
}
