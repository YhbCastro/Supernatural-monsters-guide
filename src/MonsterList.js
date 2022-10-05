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
                <tr>
                    <td className="ContentCollunm">Name</td>
                    <td className="ContentCollunm">Prey</td>
                    <td className="ContentCollunm">Appearance</td>
                    <td className="ContentCollunm">Abilities</td>
                    <td className="ContentCollunm">Weaknesses</td>
                    <td className="ContentCollunm">Photo</td>
                </tr>
                {monsterList}
            </tbody>
        </table>
    </div>
}

export default MonsterList;