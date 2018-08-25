import React from 'react';
import { Button} from 'reactstrap';

export default class ItemBelanja extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        const item = this.props;

        return(
            <tr>
                <th scope="row">{item.dateorder}</th>
                <td>{item.namecourier}</td>
                <td>{item.total}</td>
                <td>{item.status}</td>
                <td><Button color="danger" onClick={() => {

                    item.showDetail(item.idorder);
                }
                }>Detail</Button>
                </td>
            </tr>
        );
    }
}