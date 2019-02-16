import VueResource from 'vue-resource'
import Vue from 'vue'
Vue.use(VueResource)

export default {
    name: "heroService",
    methods: {
        updateHero(hero) {
            return this.$http.put('http://localhost:3000/put', hero);
        },
        addHero(hero) {
            return this.$http.post('http://localhost:3000/post', hero);
        },
        getHeroes(heroName) {
            return this.$http.get('http://localhost:3000/get', {params: {'name': heroName}});
        },
        getHero(id) {
            return this.$http.get('http://localhost:3000/get', {params: {'id': id}});
        },
        deleteHero(id) {
            return this.$http.delete('http://localhost:3000/delete', id);
        }
    }
}



