import { Helmet } from "react-helmet-async";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>React map | Home</title>
            </Helmet>
            <p className="text-center">i am from home!</p>
        </div>
    );
};

export default Home;