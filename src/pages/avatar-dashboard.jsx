import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { clientId, clientSecret, tokenUrl } from "../avtar-oauth-confg"
import base64 from 'base-64';
import PriceController from '../components/price-controller';

const AvatarOauth = () => {
  const [accessToken, setAccessToken] = useState('');
  const [playerId, setPlayerId] = useState('');
  const [photoFile, setPhotoFile] = useState(null);
  const [selfieStatus, setSelfieStatus] = useState('');
  const [selfie, setSelfie] = useState('');
  const [avatar, setAvatar] = useState('');
  const [avatarStatus, setAvatarStatus] = useState('');
  const [exportFile, setExportFile] = useState('');

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (selfie && selfieStatus !== 'completed') {
        checkSelfieStatus();
      }
    }, 5000); // Check every 5 seconds

    return () => clearInterval(intervalId);
  }, [selfieStatus]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (avatar && avatarStatus !== 'Completed') {
        checkAvatarStatus();
      }
    }, 5000); // Check every 5 seconds

    return () => clearInterval(intervalId);
  }, [avatarStatus]);

  useEffect(() => {
    if (selfieStatus === 'completed') {
      avatarUploader();
    }
  }, [selfieStatus]);

  useEffect(() => {
    if (avatarStatus === 'Completed') {
      avatarDownloader();
    }
  }, [avatarStatus]);

  const handleOAuthFlow = async () => {
    try {
      // Base64 encode client_id and client_secret
      const credentials = base64.encode(`${clientId}:${clientSecret}`);

      const tokenResponse = await axios.post(
        tokenUrl,
        'grant_type=client_credentials',
        {
          headers: {
            Authorization: `Basic ${credentials}`,
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        }
      );

      const newAccessToken = tokenResponse.data.access_token;
      setAccessToken(newAccessToken);
      console.log('Access Token:', newAccessToken);

      await createPlayerId(newAccessToken);
    } catch (error) {
      console.error('Error:', error.message);

      if (error.response) {
        // The request was made, but the server responded with an error
        console.error('Server Response:', error.response.data);
      }
    }
  };

  const createPlayerId = async (token) => {
    try {
      // Make a POST request to create a Player ID
      const playerIdResponse = await axios.post(
        'https://api.avatarsdk.com/players/',
        null,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        }
      );

      // Extract Player ID from the response
      const newPlayerId = playerIdResponse.data.code;
      setPlayerId(newPlayerId);
      console.log('Player ID created:', newPlayerId);
    } catch (error) {
      console.error('Error creating Player ID:', error.message);
    }
  };

  const handleFileChange = (event) => {
    setPhotoFile(event.target.files[0]);
  };

  const selfieUploader = async () => {
    try {
      const formData = new FormData();

      const uploadResponse = await axios.post(
        'https://api.avatarsdk.com/selfies/',
        formData,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      console.log('Upload Response:', uploadResponse.data);
      setSelfie(uploadResponse.data.code);
      setSelfieStatus(uploadResponse.data.uploading);
    } catch (error) {
      console.error('Error uploading photo:', error.message);
    }
  };

  const avatarUploader = async () => {
    try {
      const formData = new FormData();
      formData.append('pipeline_subtype', 'base/legacy');
      formData.append('name', 'haircuts test');
      formData.append('pipeline', 'head_1.2');
      formData.append('photo', photoFile);
      formData.append(
        'parameters',
        JSON.stringify({
          model_info: {
            plus: ['gender', 'age', 'race'],
          },
          avatar_modifications: {
            plus: {
              remove_smile: true,
              remove_glasses: true,
              enhance_lighting: true,
            },
          },
        })
      );
      formData.append(
        'export_parameters',
        JSON.stringify({
          format: 'fbx',
          blendshapes: {
            list: ['mobile_51', 'visemes_15'],
            embed: true,
          },
          haircuts: {
            list: ['generated'],
            embed: true,
          },
        })
      );

      const uploadResponse = await axios.post(
        'https://api.avatarsdk.com/avatars/',
        formData,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            'X-PlayerUID': playerId,
          },
        }
      );

      console.log('Avatar Upload Response:', uploadResponse.data);
      setAvatar(uploadResponse.data.code);
      setAvatarStatus(uploadResponse.data.status);
    } catch (error) {
      console.error('Error uploading avatar:', error.message);
    }
  };

  const checkSelfieStatus = async () => {
    try {
      const response = await axios.head(
        `https://api.avatarsdk.com/selfies/${selfie}/`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      if (response.status === 200) {
        setSelfieStatus('completed');
      } else {
        console.log('Selfie file is not uploaded or some error occurred.');
      }
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  const checkAvatarStatus = async () => {
    try {
      const response = await axios.get(
        `https://api.avatarsdk.com/avatars/${avatar}/exports`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      if (response.status === 200) {
        console.log(response.data);
        setExportFile(response.data[0].code);
        setAvatarStatus('Completed');
      } else {
        console.log('Selfie file is not uploaded or some error occurred.');
      }
    } catch (error) {
      console.error('Error:', error.message);
    }
  };
  console.log(exportFile);
  const avatarDownloader = async () => {
    try {
      const response = await axios({
        method: 'GET',
        url: `https://api.avatarsdk.com/avatars/${avatar}/exports/${exportFile}/files/avatar/file/`,
        responseType: 'blob',
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'X-PlayerUID': playerId,
        },
      });

      const blob = new Blob([response.data]);

      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = 'avatar_files.zip';

      document.body.appendChild(link);
      link.click();

      document.body.removeChild(link);
    } catch (error) {
      console.error('Error:', error.message);
    }
  };
  console.log(avatarStatus, 'dd');
  return (
    <div className="container mx-auto px-4 py-8">
      <button
        onClick={handleOAuthFlow}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Authorize
      </button>
      <input
        type="file"
        onChange={handleFileChange}
        className="mt-4 block border border-gray-300 rounded p-2"
      />
      <button
        onClick={selfieUploader}
        className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Upload Selfie
      </button>
      <p className="mt-4">Selfie Status: {selfieStatus}</p>
     <PriceController/>
    </div>
  );
};

export default React.memo(AvatarOauth)    ;
