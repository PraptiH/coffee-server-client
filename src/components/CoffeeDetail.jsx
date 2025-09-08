import React from 'react';
import { useLoaderData } from 'react-router';


const CoffeeDetail = () => {
    const coffee = useLoaderData()
    console.log(coffee)
    const{name,chef,photo,category,taste,details} =coffee
    

    return (
        <div>
            <div className="flex items-center gap-50 justify-center bg-[#F4F3F0] shadow-2xl mt-20 p-10 ">
                <div>
                    <img className='w-lg p-5'
                        src={photo}
                        alt="Movie" />
                </div>
                <div className="space-y- w-lg">
                    <h2 className="text-2xl font-medium"><span className='font-bold text-3xl'>Name : </span> {name}</h2>
                    <p className="text-2xl font-medium "><span className='font-semibold text-3xl'>Chef : </span>{chef}</p>
                    <p className="text-2xl font-medium "><span className='font-semibold text-3xl'>Category : </span>{category}</p>
                    <p className="text-2xl font-medium "><span className='font-semibold text-3xl'>Taste: </span>{taste}</p>
                    <p className="text-2xl font-medium "><span className='font-semibold text-3xl'>Details: </span>{details}</p>
                    
                </div>
            </div>
        </div>
    );
};

export default CoffeeDetail;