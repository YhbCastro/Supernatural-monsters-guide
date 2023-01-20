import React from "react";
import PostContent from "./PostContent";

function MonsterList ({ posts, setPosts }) {
    const monsterList = posts.map((post, index) => {
        post.id = `${index}`

        return <PostContent
        post={post}
        posts={posts}
        setPosts={setPosts}
        key={index}
        />
    })
    return <div className="monster-list">
        <table >
            <tbody className="Content">
                {monsterList}
            </tbody>
        </table>
    </div>
}

export default MonsterList;