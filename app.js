var newspaper = angular.module("newspaper", ["ui.router"]);

newspaper.config(function($stateProvider) {
  $stateProvider.state("beats", {
    url: "",
    templateUrl: "partials/beats.html",
    controller: "BeatsCtrl"
  });

  $stateProvider.state("beats.reporters", {
    url: "/:beatsId",
    templateUrl: "partials/beats.reporters.html",
    controller: "ReportersCtrl"
  });
});
