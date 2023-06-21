/* eslint-disable no-undef */
const { faker } = require("@faker-js/faker");
function GenerateData() {
  var Blog = [];
  for (var id = 0; id < 10; id++) {
    let UserName = faker.person.fullName(),
      link = faker.lorem.slug({ min: 4, max: 8 }),
      category = faker.lorem.word(),
      price = faker.number.int({ min: 5, max: 200 }),
      image = faker.image.url(),
      avatar = faker.image.avatar(),
      title = faker.lorem.lines({ min: 1, max: 2 }),
      description = faker.lorem.paragraph(),
      note = faker.lorem.paragraphs(),
      date = faker.date.anytime();

    Blog.push({
      id: id,
      title: title,
      category: category,
      description: description,
      note: note,
      userName: UserName,
      price: price,
      image: image,
      avatar: avatar,
      date: date,
      link: link,
    });
  }
  return { Blog: Blog };
}
module.exports = GenerateData;
