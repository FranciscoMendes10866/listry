import axiosInstance from '../../plugins/axios'

export const  sign_in = ({ email, password }) => (dispatch) => {
    const formData = { email, password }
    axiosInstance.post('/auth/sign-in', formData)
        .then(({ data }) => {
            dispatch({
                type: 'SIGN_IN',
                payload: data.token
            })
            localStorage.setItem('token', data.token)
        })
        .catch((err) => {
            console.log(err)
        })
}
