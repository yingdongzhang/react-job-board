function user(state = [], action) {
    const i = action.index;
    switch (action.type) {
        case 'INCREMENT_LIKES':
            return [
                ...state.slice(0, i), // before the one we are updating
                {...state[i], likes: state[i].likes + 1},
                ...state.slice(i + 1), /// after the one we are updating
            ];
        default:
            return state;
    }
    return state;
}

export default user;
