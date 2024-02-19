class Food {
  constructor(
    id,
    name,
    description,
    price,
    rating,
    comments,
    imageURLs,
    ordersCount
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
    this.rating = rating;
    this.comments = comments;
    this.imageURLs = imageURLs;
    this.ordersCount = ordersCount;
  }

  getId() {
    return this.id;
  }

  getName() {
    return this.name;
  }

  getDescription() {
    return this.description;
  }

  getPrice() {
    return this.price;
  }

  getIngredients() {
    return this.ingredients;
  }

  getRating() {
    return this.rating;
  }

  getComments() {
    return this.comments;
  }

  getImageURLs() {
    return this.imageURLs;
  }

  setId(id) {
    this.id = id;
  }

  setName(name) {
    this.name = name;
  }

  setDescription(description) {
    this.description = description;
  }

  setPrice(price) {
    this.price = price;
  }

  setIngredients(ingredients) {
    this.ingredients = ingredients;
  }

  setRating(rating) {
    this.rating = rating;
  }

  setComments(comments) {
    this.comments = comments;
  }

  setImageURLs(imageURLs) {
    this.imageURLs = imageURLs;
  }
}

export default Food;
