const initState = { 
    animation_start: true,
}

const Reducer = (state, action) => { 
    switch (action.type) { 
        case 'OFF_START': 
            return { 
                ...state, 
                animation_start: false,
            } 
        
        case 'ON_START': 
            return { 
                ...state, 
                animation_start: true,
            } 

        default: 
            return state
    }
}

export { initState };
export default Reducer;