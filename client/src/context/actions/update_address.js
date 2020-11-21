import axiosInstance from '../../plugins/axios'

export const  update_address = (updatedData) => (dispatch) => {
    const componentState = {
        name: updatedData.name,
        street: updatedData.street,
        zip: updatedData.zip,
        city: updatedData.city,
        country: updatedData.country
    }
    axiosInstance.put(`/addresses/${updatedData.id}`, componentState)
        .then(({ data }) => {
            dispatch({
                type: 'UPDATE_ADDRESS',
                payload: data,
            })
        })
        .catch((err) => {
            console.log(err)
        })
}
