const app = new Vue({
    el: '#app',
    data: {
        title: 'Hola mundo VUE',
        fruits: [
            {name: 'apple', amount: 11},
            {name: 'pear', amount: 0},
            {name: 'bannana', amount: 10},
        ],
        newFruit: '',
        total: 0
    },
    methods: {
        addFruit () {
            this.fruits.push({
                name: this.newFruit, amount: 0
            });
            this.newFruit = '';
        }
    },
    computed: {
        sumFruits() {
            this.total = 0;
            for(fruit of this.fruits) {
                this.total = this.total + fruit.amount;
            }
            return this.total; 
        }
    }

})