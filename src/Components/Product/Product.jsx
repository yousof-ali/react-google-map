import { Helmet } from "react-helmet-async";


const Product = () => {
    return (
        <div>
            <Helmet>
                <title>React map | Product</title>
            </Helmet>
            <p className="text-center">I am from product!</p>
        </div>
    );
};

export default Product;