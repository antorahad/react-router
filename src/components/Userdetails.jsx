import { useLoaderData, useNavigate } from "react-router-dom";

const Userdetails = () => {
    const user = useLoaderData();
    const {id, name, username, email, address, company} = user;

    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1);
    }
    return (
        <div className="py-[60px]">
            <div className="bg-slate-400 p-5 w-[20%] mx-auto my-[20px]">
            <p className="text-[20px]">{id}</p>
            <h1 className="text-[40px]">{name}</h1>
            <p className="text-[20px]">Username: {username}</p>
            <p className="text-[20px]">Email: {email}</p>
            <p className="text-[20px]">Street: {address.street}</p>
            <p className="text-[20px]">City: {address.city}</p>
            <p className="text-[20px]">Company: {company.name}</p>
            <div className="mt-[20px]">
                <button className="bg-green-500 p-4 rounded-md" onClick={handleGoBack}>Go Back</button>
            </div>
        </div>
        </div>
    );
};

export default Userdetails;