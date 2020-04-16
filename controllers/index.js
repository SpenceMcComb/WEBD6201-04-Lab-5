/**
 * index.js
 * Contains the controllers for each view
 * @author Spence McComb - 100426427
 * @version 1.0
 * @since 2020/04/04 
 */

/* CONTROLLERS SECTION */
module.exports.displayHome = (res) =>
{
  res.render('index', 
    { 
      title: 'Home'
    });
}

module.exports.displayAbout = (res) =>
{
  res.render('index',
  {
    title: 'About'
  });
}

module.exports.displayContact = (res) =>
{
  res.render('index',
  {
    title: 'Contact'
  });
}

module.exports.displayProjects = (res) =>
{
  res.render('index',
  {
    title: 'Projects'
  });
}

module.exports.displayServices = (res) =>
{
  res.render('index',
  {
    title: 'Services'
  });
}

module.exports.displayLogin = (res) =>
{
  res.render('index',
  {
    title: 'Login'
  });
}

