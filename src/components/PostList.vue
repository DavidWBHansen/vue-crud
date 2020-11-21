<template>
  <div>
    <h1>Posts</h1>
    <div class="grid-container">
      <article v-for="post in posts" :key="post.id">
        <img v-bind:src="post.image" alt="" />
        <h3>{{ post.description }}</h3>
        <router-link :to="{ name: 'Update', params: { post: post } }">
          <button>Update</button>
        </router-link>
        <button class="delete" v-on:click="deletePost(post.id)">Delete</button>
      </article>
    </div>
  </div>
</template>

<script>
import { postRef } from "../firebase-db";
export default {
  data() {
    return {
      posts: []
    };
  },

  methods: {
deletePost(id) {
      console.log("hey")
      postRef.doc(id).delete();

    }
  }, 

   firestore: { 
      posts: postRef

  }
};
  
</script>

<style>
.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 2vw;
  width: 100%;
}

.grid-container img {
  width: 100%;
}
</style>