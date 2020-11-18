import axios from 'axios'

const USER_API_BASE_URL = "http://localhost:8080/projections"


class ProjectionService {    

    getProjectionById(projectionId) {
        return axios.get(USER_API_BASE_URL + '?id=' + projectionId);
    }

    addProjection(projection) {
        axios.post("http://localhost:8080/projections/add", projection)
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
    }

    getAllProjections(){
        return axios.get(USER_API_BASE_URL + '/all') //.then(res => {
            //return res.data.result.map(obj => ({name: obj.name, picture: obj.picture}));
          //});  
        
    }
    getProjectionsByDate(date){
        return axios.get(USER_API_BASE_URL + '/findByDate' + '?date=' + date)
    }

    getProjectionsByDateAndMovie(date, movie){
        return axios.get(USER_API_BASE_URL + '/findProjections' + '?date=' + date + '&' + 'id=' + movie.id )
    }
}

export default new ProjectionService
