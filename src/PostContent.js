import React from "react";
import DeleteButton from "./DeleteMonster";
import MonsterCreate from "./MonsterCreate";

function PostContent({ post, posts, setPosts }) {
    return (
        <tr>
            <td>{post.name}</td>
            <td>{post.appearance}</td>
            <td>{post.abilities}</td>
            <td>{post.weaknesses}</td>
            <td>{<img src={post.photo} alt="" />}</td>
            <td><DeleteButton post={post} posts={posts} setPosts={setPosts} /></td>
        </tr>
    )
}

export default PostContent;