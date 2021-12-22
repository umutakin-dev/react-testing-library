const get = () => {
  return Promise.resolve({
    data: {
      results: [
        {
          name: {
            first: "Umut",
            last: "Akin",
          },
          picture: {
            large: "https://randomuser.me/api/portraits/men/39.jpg",
          },
          login: {
            username: "umutakin",
          },
        },
      ],
    },
  });
};

exports.get = get;
