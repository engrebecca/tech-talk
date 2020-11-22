
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Adds seeds for Users table
    await queryInterface.bulkInsert('Users', [{
      UserId: userRows[0].id,
      firstName: "Kelly",
      lastName: "Stone",
      email: "kellystone916@gmail.com",
      password: "kspass",
      bio: "Lover of food, friends, animals, music, and nature.",
      photo: "img",
      role: "Software Engineer",
      organization: "Tech Talk",
      github: "kellystone4@github.com",
      website: "kellystone.com",
      location: "San Francisco",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      UserId: userRows[0].id,
      firstName: "Rebecca",
      lastName: "Eng",
      email: "rebeccaeng@gmail.com",
      password: "repass",
      bio: "Lover of food, friends, animals, music, and nature.",
      image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
      role: "Software Engineer",
      organization: "Tech Talk",
      github: "kellystone4@github.com",
      website: "kellystone.com",
      location: "San Francisco",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      UserId: userRows[0].id,
      firstName: "Kelly",
      lastName: "Kim",
      email: "kellykim@gmail.com",
      password: "kkpass",
      bio: "Lover of food, friends, animals, music, and nature.",
      image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
      role: "Software Engineer",
      organization: "Tech Talk",
      github: "kellystone4@github.com",
      website: "kellystone.com",
      location: "San Francisco",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      UserId: userRows[0].id,
      firstName: "Christy",
      lastName: "Lee",
      email: "kellystone916@gmail.com",
      password: "clpass",
      bio: "Lover of food, friends, animals, music, and nature.",
      image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
      role: "Software Engineer",
      organization: "Tech Talk",
      github: "kellystone4@github.com",
      website: "kellystone.com",
      location: "San Francisco",
      createdAt: new Date(),
      updatedAt: new Date()
    }
    ], {});

    // Adds seeds for Posts table
    await queryInterface.bulkInsert("Posts", [{
      postId: "1",
      UserId: userRows[0].id,
      title: "Job Opportunities",
      body: "Hi everyone, I am looking to relocate to the east coast and was wondering if anyone knew of any job opportunities or internships for me out there. Thanks!",
      createdAt: new Date(),
      updatedAt: new Date()
    }
    ], {});

    // --------------------------------------------------------------------------------------------
    // Create variable to access user ids to use for associations in seeds
    const userRows = userIds[0];
    console.log("Users: " + userRows)

    // Get post ids from the post table
    const postIds = await queryInterface.sequelize.query(
      "SELECT id from Posts;"
    )
    // --------------------------------------------------------------------------------------------

    // Adds seeds for Comments table
    await queryInterface.bulkInsert("Comments", [{
      commentId: "",
      text: "Hi, yes I've heard of a new job opportunity! I will send the link your way.",
      postId: "Bondi Beach offers iconic surf beaches and cafes along Hall Street. This beachside suburb attracts thousands of visitors every day with its white sandy beaches and safe swimming conditions.",
      userId: "https://images.unsplash.com/photo-1538312611088-d83e362efe66?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
      createdAt: new Date(),
      updatedAt: new Date(),
      // CityId: cityRows[0].id
    }

    ], {});

    // Adds seeds for Tags table
    await queryInterface.bulkInsert("Tags", [{
      tagsId: "",
      tag: "Career Advice, Job Asks, Offers, Events, Job Post, Random",
      createdAt: new Date(),
      updatedAt: new Date(),
    }
    ], {});

    // Add seeds for PostTag
    //


    // Adds seeds for Trip table
    await queryInterface.bulkInsert("Trips", [{
      name: "Trip Downunder",
      description: "Trip to visit Sydney next year",
      createdAt: new Date(),
      updatedAt: new Date(),
      UserId: userRows[0].id,
      CityId: cityRows[0].id
    },
    {
      name: "Derp'n in Dubai",
      description: "Time to checkout Dubai",
      createdAt: new Date(),
      updatedAt: new Date(),
      UserId: userRows[1].id,
      CityId: cityRows[5].id
    },
    {
      name: "London Calling",
      description: "Trip to London to see friends",
      createdAt: new Date(),
      updatedAt: new Date(),
      UserId: userRows[2].id,
      CityId: cityRows[2].id
    },
    {
      name: "Aussie Trip",
      description: "I derp around the world to pet KOALAS!",
      createdAt: new Date(),
      updatedAt: new Date(),
      UserId: userRows[1].id,
      CityId: cityRows[0].id
    }
    ], {});

    // --------------------------------------------------------------------------------------------
    // Get sight ids from the sights table
    const sightIds = await queryInterface.sequelize.query(
      "SELECT id from Sights;"
    )

    // Create variable to access sight ids to use for associations in seeds
    const sightRows = sightIds[0];
    console.log(sightRows);

    // Get restaurant ids from the restaurants table
    const restaurantIds = await queryInterface.sequelize.query(
      "SELECT id from Restaurants;"
    )

    // Create variable to access restaurant ids to use for associations in seeds
    const restaurantRows = restaurantIds[0];

    // Get trip ids from the trips table
    const tripIds = await queryInterface.sequelize.query(
      "SELECT id from Trips;"
    )

    // Create trip to access trip ids to use for associations in seeds
    const tripRows = tripIds[0];
    console.log(tripRows);
    // --------------------------------------------------------------------------------------------

    // Adds seeds for TripSights table
    await queryInterface.bulkInsert("TripSights", [{
      SightId: sightRows[0].id,
      TripId: tripRows[0].id,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      SightId: sightRows[2].id,
      TripId: tripRows[0].id,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      SightId: sightRows[15].id,
      TripId: tripRows[3].id,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      SightId: sightRows[16].id,
      TripId: tripRows[3].id,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      SightId: sightRows[6].id,
      TripId: tripRows[2].id,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      SightId: sightRows[7].id,
      TripId: tripRows[2].id,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      SightId: sightRows[8].id,
      TripId: tripRows[2].id,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      SightId: sightRows[0].id,
      TripId: tripRows[1].id,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      SightId: sightRows[1].id,
      TripId: tripRows[1].id,
      createdAt: new Date(),
      updatedAt: new Date(),
    }
    ], {});

    // Adds seeds for TripRestaurants table
    await queryInterface.bulkInsert("TripRestaurants", [{
      RestaurantId: sightRows[0].id,
      TripId: tripRows[0].id,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      RestaurantId: sightRows[1].id,
      TripId: tripRows[0].id,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      RestaurantId: sightRows[15].id,
      TripId: tripRows[3].id,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      RestaurantId: sightRows[16].id,
      TripId: tripRows[3].id,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      RestaurantId: sightRows[6].id,
      TripId: tripRows[2].id,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      RestaurantId: sightRows[7].id,
      TripId: tripRows[2].id,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      RestaurantId: sightRows[8].id,
      TripId: tripRows[2].id,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      RestaurantId: sightRows[1].id,
      TripId: tripRows[1].id,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      RestaurantId: sightRows[2].id,
      TripId: tripRows[1].id,
      createdAt: new Date(),
      updatedAt: new Date(),
    }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    // Reverts seeds for all tables
    await queryInterface.bulkDelete('Users', null, {});
    await queryInterface.bulkDelete('Cities', null, {});
    await queryInterface.bulkDelete('Sights', null, {});
    await queryInterface.bulkDelete('Restaurants', null, {});
    await queryInterface.bulkDelete('Trips', null, {});
    await queryInterface.bulkDelete('TripSights', null, {});
    await queryInterface.bulkDelete('TripRestaurants', null, {});
  }
};















'use strict';

module.exports = {
  // Up inserts seeds into tables
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:gi
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  // Down reverts/deletes seeds from tables
  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
