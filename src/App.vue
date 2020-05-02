<template>
  <div id="app">
    <div class="hero is-white is-gradient is-bold">
      <div class="hero-body">
        <h1 class="title">
          <span class="has-text-success" >
            R&M
          </span>
          <span class="subtitle">
            Characters
          </span>
        </h1>
        <div class="field has-addons is-pulled-rigth">
          <div class="control">
            <input type="text" v-model="search" class="input is-rounded" @keyup.enter="searchData()">
          </div>
          <div class="control">
            <button class="button is-success is-rounded" @click="searchData()">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="container" v-show="characters.length">
      <div class="columns is-desktop is-mobile is-tablet is-multiline is-centered">
        <character
          :character="character"
          v-for="character in characters"
          v-bind:key="character.id"
          @showModal="showModal"
        ></character>
      </div>
      <nav class="pagination" role="navigation" aria-label="pagination" >
        <a class="pagination-previous" @click="changePage(page-1)">
          Previous
        </a>
        <ul class="pagination-list">
          <li>
            <a class="pagination-link is-current" v-text="page"></a>
          </li>
        </ul>
        <a class="pagination-next" @click="changePage(page+1)">
          Next
        </a>
      </nav>
    </div>
    <div class="container" v-show="!characters.length">
      <article class="message is-warning" style="margin-top:20px:border-width:1px">
        <div class="message-body">
          No se ha encontrado información
        </div>
      </article>
    </div>
    <div class="modal" :class="{'is-active':modal}">
      <div class="modal-background" @click="hideModal()"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">
            About {{ currentCharacter.name }}
          </p>
        </header>
        <section class="modal-card-body">
          <p>Gender: <b>{{ currentCharacter.gender }}</b></p>
          <p>Status: <b>{{ currentCharacter.status }}</b></p>
          <p>Species: <b>{{ currentCharacter.species }}</b></p>
          <p>Type: <b>{{ currentCharacter.type }}</b></p>
        </section>
        <footer class="modal-card-foot">
          <button type="button" class="button" @click="hideModal()">
            Close modal
          </button>
        </footer>
      </div>
    </div>
    <footer class="footer" style="margin-top:20px">
      <div class="content has-text-centered">
        <p>
          <strong>R&M Characters</strong>
          by
          <a href="https://github.com/luisfercho" target="_blank">
            Luis Fernando Cifuentes
          </a>
          <br>
          <b>GitHub Repo:</b>
          <a href="https://github.com/luisfercho/vue-rickandmorty" target="_blank">
            Go to repo
          </a>
          <br>
          Aplicación del curso
          <a href="https://codigofacilito.com/cursos/rest-api-vue" target="_blank">
            Taller para consultar datos de una API con Vue
          </a>
        </p>
      </div>
    </footer>
  </div>
</template>

<script>
  import Character from "./components/Character";
export default {
  name: 'app',
  components: {
    Character
  },
  data(){
    return {
      characters:[],
      page:1,
      pages:1,
      search:'',
      modal:false,
      currentCharacter:{}
    }
  },
  created(){
    this.fetch();
  },
  methods:{
    fetch:function () {
      let params = {
          page:this.page,
          name:this.search
      };
      let response = this.$api.characters(params)

      response
        .then(res=>{
          this.characters = res.data.results;
          this.pages  =res.data.info.pages;
        })
        .catch(err=>{
          // eslint-disable-next-line
          console.log(err);
          this.characters = [];
          this.pages  =0;
        })
    },
    changePage(page){
      this.page = (page <= 0 || page > this.pages) ? this.page : page;
      this.fetch();
    },
    searchData(){
      this.page = 1;
      this.fetch();
    },
    hideModal(){
      this.modal = false;
      this.currentCharacter = {}
    },
    showModal(id){
      this.fetchModal(id)
    },
    async fetchModal(id){
      let results = await this.$api.character(id);
      this.modal = true;
      this.currentCharacter = results.data;
    }
  }
}
</script>

<style>
  a{
    text-decoration: underline;
  }
</style>
