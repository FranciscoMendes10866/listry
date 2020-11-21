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
        case 'DELETE_ADDRESS':
            return {
                ...state,
                addresses: {
                    ...state.addresses,
                    list: state.addresses.list.filter((item) => item.id !== payload)
                }
            }
        default:
            return state
    }
}

export default addresses
