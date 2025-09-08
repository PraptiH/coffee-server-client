import React from 'react';
import { Link, } from 'react-router';
import Swal from 'sweetalert2';

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
    // const coffees = useLoaderData()
    const handleDelete = (id) => {
        console.log(id);

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:3000/coffees/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your coffee has been deleted.",
                                icon: "success"
                            });

                            const remainingcoffees =coffees.filter(coffee=>coffee._id !== data._id)
                            setCoffees(remainingcoffees)
                        }
                    })
            }
            else {
                Swal.fire({
                    text: "Cancled",
                    icon: "warning"
                })
            }
        });

    }

    return (
        <div className="flex items-center justify-evenly bg-base-100 shadow-lg border-2 p-5">
            <figure>
                <img
                    src={coffee.photo}
                    alt="Coffee" />
            </figure>
            <div className="flex flex-col">
                <h2 className="card-title">Name : {coffee.name}</h2>
                <p>Chef : {coffee.chef}</p>
                <p>Price : {coffee.price}</p>
            </div>

            <div className="grid gap-5 justify-end">
                <Link to={`/coffees/${coffee._id}`}>
                    <button className="btn btn-primary">View</button>
                </Link>
                <Link to={`/updatecoffee/${coffee._id}`}>
                    <button className="btn btn-primary">Edit</button>
                </Link>
                <button onClick={() => handleDelete(coffee._id)} className="btn btn-primary">Delete</button>
            </div>
        </div>
    );
};

export default CoffeeCard;