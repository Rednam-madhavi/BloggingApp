import api from './services/api';

const source = api.getCancelToken();

api.get('/posts', { cancelToken: source.token })
    .then(response => console.log(response))
    .catch(error => {
        if (axios.isCancel(error)) {
            console.log('Request canceled:', error.message);
        } else {
            console.error('Request failed:', error);
        }
    });

source.cancel('Operation canceled by the user');