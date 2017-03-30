var exposed = FlowRouter.group ({});
var loggedIn = FlowRouter.group({
  triggersEnter: [
    function() {
      var route;
      if (!(Meteor.loggingIn() || Meteor.userId())) {
        route = FlowRouter.current();
        if (route.route.name !== 'signin') {
          Session.set('redirectAfterLogin', route.path);
        }
        return FlowRouter.go('signin');
      }
    }
  ]
});

FlowRouter.notFound = {
    name: 'notFound',
    action() {
        BlazeLayout.render('layout1', { top: "Navbar", main: "NotFound", bottom: "Footer" });
    }
}

exposed.route('/', {
    name: 'home',
    action() {
        BlazeLayout.render('layout1', { top: "Navbar", main: "Home", bottom: "Footer"  });
    }
});

exposed.route('/people', {
    name: 'people',
    action() {
        BlazeLayout.render('layout1', { top: "Navbar", main: "People" , bottom: "Footer" });
    }
});

exposed.route('/people-details', {
    name: 'peopleDetails',
    action() {
        BlazeLayout.render('layout1', { top: "Navbar", main: "PeopleDetails" });
    }
});

exposed.route('/works', {
    name: 'works',
    action() {
        BlazeLayout.render('layout1', { top: "Navbar", main: "Works" , bottom: "Footer" });
    }
});

loggedIn.route('/edit-profile', {
    name: 'edit-profile',
    action(params, queryParams) {
        BlazeLayout.render('layout1', { top: "Navbar", main: "Edit_profile" , bottom: "Footer" });
    }
});







