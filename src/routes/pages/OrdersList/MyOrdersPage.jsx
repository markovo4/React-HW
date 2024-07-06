import BaseTemplate from "../../../templates/BaseTemplate";
import Nav from "../../../components/Nav";
import OrdersList from "../../../components/OrdersList";

const MyOrdersPage = () => {
    return (
        <BaseTemplate>
            <BaseTemplate.Header>
                <Nav/>
            </BaseTemplate.Header>
            <OrdersList/>
        </BaseTemplate>
    )
}

export default MyOrdersPage;