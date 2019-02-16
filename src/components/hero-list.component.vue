<template>
  <div id="heroList">
    <div class="form-group mt-3">
      <label>Name:</label>
      <input type=text v-model="newHero">
      <button class="btn btn-default ml-2" @click="addHero">add</button>
    </div>
    <h4>My heroes</h4>
    <ul class='list-group'>
      <li class="list-group-item link"
          v-for="(hero, i) in heroes"
          v-bind:key="'my-key' +  i"
      >
        <router-link :to="{name: 'detail', params: {id: hero.id}}">
          <span class='badge'>{{hero.id}}</span>
          {{hero.name}}
        </router-link>
        <span class="float-right delete" @click="deleteHero(hero.id)">X</span>
      </li>
    </ul>
  </div>
</template>

<script>
  import heroService from '../heroes.service.js'

  export default {
    name: 'heroList',
    data() {
      return {
        newHero: null,
        heroes: [],
        errorMessage: null
      }
    },
    methods: {
      addHero() {
        heroService.addHero(this.newHero).then(response => this.heroes.push(response.body),
            error => this.errorMessage = error.statusText);
      },
      deleteHero(heroId) {
        heroService.deleteHero(heroId).then(() => this.heroes.splice(heroId, 1),
            error => this.errorMessage = error.statusText);
      }

    },
    mounted() {
      heroService.getHeroes().then(response => this.heroes = response.body,
          error => this.errorMessage = error.statusText);
    }
  }
</script>

<style>
  .link:hover {
    background: yellow;
    color: red;
    cursor: pointer;
  }

  .delete:hover {
    background: red;
    color: yellow;
  }
</style>
