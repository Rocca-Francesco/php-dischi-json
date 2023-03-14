const { createApp } = Vue

createApp({
  data() {
    return {
      songs: []
    }
  },

  created() {
    axios.get("http://localhost/php-dischi-json/backend/data.json").then((response) => {
      this.songs = response.data;
      console.log(this.songs);
    })
    console.log(this.songs);
  }

}).mount('#app')