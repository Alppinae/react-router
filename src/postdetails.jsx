import { useParams } from "react-router-dom";

export const PostDetails = () => {
    const {id} = useParams();
    return<>{`PostDetails ${id}`}</>;
}