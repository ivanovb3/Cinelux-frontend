import React, { Component } from 'react'
import TicketService from '../services/TicketService'
import Button from 'react-bootstrap/Button'

import AuthService from "../services/auth.service";

export default class Seats extends Component {
    constructor(props) {
        super(props)
        this.state = {
            seats: 112,
            boughtTickets: [],
            alreadyChosenSeats: [],
            chosenSeatsByUser: [],
            seatsAmountToBuy: 0,
            ticketsAdded: false
        }
        this.handleReserveSeat = this.handleReserveSeat.bind(this)
        this.confirmSeats = this.confirmSeats.bind(this)
        this.changeColor = this.changeColor.bind(this)
        this.colorBack = this.colorBack.bind(this)

    }

    /* componentDidMount(){
        this.setState({ticketsAdded: false})
    } */
    componentWillReceiveProps(nextProps) {
        let chosenSeats = []
        /* if(this.state.ticketsAdded == false){ */
        if (nextProps.projection !== this.props.projection) {
            TicketService.getTicketsByProjection(nextProps.projection.id)
                .then((res) => {
                    /*  let chosenSeats = [] */
                    for (const [index, value] of res.data.entries()) {
                        chosenSeats.push(res.data[index].seat)
                    }
                    this.setState({ boughtTickets: res.data, alreadyChosenSeats: chosenSeats, seatsAmountToBuy: this.props.seatsAmount })
                })
        } /* } */

    }

    handleReserveSeat(e) {
        const btnValue = e.currentTarget.value
        console.log(btnValue)
        let chosenSeatsByUser = this.state.chosenSeatsByUser
        if (!chosenSeatsByUser.includes(btnValue)) {
            if (this.state.chosenSeatsByUser.length < this.state.seatsAmountToBuy) {
                chosenSeatsByUser.push(btnValue)
            }
        }
        else {
            const index = chosenSeatsByUser.indexOf(btnValue);
            if (index > -1) {
                chosenSeatsByUser.splice(index, 1);
            }
        }
        this.setState({ chosenSeatsByUser: chosenSeatsByUser })
    }

    confirmSeats() {
         for (var i = 0; i < this.state.seatsAmountToBuy; i++) {
            let random = this.randomIntFromInterval(1000000,9999999)
            let ticket = {
                ticketNumber: random,
                user: { id: AuthService.getCurrentUser().id },
                projection: { id: this.props.projection.id },
                seat: parseInt(this.state.chosenSeatsByUser[i])
            }
            TicketService.addTicket(ticket)

            this.setState({ticketsAdded: true, seatsAmountToBuy: this.state.chosenSeatsByUser.length})
           /*  window.location.reload(); */
        }
         
    }
    randomIntFromInterval(min, max) { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    changeColor(event){
        if (this.state.chosenSeatsByUser.length < this.state.seatsAmountToBuy) {
        event.target.style.color = '#f7941e';  
    } 
    }
    colorBack(event){
        if (!this.state.chosenSeatsByUser.includes(event.target.value)) {
        event.target.style.color = 'white'  
    } 
    }
    render() {
        let seats = []
        for (var i = 1; i < this.state.seats + 1; i++) {
            if (i % 16 == 3) {
                if (!this.state.alreadyChosenSeats.includes(i)) {
                    if (!this.state.chosenSeatsByUser.includes(i.toString())) {
                        seats.push(
                            <button value={i} onClick={this.handleReserveSeat} style={{ marginRight: '2%', border: 'none', width: '6%', backgroundColor: 'transparent', padding: '0', outline: 'none' }}  onMouseEnter={this.changeColor} onMouseOut={this.colorBack} >
                                <i class="fas fa-couch" value={i} style={{ color: 'white', fontSize: '30px' }}></i>
                            </button>
                        )
                    }
                    else {
                        seats.push(
                            <button onClick={this.handleReserveSeat} style={{ marginRight: '2%', border: 'none', width: '6%', backgroundColor: 'transparent', padding: '0', outline: 'none' }} value={i}>
                                <i class="fas fa-couch" value={i} style={{ color: '#f7941e', fontSize: '30px' }}></i>
                            </button>
                        )
                    }
                }
                else {
                    seats.push(
                        <button style={{ marginRight: '2%', border: 'none', width: '6%', backgroundColor: 'transparent', padding: '0', outline: 'none' }} value={i}>
                            <i class="fas fa-couch" style={{ color: '#363535', fontSize: '30px' }}></i>
                        </button>
                    )
                }
            }
            else if (i % 16 == 14) {
                if (!this.state.alreadyChosenSeats.includes(i)) {
                    if (!this.state.chosenSeatsByUser.includes(i.toString())) {
                        seats.push(
                            <button onClick={this.handleReserveSeat} style={{ marginLeft: '2%', border: 'none', width: '6%', backgroundColor: 'transparent', padding: '0', outline: 'none' }} value={i} onMouseEnter={this.changeColor} onMouseOut={this.colorBack}>
                                <i class="fas fa-couch" style={{ color: 'white', fontSize: '30px' }}></i>
                            </button>
                        )
                    }
                    else {
                        seats.push(
                            <button onClick={this.handleReserveSeat} style={{ marginLeft: '2%', border: 'none', width: '6%', backgroundColor: 'transparent', padding: '0', outline: 'none' }} value={i}>
                                <i class="fas fa-couch" value={i} style={{ color: '#f7941e', fontSize: '30px' }}></i>
                            </button>
                        )
                    }
                }
                else {
                    seats.push(
                        <button style={{ marginLeft: '2%', border: 'none', width: '6%', backgroundColor: 'transparent', padding: '0', outline: 'none' }} value={i}>
                            <i class="fas fa-couch" style={{ color: '#363535', fontSize: '30px' }}></i>
                        </button>
                    )
                }
            }
            else {
                if (!this.state.alreadyChosenSeats.includes(i)) {
                    if (!this.state.chosenSeatsByUser.includes(i.toString())) {
                        seats.push(
                            <button onClick={this.handleReserveSeat} style={{ border: 'none', width: '6%', backgroundColor: 'transparent', padding: '0', outline: 'none' }} value={i} onMouseEnter={this.changeColor} onMouseOut={this.colorBack}>
                                <i class="fas fa-couch" style={{ color: 'white', fontSize: '30px' }} ></i>
                            </button>
                        )
                    }
                    else {
                        seats.push(
                            <button onClick={this.handleReserveSeat} style={{ border: 'none', width: '6%', backgroundColor: 'transparent', padding: '0', outline: 'none' }} value={i}>
                                <i class="fas fa-couch" value={i} style={{ color: '#f7941e', fontSize: '30px' }}></i>
                            </button>
                        )
                    }
                }
                else {
                    seats.push(
                        <button style={{ border: 'none', width: '6%', backgroundColor: 'transparent', padding: '0', outline: 'none' }} value={i}>
                            <i class="fas fa-couch" style={{ color: '#363535', fontSize: '30px' }} ></i>
                        </button>
                    )
                }
            }
        }
        return (
            
            <div>  
                {/* {this.state.ticketsAdded ?  */}  
                <div>            
                <span style={{ display: 'flex' }}>
                    <span className="legend">
                        <h5>Available</h5>
                        <i class="fas fa-couch" style={{ color: 'white', fontSize: '30px' }} ></i>
                    </span>
                    <span className="legend">
                        <h5>Unavailable</h5>
                        <i class="fas fa-couch" style={{ color: '#363535', fontSize: '30px' }} ></i>
                    </span>
                    <span className="legend">
                        <h5>Selected</h5>
                        <i class="fas fa-couch" style={{ color: '#f7941e', fontSize: '30px' }} ></i>
                    </span>
                </span>

                <div className="cinemaOutlook">
                    <ColoredLine color='black' />
                    {seats}
                </div>
                <h1 style={{ color: 'white' }}>Seats left to choose: {this.state.seatsAmountToBuy - this.state.chosenSeatsByUser.length}</h1>
                {this.state.seatsAmountToBuy - this.state.chosenSeatsByUser.length == 0 & !this.state.ticketsAdded ?
                    <Button
                        variant="dark"
                        /* value={this.props.projectionsInSelectedDate[index].id}
                        name={this.props.projectionsInSelectedDate[index].movie.name}
                        style={{ float: "right" }} */
                        onClick={this.confirmSeats}
                    >Confirm</Button>/* {' '} */ :
                    <Button
                        variant="dark"
                        /* value={this.props.projectionsInSelectedDate[index].id}
                        name={this.props.projectionsInSelectedDate[index].movie.name}
                        style={{ float: "right" }} */
                        disabled
                    >Confirm</Button>} </div> {/* : <div><h3 className="instruction">Purchase was successfull. You can see your bought tickets on the Tickets page</h3></div> } */}

                    {this.state.ticketsAdded ? <h3 className="instruction">Purchase was successfull. You can see your bought tickets on the tickets page</h3> : null} 
                
            </div> 
        )
    }
}

const ColoredLine = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 15,
            width: '80%',
            marginLeft: '10%',
            marginBottom: 100
        }}
    />
);