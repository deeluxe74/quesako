<template>
  <div class="d-flex flex-column justify-content-center">
    <div class="align-self-center badge badge-info">La Carte !</div>
      <div 
          class="card align-self-center" :class="[rotateIn ? 'rotateIn' : 'rotateOut ']"
          @mouseenter="runAnimate()">
          <div :class="[swapText ? 'displayNone' : 'd-flex flex-column align-items-end h-100']">
            <div class="align-self-center text-center card-body">
                {{ card.word }}
            </div>
            <p class="align-self-center sentence card-text text-center px-3">
              {{ card.sentence }}
            </p>
          </div>
          <div :class="[swapText ? '' : 'displayNone']">
            <div class="d-flex flex-row reverse-text justify-content-between">
              <h2 class="pl-2 pt-3">Auteur: {{ card.author }}</h2>
              <i @click="runAnimateReverse()" style="color:#94020296;cursor:pointer;font-size:2.5rem;" class="fas fa-window-close mr-2"></i>
            </div>
            <p class="sentence card-text text-center reverse-text">{{ card.description }}</p>
          </div>
      </div>
      <div class="alert alert-primary">Regarde toutes les cartes actuellements disponible !
        <router-link to="/search">Go !</router-link>
      </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      card: {},
      rotateIn : false,
      swapText: false
    }
  },
  methods: {
    runAnimate(){
      this.rotateIn = true;
      setTimeout(() => {
        this.swapText = true;
      },350)

    },
    runAnimateReverse(id){
      this.rotateIn = false;
      setTimeout(() => {
        this.swapText = false;
      },350)
    }
  },
  beforeCreate(){
    const id = this.$route.params.id;

    axios.get(`/api/card/${id}`)
    .then(response => {
      this.card = response.data;
    });
  }
}
</script>

<style scoped>
h2 {
  font-size: 1.3rem;
}
.displayNone {
  display: none;
}

.card {
  margin: 30px 0;
  border: 10px solid rgba(0, 198, 126, 0.89);
  height: 400px;
  width: 420px;
  min-width: 420px;
  border-radius: 32px;
  font-size: 4rem;
}

.badge {
  margin: 3% 0;
  width: auto;
  padding: 2% 10%;
  background-color:rgba(0, 0, 0, 0.89) ;
  font-size: 6rem;
  font-weight: 100;
  color: white;
  border-radius: 15px;
}

.alert-primary {
  font-size: 1.3rem;
  color: black;
}

.card-text {
  font-size: 1.5rem;
  font-weight: 300;
  color: rgb(0, 0, 0);
  padding: 0 2%;
}

.card-body {
  font-weight: 500;
  margin-top: 15%;

}

.sentence {
  color: rgb(22, 22, 22);
  font-size: 1.2rem;
  font-weight: 100;
  margin-bottom: 20%;
}

.fa-window-close {
  margin-top: 10px;
  margin-bottom: 10%;
}

.reverse-text {
  transform: rotateY(-190deg);
}

/* ANIMATIONS */

.rotateIn {
  animation: rotateInCard 1s ease-out forwards;
}

.rotateOut {
  animation: rotateOutCard 1s ease-out forwards;
}

@keyframes rotateInCard {
  from {
    transform: rotateY(0deg);
  }
  100% {
    transform: rotateY(190deg);
    border: 10px solid rgba(2, 223, 223, 0.89);
  }
} 

@keyframes rotateOutCard {
  from {
    transform: rotateY(190deg);
    border: 10px solid rgba(2, 223, 223, 0.89);
  }
  100% {
    transform: rotateY(0deg);
    border: 10px solid rgba(0, 198, 126, 0.89);
  }
}
</style>