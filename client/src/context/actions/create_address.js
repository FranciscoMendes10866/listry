import axiosInstance from '../../plugins/axios'

export const  create_address = (form) => {
    axiosInstance.post('/addresses', form)
        .catch((err) => {
            console.log(err)
        })
}
