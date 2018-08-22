import React, { Component } from 'react';
import AppContext from './AppContext';

class AppProvider extends Component {
    constructor(props){
        super(props);
        this.state = {
            order:{},
            orderItem:[]
        }
    }
    
    render() {
        const self = this
        const handlers = {
            addOrderItem: (productId, total = 1) => {

                const { orderItem } = self.state;

                const found = orderItem.find(item => {
                    return item.productId == productId
                });

                if (found){
                    found.total += total
                }else{
                    orderItem.push({
                        productId,
                        total
                    })
                }
                self.setState({
                    orderItem
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