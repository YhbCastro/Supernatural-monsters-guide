import React from "react";

function DeleteButton({ post, posts, setPosts }) {
    const deleteButton = (indexToDelete) => {
        setPosts(posts.filter(post => post.id !== indexToDelete))
    }

    return <button name="delete" className="Button" onClick={() => deleteButton(post.id)}>
        Delete
    </button>
}

export default DeleteButton;