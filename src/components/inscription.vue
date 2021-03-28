<template>
    <div class="container">
        <div class="card">
            <h1>Inscription</h1>
             <p>Vous avez déja un compte <router-link to="/login">Se connecter</router-link></p>
            <form class="form">
                <!-- <input type="text" placeholder="Prenom" v-model="prenom"> -->
                <!-- <input type="text" placeholder="nom" v-model="nom"> -->
                <input type="email" placeholder="Email" v-model="email">
                <input type="password" placeholder="password" v-model="password">
                <button type="submit" class="btn" @click="signUp">submit</button>
            </form>
            <p>
                Email: {{email}}
                <br>
                Mot de passe: {{password}}
            </p>
        </div>
    </div>
</template>

<script>
import firebase from 'firebase'
export default({
    name: 'inscription',
    components : {
        
    },
    data() {
        return {
            email: '',
            password: '',
        }
    },
    methods: {
        signUp: function () {
            firebase.auth().createUserWithEmailAndPassword(this.email, this.password). then(
                function(){
                    alert('your account has been create!')
                    this.$router.push('/');
                },
                function (err) {
                    alert('Oops.' + err.message)
                }
            );
        }
    }
})
</script>
