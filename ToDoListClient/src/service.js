import axios from 'axios';
axios.defaults.baseURL = 'https://localhost:7271/items';
axios.create();

export default {
  getTasks: async () => {
    const result = await axios.get(``)
    return result.data;
  },

  addTask: async (name) => {
    // console.log('addTask', name)
    const result = await axios.post(``, { name: name, isComplete: false }).then(function (response) {
      console.log(response)
      return result.data;
    }).catch(function(error){
      console.log(error);
    })
  },

  setCompleted: async (id, isComplete) => {
    const result = await axios.put(`/${id}?isComplete=${isComplete}`).then(function (response) {
      console.log(response)
      return result.data;
    }).catch(function(error){
      console.log(error);
    })
  },

  deleteTask: async (id) => {
    // console.log('deleteTask')
    const result = await axios.delete(`/${id}`).then(function (response) {
      console.log(response)
      return result.data;
    }).catch(function(error){
      console.log(error);
    })
  }

};

axios.interceptors.response.use(function (response) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  // console.log("OK");
  return response;
}, function (error) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  console.error(error);
  return Promise.reject(error);
});




