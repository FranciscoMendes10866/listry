import axiosInstance from '../../plugins/axios'

export const  delete_address = (id) => (dispatch) => {
    axiosInstance.delete(`/addresses/${id}`)
        .then(() => {
            dispatch({
                type: 'DELETE_ADDRESS',
                payload: id,
            })
        })
        .catch((err) => {
            console.log(err)
        })
}
