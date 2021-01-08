//user_id might only be so helpful, we might want user name instead?
//can be pulled already

export const allRecipes = [
  {
    id: 1,
    user_id: 1,
    image: "https://www.chasinglenscapes.com/wp-content/uploads/2020/06/food-photography-on-the-go-tips.jpg",
    title: 'Egg Stuff',
    description: "It looks like bread... and eggs? I think you want it. Donate to make it.",
    instructions: "1. Crack and egg. 2. Cook it. 3. Then do more stuff. 4. Then even more.",
    charity_id: 3,
  },
  {
    id: 2,
    user_id: 1,
    image: "https://i.pinimg.com/originals/13/7a/9b/137a9bf3d78351ca949776a3cc5b0bf3.jpg",
    title: 'Ramen',
    description: "It looks like bread... and eggs? I think you want it. Donate to make it.",
    instructions: "1. Crack and egg. 2. Cook it. 3. Then do more stuff. 4. Then even more.",
    charity_id: 2,
  },
  {
    id: 3,
    user_id: 2,
    image: "https://assets.bonappetit.com/photos/597f6564e85ce178131a6475/master/w_1200,c_limit/0817-murray-mancini-dried-tomato-pie.jpg",
    title: 'Tomato Pie',
    description: "It looks like bread... and eggs? I think you want it. Donate to make it.",
    instructions: "1. Crack and egg. 2. Cook it. 3. Then do more stuff. 4. Then even more.",
    charity_id: 1,
  }
];

//this is what the end point will return for one user once they are logged in
export const individualUserData = {
  id: 1,
  image: 'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/girl_avatar_child_kid-512.png',
  username: 'bigSpenderSpoon',
  password_digest: "password1234",
  first_name: 'Jen',
  last_name: 'Smith',
  street: '1111 Name Street',
  city: 'StateCity',
  state: 'State',
  zip: 12345,
  billing_info: "string we may not even use",
  recipes_created: [
    {
      id: 1,
      user_id: 1,
      image: "https://www.chasinglenscapes.com/wp-content/uploads/2020/06/food-photography-on-the-go-tips.jpg",
      title: 'Egg Stuff',
      description: "It looks like bread... and eggs? I think you want it. Donate to make it.",
      instructions: "1. Crack and egg. 2. Cook it. 3. Then do more stuff. 4. Then even more.",
      charity_id: 3,
      ingredients: ["eggs", "bread"]
    },
    {
      id: 2,
      user_id: 1,
      image: "https://i.pinimg.com/originals/13/7a/9b/137a9bf3d78351ca949776a3cc5b0bf3.jpg",
      title: 'Ramen',
      description: "It looks like bread... and eggs? I think you want it. Donate to make it.",
      instructions: "1. Crack and egg. 2. Cook it. 3. Then do more stuff. 4. Then even more.",
      charity_id: 2,
      ingredients: ["eggs", "ramen", "bok choy", "broth"]
    },
  ],
  recipes_payed_for: [
    {
      id: 3,
      user_id: 2,
      image: "https://assets.bonappetit.com/photos/597f6564e85ce178131a6475/master/w_1200,c_limit/0817-murray-mancini-dried-tomato-pie.jpg",
      title: 'Tomato Pie',
      description: "It looks like bread... and eggs? I think you want it. Donate to make it.",
      instructions: "1. Crack and egg. 2. Cook it. 3. Then do more stuff. 4. Then even more.",
      charity_id: 1,
      ingredients: ["eggs", "flour", "tomatoes", "olive oil"]
    }
  ]
};

//expect 100s
//On FE build search functionality that queries be
//only returns NPOS that contain the search terms
export const allNPOs = [
  {
    ein: 1,
    name: 'Wigs for Turtles',
    city: 'Springfield',
    state: 'Illinios'
  },
  {
    ein: 2,
    name: 'Wigs for Toads',
    city: 'Springfield',
    state: 'Arkansas'
  },
  {
    ein: 3,
    name: 'Wigs for Wigs',
    city: 'Springfield',
    state: 'Massachusets'
  }
];

//research what to do with a token
//are we using tokens just for secure data transfer jwt token
//and potentially a way of authenticating future requests with an auth token
//rbac role bases acess control

//jwt tokens

//sign in stored in local storage
