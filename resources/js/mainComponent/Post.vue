<template>

  <div class="d-flex flex-column ">
      <h1 class="badge badge-info py-4 mx-5">Crée ton nouveau mot</h1>

        <form v-if="validate" method="POST" enctype="multipart/form-data" action="api/post" class="mt-5 d-flex flex-column">
             
            <div class="form-row">
                <div class="form-group col-md-6">
                <label for="pseudo">Pseudo</label>
                <input v-model="pseudo" name="pseudo" class="form-control" required>
                </div>
                <div class="form-group col-md-6">
                <label for="word">Nouveau Mot</label>
                <input v-model="word" name="word" class="form-control" required>
                </div>
            </div>
            <div class="form-group mb-4">
                <label for="inputAddress">Description (270 Caractères max)</label>
                <textarea v-model="description" name="description" class="form-control" rows="8" placeholder="La description du mot" maxlength="270" required></textarea>
            </div>
            <div class="form-group">
                <label for="sentence">Une phrase avec ce mot</label>
                <input v-model="sentence" name="sentence" class="form-control" required>
            </div>
        
            <button type="submit" class="p-3 w-50 align-self-center btn btn-success">Soumettre</button>
        </form>
        <hr>
        <br>
        <div v-if="!validate" class="alert alert-success">
            <h2>Félicitation votre mot est maintenant publier !</h2>
        </div>
  </div>
</template>

<script>
export default {
    data(){
        return {
            pseudo: null,
            word: null,
            description: null,
            sentence: null,
            validate: true
        }
    },
    methods: {
        

    }
    
}
</script>

<style scoped>
h1 {
    font-size: 4rem;
    color: white;
    font-weight: 100;
    font-family: 'Skranji', cursive;
}

h2 {
    font-size: 1.3rem;
    font-weight: 100;
    padding: 2% 3%;
    text-align: center;

}

form {
    font-size: 1.4rem;
    font-weight: 600;
    
}

button {
    font-size: 1.3rem;
}

.badge-info{

    background-color: rgba(0, 198, 126, 0.89);
    border-radius: 15px;
}
</style>