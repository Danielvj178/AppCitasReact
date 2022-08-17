import { useState } from "react"
import { Error } from "./Error";

export const Form = () => {
    const [pet, setPet] = useState({
        name: '',
        ownerName: '',
        email: '',
        date: '',
        symptoms: ''
    });
    const [error, setError] = useState(false);

    const { name, ownerName, email, date, symptoms } = pet;

    const handleChange = ({ target }) => {
        setPet({
            ...pet,
            [target.name]: target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if ([name, ownerName, email, date, symptoms].includes('')) {
            setError(true);
            return;
        }
        setError(false);
    }

    return (
        <div className="md:w-1/2 lg:w-2/5">
            <h2 className="font-black text-3xl text-center">Seguimiento pacientes</h2>

            <p className="mt-5 text-center mb-10">
                Add Pattient y {''}
                <span className="text-indigo-600 font-bold">admin</span>
            </p>

            {error && <Error />}

            <form
                className="bg-white shadow-md rounded-lg py-10 px-5"
                onSubmit={handleSubmit}
            >
                <div className="mb-5">
                    <label htmlFor="pet" className="block text-gray-700 uppercase font-bold">
                        Pet's Name
                    </label>
                    <input
                        id="pet"
                        name="name"
                        type="text"
                        placeholder="Name of pet"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={name}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="owner" className="block text-gray-700 uppercase font-bold">
                        Owner's Name
                    </label>
                    <input
                        id="owner"
                        name="ownerName"
                        type="text"
                        placeholder="Name of owner"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={ownerName}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="email" className="block text-gray-700 uppercase font-bold">
                        Email
                    </label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Owner's contact email"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={email}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="date" className="block text-gray-700 uppercase font-bold">
                        Date
                    </label>
                    <input
                        id="date"
                        name="date"
                        type="date"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={date}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold">
                        Symptoms
                    </label>
                    <textarea
                        id="symptoms"
                        name="symptoms"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        placeholder="Describe los Síntomas"
                        value={symptoms}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-5">
                    <input
                        type="submit"
                        className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer"
                        value="Add Patient"
                    />
                </div>
            </form>
        </div>
    )
}
