import gql from 'graphql-tag'

export const RestaurantQuery = gql`
    query RestaurantQuery {
      restaurants {
        id
        name
        price
        rating
        review_count
        coordinates {
          latitude,
          longitude
        }
        categories {
          title
        }
        hours {
          is_open_now
        }
        location{
          formatted_address
        }
        photos
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
  `;