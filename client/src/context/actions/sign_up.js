import axiosInstance from '../../plugins/axios'

export const  sign_up = ({ email, password }) => {
    const formData = { email, password }
    axiosInstance.post('/auth/sign-up', formData)
        .catch((err) => {
            console.log(err)
        })
}
