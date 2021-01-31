const express = require("express");
const app = express();

app.get("/api/posts", async (req, res) => {
  const query = req.query;
  const posts = await Post.find();

  const filteredPosts = posts.filter((post) => post.title.includes(query));

  res.send(filteredPosts);
});

state = {
  images: [
    { id: 1, isSent: false, url: "imag1" },
    { id: 2, isSent: false, url: "imag1" },
    { id: 3, isSent: false, url: "imag1" },
  ],
  receivedUrls: [],
};

state.images.map((image, index) => {
  axios
    .post("http://www.cloudinary.com/", { url: image.url })
    .then((res) => {
      const arr = [...this.state.images];
      const receivedUrls = [...this.state.receivedUrls];
      arr.map((item) => {
        if (item.id === image.id) {
          item.isSent = true;
        }
      });
      receivedUrls.push(res.data);
      this.setState({ images, receivedUrls });
    })
    .catch(() => {});
});
