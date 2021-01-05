import axios from 'axios'

const USER_API_BASE_URL = "http://localhost:8080/tickets"

class TicketService{
    getTicketById(ticketId) {
        return axios.get(USER_API_BASE_URL +'/findById?id=' + ticketId);
    }

    addTicket(ticket) {
        axios.post(USER_API_BASE_URL +"/add", ticket)
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
    }

    getAllTickets(){
        return axios.get(USER_API_BASE_URL + '/all') //.then(res => {
            //return res.data.result.map(obj => ({name: obj.name, picture: obj.picture}));
          //});  
        
    }
    getTicketsByProjection(projection){
        return axios.get(USER_API_BASE_URL + '/findByProjection' + '?p=' + projection)
    }

    getTicketsByUser(user){
        return axios.get(USER_API_BASE_URL + '/findByUser' + '?u=' + user)
    }
}

export default new TicketService