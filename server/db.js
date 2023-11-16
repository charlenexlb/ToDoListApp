// Connect to MongoDB database
mongoose.connect('mongodb://localhost/my_database', { useNewUrlParser: true}) //what is unifiedTopology?
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err));

app.listen(3000, function() {
    console.log("Server started on port 3000")
});