<template>
  <div id="app">
    <div class="hero is-white is-gradient is-bold">
      <div class="hero-body">
        <h1 class="title">
          <span class="has-text-success" >
            R&M
          </span>
          <span class="subtitle">
            Personajes
          </span>
        </h1>
        <button class="button is-success is-rounded" v-on:click="fetch">
          Consultar
        </button>
      </div>
    </div>
    <div class="container">
      <div class="columns is-desktop is-mobile is-tablet is-multiline is-centered">
        <character :character="character" v-for="character in characters" v-bind:key="character.id" ></character>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from "axios";
  import Character from "./components/Character";
export default {
  name: 'app',
  components: {
    Character
  },
  data(){
    return {
      characters:[]
    }
  },
  created(){
    this.fetch();
  },
  methods:{
    fetch:function () {
      axios.get("https://rickandmortyapi.com/api/character")
        .then(res=>{
          this.characters = res.data.results;
        })

        .catch(err=>{
          console.log(err);
        })
    }
  }
}
</script>

<style>

</style>
