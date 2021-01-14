import React, { Component } from 'react'
import Nav from 'react-bootstrap/Nav'


export default class Calendar extends Component {
    constructor() {
        super()
        this.handleChangeDate = this.handleChangeDate.bind(this)
    }

    handleChangeDate(event) {
        this.props.handleChangeDay(event.target.name) 
    }

    render() {
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
        const items = [];
        let date = new Date();
        let day = date.getDay()
        for (const [index, value] of days.entries()) {
            var realDay = day + index
            realDay = realDay % 7
            items.push(
                <Nav.Item>
                    <Nav.Link href="#"
                        name={getCurrentDate(index)}
                        value={getCurrentDate(index)}
                        eventKey={getCurrentDay(index)}
                        className="date" 
                        onClick={this.handleChangeDate} >
                        {getDayOfWeek(realDay)} {getCurrentDay(index)}
                    </Nav.Link>
                </Nav.Item>
            )
        }

        return (
            <div className="">
                <Nav variant="pills" defaultActiveKey="#">
                    {items}
                </Nav>
            </div>
        )
    }
}

const getCurrentDay = (index) => {
    let date = new Date();
    let day = date.getDate() + index
    let month = date.getMonth() + 1
    if (day > 30) {
        day = day % 31 + 1
        month = month + 1
        if(month > 12){
            month = 1
        }
    }
    let current = day + '/' + month
    return current;
}
const getCurrentDate = (index) => {
    let date = new Date()
    let day = date.getDate() + index
    let month = date.getMonth() + 1
    if (day > 30) {
        day = day % 31 + 1
        month = month + 1        
    }
    let year = date.getFullYear();
    if(month > 12){
        month = 1
        year++
    }
    let current = year + '-' + month + '-' + day;
    return current;
}
const getDayOfWeek = (day) => {
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
    let day1 = weekday[day].toString();
    let returnDay = day1.substring(0, 3)
    return returnDay;

}













