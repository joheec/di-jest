import axios from 'axios';

class Cities {
  static all() {
    return axios.get('/cities.json');
  }
}

const ReturnTrue = () => true;

module.exports = {
  Cities,
  ReturnTrue,
}
