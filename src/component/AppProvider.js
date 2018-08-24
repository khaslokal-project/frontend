import React, { Component } from 'react';
import AppContext from './AppContext';

class AppProvider extends Component {
    constructor(props){
        super(props);
        this.state = {
            user:{},
            order:{},
            orderitem:[]
        }
    }
    
    render() {
        const self = this
        const handlers = {
            signin:(data)=> {
                this.setState({
                    username: data.username,
                    email: data.email
                }) 
            },
            addOrderItem: (product, qty = 1) => {
                const { name, price, image } = product
                const idproduct = product.id;
                const { orderitem } = self.state;

                console.log(product);
                
                const found = orderitem.find(item => {
                    return item.idproduct === idproduct
                });

                if (found){
                    found.qty += qty
                }else{
                    orderitem.push({
                        idproduct,
                        name,
                        image,
                        price,
                        qty
                    })
                }
                self.setState({
                    orderitem
                })
            },
            removeOrder: function(){
                
            },
            removeOrderItem: function(){
    
            }
        }

        return <AppContext.Provider value={{...this.state, handlers}}>
            {this.props.children}
        </AppContext.Provider>
    }
}
export default AppProvider;