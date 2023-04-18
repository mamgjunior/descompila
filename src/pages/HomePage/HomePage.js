import ModalSavePin from "../../containers/ModalSavePin/ModalSavePin";
import ModalCreateFolder from "../../containers/ModalCreateFolder/ModalCreateFolder";
import Notification from "../../components/Notification/Notification";
import CardContainer from "../../containers/CardContainer/CardContainer";
import { useAppContext } from "../../store/AppContext";
import { saveFolderSuccessType } from "../../store/types";
import { useEffect, useState } from "react";
import { fetchPinsAction } from "../../store/actions";

function HomePage() {
    const { state, dispatch } = useAppContext();

    const [showFeedback, setShowFeedback] = useState(false);

    const pinsNormalized = state.pins.map(pin => ({
        ...pin,
        total: state.folders.filter(folder => (folder.pins.includes(pin.id))).length
    }));

    useEffect(() => {
        fetchPinsAction(dispatch);
    }, []);

    useEffect(() => {
        if (state.type === saveFolderSuccessType)
            setShowFeedback(true);
    }, [state.type]);

    return (
        <div>
            <ModalSavePin open={state.mode === 'savePin'} />
            <ModalCreateFolder open={state.mode === 'createFolder'} />

            {
                showFeedback && (
                    <Notification
                        message='Criado com sucesso'
                        variant='success'
                        onClose={() => setShowFeedback(false)}
                    />
                )
            }

            <div
                class="container text-center"
            >
                <div class="row">
                    {
                        pinsNormalized.map(element => (
                            <div
                                class="col col-xs-12 col-md-3"
                            >
                                <CardContainer {...element} />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default HomePage;