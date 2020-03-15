<template>
  <div>
      <h1 class="mt-5 text-center">Quésako?</h1>
      <div v-if="errors" class="alert alert-danger">Votre recherche n'existe pas encore ! Crée la dans <router-link to="/post">Post !</router-link></div>
      <input @keyup.enter="search()" v-model="userEnter" list="myName" class="mt-4 form-control" type="text" name="search">
      <datalist id="myName">
          <option class="datalist" v-for="(name, index) in cards" :key="'name' + index" :value="name"></option>
      </datalist>
  </div>
</template>

<script>
export default {
    data(){
        return {
            cards: [],
            arrayCard: [],
            userEnter: null,
            errors: false

        }
    },
    created(){
    axios.get(`/api/`)
    .then(response => {
        this.response = response.data;
        this.response.forEach(card => {
            this.arrayCard.push(card);
            this.cards.push(card.word);
        });
        
    });
  },
  methods: {
        search(){
            const searchUser = this.userEnter;
            this.arrayCard.forEach(card => {
                if(card.word == searchUser ){
                    this.$router.push(`/card/${card.id}`);
                }
            });
            this.errors = true;   
        }
   }    
}
</script>

<style scoped>
h1 {
    font-family: 'Skranji', cursive;
    color: #00C67E;
    font-size: 7rem;
    font-weight: 500;
}

input {
    font-size: 2.5rem;
    color: rgb(0, 165, 88);
    height: 100px;
    background: #F5F5F5;
    border: none;
    box-shadow: 11px 10px 17px rgba(0, 0, 0, 0.25);
    border-radius: 15px;
}

option {
    color: red;
}

</style>