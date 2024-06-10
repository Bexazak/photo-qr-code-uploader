<script setup>
import { ref } from 'vue'
import Loader from '@/components/Loader.vue'

const file = ref(null)
const imageWithQRCode = ref({})
const isLoading = ref(false)

const uploadFile = (event) => {
  file.value = event.target.files[0];
  console.log(file.value.name, 'file.value')
}

const handleUploadFile = async () => {
  isLoading.value = true
  const formData = new FormData()
  formData.append('file', file.value)
  const response = await fetch('http://localhost:5000/api/v1/upload-file', {
    method: 'POST',
    body: formData
  })
  imageWithQRCode.value = await response.json()
  isLoading.value = false
}

</script>

<template>
  <div class="form">

    <div class="form-loader" v-if="isLoading">
      <Loader />
    </div>
    <h1>Add QR-code to image</h1>


    <div class="form-file" v-if="!file">
      <input id="file" type="file" @change="uploadFile" accept="image/jpeg" />
      <label for="file">Choose a file</label>
    </div>

    <pre v-else class="selected-file">FILE: {{file.name}}</pre>

    <div class="form-button">
      <button @click="handleUploadFile">Get photo with QR-code</button>
    </div>
  </div>

  <div class="result" v-if="imageWithQRCode?.url">
    <div class="result-title">
      <h2>Photo with QR-code</h2>
      <a :href="imageWithQRCode.url" download target="_blank">Download photo</a>
    </div>
    <img :src="imageWithQRCode.url" alt="">
  </div>

</template>

<style scoped>
.form {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 600px;
  border: 1px solid hsla(160, 100%, 37%, 1);
  padding: 2em;
  margin-bottom: 50px;
  border-radius: 5px;
}

.form h1 {
  text-align: center;
  margin-bottom: 10px;
  color: #fff;
  font-weight: bold;
}

.form-file {
  //border: 1px dashed hsla(160, 100%, 37%, 1);
  //padding: 25px;
  //display: flex;
  //justify-content: center;
  //align-items: center;
  //margin-bottom: 20px;
  //border-radius: 5px;
}

.selected-file {
  background-color: hsla(160, 100%, 37%, 1);
  color: #ffffff;
  padding: 0 5px;
  margin-bottom: 20px;
  border-radius: 3px;
  text-align: center;
}

.form-button {
  display: flex;
  justify-content: center;
  align-items: center;
}

.form-button button {
  background: hsla(160, 100%, 37%, 1);
  border-radius: 5px;
  border: none;
  outline: none;
  color: #fff;
  cursor: pointer;
  padding: 1rem 50px;
  font-size: 20px;
  transition: background 0.3s;
}

.form-button button:hover {
  background: hsla(160, 100%, 37%, 0.8);
}

.form-loader {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background-color: hsla(160, 100%, 37%, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.result {
  margin: 50px auto;
  width: 100%;
  max-width: 600px;
}
.result-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
.result img {
  width: 100%;
  height: auto;
}

[type="file"] {
  height: 0;
  overflow: hidden;
  width: 0;
}

[type="file"] + label {
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  border-radius: 5px;
  transition: background-color 0.3s;
  border: 1px dashed hsla(160, 100%, 37%, 1);
  font-size: 24px;
  cursor: pointer;
}
[type="file"] + label:hover {
  background: hsla(160, 100%, 37%, 0.3);
  border-style: solid;
}
</style>
