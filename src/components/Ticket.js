import React, { Component } from 'react'
import QRCode from "react-qr-code";
import Card from 'react-bootstrap/Card'

import TicketService from '../services/TicketService'

export default class Ticket extends Component {
    constructor() {
        super()
        this.state = {
            userTickets: []
        }
    }
    componentDidMount() {
        TicketService.getTicketsByUser(this.props.user.id).then((res) => {
            this.setState({ userTickets: res.data })
        })
    }

    calculateTime(t1, t2){
        let t1H = parseInt(t1.substring(0,2))
        let t1M = parseInt(t1.substring(3,5))       
        let t2H =t2 / 60
        t2H = Math.floor(t2H)
        let t2M = t2 % 60 
        let t3H= t1H + t2H
        let t3M = t1M + t2M
        if(t3M >= 60){
            t3M = t3M % 60
            t3H++
        }
        if(t3H >= 24){
            t3H = t3H % 24
        }
        if(t3M == 0){
            t3M = "00"
        }
        return t3H+":"+t3M
    }
    render() {
        console.log(this.state.userTickets)
        const tickets = []
        if (this.state.userTickets[0] != null) {
            for (const [index, value] of this.state.userTickets.entries()) {
                tickets.push(
                    <div className="userTicket">
                        <Card>
                            <QRCode className="qrCode" value={this.state.userTickets[index].ticketNumber} />
                            {/*         <Card.Img variant="top" src="holder.js/100px160" /> */}

                            <Card.Body>
                                <Card.Title>{this.state.userTickets[index].projection.movie.name}</Card.Title>
                                <Card.Text>
                                    Date: {this.state.userTickets[index].projection.date.substring(5,10)}
                                    <br></br> 
                                    Projection starts: {this.state.userTickets[index].projection.time.substring(0, 5)}
                                    <br></br> 
                                    Projection ends: {this.calculateTime(this.state.userTickets[index].projection.time, this.state.userTickets[index].projection.movie.runtime)}
                                    <br></br> 
                                    Seat: {this.state.userTickets[index].seat}
      </Card.Text>
                            </Card.Body>
                        </Card>
                        {/* <QRCode value={this.state.userTickets[index].ticketNumber} /> */}
                    </div>
                )
            }
        }

        /* else {
            projections.push(
                
            )
        } */
        return (
            <div className="ticketsWrapper">
                {tickets}
            </div>
        )
    }
}
