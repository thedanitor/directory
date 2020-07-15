import axios from "axios";
const url = "https://randomuser.me/api/?results=200&nat=u";

export default {
    getEmployees: function() {
        return axios.get(url);
    }
};