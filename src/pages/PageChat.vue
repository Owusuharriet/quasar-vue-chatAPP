<!-- opening tag template html-->
<template>
  <q-page class="flex column">
    <q-banner  class="bg-beige text-center">
      User is offline
      <template>
        <q-btn flat color="white" label="turn on wifi" />
      </template>

    </q-banner>
    <div class="q-pa-md column col justify-end">
      <q-chat-message
      v-for="message in messages"
      :key="message.text"
        :name="message.from"
        :text="[message.text]"
        :sent="message.from == 'me' ? true : false"
         >
      </q-chat-message>
    </div>
    <q-footer elevated>
      <q-toolbar>
        <q-form @submit="sendMessage" class="full-width">

        
        <q-input
          
          bottom-slots v-model="newMessage"
          bg-color="white"
          class="full-width"
         outlined
         rounded
          label="Message" dense>
          <template v-slot:after>
            <q-btn round dense
             flat
             type="submit"
             color="white"
              icon="send" />
          </template>
        </q-input>
        </q-form>
      </q-toolbar>
    </q-footer>
  </q-page>
</template>
<!-- closing tag of template html-->

<script>
export default {
  data(){
    return{
      newMessage: '',
      messages:[
        {
          text: 'hy Ann, how are you',
          from: 'me'
        },
        {
          text: 'am good, you?',
          from: 'them'
        },
        {
          text: 'am awesome',
          from: 'me'
        }

      ]

    }

  },
  methods: {
    sendMessage() {
      this.messages.push({
        text: this.newMessage,
        from: 'me'
      })
    }
  }
}
</script>