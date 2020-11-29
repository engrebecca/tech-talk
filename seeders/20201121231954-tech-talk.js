'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    // Adds seeds for Users table
    await queryInterface.bulkInsert('Users', [{
      firstName: "Kelly",
      lastName: "Stone",
      email: "kellystone916@gmail.com",
      password: "kspass",
      bio: "Lover of food, friends, animals, music, and nature.",
      photo: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
      role: "Software Engineer",
      organization: "Tech Talk",
      github: "https://github.com/kellystone4",
      website: "kellystone.com",
      location: "San Francisco",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstName: "Rebecca",
      lastName: "Eng",
      email: "Rebecca.e.Eng@gmail.com",
      password: "repass",
      bio: "Lover of food, friends, animals, music, and nature.",
      photo: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
      role: "Software Engineer",
      organization: "Tech Talk",
      github: "https://github.com/engrebecca",
      website: "rebeccaeng.com",
      location: "San Francisco",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstName: "Kelly",
      lastName: "Kim",
      email: "kellykim408@gmail.com",
      password: "kkpass",
      bio: "Lover of food, friends, animals, music, and nature.",
      photo: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
      role: "Software Engineer",
      organization: "Tech Talk",
      github: "https://github.com/kellykim831",
      website: "kellykim.com",
      location: "San Francisco",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstName: "Christy",
      lastName: "Lee",
      email: "christy.g.lee@gmail.com",
      password: "clpass",
      bio: "Lover of food, friends, animals, music, and nature.",
      photo: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
      role: "Software Engineer",
      organization: "Tech Talk",
      github: "https://github.com/christyglee",
      website: "christylee.com",
      location: "San Francisco",
      createdAt: new Date(),
      updatedAt: new Date()
    }
    ], {});

    // --------------------------------------------------------------------------------------------
    // Get user ids from the users table
    const userIds = await queryInterface.sequelize.query(
      "SELECT id from Users;"
    )

    // Create variable to access user ids to use for associations in seeds
    const userRows = userIds[0];
    console.log("Users: " + userRows)
    // --------------------------------------------------------------------------------------------

    // Adds seeds for Posts table
    await queryInterface.bulkInsert("Posts", [
      {
        title: "Job Opportunities",
        body: "Post #1: Hi everyone, I am looking to relocate to the east coast and was wondering if anyone knew of any job opportunities or internships for me out there. Thanks!",
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: userRows[0].id,
      },
      {
        title: "Job Opportunities #2",
        body: "Post #2: Hi everyone, I am looking to relocate to the east coast and was wondering if anyone knew of any job opportunities or internships for me out there. Thanks!",
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: userRows[1].id,
      },
      {
        title: "Job Opportunities #3",
        body: "Post #3: Hi everyone, I am looking to relocate to the east coast and was wondering if anyone knew of any job opportunities or internships for me out there. Thanks!",
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: userRows[2].id,
      }
    ], {});

    // --------------------------------------------------------------------------------------------
    // Get post ids from the posts table
    const postIds = await queryInterface.sequelize.query(
      "SELECT id from Posts;"
    )

    // Create variable to access post ids to use for associations in seeds
    const postRows = postIds[0];
    console.log("Posts: " + postRows)
    // --------------------------------------------------------------------------------------------

    // Adds seeds for Comments table
    await queryInterface.bulkInsert("Comments", [
      {
        text: "Comment #1: Hi, yes I've heard of a new job opportunity! I will send the link your way.",
        createdAt: new Date(),
        updatedAt: new Date(),
        PostId: postRows[0].id,
        UserId: userRows[1].id
      },
      {
        text: "Comment #2: Hi, yes I've heard of a new job opportunity! I will send the link your way.",
        createdAt: new Date(),
        updatedAt: new Date(),
        PostId: postRows[1].id,
        UserId: userRows[0].id
      },
      {
        text: "Comment #3: Hi, yes I've heard of a new job opportunity! I will send the link your way.",
        createdAt: new Date(),
        updatedAt: new Date(),
        PostId: postRows[1].id,
        UserId: userRows[2].id
      }

    ], {});

    // Adds seeds for Tags table
    await queryInterface.bulkInsert("Tags", [
      {
        name: "Career Advice",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Asks",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Mentorship",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Events",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Job Post",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Random",
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ], {});

    // --------------------------------------------------------------------------------------------
    // Get tag ids from the tags table
    const tagIds = await queryInterface.sequelize.query(
      "SELECT id from Tags;"
    )

    // Create variable to access tag ids to use for associations in seeds
    const tagRows = tagIds[0];
    console.log("Tags: " + tagRows)
    // --------------------------------------------------------------------------------------------

    // Add seeds for PostTag
    await queryInterface.bulkInsert("PostTags", [
      {
        createdAt: new Date(),
        updatedAt: new Date(),
        PostId: postRows[0].id,
        TagId: tagRows[0].id
      },
      {
        createdAt: new Date(),
        updatedAt: new Date(),
        PostId: postRows[1].id,
        TagId: tagRows[0].id
      },
      {
        createdAt: new Date(),
        updatedAt: new Date(),
        PostId: postRows[1].id,
        TagId: tagRows[1].id
      },
      {
        createdAt: new Date(),
        updatedAt: new Date(),
        PostId: postRows[2].id,
        TagId: tagRows[0].id
      }
    ], {});

  },

  down: async (queryInterface, Sequelize) => {
    // Reverts seeds for all tables
    await queryInterface.bulkDelete('Users', null, {});
    await queryInterface.bulkDelete('Posts', null, {});
    await queryInterface.bulkDelete('Comments', null, {});
    await queryInterface.bulkDelete('Tags', null, {});
    await queryInterface.bulkDelete('PostTags', null, {});
  }
};









