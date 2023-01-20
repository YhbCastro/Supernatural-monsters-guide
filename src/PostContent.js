import React from "react";


function PostContent({ post, posts, setPosts }) {
    return (
        <tr>
            <td className="ContentCollunm">{post.name}</td>
            <td className="ContentCollunm">{post.prey}</td>
            <td className="ContentCollunm">{post.appearance}</td>
            <td className="ContentCollunm">{post.abilities}</td>
            <td className="ContentCollunm">{post.weaknesses}</td>
            <td className="ContentCollunm">{<img src={post.photo} alt="" />}</td>
        </tr>
    )
}


export default PostContent;
