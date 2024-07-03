import BaseTemplate from "../../../templates/BaseTemplate";
import Nav from "../../../components/Nav";
import ListOfOrders from "../../../components/ListOfOrders";

const MyOrdersPage = () => {
    return (
        <BaseTemplate>
            <BaseTemplate.Header>
                <Nav/>
            </BaseTemplate.Header>
            <ListOfOrders/>
        </BaseTemplate>
    )
}

export default MyOrdersPage;