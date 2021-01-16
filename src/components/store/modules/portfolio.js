export default{
    state:{
        funds:10000,
        stocks:[]
    },
    mutations:{
        buysStock(state,{ stockId, quantity, stockPrice}){
            
            const record = state.stocks.find(_element => _element.id == stockId)

            if(record){
                record.quantity += quantity;
            }else{
                state.stocks.push({
                    id:stockId,
                    quantity:quantity
                })
            }
            state.funds -=  stockPicce * quantity;
        },

        sellStock(state,{ stockId,quantity, stockPrice}){
            
            const record = state.stocks.find(_element => _element.id == stockId)

            if(record.quantity > quantity){
                record.quantity -= quantity;
            }else{
                state.stocks.splice(state.stocks.indexOf(record),1)
            }
            state.funds += stockPrice * quantity;
        }
    },
    actions:{
        sellStock({ commit }, order){
            commit('sellStock',order)
        }
    },
    getters:{
        stockPortfofilo(state,getters){
            return state.stocks.map(stock=>{
                const record = getters.stocks.find(element =>element.id == stock.id)
                return{
                    id:stock.id,
                    quantity:stock.quantity,
                    name:register.name,
                    price:record.price
                }
            })
        },
        funds(state){
            return state.funds;
        }
    }
}