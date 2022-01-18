
import  Vue from 'vue'
const SERVER_URL='https://gateway.marvel.com:443/v1/public/characters?apikey=8db15b8ddd57ce424cfbd8ed525bd7f8'
Vue.use();
new Vue ({
    el:'#app',
    data:()=>({
        heroes:[],
    }),
    methods:{
        async getHeroes(){
            const url=SERVER_URL+'/heroes';
            const r=await fetch(url);
            const games=await r.json();
            this.heroes=heroes;
        }
    }
    
})