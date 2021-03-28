<template>
    <div class="container">
        <div class="card">
            <h1>login</h1>
            <p>Vous n'avez pas de compte <router-link to="/inscription">S'inscrire</router-link> <br></p>
            <form class="form">
                <input type="email" placeholder="Email" v-model="email">
                <input type="password" placeholder="password" v-model="password">
                <button type="submit" @click="signIn" class="btn">submit</button>
            </form>
        </div>
    </div>
</template>

<script>
  import firebase from 'firebase'
  export default {
    name: 'login',
    components : {
        
    },
    data() {
        return {
            email: '',
            password: '',
        }
    },
    methods: {
        signIn: function () {
            firebase.auth().signInWithEmailAndPassword(this.email, this.password). then(
                function(){
                    alert('well done, you are now connected!')
                    this.$router.push('/profil');
                },
                function (err) {
                    alert('Oops.' + err.message)
                }
            );
        }
    }
  }

</script>

<style>
    .container{
        display: flex;
        justify-content: center;
        align-items: center;
    }
   .card{
       width: 80%;
       padding: 10px;
       margin: 30px auto;
       border: gray solid gray;
       border-radius: 5px;

       box-shadow: -1px 1px 16px 0px rgba(0,0,0,0.75);
       -webkit-box-shadow: -1px 1px 16px 0px rgba(0,0,0,0.75);
       -moz-box-shadow: -1px 1px 16px 0px rgba(0,0,0,0.75);
   }
   .form{
       display: flex;
       flex-direction: column;
       justify-content: center;
       align-items: center;
   }
   input{
       border-radius: 10px;
       width: 70%;
       height: 30px;
       border: 1px solid gray;
       padding: 10px;
       margin: 10px auto;
   }
   .btn{
       margin: 10px;
       font-size: 1em;
       background-color: black;
       color: white;
       height: 30px;
       border-radius: 5px;
       width: 70%;
   }
</style>