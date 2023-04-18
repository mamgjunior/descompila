import ListGroup from "../../components/ListGroup/ListGroup";
import { useAppContext } from "../../store/AppContext";

const adapterItems = (items) => {
    return items.map(item => ({
        title: item.name,
        total: item.pins.length,
    }));
}

function MinhasPastasPage() {
    const { state } = useAppContext();

    return (
        <div class="container">
            <ListGroup items={adapterItems(state.folders)} />
        </div>
    );
}

export default MinhasPastasPage;