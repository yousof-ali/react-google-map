import { Helmet } from "react-helmet-async";


const Blog = () => {
    return (
        <div>
            <Helmet>
                <title>React map | Blog</title>
            </Helmet>
            <p className='text-center'> i am from blog</p>
        </div>
    );
};

export default Blog;