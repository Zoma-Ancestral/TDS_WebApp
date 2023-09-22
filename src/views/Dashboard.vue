<script setup>
  import { useRouter } from 'vue-router'
  import { getAuth, onAuthStateChanged } from 'firebase/auth'
  
  const router = useRouter()
  const auth = getAuth()

  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log(user);
    } else {
      console.log("No user logged")
      router.push('/login')
    }
  });
</script>

<template>
  Dashboard
</template>