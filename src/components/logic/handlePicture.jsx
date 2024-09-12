
export const handlePicture = (event, acceptableExtensions, sizeLimit, errorRef, displayRef) => {
    // 2097152 = 2MB
    // const acceptableExtensions = ["jpg", "png,", "jpeg"]

    try {
        // Storing the picture file
        const picture = event.currentTarget.files[0];

        // extracting the picture file extension
        const pictureExtension = picture.type.split("/")[1].toLowerCase();

        if (!acceptableExtensions.includes(pictureExtension)) {
            console.error("Invalid file type. Only JPG, JPEG, and PNG are allowed.");
            errorRef.current.innerHTML = "Invalid file type. Only JPG, JPEG, and PNG are allowed.";
            return
        }
        if (picture.size > sizeLimit) {
            console.error(`File size exceeds ${Math.round(sizeLimit * 0.000001)} MB`);
            errorRef.current.innerHTML = "File size exceeds 2 MB";
            return;
        }
        errorRef.current.innerHTML = "";
        const reader = new FileReader();
        reader.readAsDataURL(picture);
        reader.addEventListener("load", () => {
            displayRef.current.src = reader.result;
        });

        return picture
    }
    catch (e) {
        errorRef.current.innerHTML = `Please Upload an Image!`;
    }
};