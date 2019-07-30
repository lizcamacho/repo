const app = new Vue({
    el: '#app',
    data: {
        greeting: 'Hola ciclo de vida'
    },
    //Instancia creada antes de crearse el: #app y variables de data
    beforeCreate() {
        console.log('beforeCreate');
    },

    //Despues de crear el:#app y variables de data pero aun no se montan y no se puede acceder al DOM
    created() {
        console.log('created');
    },

    //Creado el elemento y datos, se ejecuta antes de montar los datos de data y las funciones
    beforeMount() {
        console.log('beforeMount');
    },

    //Se ejecuta al  montar data y funciones al DOM
    mounted() {
        console.log('mounted');
    },

    //Se ejecuta al detectar una actualización antes de montarla en el DOM
    beforeUpdate() {
        console.log('beforeUpdate');
    },

    //Se ejecuta al montar una actualización al DOM
    updated() {
        console.log('updated');
    },

    //se ejecuta despues de llamar $destroy() y antes de que se ejecute
    beforeDestroy() {
        console.log('beforeDestroy');
    },

    //Se ejecuta al terminar de ejecutar $destroy()
    destroyed() {
        console.log('destroyed');
    },

    methods: {
        destroy() {
            this.$destroy();
        }
    },
    computed: {
    }

})