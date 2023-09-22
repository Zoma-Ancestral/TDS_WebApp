<script setup>
  import { ref } from 'vue'
  import { useRouter } from 'vue-router';
  import { createUserFirebase } from '@/firebase/firebaseAuthentification';

  const email = ref('')
  const password = ref('')
  const router = useRouter()
  
  const register = () => {
    createUserFirebase(email.value, password.value)
      .then((userCredential) => {
        console.log("Sucessfully logged in")
        router.push('/dashboard')
      })
      .catch(error => {
        console.log(error.code)
        alert(error.message)
      })
  }
</script>

<template>
  <h1>Create an Account</h1>
  <p><input type="text" placeholder="Email" v-model="email" /></p>
  <p><input type="password" placeholder="Password" v-model="password" /></p>
  <p><button @click="register">Submit</button></p>
</template>