import { addFruit, clearFruit } from "../../store/actions/fruit-action";
import { useDispatch } from 'react-redux';

const FruitInteraction = () => {

    const dispatch = useDispatch();

    const handleAppApple = () => {

        // Utiliser des données d'un formulaire
        const apple = {
            family: 'Pomme',
            weight: '142 gr'
        };

        // Créer une action "fruit/add" avec les données (pour Redux) 
        const actionAddApple = addFruit(apple);
        console.log(actionAddApple);

        // Envoyer l'action vers le store via la Dispatcher
        dispatch(actionAddApple);
    };

    const handleClear = () => {
        // Envoyer l'action "fruit/clear" dans le dispatcher
        dispatch(clearFruit());
    };

    return (
        <div>
            <button onClick={handleAppApple}>
                Ajouter une pomme
            </button>
            <button onClick={handleClear}>
                Vider la iste
            </button>
        </div>
    );

};

export default FruitInteraction;