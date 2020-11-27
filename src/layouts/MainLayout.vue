
<!-- opening tag template html-->
<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
        v-if="$route.fullPath.includes('/chat')"
        v-go-back.single
        
         color="primary" icon="arrow_back" label="on back"  />
        <q-toolbar-title class="absolute-center">
          <span v-if="$route.fullPath === '/'">Ayekoochat</span>
          <span v-if="$route.fullPath === '/chat'"> chat</span>
            <span v-if="$route.fullPath === '/auth'"> chat</span>
             <span v-if="$route.fullPath === '/users'">Login</span>
        </q-toolbar-title>
        <q-btn
        to='\auth'
         color="primary"
         class="absolute-right q-pr-sm" 
         icon="account_circle" 
         no-caps
         label="login" 
          />
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>


export default {
computed:{
  // title(){
  //   console.log(this.$route)
  //   let currentPath = this.$route.fullPath
  //   if (currentPath == '/') return 'smack chat'
  //   else if (currentPath == '/chat') return 'chat'
  //   else if (currentPath == '/auth') return 'Login'

  // },
},
methods:{
  getTitle(){
    let currentPath = this.$route.fullPath
    if (currentPath == '/') return 'Ayekoochat'
    else if (currentPath == '/chat') return 'chat'
    else if (currentPath == '/auth') return 'Login'
  }

}
  
}
  
  
</script>
