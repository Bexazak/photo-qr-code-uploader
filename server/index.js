import express from 'express'
import fs from 'fs'
import cors from 'cors'
import multer from 'multer'
import { Upload } from './classes.js'

import { google } from 'googleapis'


const credentials = {
  // add object with googleapis key
}

const PORT = 5000

const app = express()

app.use(cors())
app.use(express.json())

const upload = multer({ dest: 'uploads/' })

app.post('/api/v1/upload-file', upload.single('file'), async (req, res) => {
  try {
    await uploadBasic(req.file, res)
    // uploadMethods.uploadBasic()

    fs.unlink(req.file.path, (err) => {
      if (err) {
        console.error('Error deleting file:', err);
      }
    })

  } catch (error) {
    console.error('File upload error:', error)
    res.status(500).json({ message: 'File upload failed' })
  }
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})


const uploadMethods = new Upload()


const auth = new google.auth.GoogleAuth({
  credentials: credentials,
  scopes: ['https://www.googleapis.com/auth/drive']
})

const drive = google.drive({version: 'v3', auth})

async function uploadBasic (file, res) {
  const resource = {
    name: file.originalname,
    parents: ['1sKLFMp3J91gIwR3vpTVNs4CauFDKlYhz']
  }

  const media = {
    mimeType: file.mimetype,
    body: fs.createReadStream(file.path)
  }

  const params = {
    resource,
    media,
    fields: 'id, webViewLink, webContentLink'
  }

  drive.files.create(params, async (err, file) => {
    if (err) {
      console.error('File upload error:', err)
      return
    }
    console.log('File uploaded successfully. File ID:', file.data.id)

    return await createPermission(file.data.id, res)
  })
}

async function createPermission (fileId, res) {
  const permission = {
    role: 'reader',
    type: 'anyone'
  }

  await drive.permissions.create({
    fileId: fileId,
    requestBody: permission
  }, (err) => {
    if (err) {
      console.error('Permission error:', err)
      return
    }
    console.log('Permission created successfully')
    // addQrCodeToFile(fileId, res)
    uploadMethods.addQrCodeToFile(fileId, res)
  })
}


// async function addQrCodeToFile (fileId, res) {
  // try {
  //   const result = await fetch(`http://198.177.124.161/qrphoto.php?drive_id=${fileId}`)
  //   // console.log(await result.json(), 'await result.json()')
  //   res.status(200).send(await result.json())
  //   console.log('QR-code applied successfully')
  // } catch (error) {
  //   console.error('Error adding QR code:', error)
  // }
// }
