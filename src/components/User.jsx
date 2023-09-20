import { Link } from "react-router-dom";

const User = ({user}) => {
    const{id, name, email, phone} = user;
    return (
        <div>
            <div className="bg-slate-400 p-5 rounded-md space-y-5">
                <h1 className="text-[30px] font-[600]">{name}</h1>
                <p className="text-[16px] font-[600]">{email}</p>
                <p className="text-[16px] font-[600]">{phone}</p>
                <div className="mt-[15px]">
                    <Link to={`/users/${id}`}>View Detais</Link>
                </div>
            </div>
        </div>
    );
};

export default User;