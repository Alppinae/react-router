import {Link} from 'react-router-dom';

export const Posts = () => {
    return<>
{[1,2,3] .map((post) => {
    return<>
    <Link to={`/post/${post}`}>
    <button>Post {post}</button>
    </Link>
    </>
})}
    </>
}