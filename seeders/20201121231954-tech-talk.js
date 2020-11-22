'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    // Adds seeds for Users table
    await queryInterface.bulkInsert('Users', [{
      // UserId: userRows[0].id,
      firstName: "Kelly",
      lastName: "Stone",
      email: "kellystone916@gmail.com",
      password: "kspass",
      bio: "Lover of food, friends, animals, music, and nature.",
      photo: "img",
      role: "Software Engineer",
      organization: "Tech Talk",
      github: "https://github.com/kellystone4",
      website: "kellystone.com",
      location: "San Francisco",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      // UserId: userRows[0].id,
      firstName: "Rebecca",
      lastName: "Eng",
      email: "Rebecca.e.Eng@gmail.com",
      password: "repass",
      bio: "Lover of food, friends, animals, music, and nature.",
      image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
      role: "Software Engineer",
      organization: "Tech Talk",
      github: "https://github.com/engrebecca",
      website: "rebeccaeng.com",
      location: "San Francisco",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      // UserId: userRows[0].id,
      firstName: "Kelly",
      lastName: "Kim",
      email: "kellykim408@gmail.com",
      password: "kkpass",
      bio: "Lover of food, friends, animals, music, and nature.",
      image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
      role: "Software Engineer",
      organization: "Tech Talk",
      github: "https://github.com/kellykim831",
      website: "kellykim.com",
      location: "San Francisco",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      // UserId: userRows[0].id,
      firstName: "Christy",
      lastName: "Lee",
      email: "christy.g.lee@gmail.com",
      password: "clpass",
      bio: "Lover of food, friends, animals, music, and nature.",
      image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
      role: "Software Engineer",
      organization: "Tech Talk",
      github: "https://github.com/christyglee",
      website: "christylee.com",
      location: "San Francisco",
      createdAt: new Date(),
      updatedAt: new Date()
    }
    ], {});

    // Adds seeds for Posts table
    await queryInterface.bulkInsert("Posts", [{
      // postId: postRows[0].id,
      // UserId: userRows[0].id,
      title: "Job Opportunities",
      body: "Hi everyone, I am looking to relocate to the east coast and was wondering if anyone knew of any job opportunities or internships for me out there. Thanks!",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      // postId: postRows[0].id,
      // UserId: userRows[0].id,
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
      postId: postRows[0].id,
      UserId: userRows[0].id,
      createdAt: new Date(),
      updatedAt: new Date(),
      // CityId: cityRows[0].id
    }

    ], {});

    // Adds seeds for Tags table
    await queryInterface.bulkInsert("Tags", [{
      tagId: tagRows[0].id,
      tag: "Career Advice, Job Asks, Offers, Events, Job Post, Random",
      createdAt: new Date(),
      updatedAt: new Date(),
    }
    ], {});

    // Add seeds for PostTag
    //

  },

  down: async (queryInterface, Sequelize) => {
    // Reverts seeds for all tables
    await queryInterface.bulkDelete('Users', null, {});
    await queryInterface.bulkDelete('Posts', null, {});
    await queryInterface.bulkDelete('Comments', null, {});
    await queryInterface.bulkDelete('Tags', null, {});
  }
};









