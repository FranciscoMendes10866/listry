import axiosInstance from '../../plugins/axios'

export const  get_addresses = () => (dispatch) => {
    axiosInstance.get('/addresses')
        .then(({ data }) => {
            dispatch({
                type: 'GET_ADDRESSES',
                payload: data
            })
            localStorage.setItem('list', JSON.stringify(data))
        })
}
