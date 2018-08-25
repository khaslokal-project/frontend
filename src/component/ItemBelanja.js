import React from 'react';
import { Button} from 'reactstrap';

export default class ItemBelanja extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        const item = this.props;
        let statusMessage = ``;

        switch(Number(item.status)){
        case 0:
            statusMessage = `belum di proses`;
            break;
        case 1:
            statusMessage = `sedang di proses`;
            break;
        case 2:
            statusMessage = `selesai`;
            break;
        }

        return(
            <tr>
                <td>{item.idorder}</td>
                <td>{item.dateorder}</td>
                <td>{item.namecourier}</td>
                <td>{item.total}</td>
                <td> { statusMessage } </td>
                <td><Button color="danger" onClick={() => {
                    item.showDetail(item);
                }}
                >Detail</Button>
                </td>
            </tr>
        );
    }
}