// Queries

export const getAllRecipes = () => {
  return fetch("https://feed-the-people-api.herokuapp.com/graphql", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify( { query:`
      query {
        allRecipes{
          id
          avgRating
          image
          title
          description
          instructions
          charityName
          charityId
          userId
          createdAt
          updatedAt
          }
      }
      `
    })
  })
  .then(response => response.json())
  .then(response => response.data)
  .catch(error => console.log(error))
}

export const getUser = (id) => {
  return fetch("https://feed-the-people-api.herokuapp.com/graphql", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify( { query:`
      query {
        getUser(id: ${id}) {
          username
          image
          email
          firstName
          lastName
          street
          city
          state
          zip
          createdAt
          updatedAt
        }
      }
      `
    })
  })
  .then(response => response.json())
  .then(response => console.log(response.data))
  .catch(error => console.log(error))
}

export const getUserWithRecipes = (id) => {
  return fetch("https://feed-the-people-api.herokuapp.com/graphql", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify( { query:`
      query {
        getUser(id: ${id}) {
          username
          image
          email
          firstName
          lastName
          street
          city
          state
          zip
          createdAt
          updatedAt
          recipes {
            image
            title
            description
            instructions
            avgRating
            charityName
            charityId
            userId
          }
          userRecipes {
            id
            userId
            recipeId
            recipe {
              id
              image
              title
              description
              instructions
              charityId
              userId
              avgRating
              ingredients {
                id
                name
                amount
              }
            }
          }
        }
      }
      `
    })
  })
  .then(response => response.json())
  .then(response => response.data)
  .catch(error => console.log(error))
}

export const boughtRecipesByUser = (id) => {
  return fetch("https://feed-the-people-api.herokuapp.com/graphql", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify( { query:`
      query {
        boughtRecipesByUser( userId: ${id} ) {
          id
          userId
          recipeId
          recipe {
            id
            image
            title
            description
            instructions
            charityId
            userId
            avgRating
            ingredients {
              id
              name
              amount
            }
          }
        }
      }
      `
    })
  })
  .then(response => response.json())
  .then(response => response.data.boughtRecipesByUser)
  .catch(error => console.log(error))
}

export const recipeById = (id) => {
  return fetch("http://localhost:8000/graphql", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify( { query:`
      query {
        recipeById( id: ${id} ) {
          id
          image
          title
          description
          instructions
          charityId
          userId
          avgRating
          ingredients {
            id
            name
            amount
          }
        }
      }
      `
    })
  })
  .then(response => response.json())
  .then(response => console.log(response.data))
  .catch(error => console.log(error))
}

export const searchNonProfits = (searchTerm) => {
  return fetch("http://localhost:8000/graphql", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify( { query:`
      query {
        getNpo( searchTerm: "${searchTerm}" ) {
          city
          ein
          name
          state
        }
      }
      `
    })
  })
  .then(response => response.json())
  .then(response => console.log(response.data))
  .catch(error => console.log(error))
}

// Mutations

export const registerUser = (firstName, lastName, email, street, city, state, zip, image, username, password) => {
  return fetch("https://feed-the-people-api.herokuapp.com/graphql", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify( { query:`
      mutation {
        registerUser(input: {
          image: "${image}"
          email: "${email}"
          firstName: "${firstName}"
          lastName: "${lastName}"
          state: "${state}"
          city: "${city}"
          zip: "${zip}"
          street: "${street}"
          authProvider: { credentials: { username: "${username}", password: "${password}" } }}) {
          user {
            id
            image
            email
            username
            firstName
            lastName
            street
            city
            state
            zip
            createdAt
            updatedAt
          }
        }
      }
      `
    })
  })
  .then(response => response.json())
  .then(response => response.data)
  .catch(error => console.log(error))
}

export const userSignIn = (username, password) => {
  return fetch("https://feed-the-people-api.herokuapp.com/graphql", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify( { query:`
      mutation {
        userSignIn(input: {credentials: {username: "${username}", password: "${password}" }}) {
          token
          user {
            id
            email
            image
            username
            firstName
            lastName
            street
            city
            state
            zip
            createdAt
            updatedAt
          }
        }
      }
      `
    })
  })
  .then(response => response.json())
  .then(response => response)
  .catch(error => console.log(error))
}

export const updateUser = (id, firstName, lastName, email, street, city, state, zip, image, username) => {
  return fetch("http://localhost:8000/graphql", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify( { query:`
      mutation {
        updateUser(input: { params: {
          id: ${id}
          image: ${image}
          email: ${email}
          firstName: ${firstName}
          lastName: ${lastName}
          state: ${state}
          city: ${city}
          zip: ${zip}
          street: ${street}
          username: ${username}
        }}) {
          user {
            id
            image
            email
            username
            firstName
            lastName
            street
            city
            state
            zip
            createdAt
            updatedAt
          }
        }
      }
      `
    })
  })
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(error => console.log(error))
}

export const createRecipe = (userId, image, title, description, instructions, charityId, charityName, ingredients) => {
  let variables = {
    "params": {
      "params": {
       "userId": userId,
       "title": title,
       "image": image,
       "description": description,
       "instructions": instructions,
       "charityId": charityId,
       "charityName": charityName,
       "ingredients": ingredients
      }
    }
  }
  return fetch("http://localhost:8000/graphql", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify( { query:`
      mutation createNewRecipe($params: CreateRecipeInput!) {
            createRecipe(input: $params) {
              recipe {
                id
                title
                image
                description
                instructions
                avgRating
                createdAt
                updatedAt
                charityId
                charityName
                ingredients {
                  id
                  name
                  amount
                }
              }
            }
          }
      `, variables: variables
    })
  })
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(error => console.log(error))
}

export const updateRecipe = (id, image, title, description, instructions, charityId, charityName) => {
  return fetch("http://localhost:8000/graphql", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify( { query:`
    mutation {
      updateRecipe(input: {params: {
          id: ${id},
          image: "${image}",
          title: "${title}",
          description: "${description}",
          instructions: "${instructions}",
          charityId: "${charityId}",
          charityName: "${charityName}"}}) {
          recipe {
            id
            image
            title
            description
            instructions
            charityId
            charityName
            avgRating
            ingredients {
              id
              name
              amount
            }
          }
        }
      }
      `
    })
  })
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(error => console.log(error))
}

export const createIngredient = (recipeId, name, amount) => {
  return fetch("http://localhost:8000/graphql", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify( { query:`
    mutation {
      createIngredient(input: {params: {
          recipeId: ${recipeId},
          name: "${name}",
          amount: "${amount}"}}) {
          ingredient {
            id
            name
            amount
          }
        }
      }
      `
    })
  })
  .then(response => response.json())
  .then(response => console.log(response.data))
  .catch(error => console.log(error))
}

export const updateIngredient = (id, name, amount) => {
  return fetch("http://localhost:8000/graphql", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify( { query:`
    mutation {
      updateIngredient(input: {params: {
          id: ${id},
          name: "${name}",
          amount: "${amount}"}}) {
          ingredient {
            id
            name
            amount
          }
        }
      }
      `
    })
  })
  .then(response => response.json())
  .then(response => console.log(response.data))
  .catch(error => console.log(error))
}

export const createUserRecipe = (userId, recipeId, amountDonated) => {
  return fetch("http://localhost:8000/graphql", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify( { query:`
    mutation {
      createUserRecipe(input: {params: {
          recipeId: ${recipeId},
          userId: ${userId},
          amountDonated: "${amountDonated}"}}) {
          userRecipe {
            recipeId
            userId
            amountDonated
          }
        }
      }
      `
    })
  })
  .then(response => response.json())
  .then(response => console.log(response.data))
  .catch(error => console.log(error))
}

export const updateUserRecipeRating = (id, recipeRating) => {
  return fetch("http://localhost:8000/graphql", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify( { query:`
    mutation {
      updateRating(input: {params: {
          id: ${id}
          recipeRating: ${recipeRating}}}) {
          userRecipe {
            id
            recipeRating
          }
        }
      }
      `
    })
  })
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(error => console.log(error))
}
