import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router';
import Swal from 'sweetalert2';

const UpdateCoffee = () => {

    const { _id, name, chef, category, taste, details, photo, price } = useLoaderData()

    const handleUpdateCoffee = (e) => {
        e.preventDefault()
        const form = e.target;
        const formData = new FormData(form);
        const updatedCoffee = Object.fromEntries(formData.entries());
        console.log(updatedCoffee)

        fetch(`http://localhost:3000/coffees/${_id}`, {
            method: "PUT",
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(updatedCoffee)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Coffee Updated Successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
                console.log(data)
            })
    }

    return (
        <div className='p-24'>

            <Link className='flex items-center gap-2' to="/">
                <FaArrowLeft />
                <p className='text-3xl text-[#374151]'>Back to home</p>
            </Link>

            <div className='text-center space-y-4 p-12'>
                <h1 className='text-6xl text-[#374151]'>Update Coffee</h1>
            </div>

            <form onSubmit={handleUpdateCoffee} action="">
                <div className='grid grid-cols-1 md:grid-cols-2  gap-6'>

                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
                        <label className="label font-semibold text-xl ">Name</label>
                        <input type="text" className="input text-lg" name='name' defaultValue={name} placeholder="Enter Coffee Name" />
                    </fieldset>

                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
                        <label className="label font-semibold text-xl">Chef</label>
                        <input type="text" className="input text-lg" name='chef' defaultValue={chef} placeholder="Enter Coffee Chef" />
                    </fieldset>

                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
                        <label className="label font-semibold text-xl">Price</label>
                        <input type="text" className="input text-lg" name='price' defaultValue={price} placeholder="Enter Coffee Price" />
                    </fieldset>

                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
                        <label className="label font-semibold text-xl">Taste</label>
                        <input type="text" className="input text-lg" name='taste' defaultValue={taste} placeholder="Enter Coffee Taste" />
                    </fieldset>

                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
                        <label className="label font-semibold text-xl">Category</label>
                        <input type="text" className="input text-lg" name="category" defaultValue={category} placeholder="Enter Coffee Category" />
                    </fieldset>

                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
                        <label className="label font-semibold text-xl">Details</label>
                        <input type="text" className="input text-lg" name='details' defaultValue={details} placeholder="Enter Coffee Details" />
                    </fieldset>
                </div>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
                    <label className="label font-semibold text-xl">Photo</label>
                    <input type="text" className="input text-lg w-full" name='photo' defaultValue={photo} placeholder="Enter Photo URL" />
                </fieldset>
                <input className='rounded-2xl w-full mt-6 py-4 bg-[#D2B48C] text-[#331A15] text-2xl' type="submit" value="Update Coffee" />
            </form>
        </div>
    );
};

export default UpdateCoffee;