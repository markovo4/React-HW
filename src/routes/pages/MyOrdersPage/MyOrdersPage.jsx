import BaseTemplate from "../../../templates/BaseTemplate";
import Nav from "../../../components/Nav";

const MyOrdersPage = () => {
    return (
        <BaseTemplate>
            <BaseTemplate.Header>
                <Nav/>
            </BaseTemplate.Header>
            <div>Orders Page!</div>
        </BaseTemplate>
    )
}

export default MyOrdersPage;