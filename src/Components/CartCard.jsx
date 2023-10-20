import React from 'react';
import Swal from 'sweetalert2'

const CartCard = ({ cart }) => {

    const { name, brand, type, price, photo_url, description, ratings, _id } = cart

    const handleDelete = _id =>{
        console.log(_id)
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
              
              fetch(`http://localhost:5001/cart/${_id}`, {
                    method: 'DELETE'
              })
              .then(res => res.json)
              .then(data=>{
                console.log(data)
                if(data.deletedCount>0){
                    Swal.fire(
                        'Deleted!',
                        'Product Removed from Your Cart',
                        'success'
                      )
                }
              })
            }
          })
    }

    return (
        <div>
            <div className='bg-[#4EA2FF] p-10 rounded-lg shadow-2xl'>
                <div className='flex w-full justify-center items-center'>
                    <div className='w-1/2'>
                        <h1 className='text-white text-left font-semibold mb-2'>Name: {name}</h1>
                        <h1 className='text-white text-left font-semibold mb-2'>Brand Name: {brand}</h1>
                        <h1 className='text-white text-left font-semibold mb-2'>Product Type: {type}</h1>
                        <h1 className='text-white text-left font-semibold mb-2'>Price: ${price}</h1>
                        <h1 className='text-white text-left font-semibold'>Ratings: {ratings}/10</h1>
                    </div>
                    <div className='w-1/2'>
                        <img src={photo_url} alt="" />
                    </div>
                </div>
                <div className='mt-5 gap-3 mx-auto'>
                    <button onClick={()=> handleDelete(_id)} className='bg-red-600 text-white w-1/2 py-2 rounded-lg hover:bg-white hover:text-red-600'>Remove from My Cart</button>
                </div>
            </div>
        </div>
    );
};

export default CartCard;