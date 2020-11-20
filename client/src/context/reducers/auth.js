const auth = (state, { payload, type }) => {
    switch (type) {
        case 'SIGN_IN':
            return {
                ...state,
                auth: {
                    ...state.auth,
                    token: payload,
                }
            }
        case 'LOG_OUT':
            return {
                ...state,
                auth: {
                    ...state.auth,
                    token: payload,
                }
            }
        default:
            return state
    }
}

export default auth
