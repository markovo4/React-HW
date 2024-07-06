import BaseTemplate from "../../../templates/BaseTemplate";
import OrderCreate from "../../../components/OrderCreate";
import Nav from "../../../components/Nav";

const HomePage = () => {
    return (
        <BaseTemplate>
            <BaseTemplate.Header>
                <Nav/>
            </BaseTemplate.Header>
            <OrderCreate/>
        </BaseTemplate>
    )
}

export default HomePage;