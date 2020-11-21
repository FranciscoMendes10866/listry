export const log_out_addresses = () => (dispatch) => {
    localStorage.removeItem('list');
    dispatch({
        type: 'LOG_OUT_ADDRESSES',
        payload: []
    })
}
