import { useLoaderData } from "react-router-dom";
import User from "./User";

const Users = () => {
    const users = useLoaderData();
    return (
        <div className="container mx-auto my-[30px]">
            <h1 className="text-center text-[35px] font-[700] my-[10px]">Total User: {users.length}</h1>
            <div className="grid grid-cols-3 gap-4">
                {
                    users.map(user => <User key={user.id} user={user}></User>)
                }
            </div>
        </div>
    );
};

export default Users;