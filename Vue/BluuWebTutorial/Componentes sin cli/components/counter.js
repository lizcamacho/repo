Vue.component('counter', {
    template: `
    <div>
        <h3>{{num}}</h3>
        <button @click="num++">+</button>
    </div>`,
    data(){
        return {
            num: 0
        }
    }
});
