export const  log_out = () => (dispatch) => {
    localStorage.removeItem('token');
    dispatch({
        type: 'LOG_OUT',
        payload: null
    })
}
