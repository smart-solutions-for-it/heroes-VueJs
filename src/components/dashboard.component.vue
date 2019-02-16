<template>
  <div id="dashboard">
    <router-link tag='div'
                 :to="{name: 'detail', params: {id: hero.id}}"
                 class="col-2 m-2 d-inline-block link"
                 v-for="(hero, i) in heroes.slice(0,4)" @click="onSelect(hero)"
                 v-bind:key="'my-key' +  i"
    >
      {{hero.name.toUpperCase()}}
    </router-link>
    <hero-search>></hero-search>
  </div>
</template>

<script>
  import search from './hero-search.component'
  import heroService from '../heroes.service.js'

  export default {
    name: 'dashboard',
    components: {
      'hero-search': search
    },
    data() {
      return {
        selectedHero: null,
        heroes: [],
        errorMessage: null
      }
    },
    methods: {
      onSelect(hero) {
        this.selectedHero = hero;
      }
    },
    mounted() {
      heroService.getHeroes().then(response => this.heroes = response.body,
          error => this.errorMessage = error.statusText);
    },
  }
</script>

<style>
  .link:hover {
    background: yellow;
    color: red;
    cursor: pointer;
  }

  .link {
    height: 50px;
    border: 2px solid red;
  }
</style>
