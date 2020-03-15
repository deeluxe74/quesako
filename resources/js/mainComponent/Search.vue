<template>
  <div class="row mt-5">
    <div class="all-cards col d-flex justify-content-between">
      
      <div v-for="(card, index) in cards" 
          :key="'card' + index" @mouseenter="runAnimate(index)" 
          :class="'card card-' + index" >
          <div>
            <div class="mt-3 text-center card-body font-weight-lighter">
                {{ card.word }}
            </div>
            <p class="card-text text-center px-3">
              {{ card.sentence }}
            </p>
          </div>
          <div :id="'card-' + index" class="displayNone">
            <div class="d-flex flex-row justify-content-between">
              <h2 class="pt-2">Auteur: {{ card.author }}</h2>
              <i @click="runAnimateReverse(index)" style="color:#94020296;cursor:pointer;" class="fas fa-window-close"></i>
            </div>
            <p class="card-text text-center">{{ card.description }}</p>
          </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cards: null,
      currCard: null
      
    }
  },
  methods: {
    runAnimate(id){
      this.currCard = event.target;
      const currEvent = event.target;
      const addText = currEvent.querySelector('#card-'+ id);

      currEvent.className = `card card-${id} rotateIn`;
      setTimeout(() => {
        currEvent.querySelector('div').className = "displayNone";
        addText.className = "card-text reverse-text d-flex flex-column";
      },400)
    },
    runAnimateReverse(id){
      const currEvent = this.currCard;
      const addText = currEvent.querySelector('#card-'+ id);

      currEvent.className += " rotateOut";
      setTimeout(() => {
        currEvent.querySelector('div').className = "";
        addText.className = "displayNone";
      },400)

    }
  },
  created(){
    axios.get(`/api/search`)
    .then(response => {
        this.cards = response.data;
        this.cards.forEach(card => {
          card.newText = false;
          card.animate = false;
        });
    });
  },
}
</script>

<style scoped>

h2 {
  font-size: 1.1rem;
  color: rgb(1, 128, 81);
}

.displayNone {
  display: none;
}

.all-cards {
  flex-wrap: wrap;
}

.card {
  margin: 30px 0;
  border: 10px solid rgba(0, 198, 126, 0.89);
  height: 300px;
  width: 320px;
  min-width: 320px;
  border-radius: 32px;
  font-size: 3rem;
}

.card-text {
  font-size: 1.1rem;
  font-weight: 300;
  color: rgb(0, 0, 0);
  padding: 0 2%;
}

.reverse-text {
  transform: rotateY(-190deg);
}

.fa-window-close {
  margin-top: 10px;
  margin-bottom: 10%;
}
/* ANIMATIONS */

/*.rotate-enter-active{

}
.rotate-leave-active  {

}
.rotate-enter, .rotate-leave-to{
  
}*/

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