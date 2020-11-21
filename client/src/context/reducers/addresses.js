const addresses = (state, { payload, type }) => {
    switch (type) {
        case 'GET_ADDRESSES':
            return {
                ...state,
                addresses: {
                    ...state.addresses,
                    list: payload
                }
            }
        case 'LOG_OUT_ADDRESSES':
            return {
                ...state,
                addresses: {
                    ...state.addresses,
                    list: payload,
                }
            }
        default:
            return state
    }
}

export default addresses
