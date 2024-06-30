import BaseTemplate from "../../../templates/BaseTemplate";
import CreateOrder from "../../../components/CreateOrder";
import Nav from "../../../components/Nav";

const HomePage = () => {
    return (
        <BaseTemplate>
            <BaseTemplate.Header>
                <Nav/>
            </BaseTemplate.Header>
            <CreateOrder/>
        </BaseTemplate>
    )
}

export default HomePage;