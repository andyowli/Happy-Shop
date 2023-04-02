import Vue from "vue"
import Vuex from "vuex" //引入vuex

Vue.use(Vuex) //使用vuex

// let car = JSON.parse(localStorage.getItem('car') || '[]');
 
export default new Vuex.Store({
    state:{
        
    },
    mutations:{
       
    },
    actions:{
 
    },
    modules:{
        logisticsModule:{
            namespaced: true,
            state:{
                list:{
                    num:'',
                    price:"",
                    desc:"",
                    title:"",
                    thumb:""
                }
                
            },
            mutations:{
                Increment (state, n) {
                    state.list = n
                    
                    console.log(state,n);
                }
            }
        },
        addCartModule:{
            namespaced: true,
            
            state:{
                addCart:[]
            },
            mutations:{
                getItem(state,n){
                    state.addCart = n;    
                }
            }
        },
        modifyModule:{
            namespaced: true,
            state:{
                address:[]
            },
            mutations:{
                getAddress(state,n){
                    console.log(n)
                    state.address = n;
                }
            }
        }
    }
})