import React, { Component } from 'react'
import Helmet from '../components/Helmet'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import { withRouter } from 'react-router-dom'

import ProjectionService from '../services/ProjectionService'
import Movie from '../components/Movie'
import Seats from '../components/Seats'

import '../styles/purchase.css';

class TicketPurchasePage extends Component {
    constructor() {
        super()
        this.state = {
            projection: {}
        }
    }

    componentDidMount() {
        /* console.log(this.props.location.state); */
        ProjectionService.getProjectionById(this.props.location.state.projectionId)
            .then((response) => {
                this.setState({ projection: response.data })
            })
    }
    render() {
        return (
            <div>
                <NavBar />
                <div className="leftContainer">
                    <Movie movie={this.props.location.state.movie} projection={this.state.projection} />
                </div>
                <div className="rightContainerPurchase">
                    {/* <i class="fas fa-couch" style={{color:"white"}} onClick={() => {console.log("cock")}}></i> */}
                    <div className="seatsChoice">
                        <Seats projection={this.state.projection} seatsAmount={this.props.location.state.seatsAmount} />
                    </div>
                </div>
                <Footer />
                <Helmet />
            </div>
        )
    }
}

export default withRouter(TicketPurchasePage)
