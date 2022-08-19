// Liste d'actions pour la catégorie "Fruit"
// - Ajouter un fruit  -> { family: 'Pomme', weight: '100gr' }
// - Supprimer un fruit
// - Indiquer qu'un fruit est périmé



// Action créator "modern" (Avec le Redux Toolkit)
// ---------------------------
import { createAction } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
// ---------------------------
export const addFruit = createAction('fruit/add', (fruit) => ({
    payload: {
        id: nanoid(),
        ...fruit
    }
}));
// ---------------------------
export const removeFruit = createAction('fruit/remove');
// ---------------------------
export const expireFruit = createAction('fruit/expire')




// +++++++++++++++++++++++++++++++++++++++++++++
// +++++++++++++++++++++++++++++++++++++++++++++
// Action création "oldschool"
// ---------------------------
// import { createAction } from '@reduxjs/toolkit';
// import { nanoid } from 'nanoid';
// ---------------------------
// export const addFruit = (fruit) => {
//     return {
//         type: 'fruit/add',
//         payload: {
//             id: nanoid(),
//             ...fruit
//         }
//     };
// };
// ---------------------------
// export const removeFruit = (fruitId) => {
//     return {
//         type: 'fruit/remove',
//         payload: fruitId
//     };
// };
// +++++++++++++++++++++++++++++++++++++++++++++
// +++++++++++++++++++++++++++++++++++++++++++++



