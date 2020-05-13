import axios from 'axios';
const baseUrl = 'http://localhost:3001/persons';

const getAll = () => {
    const request = axios.get(baseUrl);
    return request.then(response => response.data);
}

const createPerson = (object) => {
    const request = axios.post(baseUrl, object);
    return request.then(response => response.data);
}

const updatePerson = (object, id) => {
    const request = axios.put(`${baseUrl}/${id}`, object);
    return request.then(response => response.data);
}

const deletePerson = (id) => {
    const request = axios.delete(`${baseUrl}/${id}`);
    return request.then(response => response.data);
}

export {
    createPerson,
    getAll,
    deletePerson,
    updatePerson
}