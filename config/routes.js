/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * http://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {


  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  '/': {
    view: 'homepage'
  },

  'POST /login': function (req, res){
    console.log('Got /login request.  Currently, the `userId` in the session is `'+req.session.userId+'`');
    req.session.userId = 3;
    console.log('But now, I\'ve changed it to: `'+req.session.userId+'`');
    console.log('When the response is sent, this should be persisted to the session store appropriately.');
    return res.ok();
  }

};
