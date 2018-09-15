(function () {
    angular
        // Create the App Module
        .module('app', [])
        // Add the Application Controller to the App Module
        .controller('ApplicationController', ApplicationController);

    function ApplicationController() {
        message = 'Hello World';
        name = 'Visitor';
    }
})();
