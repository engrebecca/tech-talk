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
      photo: "https://res.cloudinary.com/tech-talk/image/upload/v1606901422/Screen_Shot_2020-12-02_at_1.29.41_AM_cllvk6.png",
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
      bio: "Lover of hiking, traveling and food!",
      photo: "https://res.cloudinary.com/tech-talk/image/upload/v1606901527/rebeccaeng_ncs3yc.jpg",
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
      bio: "Foodie, traveling, and music!",
      photo: "https://res.cloudinary.com/tech-talk/image/upload/v1606901633/img_6846_iwpv3e.jpg",
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
      bio: "Love to travel, hike, and bake!",
      photo: "https://res.cloudinary.com/tech-talk/image/upload/v1606901742/headshot_resized_slbpie.jpg",
      role: "Software Engineer",
      organization: "Tech Talk",
      github: "https://github.com/christyglee",
      website: "christylee.com",
      location: "San Francisco",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstName: "Becca",
      lastName: "Correa",
      email: "beccacorrea@gmail.com",
      password: "pass",
      bio: "Passioante about technology!",
      photo: "https://res.cloudinary.com/tech-talk/image/upload/v1606901903/sedonapic_arnxhd.jpg",
      role: "Program Manager",
      organization: "Service Now",
      github: "https://github.com/beccacorrea",
      website: "becca@becca.com",
      location: "San Diego",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstName: "Angela",
      lastName: "White",
      email: "angeawhilte@gmail.com",
      password: "pass",
      bio: "Hiking is awesome!! Love my 2 dogs.",
      photo: "https://res.cloudinary.com/tech-talk/image/upload/v1606902150/rebeccacorrea_ca3bdb.png",
      role: "QA Engineer",
      organization: "Microsoft",
      github: "https://github.com/angealwhite",
      website: "angela@angela.com",
      location: "Redmond",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstName: "Brianna",
      lastName: "Morales",
      email: "briannamorales@gmail.com",
      password: "pass",
      bio: "Huge fan of the great outdoors!",
      photo: "https://res.cloudinary.com/tech-talk/image/upload/v1606902261/image-1_qgqka1.png",
      role: "Front-end Developer",
      organization: "Salesforce",
      github: "https://github.com/briannamorales",
      website: "brianna@brianna.com",
      location: "Austin",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstName: "Nika",
      lastName: "Rahbari",
      email: "nika@gmail.com",
      password: "pass",
      bio: "Love meeting new people!",
      photo: "https://res.cloudinary.com/tech-talk/image/upload/v1606902034/image_ytm5ec.png",
      role: "Project Manager",
      organization: "Mazda",
      github: "https://github.com/nikarahbari",
      website: "nika@nika.com",
      location: "Seattle",
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
        title: "Need advice!",
        body: "I am thinking of switching out to a different role within my company! Has anyone had any experience with this?",
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: userRows[0].id,
      },
      {
        title: "Relocating to New York!",
        body: "Hi guys! I am looking to relocate to the east coast and was wondering if anyone knew of any job opportunities or internships for me out there. Thanks!",
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: userRows[1].id,
      },
      {
        title: "Job Comfortability",
        body: "How long did it take for you guys to feel comfortable at your current/previous jobs? Would appreciate some advice!",
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
        text: "Yes! I found it really helpful to have informational interviews with people who were in the department I wanted to pivot into.",
        createdAt: new Date(),
        updatedAt: new Date(),
        PostId: postRows[0].id,
        UserId: userRows[1].id
      },
      {
        text: "Hi, yes I've heard of a new job opportunity! I will send the link your way.",
        createdAt: new Date(),
        updatedAt: new Date(),
        PostId: postRows[1].id,
        UserId: userRows[0].id
      },
      {
        text: "Are you looking for software engineer roles specifically? I know of an open QA role if you're interested.",
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