<template>
<!-- pr-3 pb-3 espaçamento entre caras -->
  <v-flex
   class="pr-3 pb-3" xs12 md6 lg4>
    <v-card class="blue darken-3 white--text">
      <v-card-title class="headline">
        <strong>{{ stock.name }}</strong> <small>
          (Preço:{{ stock.price }} | Qtde: {{ stock.quantity }} )
          </small>
      </v-card-title>
    </v-card>

    <v-card>
      <v-container fill-height>
        <v-text-field label="Quantidade" type="Number" v-model.number="quantity"/>
        <v-btn class="blue darken-3 white--text"
        @click="sellStock"
        :disabled="quantity <=0 || !Number.isInteger(quantity)"
        >Vender</v-btn>
      </v-container>
    </v-card>    
  </v-flex>
</template>

<script>

import  { mapActions } from 'vuex'

export default {
  props:['stock'],
  data(){
    return {
      quantity:0
    }
  },
  methods:{
    ...mapActions({sellStockAction:'sellStock'}),

    sellStock(){
      console.log('Sell')
      const order ={
        stockId: this.stock.id,
        stockPrice:this.stock.price,
        quantity:this.quantity
      }
            console.log('Sell2')
      this.sellStockAction(order);
      // this.$store.dispatch('sellStock',order)
      this.quantity = 0;
    }
  }
}
</script>

<style>

</style>