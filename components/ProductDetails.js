app.component('product-details', {
  props: {
    details: {
      type: Array,
      required: true
    }
  },
  template: 
  /*html*/
  `<div class="product-display">
    <ul>
    <li v-for="detail in details">{{ detail }}</li>
    </ul>
  </div>`
})