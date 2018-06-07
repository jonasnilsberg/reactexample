// TODO: move to constants file
const API_URL = 'http://localhost:8000/api';

class TestApi {
    static getAllTests() {
        return fetch(`${API_URL}/tests/`)
            .then(response => response.json());
    }

    static getTask(taskID) {
        return fetch(`${API_URL}/tasks/${taskID}`)
            .then(response => response.json());
    }
}

export default TestApi;