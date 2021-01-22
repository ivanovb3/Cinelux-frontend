import axios from 'axios'
import AuthService from "../services/auth.service";

const USER_API_BASE_URL = "http://localhost:8080/api/tickets"

class TicketService {
    getTicketById(ticketId) {
        let ticket = axios.get(USER_API_BASE_URL + '/findById?id=' + ticketId);
        if (AuthService.getCurrentUser().id === ticket.user.id) {
            return ticket
        }
        else {
            return null
        }

    }

    addTicket(ticket) {
        axios.post(USER_API_BASE_URL + "/add", ticket)
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
    }

    getAllTickets() {
        return axios.get(USER_API_BASE_URL + '/all') //.then(res => {
        //return res.data.result.map(obj => ({name: obj.name, picture: obj.picture}));
        //});  

    }
    getTicketsByProjection(projection) {
        return axios.get(USER_API_BASE_URL + '/findByProjection' + '?p=' + projection)
    }

    getTicketsByUser() {
        let id = AuthService.getCurrentUser().id
        const user = JSON.parse(localStorage.getItem('user'));
        return axios.get(USER_API_BASE_URL + '/findByUser' + '?u=' + id + '&request=' + user.accessToken)
        
    }
}

export default new TicketService