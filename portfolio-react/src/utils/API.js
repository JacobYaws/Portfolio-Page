import axios from 'axios';

const search = () =>
  axios.get(`https://api.github.com/users/JacobYaws/repos`);

export default { search };