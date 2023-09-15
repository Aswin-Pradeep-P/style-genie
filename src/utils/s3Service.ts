import AWS from 'aws-sdk';
import axios from "axios";
import LocalStorage from './storage';


const userProfileId = '6504257f3914baa6e1a6e147'

AWS.config.update({
  region: 'ap-south-1',
  accessKeyId: 'AKIAYEK3WQDW2J6GXAH6',
  secretAccessKey: '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',
});

export const uploadImage = async (imageString: string, onSuccess: Function, onError: Function) => {
const s3 = new AWS.S3();

var byteCharacters = atob(imageString.replace(/^data:image\/(png|jpeg|jpg);base64,/, ''));
var byteNumbers = new Array(byteCharacters.length);
for (var i = 0; i < byteCharacters.length; i++) {
  byteNumbers[i] = byteCharacters.charCodeAt(i);
}

var byteArray = new Uint8Array(byteNumbers);
var blob = new Blob([ byteArray ], {
   type : undefined
});


const params = {
    Bucket: 'style-genie',
    Key: `measurements/${userProfileId}`, // Specify the desired file name
    Body: blob,
    ACL:'public-read'
  };

  s3.putObject(params, (err, data) => {
    if (err) {
      console.error('Error uploading to S3:', err);
    } else {
            axios.post("https://b481-103-181-238-106.ngrok-free.app/api/user-measurement"
        ,{
            "front_image_url": `https://style-genie.s3.ap-south-1.amazonaws.com/measurements/${userProfileId}`,
            "side_image_url": "def",
            "userProfile": userProfileId
        })
          .then((response) => {
            console.log(response);
            onSuccess(response)
          }).catch(() => {
            onError();
          });
    }
  });
}

export const uploadImageFile = async (file: any,height: number, onSuccess: Function, onError: Function) => {
  const s3 = new AWS.S3();  
  const id =  LocalStorage.getItem('genie-user-id');
  const userProfileId = id;
  
  const params = {
      Bucket: 'style-genie',
      Key: `measurements/${userProfileId}`, // Specify the desired file name
      ACL:'public-read',
      Body: file
    };
  
    s3.putObject(params, (err, data) => {
      if (err) {
        console.error('Error uploading to S3:', err);
      } else {
              axios.post("https://b481-103-181-238-106.ngrok-free.app/api/user-measurement"
          ,{
              "front_image_url": `https://style-genie.s3.ap-south-1.amazonaws.com/measurements/${userProfileId}`,
              "side_image_url": "def",
              "actual_height": Number(height || 165),
              "userProfile": userProfileId
          })
            .then((response) => {
              console.log(response);
              onSuccess(response);
              // onSuccess(response)
            }).catch(() => {
              onError();
            });
      }
    });
  }



