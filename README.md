# Photo QR Code Uploader

This is a Node.js pet project designed to upload photos to Google Drive and return the photos with a QR code overlay. The QR code contains a link to the uploaded file on Google Drive. Users can download and print the photo with the code, and later scan the QR code to access the original photos on Google Drive.

## Features

- **Upload Photos**: Users can upload photos to Google Drive through the service.
- **QR Code Generation**: After uploading, the service generates a QR code that contains the link to the uploaded photo.
- **Photo Processing**: The uploaded photo is returned to the user with the QR code overlay at the bottom.
- **Easy Access**: Users can scan the QR code on the printed photo to quickly navigate to the original folder on Google Drive.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/photo-qr-code-uploader.git
   cd photo-qr-code-uploader
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up your Google Drive API credentials and environment variables. Follow the instructions [here](https://developers.google.com/drive/api/v3/quickstart/nodejs) to create a project and get your credentials.

4. Create a `.env` file in the root directory with your credentials:
   ```plaintext
   type: your_type
   project_id: your_project_id
   private_key_id: your_private_key_id
   private_key: your_private_key
   client_email: your_client_email
   client_id: your_client_id
   auth_uri: your_auth_uri
   token_uri: your_token_uri
   auth_provider_x509_cert_url: your_auth_provider_x509_cert_url
   client_x509_cert_url: your_client_x509_cert_url
   universe_domain: your_universe_domain
   ```

## Usage

1. Start the NODE server:
   ```bash
   npm run server-dev
   ```

   And start Vite server:
   ```bash
   npm run dev
   ```

2. Navigate to `http://localhost:5173` in your browser.

3. Upload a photo and wait for the processing to complete.

4. Download the processed photo with the QR code overlay.

5. Print the photo if desired.

6. Scan the QR code with any QR code scanner to access the original photo on Google Drive.

## Contributing

Feel free to fork the repository and submit pull requests. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

With this service, you can easily manage and share your photos with the added convenience of QR codes for quick access to your Google Drive. Enjoy the seamless integration and enhanced accessibility!