import React from 'react';
import { Button} from 'reactstrap';
import Moment from 'react-moment';
import 'moment-timezone';
import 'moment/locale/id';

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

        const tanggal = <Moment locale="id" format="DD MMMM YYYY HH:mm" date={item.dateorder} />;

        return(
            <tr>
                <td>{item.idorder}</td>
                <td>{tanggal}</td>
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