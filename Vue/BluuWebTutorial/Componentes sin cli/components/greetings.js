Vue.component('greetings', {
    template: `
    <div>
        <h1>{{greetings}}</h1>
        <h3>hola vanessa</h3>
    </div>`,
    data(){
        return {
            greetings: 'Hola'
        }
    }
});
