<script setup>
  import { useRouter } from 'vue-router';
  import { getAuth, signOut } from 'firebase/auth';

  const router = useRouter()

  const auth = getAuth()
  signOut(auth)
    .then(() => {
      console.log("Log out complete")
      router.push("/")
    })
    .catch(error => {
      console.log(error.code)
      alert(error.message)
    })
  
</script>