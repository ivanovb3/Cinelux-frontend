import SockJs from 'sockjs-client'
import Stomp from 'stompjs'
import {handleSocket} from '../components/Seats'
import React from 'react'

let stompClient = null

class socket {
connect() {
    let socket = new SockJs("http://localhost:8080/socket");
    stompClient = Stomp.over(socket);
    stompClient.connect({}, function (frame) {
        console.log('Connected: ' + frame);
        stompClient.subscribe('/topic/edit', seat => {
            /* console.log(JSON.parse(seat.body).seat);  */
            handleSocket(JSON.parse(seat.body).seat);
        });
    });
}
send(seat) {
    stompClient.send("/seats/new", {}, JSON.stringify({ seat: seat }));
}

}
export default new socket()

