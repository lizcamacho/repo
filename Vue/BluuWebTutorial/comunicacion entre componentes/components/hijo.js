Vue.component('hijo', {
    template: `
    <div class="py-5 bg-success">
        <h4>Componente hijo recibe de padre: {{num}}</h4>
        <h4>Envia a padre: {{name}}</h5>
    </div>`,
    props: ['num'],
    data() {
        return{
            name: 'Vanessa'
        }
    },
    mounted(){
        this.$emit('myName', this.name);
    }
})