<template>
  <div id="userDetails">
    <h3>{{selectedHero.name }} Details</h3>
    <div><span>id: </span> {{selectedHero.id}}</div>
    <div>
      <span>name: </span> <input v-model="selectedHero.name">
      <button @click="updateHero" class="btn btn-warning">save</button>
    </div>
    <button @click="back" class="btn btn-secondary">Back</button>
  </div>
</template>

<script>
  import heroService from '../heroes.service.js'

  export default {
    name: 'userDetails',
    filters: {
      uppercase: function (value) {
        return value.toUpperCase();
      }
    },
    computed: {
      idParam: function () {
        return this.$route.params.id;
      }
    },
    data() {
      return {
        selectedHero: {
          id: '',
          name: ''
        },
        errorMessage: null
      }
    },
    methods: {
      back() {
        window.history.back();
      },
      updateHero() {
        heroService.updateHero(this.selectedHero).then(null,
            error => this.errorMessage = error.statusText);
        history.back();
      }
    },
    mounted() {
      heroService.getHero(this.idParam).then(response => this.selectedHero = response.body,
          error => this.errorMessage = error.statusText);
    }
  }
</script>


