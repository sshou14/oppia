// Copyright 2018 The Oppia Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS-IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * @fileoverview Controllers for the topic viewer.
 */

require(
  'components/common-layout-directives/common-elements/' +
  'background-banner.directive.ts');
require('pages/topic-viewer-page/stories-list/stories-list.directive.ts');
require(
  'pages/topic-viewer-page/navbar-breadcrumb/' +
  'topic-viewer-navbar-breadcrumb.directive.ts');

require('domain/topic_viewer/TopicViewerBackendApiService.ts');
require('services/AlertsService.ts');
require('services/PageTitleService.ts');
require('services/contextual/UrlService.ts');

oppia.controller('TopicViewer', [
  '$rootScope', '$scope', '$window', 'AlertsService',
  'PageTitleService', 'TopicViewerBackendApiService',
  'UrlService', 'FATAL_ERROR_CODES',
  function(
      $rootScope, $scope, $window, AlertsService,
      PageTitleService, TopicViewerBackendApiService,
      UrlService, FATAL_ERROR_CODES) {
    $scope.setActiveTab = function(newActiveTabName) {
      $scope.activeTab = newActiveTabName;
    };
    $scope.setActiveTab('story');

    $scope.checkMobileView = function() {
      return ($window.innerWidth < 500);
    };
    $scope.topicName = UrlService.getTopicNameFromLearnerUrl();

    PageTitleService.setPageTitle($scope.topicName + ' - Oppia');

    $rootScope.loadingMessage = 'Loading';
    TopicViewerBackendApiService.fetchTopicData($scope.topicName).then(
      function(topicDataDict) {
        $scope.canonicalStoriesList = topicDataDict.canonical_story_dicts;
        $rootScope.loadingMessage = '';
      },
      function(errorResponse) {
        if (FATAL_ERROR_CODES.indexOf(errorResponse.status) !== -1) {
          AlertsService.addWarning('Failed to get dashboard data');
        }
      }
    );
  }
]);
