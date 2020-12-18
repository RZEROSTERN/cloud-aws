<template>
    <div>
        <h1>Private</h1>
        <button @click="logout">Logout</button>
    </div>
</template>
<script>
import firebase from "firebase/app";
import 'firebase/app';
import 'firebase/auth';

export default {
    methods: {
        logout() {
            firebase.auth()
            .signOut()
                .then( () => {
                this.$router.replace('/login')
                })
        }        
    }
}
</script>