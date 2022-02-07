import React from "react";

const Img = () => {

    const previewFile = () => {
        let preview = document.querySelector('img');
        let file = document.querySelector('input[type=file]').files[0];
        let reader = new FileReader();

        reader.onloadend = function () {
            preview.src = reader.result;
        }

        if (file) {
            reader.readAsDataURL(file);
        } else {
            preview.src = "";
        }

        return (
            <div>
                <form>
                    <input type="file" onchange={previewFile}></input>
                    <img src="{res.data}" height="200" alt="Image preview..."></img>
                </form>
            </div>
        )
    }
}

export default Img;