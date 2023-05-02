

const initialState = {
    money: 0,
    age: 0,
}

export const Reducer = ( state= initialState, action) => {
    switch (action.type) {
        case 'ADD_MONEY' :
            console.log(action.payload)
            return {...state, money: state.money + action.payload}
        case "GET_MONEY" :
            return {...state, money: state.money - action.payload}
        default :
            return state
    }
}