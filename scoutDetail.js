function scoutDetailController() {

}

angular.module('sailorMoonApp').component('scoutDetail', {
  templateUrl: 'scoutDetail.html',
  controller: scoutDetailController,
  bindings: {
    scout: '='
  }
});
