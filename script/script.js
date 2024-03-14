import {contacts} from './db.js';

const {createApp} = Vue;

createApp({
  data(){
    return{
      contacts,
      activeId: 0
    }
  },
  mounted(){
    console.log(contacts);

  }
}).mount('#app');