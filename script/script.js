import { contacts } from './db.js';

const { DateTime } = luxon;

const { createApp } = Vue;

createApp({
  data() {
    return {
      contacts,
      activeId: 0,
      newMsg: '',
      newText: {
        date: '',
        message: '',
        status: ''
      },
      nametoSearch: '',
      isClicked: false,
      dataOra:'',
    }
  },
  methods: {

    printData(){
      
      
    this.dataOra = DateTime.now()
        .setLocale('it')
        .toFormat('dd/MM/yyyy HH:mm:ss')
      return this.dataOra;
    },

    
    newMessage() {
      this.printData();
      console.log(this.dataOra);
      this.newText = {
        date: this.dataOra,
        message: this.newMsg,
        status: 'sent'
      }
      this.contacts[this.activeId].messages.push(this.newText);
      this.newMsg = ''
      this.newText = {
        date: '',
        message: '',
        status: '',
      }
    },
    answer() {
      setTimeout(() => {

        this.newAnswer = {
          date: DateTime.local().toFormat('dd/MM/yyyy hh:mm:ss'),
          message: 'Messaggio dal BOT',
          status: 'received',
        }
        this.contacts[this.activeId].messages.push(this.newAnswer);

      }, 1000)

    },

    deleteMessage(indice){
      this.contacts[this.activeId].messages.splice(indice,1)
      }
    
  },

  computed: {

    searchContacts (){
      contacts.forEach(contact => {
        if (contact.name.toLowerCase().includes(this.nametoSearch.toLowerCase())) {
          contact.visible = true
        } else {
          contact.visible = false
  
        }
      })
        
      return contacts;
    }
  },

}).mount('#app');