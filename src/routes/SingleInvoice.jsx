import {useParams} from "react-router-dom";
import {getInvoices} from '../data/data.js';

const SingleInvoice = () => {
    let index = useParams().invoiceId;
    let invoice = getInvoices()[index];


    return <div>
        <h2>Invoice: {invoice.name}</h2>
        <ul>
            <li>name: {invoice.name},</li>
            <li> number: {invoice.number},</li>
            <li>amount: {invoice.amount},</li>
            <li>due: {invoice.due},</li>
        </ul>
    </div>;
}

export default SingleInvoice;