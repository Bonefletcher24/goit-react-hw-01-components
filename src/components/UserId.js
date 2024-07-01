import { useParams } from "react-router-dom";


function UserId() {
let {userName} = useParams();
return(
    <div>
        <a href="/users">Back</a>
        <h1>User: About {userName}</h1>
    </div>
);
}

export default UserId;