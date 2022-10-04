import React from "react";

function MonsterCreate({ initialFormState, formData, setFormData, posts }) {
    const newPost = {
        id: "",
        name: formData.name,
        appearance: formData.appearance,
        abilities: formData.abilities,
        weaknesses: formData.weaknesses,
        photo: formData.photo,
    }
    const handleChange = (event) => setFormData({...formData, [event.target.name]: event.target.value})
    const handleSubmit = (event) => {
        event.preventDefault()
        posts.push(newPost)
        console.log(posts)
        setFormData({...initialFormState})
    }

    return (
        <form name="create" id="create" className="Form" onSubmit={handleSubmit}>
            <table>
                <tbody>
                    <tr>
                        <td>
                            <input
                                className="Input"
                                placeholder="Name"
                                id="name"
                                type="text"
                                name="name"
                                onChange={handleChange}
                                value={formData.name}
                             />
                        </td>
                        <td>
                            <input
                                className="Input"
                                placeholder="Appearance"
                                id="appearance"
                                type="text"
                                name="appearance"
                                onChange={handleChange}
                                value={formData.appearance}
                            />
                        </td>
                        <td>
                            <input
                                className="Input"
                                placeholder="Abilities"
                                id="abilities"
                                type="text"
                                name="abilities"
                                onChange={handleChange}
                                value={formData.abilities}
                            />
                        </td>
                        <td>
                            <input
                                className="Input"
                                placeholder="Weaknesses"
                                id="weaknesses"
                                type="text"
                                name="weaknesses"
                                onChange={handleChange}
                                value={formData.weaknesses}
                            />
                        </td>
                        <td>
                            <input  
                                className="Input"
                                placeholder="Photo URL"
                                id="photo"
                                type="url"
                                name="photo"
                                onChange={handleChange}
                                value={formData.photo}
                            />
                        </td>
                        <td>
                            <button type="submit" className="Button">Create</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </form>
    )
}

export default MonsterCreate;