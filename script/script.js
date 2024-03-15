import { contacts } from './db.js';

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
      nametoSearch: ''
    }
  },
  methods: {
    newMessage() {
      this.newText = {
        date: '01/01/1900',
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
          date: '01/01/1900',
          message: 'Messaggio dal BOT',
          status: 'received',
        }
        this.contacts[this.activeId].messages.push(this.newAnswer);

      }, 1000)

    }
  },

  computed: {
    visibleContacts(){
      return contacts.filter(contact => contact.visible)
    },

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
  }
}).mount('#app');