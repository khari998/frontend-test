const restQL = `{         
  search (location: "Las Vegas") {
    business {
      id
      name
      price
      rating
      review_count
      photos
      coordinates {
        latitude
        longitude
      }
      hours {
        is_open_now
      }
      categories {
        title
      }
      reviews {
        id
        rating
        text
        time_created
        user {
          name
          image_url
        }
      }
    }
  }
}`;

module.exports = {
  restQL
}