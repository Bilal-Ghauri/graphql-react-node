const fs = require('fs');
const path = require('path')
const { S3Client, PutObjectCommand } = require('@aws-sdk/client-s3');



const uploadFile = async () => {

    const s3Client = new S3Client({
        region: process.env.AWS_REGION, // e.g., 'us-east-1'
        credentials: {
            accessKeyId: process.env.AWS_ACCESS_KEY,
            secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
        },
    });



    const imagePath = path.join(__dirname, '..', 'public', 'images', 'sample.jpeg');
    const fileContent = fs.readFileSync(imagePath); // Local file

    const params = {
        Bucket: process.env.AWS_BUCKET_NAME, // Replace with your bucket name
        Key: 'your-picture.jpg',   // File name to save as in S3
        Body: fileContent,
        ContentType: 'image/jpeg', // MIME type
    };

    try {
        const command = new PutObjectCommand(params);
        const response = await s3Client.send(command);
        console.log('File uploaded successfully:', response);
    } catch (error) {
        console.error('Error uploading file:', error);
    }
};

module.exports = uploadFile;