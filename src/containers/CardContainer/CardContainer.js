import Card from "../../components/Card/Card";
import { useAppContext } from "../../store/AppContext";
import { openModalSavePinAction } from "../../store/actions";

function CardContainer(props) {
    const { state, dispatch } = useAppContext();

    const handleClick = (pinId) => {
        console.log('clicou aqui...');
        dispatch(openModalSavePinAction(pinId));
    }

    return (
        <Card { ...props } onClick={handleClick} />
    )
}

export default CardContainer;