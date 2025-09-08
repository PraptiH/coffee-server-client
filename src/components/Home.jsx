import React from 'react';
import { useLoaderData } from 'react-router';
import CoffeeCard from './CoffeeCard';
import { useState } from 'react';

const Home = () => {
    const initialCoffees =useLoaderData();
   const [coffees, setCoffees] = useState(initialCoffees)
    return (
        <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-5'>
            {
                coffees.map(coffee=><CoffeeCard 
                    key={coffee._id}
                    coffees={coffees}
                    setCoffees={setCoffees} 
                    coffee={coffee}></CoffeeCard>)
            }
        </div>
    );
};

export default Home;