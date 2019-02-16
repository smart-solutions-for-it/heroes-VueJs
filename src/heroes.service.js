import Vue from 'vue'

const backendBaseUrl = 'http://localhost:3000/';

export default {
  updateHero(hero) {
    return Vue.http.put(backendBaseUrl + 'put', hero);
  },
  addHero(heroName) {
    return Vue.http.post(backendBaseUrl + 'post', {name: heroName});
  },
  getHeroes(heroName) {
    return Vue.http.get(backendBaseUrl + 'get', {params: {'name': heroName}});
  },
  getHero(id) {
    return Vue.http.get(backendBaseUrl + 'get', {params: {'id': id}});
  },
  deleteHero(id) {
    return Vue.http.delete(backendBaseUrl + 'delete', id);
  }
}



