import React, { useState } from 'react';
import axios from 'axios';

function ImageUpload() {
  const [image, setImage] = useState('');

  const handleCapture = (e) => {
    const fileReader = new FileReader();
    const file = e.target.files[0];

    if (file && file.type.match('image.*')) { // Ensure a file was selected and is an image
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        setImage(fileReader.result);
      };
    }
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post('https://bitebalance-chatbot.azurewebsites.net/api/chatbot_function', {
        image: image.split('base64,')[1], // Send the image as a base64-encoded string, excluding the data URL scheme
      });
      alert('Image uploaded successfully!');
      console.log(response.data); // Handle the response accordingly
    } catch (error) {
      console.error('Error uploading image:', error);
      alert('Failed to upload image.');
    }
  };

  return (
    <div>
      {/* Updated input to accept images and capture using the camera */}
      <input type="file" accept="image/*" capture="environment" onChange={handleCapture} />
      <button onClick={handleSubmit}>Upload</button>
    </div>
  );
}

export default ImageUpload;
