
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='flex justify-between mx-8'>
            <h1 className='text-2xl font-semibold'>Logo</h1>
            <ul className='flex gap-6 font-bold'>
                <Link to={"/"}>Home</Link>
                <Link to={"/product"}>Product</Link>
                <Link to={"/blog"}>Blog</Link>
            </ul>
        </div>
    );
};

export default Header;