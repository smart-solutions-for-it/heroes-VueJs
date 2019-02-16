<template>
  <div id="search">
    <div class="form-group col-4 mx-auto mt-3">
      <label>Search hero</label>
      <input type="search" class="form-control" @input="searchHero($event)">
    </div>
  </div>
</template>

<script>
  import heroService from '../heroes.service.js'

  export default {
    name: 'search',
    props: [],
    data() {
      return {
        heroes: [],
        errorMessage: null
      }
    },
    methods: {
      searchHero(event) {
        let heroName = event.target.value.trim();
        if (heroName) {
          heroService.getHeroes(heroName).then(response => this.heroes = response.body,
              error => this.errorMessage = error.statusText);
        }
      }
    },
  }
</script>

<style>


</style>
