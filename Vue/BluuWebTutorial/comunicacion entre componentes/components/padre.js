Vue.component('padre', {
    template:
    `
    <div class="p-5 bg-dark text-white">
        <h2>Componente padre: {{numPadre}}</h2>
        <button class="btn btn-danger" @click="numPadre++">+</button>
        <hijo :num="numPadre" @myName="myNamePadre = $event"></hijo>
        <h3>Recibido de hijo: {{myNamePadre}}</h3>
    </div>`,
    data(){
        return{
            numPadre: 0,
            myNamePadre: ''
        }
    }
})