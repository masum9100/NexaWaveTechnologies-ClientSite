import Swal from 'sweetalert2';

const SingleCard = ({ product }) => {
    const { name, brand, type, price, photo_url, description, ratings, _id } = product;

    const handleAddCart = () => {
        
        Swal.fire({
            title: 'Success!',
            text: 'Product Added to Your Cart',
            icon: 'success',
            confirmButtonText: 'OKAY'
        });
        
    };

    return (
        <div className='bg-[#4EA2FF] p-10 rounded-lg shadow-2xl w-1/2 mx-auto'>
            <div className='flex w-full justify-center items-center'>
                <div className='w-1/2'>
                    <h1 className='text-white text-left font-semibold mb-2'>Name: {name}</h1>
                    <h1 className='text-white text-left font-semibold mb-2'>Brand Name: {brand}</h1>
                    <h1 className='text-white text-left font-semibold mb-2'>Product Type: {type}</h1>
                    <h1 className='text-white text-left font-semibold mb-2'>Price: ${price}</h1>
                    <h1 className='text-white text-left font-semibold mb-2'>Ratings: {ratings}/10</h1>
                    <h1 className='text-white text-left font-semibold'>Description: {description}</h1>
                </div>
                <div className='w-1/2'>
                    <img src={photo_url} alt="" />
                </div>
            </div>
            <div className='mx-auto w-1/2 mt-5'>
                <button onClick={handleAddCart} className='bg-[#007BFF] w-1/2 text-white py-2 rounded-lg hover:bg-white hover:text-[#007BFF]'>Add to My Cart</button>
            </div>
        </div>
    );
};

export default SingleCard;
