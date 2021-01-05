import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import NumericInput from 'react-numeric-input';
import { withRouter } from 'react-router-dom'

import AuthService from "../services/auth.service";

class Projections extends Component {

    constructor() {
        super()
        this.state = {
            chosenProjection: 0,
            value: 0,
            isNotLogged: false
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
        console.log(this.props.movie)
        if (AuthService.getCurrentUser() != null) {
            this.props.history.push({
                pathname: '../film/' + event.target.name + '/purchase-ticket',
                state: { seatsAmount: this.state.value, projectionId: event.target.value, movie: this.props.movie }
            })
            window.location.reload();
        }
        else {
            this.setState({ isNotLogged: true })
        }
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
                                <NumericInput mobile min={0} max={10} value={this.state.value} onChange={this.handleChangeSeatAmount} size="7" />
                                {this.state.value > 0 ?
                                    <div style={{float:'right'}}>
                                        <Button
                                            variant="dark"
                                            value={this.props.projectionsInSelectedDate[index].id}
                                            name={this.props.projectionsInSelectedDate[index].movie.name}
                                            style={{ float: "right" }}
                                            onClick={this.confirm}
                                        >Confirm</Button>
                                        {this.state.isNotLogged ?
                                            <div>
                                                <h3 className="instruction">To proceed with buying a ticket you have to be logged in</h3>
                                                <a href="../../login">Log in</a> or <a href="../../register">Register</a>
                                            </div> : null}
                                    </div> :
                                    <Button
                                        variant="dark"
                                        value={this.props.projectionsInSelectedDate[index].id}
                                        name={this.props.projectionsInSelectedDate[index].movie.name}
                                        style={{ float: "right" }}
                                        onClick={this.confirm}
                                        disabled
                                    >Confirm</Button>}

                            </div>
                            : null}
                    </div>
                )
            }
        }
        else {
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

export default withRouter(Projections)
