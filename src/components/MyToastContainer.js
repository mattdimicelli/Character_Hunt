import { ToastContainer } from 'react-toastify';
const MyToastContainer = () => {
    return (
        <ToastContainer
            position='top-center'
            autoClose={3000}
            hideProgressBar
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss={false}
            draggable={false}
            pauseOnHover={false}
            limit={1}
            closeButton={false}
        />
    )
}

export default MyToastContainer;