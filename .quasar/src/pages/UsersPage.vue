
<template>
  <q-page class="flex q-pa-md">
    <q-list
     class="full-width" seperator>
      <q-item v-for="(contact,i) in contacts" :key="i" class="q-my-sm" clickable v-ripple>
        <q-item-section avatar>
          <q-avatar color="primary" text-color="white">
            {{ contact.letter }}
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label>{{ contact.name }}</q-item-label>
          <q-item-label caption lines="1">{{ contact.email }}</q-item-label>
        </q-item-section>

        <q-item-section side>
           <q-badge color="blue">
             Online
          </q-badge>
          
        </q-item-section>
      </q-item>

      <q-separator />
      <q-item-label header>Offline</q-item-label>

      <q-item v-for="contact in offline" :key="contact.id" class="q-mb-sm" clickable v-ripple>
        <q-item-section avatar>
          <q-avatar>
            <img :src="`https://cdn.quasar.dev/img/${contact.avatar}`">
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label>{{ contact.name }}</q-item-label>
          <q-item-label caption lines="1">{{ contact.email }}</q-item-label>
        </q-item-section>

        <q-item-section side>
          <q-badge color="black">
             Offline
          </q-badge>
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>


<script>
export default {
  data () {
    return {
      contacts:[ {
        id: 1,
        name: 'Auntie Esi',
        email: 'rjedrzej0@outlook.net',
        letter: 'A'
      }, {
        id: 2,
        name: 'Maame Afua',
        email: 'malessandrini1@gmail.com',
        letter: 'M'
      }, {
        id: 3,
        name: 'Linda Aqua',
        email: 'ewicklen2@yahoo.com',
        letter: 'L'
      }, {
        id: 4,
        name: 'Rocklyn Kafui',
        email: 'sfawdrey3@gmail.com',
        letter: 'R'
      } ],
            offline : [ {
        id: 5,
        name: 'Amberlyn Acacia',
        email: 'bpanswick4@gmail.com',
        avatar: 'avatar2.jpg'
      }, {
        id: 6,
        name: 'Dealyn Oneill',
        email: 'wstapforth5@gmail.com',
        avatar: 'avatar6.jpg'
      } ]
    }
  }
}
</script>
