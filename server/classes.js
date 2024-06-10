export class Upload {
  constructor(file) {
    this.file = file;
  }

  uploadBasic() {
    // TODO: add upload file method
    console.log('uploadBasic')
  }

  createPermission() {
    // TODO: add create permission method
    console.log('createPermission')
  }

  async addQrCodeToFile(fileId, res) {
    console.log('addQrCodeToFile')
    try {
      const result = await fetch(`http://198.177.124.161/qrphoto.php?drive_id=${fileId}`)
      // console.log(await result.json(), 'await result.json()')
      res.status(200).send(await result.json())
      console.log('QR-code applied successfully')
    } catch (error) {
      console.error('Error adding QR code:', error)
    }
  }

}