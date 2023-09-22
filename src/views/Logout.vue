<script setup>
  import { useRouter } from 'vue-router';
  import { logoutUser } from '../firebase/firebaseAuthentification';

  const router = useRouter()

  logoutUser()
    .then((result) => {
      console.log("Log out complete")
      router.push("/")
    })
    .catch(error => {
      console.log(error.code)
      alert(error.message)
    })
  
</script>