const app = Vue.createApp({
    data() {
        return {
            cart: [],
            premium: true
        }
    },
    methods: {
        updateCart(id) {
            this.cart.push(id);
            console.log(this.cart)
        },
        removeItem(id) {
            const index = this.cart.indexOf(id);
            this.cart.splice(index, 1);
            console.log(this.cart)
        }
    }
})
