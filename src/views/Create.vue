<template>
  <div class="create">
    <h1>Create new post page</h1>
    <form>
      <input
        type="text"
        v-model="post.description"
        placeholder="type a description here"
        required
      />
      <input
        type="file"
        ref="fileInput"
        accept="image/*"
        v-on:change="previewImage"
      />
      <button class="choose-image" type="button" v-on:click="triggerChooseImg">
        Choose Image
      </button>
      <div>
        <img :src="post.image" class="image-preview" />
      </div>
      <button type="button" v-on:click="createPost">Create post</button>
    </form>
  </div>
</template>

<script>
import { postRef } from "../firebase-db";
export default {
  name: 'Create',
  data() {
    return {
      post: {
        description:'',
        image: null
      }
    }
  },
  methods: {
    triggerChooseImg () {
      this.$refs.fileInput.click()
    },
   previewImage () {
    const imageFile = this.$refs.fileInput.files[0]
    const fileReader = new FileReader()
    fileReader.onload = (event) => {
      this.post.image = event.target.result
    } 
    fileReader.readAsDataURL(imageFile)
    },
    createPost () {
      postRef.add(this.post)
      this.$router.push('/')
    }
  }
}
</script>

<style>
</style>