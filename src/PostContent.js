import React from "react";
import DeleteButton from "./DeleteMonster";
import MonsterCreate from "./MonsterCreate";

function PostContent({ post, posts, setPosts }) {
    return (
        <tr>
            <td className="ContentCollunm">{post.name}</td>
            <td className="ContentCollunm">{post.appearance}</td>
            <td className="ContentCollunm">{post.abilities}</td>
            <td className="ContentCollunm">{post.weaknesses}</td>
            <td className="ContentCollunm">{<img src={post.photo} alt="" />}</td>
            <td className="ContentCollunmButton"><DeleteButton post={post} posts={posts} setPosts={setPosts} /></td>
        </tr>
    )
}

export default PostContent;