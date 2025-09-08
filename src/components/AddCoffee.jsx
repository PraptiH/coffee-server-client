import React from 'react';
import { FaArrowLeft } from "react-icons/fa";
import Swal from 'sweetalert2'

const AddCoffee = () => {

    const handleAddCoffee = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const newCoffee = Object.fromEntries(formData.entries());
        console.log(newCoffee)

        fetch(`http://localhost:3000/coffees`, {
            method: "POST",
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(newCoffee)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        title: "Coffee Added!",
                        icon: "success",
                        draggable: true
                    });
                }

            })
    }

    return (
        <div className='p-24'>

            <div className='flex items-center gap-2'>
                <FaArrowLeft />
                <p className='text-3xl text-[#374151]'>Back to home</p>
            </div>

            <div className='text-center space-y-4 p-12'>
                <h1 className='text-6xl text-[#374151]'>Add New Coffee</h1>
                <p className='text-xl'>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
            </div>

            <form onSubmit={handleAddCoffee} action="">
                <div className='grid grid-cols-1 md:grid-cols-2  gap-6'>

                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
                        <label className="label font-semibold text-xl ">Name</label>
                        <input type="text" className="input text-lg" name='name' placeholder="Enter Coffee Name" />
                    </fieldset>

                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
                        <label className="label font-semibold text-xl">Chef</label>
                        <input type="text" className="input text-lg" name='chef' placeholder="Enter Coffee Chef" />
                    </fieldset>

                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
                        <label className="label font-semibold text-xl">Price</label>
                        <input type="text" className="input text-lg" name='price' placeholder="Enter Coffee Price" />
                    </fieldset>

                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
                        <label className="label font-semibold text-xl">Taste</label>
                        <input type="text" className="input text-lg" name='taste' placeholder="Enter Coffee Taste" />
                    </fieldset>

                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
                        <label className="label font-semibold text-xl">Category</label>
                        <input type="text" className="input text-lg" name="category" placeholder="Enter Coffee Category" />
                    </fieldset>

                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
                        <label className="label font-semibold text-xl">Details</label>
                        <input type="text" className="input text-lg" name='details' placeholder="Enter Coffee Details" />
                    </fieldset>
                </div>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
                    <label className="label font-semibold text-xl">Photo</label>
                    <input type="text" className="input text-lg w-full" name='photo' placeholder="Enter Photo URL" />
                </fieldset>
                <input className='rounded-2xl w-full mt-6 py-4 bg-[#D2B48C] text-[#331A15] text-2xl' type="submit" value="Add Coffee" />
            </form>
        </div>
    );
};

export default AddCoffee;