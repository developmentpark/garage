/*
This is empty on purpose! Your code to build the resume will go here.
 */

/**
 * Model
 */
const bio = {
  name: "John Doe",
  role: "web developer",
  contacts: {
    mobile: "998745987",
    email: "jane@doe.com",
    github: "developmentpark",
    twitter: "developmentpark",
    blog: "developmentpark",
    location: "tokio",
    coordinates: [35.72728159782007, 139.640750751569],
  },
  wellcomeMessage: "Wellcome to the jungle",
  skills: ["javascript", "html", "css"],
  biopic:
    "https://th.bing.com/th/id/R.f4e19befe4089098ea8104bb0166e0ce?rik=TN2UmZQK112MKQ&pid=ImgRaw&r=0",
};

const education = {
  schools: [
    {
      name: "Free University of Berlin",
      location: "Fiction City, Fictionland",
      coordinates: [35.74481866555067, 139.6510388112893],
      degree: "Bachelor of Science in Computer Science",
      majors: ["Computer Science", "Information Technology"],
      dates: "August 2018 - May 2022",
      url: "https://www.fu-berlin.de/",
      onlineCourses: [
        {
          title: "Web Development Fundamentals",
          school: "Online Learning Institute",
          dates: "January 2022 - March 2022",
          url: "https://www.fu-berlin.de/",
        },
        {
          title: "Data Structures and Algorithms",
          school: "Online Learning Institute",
          dates: "April 2022 - June 2022",
          url: "http://www.onlinelearninginstitute.edu/courses/dsa",
        },
      ],
    },
  ],
};

const work = {
  works: [
    {
      employer: "Fictional Tech Solutions",
      title: "Software Engineer",
      location: "Techville, Fictionland",
      coordinates: [35.73030910554906, 139.65399662845888],
      dates: "June 2022 - Present",
      description:
        "Developing innovative software solutions for various clients.",
    },
    {
      employer: "Innovative Software Co.",
      title: "Junior Developer",
      location: "Tech Central, Fictionland",
      coordinates: [35.7185116157158, 139.64846679635923],
      dates: "January 2022 - May 2022",
      description:
        "Assisted in the development of cutting-edge software applications.",
    },
  ],
};

const project = {
  projects: [
    {
      title: "E-commerce Platform Redesign",
      dates: "September 2022 - December 2022",
      description:
        "Led a team to redesign and enhance the user experience of an e-commerce platform.",
      images: [
        "https://blog.socialcops.com/wp-content/uploads/2018/12/info-is-beaut.jpg",
        "https://images.ctfassets.net/1wryd5vd9xez/642vY3WZoy64ilAAcPXeLU/f6ae8388ea3bfa0c87e28a0de0c6d209/https___cdn-images-1.medium.com_max_4056_1_Tb3tRaD1r358C3N4zUXR-w.png",
      ],
    },
    {
      title: "Mobile App Development",
      dates: "March 2022 - June 2022",
      description:
        "Developed a mobile app for tracking fitness goals and workouts.",
      images: [
        "https://www.anychart.com/blog/wp-content/uploads/2017/09/data-visualization-best-practices-in-anychart-js-charts-dataviz-weekly-768x478.png",
        "https://th.bing.com/th/id/OIP.n9kbYwP8UYm7-AVk367v0wHaFR?w=2560&h=1821&rs=1&pid=ImgDetMain",
      ],
    },
  ],
};

const data = {
  bio,
  education,
  work,
  project,
};

/*
  locationFinder() returns an array of every location string from the JSONs
  written for bio, education, and work.
  */
function locationFinder() {
  // initializes an empty array
  const locations = [];

  // adds the single location property from bio to the locations array
  locations.push({
    desc: "Contact",
    location: bio.contacts.location,
    coords: bio.contacts.coordinates,
  });

  // iterates through school locations and appends each location to
  // the locations array. Note that forEach is used for array iteration
  // as described in the Udacity FEND Style Guide:
  // https://udacity.github.io/frontend-nanodegree-styleguide/javascript.html#for-in-loop
  education.schools.forEach(function (school, idx) {
    locations.push({
      desc: `School ${idx + 1}`,
      location: school.location,
      coords: school.coordinates,
    });
  });

  // iterates through work locations and appends each location to
  // the locations array. Note that forEach is used for array iteration
  // as described in the Udacity FEND Style Guide:
  // https://udacity.github.io/frontend-nanodegree-styleguide/javascript.html#for-in-loop
  work.works.forEach(function (job, idx) {
    locations.push({
      desc: `Work ${idx + 1}`,
      location: job.location,
      coords: job.coordinates,
    });
  });

  return locations;
}

const controller = {
  init: function () {
    indexView.init();
  },
  getAll: function () {
    return { ...data };
  },
  getLocations: locationFinder,
};

const indexView = {
  init: function () {
    this.render();
  },
  render: function () {
    const { bio, work, project, education } = controller.getAll();

    $("#header").prepend(
      $(HTMLheaderName.replace("%data%", bio.name)),
      $(HTMLheaderRole.replace("%data%", bio.role))
    );

    const contactItems = [
      HTMLmobile.replace("%data%", bio.contacts.mobile),
      HTMLemail.replace("%data%", bio.contacts.email),
      HTMLtwitter.replace("%data%", bio.contacts.twitter),
      HTMLgithub.replace("%data%", bio.contacts.github),
      HTMLblog.replace("%data%", bio.contacts.blog),
      HTMLlocation.replace("%data%", bio.contacts.location),
    ];
    $("#topContacts").append($(contactItems.join("")));

    $("#header").append(
      $(HTMLbioPic.replace("%data%", bio.biopic)),
      $(HTMLwelcomeMsg.replace("%data%", bio.wellcomeMessage)),
      $(HTMLskillsStart)
    );

    const skills = bio.skills.map((sk) => $(HTMLskills.replace("%data%", sk)));
    $("#skills").append(skills);

    /**
     * work section
     */
    const workEntries = [];
    for (currWork of work.works) {
      const title =
        HTMLworkEmployer.replace("%data%", currWork.employer) +
        HTMLworkTitle.replace("%data%", currWork.title);

      workEntries.push(
        $(HTMLworkStart).append(
          $(title),
          $(HTMLworkDates.replace("%data%", currWork.dates)),
          $(HTMLworkLocation.replace("%data%", currWork.location)),
          $(HTMLworkDescription.replace("%data%", currWork.description))
        )
      );
    }

    $("#workExperience").append(workEntries);

    /**
     * project section
     */
    const projectEntries = [];
    for (currProject of project.projects) {
      projectEntries.push(
        $(HTMLprojectStart).append(
          $(HTMLprojectTitle.replace("%data%", currProject.title)),
          $(HTMLprojectDates.replace("%data%", currProject.dates)),
          $(HTMLprojectDescription.replace("%data%", currProject.description)),
          $(HTMLprojectImage.replace("%data%", currProject.images[0])),
          $(HTMLprojectImage.replace("%data%", currProject.images[1]))
        )
      );
    }
    $("#projects").append(projectEntries);

    /**
     * education section
     */
    const educationEntries = [];
    for (currSchool of education.schools) {
      const title =
        HTMLschoolName.replace("%data%", currSchool.name) +
        HTMLschoolDegree.replace("%data%", currSchool.degree);

      const onlineCourses =
        currSchool.onlineCourses &&
        HTMLonlineClasses +
          currSchool.onlineCourses
            .map((curr) => {
              return (
                HTMLonlineTitle.replace("%data%", curr.title) +
                HTMLonlineSchool.replace("%data%", curr.school) +
                HTMLonlineURL.replace("%data%", curr.url)
              );
            })
            .join("");

      const entry = $(HTMLschoolStart).append(
        $(title),
        $(HTMLschoolDates.replace("%data%", currSchool.dates)),
        $(HTMLschoolLocation.replace("%data%", currSchool.dates)),
        $(HTMLschoolMajor.replace("%data%", currSchool.majors)),
        $(onlineCourses)
      );
      educationEntries.push(entry);
    }
    $("#education").append(educationEntries);

    /**
     * MAP
     */
    const locations = controller.getLocations();
    var map = L.map("map").setView(locations[0].coords, 13);

    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    locations.forEach(({ desc, coords }) => {
      L.marker(coords).addTo(map).bindPopup(desc);
    });

    /**
     * footer
     */
    $("#footerContacts").append(contactItems.join(""));
  },
};

controller.init();
