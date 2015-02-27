newspaper.controller("ReportersCtrl", function ReportersCtrl($scope, $stateParams, UtilitiesFactory, BeatsFactory) {
  $scope.beat = UtilitiesFactory.findById(BeatsFactory.beats, $stateParams.beatsId)
  $scope.addReporter = function() {
    $scope.beat.reporters.push({ name: $scope.reporterName, birthday: $scope.reporterBday, term: $scope.reporterTerm, expand: false });
    $scope.reporterName = null;
    $scope.reporterBday = null;
    $scope.reporterTerm = null;
  }
})
