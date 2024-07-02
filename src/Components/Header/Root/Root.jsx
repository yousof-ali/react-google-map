
import Header from '../Header';
import { Outlet } from 'react-router-dom';
import Footer from '../../Footer/Footer';

const Root = () => {
    return (
        <>
        <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>
        
        </>
    );
};

export default Root;