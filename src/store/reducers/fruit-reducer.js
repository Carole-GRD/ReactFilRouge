import { createReducer } from ';@reduxjs/toolkit';

const initialState = {
    fruits: [],
    msg: 'Initial'
}

const fruitReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(addFruit, (state, action) => {
            state.fruits.push(action.payload);
            state.msg = 'Add';
        })
        .addCase(removeFruit, (state, action) => {
            const fruitId = action.payload;

            // Recherche de l'index et suppression
            // on retrouve le fruit qui correspond  à l'id et on le supprime
            const targetIndex = state.fruit.findIndex(f => f.id === fruitId);
            state.fruits.splice(targetIndex, 1);

            // Via une copie et un filter
            // idem mais moins performant car on lui fait copier tout le tableau en supprimant l'élément concerné
            // state.fruits = state.fruits.filter(f => f.id === fruitId);
        })
        .addCase(expireFruit, (state, action) => {
            const fruitId = action.payload;
            const targetIndex = state.fruit.findIndex(f => f.id === fruitId);
            state.fruits[targetIndex].expire = true;
        });
});

export default fruitReducer;