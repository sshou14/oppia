// Copyright 2014 The Oppia Authors. All Rights Reserved.
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
 * @fileoverview Initialization and basic configuration for the Oppia module.
 */

require('I18nFooter.ts');
require('directives/FocusOnDirective.ts');

require('pages/Base.ts');

require('services/AlertsService.ts');
require('services/ContextService.ts');
require('services/NavigationService.ts');
require('services/UtilsService.ts');
require('services/DebouncerService.ts');
require('services/DateTimeFormatService.ts');
require('services/IdGenerationService.ts');
require('services/HtmlEscaperService.ts');
require('services/TranslationFileHashLoaderService.ts');
require('services/RteHelperService.ts');
require('services/StateRulesStatsService.ts');
require('services/ConstructTranslationIdsService.ts');
require('services/UserService.ts');
require('services/PromoBarService.ts');
require('services/contextual/DeviceInfoService.ts');
require('services/contextual/UrlService.ts');
require('services/contextual/WindowDimensionsService.ts');
require('services/stateful/BackgroundMaskService.ts');
require('services/stateful/FocusManagerService.ts');
require('services/SiteAnalyticsService.ts');

require(
  'components/common-layout-directives/common-elements/' +
  'alert-message.directive.ts');
require('components/button-directives/create-activity-button.directive.ts');

require('components/forms/custom-forms-directives/object-editor.directive.ts');
require(
  'components/common-layout-directives/common-elements/' +
  'promo-bar.directive.ts');
require(
  'components/common-layout-directives/navigation-bars/' +
  'side-navigation-bar.directive.ts');
require('components/button-directives/social-buttons.directive.ts');
require(
  'components/common-layout-directives/navigation-bars/' +
  'top-navigation-bar.directive.ts');

require('domain/sidebar/SidebarStatusService.ts');
require('domain/user/UserInfoObjectFactory.ts');
require('domain/utilities/UrlInterpolationService.ts');

oppia.constant(
  'EXPLORATION_SUMMARY_DATA_URL_TEMPLATE', '/explorationsummarieshandler/data');

oppia.constant('EXPLORATION_AND_SKILL_ID_PATTERN', /^[a-zA-Z0-9_-]+$/);

// We use a slash because this character is forbidden in a state name.
oppia.constant('PLACEHOLDER_OUTCOME_DEST', '/');
oppia.constant('INTERACTION_DISPLAY_MODE_INLINE', 'inline');
oppia.constant('LOADING_INDICATOR_URL', '/activity/loadingIndicator.gif');
oppia.constant('OBJECT_EDITOR_URL_PREFIX', '/object_editor_template/');
// Feature still in development.
// NOTE TO DEVELOPERS: This should be synchronized with the value in feconf.
oppia.constant('ENABLE_ML_CLASSIFIERS', false);
// Feature still in development.
oppia.constant('INFO_MESSAGE_SOLUTION_IS_INVALID_FOR_EXPLORATION',
  'The current solution does not lead to another card.');
oppia.constant('INFO_MESSAGE_SOLUTION_IS_INVALID_FOR_QUESTION',
  'The current solution does not correspond to a correct answer.');
oppia.constant('INFO_MESSAGE_SOLUTION_IS_VALID',
  'The solution is now valid!');
oppia.constant('INFO_MESSAGE_SOLUTION_IS_INVALID_FOR_CURRENT_RULE',
  'The current solution is no longer valid.');
oppia.constant('PARAMETER_TYPES', {
  REAL: 'Real',
  UNICODE_STRING: 'UnicodeString'
});
oppia.constant('ACTION_ACCEPT_SUGGESTION', 'accept');
oppia.constant('ACTION_REJECT_SUGGESTION', 'reject');

// The maximum number of nodes to show in a row of the state graph.
oppia.constant('MAX_NODES_PER_ROW', 4);
// The following variable must be at least 3. It represents the maximum length,
// in characters, for the name of each node label in the state graph.
oppia.constant('MAX_NODE_LABEL_LENGTH', 15);

// If an $http request fails with the following error codes, a warning is
// displayed.
oppia.constant('FATAL_ERROR_CODES', [400, 401, 404, 500]);

// Do not modify these, for backwards-compatibility reasons.
oppia.constant('COMPONENT_NAME_CONTENT', 'content');
oppia.constant('COMPONENT_NAME_HINT', 'hint');
oppia.constant('COMPONENT_NAME_SOLUTION', 'solution');
oppia.constant('COMPONENT_NAME_FEEDBACK', 'feedback');
oppia.constant('COMPONENT_NAME_DEFAULT_OUTCOME', 'default_outcome');
oppia.constant('COMPONENT_NAME_EXPLANATION', 'explanation');
oppia.constant('COMPONENT_NAME_WORKED_EXAMPLE', 'worked_example');

// Enables recording playthroughs from learner sessions.
oppia.constant('CURRENT_ACTION_SCHEMA_VERSION', 1);
oppia.constant('CURRENT_ISSUE_SCHEMA_VERSION', 1);
oppia.constant('EARLY_QUIT_THRESHOLD_IN_SECS', 45);
oppia.constant('NUM_INCORRECT_ANSWERS_THRESHOLD', 3);
oppia.constant('NUM_REPEATED_CYCLES_THRESHOLD', 3);
oppia.constant('MAX_PLAYTHROUGHS_FOR_ISSUE', 5);

oppia.constant('ACTION_TYPE_EXPLORATION_START', 'ExplorationStart');
oppia.constant('ACTION_TYPE_ANSWER_SUBMIT', 'AnswerSubmit');
oppia.constant('ACTION_TYPE_EXPLORATION_QUIT', 'ExplorationQuit');

oppia.constant('ISSUE_TYPE_EARLY_QUIT', 'EarlyQuit');
oppia.constant(
  'ISSUE_TYPE_MULTIPLE_INCORRECT_SUBMISSIONS', 'MultipleIncorrectSubmissions');
oppia.constant('ISSUE_TYPE_CYCLIC_STATE_TRANSITIONS', 'CyclicStateTransitions');
oppia.constant('SITE_NAME', 'Oppia.org');

oppia.constant('DEFAULT_PROFILE_IMAGE_PATH', '/avatar/user_blue_72px.png');
oppia.constant('FEEDBACK_POPOVER_PATH',
  '/pages/exploration-player-page/templates/' +
  'feedback-popup-container.template.html');

oppia.constant('LOGOUT_URL', '/logout');

// Whether to enable the promo bar functionality. This does not actually turn on
// the promo bar, as that is gated by a config value (see config_domain). This
// merely avoids checking for whether the promo bar is enabled for every Oppia
// page visited.
oppia.constant('ENABLE_PROMO_BAR', true);

// TODO(vojtechjelinek): Move these to separate file later, after we establish
// process to follow for Angular constants (#6731).
oppia.constant(
  'TOPIC_MANAGER_RIGHTS_URL_TEMPLATE',
  '/rightshandler/assign_topic_manager/<topic_id>/<assignee_id>');
oppia.constant(
  'TOPIC_RIGHTS_URL_TEMPLATE', '/rightshandler/get_topic_rights/<topic_id>');
oppia.constant(
  'SUBTOPIC_PAGE_EDITOR_DATA_URL_TEMPLATE',
  '/subtopic_page_editor_handler/data/<topic_id>/<subtopic_id>');
oppia.constant(
  'EDITABLE_TOPIC_DATA_URL_TEMPLATE', '/topic_editor_handler/data/<topic_id>');

oppia.config([
  '$compileProvider', '$cookiesProvider', '$httpProvider',
  '$interpolateProvider', '$locationProvider',
  function(
      $compileProvider, $cookiesProvider, $httpProvider,
      $interpolateProvider, $locationProvider) {
    // This improves performance by disabling debug data. For more details,
    // see https://code.angularjs.org/1.5.5/docs/guide/production
    $compileProvider.debugInfoEnabled(false);

    // Set the AngularJS interpolators as <[ and ]>, to not conflict with
    // Jinja2 templates.
    $interpolateProvider.startSymbol('<[');
    $interpolateProvider.endSymbol(']>');

    // Prevent the search page from reloading if the search query is changed.
    $locationProvider.html5Mode(false);
    if (window.location.pathname === '/search/find') {
      $locationProvider.html5Mode(true);
    }

    // Prevent storing duplicate cookies for translation language.
    $cookiesProvider.defaults.path = '/';

    // Set default headers for POST and PUT requests.
    $httpProvider.defaults.headers.post = {
      'Content-Type': 'application/x-www-form-urlencoded'
    };
    $httpProvider.defaults.headers.put = {
      'Content-Type': 'application/x-www-form-urlencoded'
    };

    // Add an interceptor to convert requests to strings and to log and show
    // warnings for error responses.
    $httpProvider.interceptors.push([
      '$q', '$log', 'AlertsService', function($q, $log, AlertsService) {
        return {
          request: function(config) {
            if (config.data) {
              config.data = $.param({
                csrf_token: GLOBALS.csrf_token,
                payload: JSON.stringify(config.data),
                source: document.URL
              }, true);
            }
            return config;
          },
          responseError: function(rejection) {
            // A rejection status of -1 seems to indicate (it's hard to find
            // documentation) that the response has not completed,
            // which can occur if the user navigates away from the page
            // while the response is pending, This should not be considered
            // an error.
            if (rejection.status !== -1) {
              $log.error(rejection.data);

              var warningMessage = 'Error communicating with server.';
              if (rejection.data && rejection.data.error) {
                warningMessage = rejection.data.error;
              }
              AlertsService.addWarning(warningMessage);
            }
            return $q.reject(rejection);
          }
        };
      }
    ]);
  }
]);

oppia.config(['$provide', function($provide) {
  $provide.decorator('$log', ['$delegate', 'DEV_MODE',
    function($delegate, DEV_MODE) {
      var _originalError = $delegate.error;

      if (!DEV_MODE) {
        $delegate.log = function() {};
        $delegate.info = function() {};
        // TODO(sll): Send errors (and maybe warnings) to the backend.
        $delegate.warn = function() { };
        $delegate.error = function(message) {
          if (String(message).indexOf('$digest already in progress') === -1) {
            _originalError(message);
          }
        };
        // This keeps angular-mocks happy (in tests).
        $delegate.error.logs = [];
      }

      return $delegate;
    }
  ]);
}]);

oppia.config(['toastrConfig', function(toastrConfig) {
  angular.extend(toastrConfig, {
    allowHtml: false,
    iconClasses: {
      error: 'toast-error',
      info: 'toast-info',
      success: 'toast-success',
      warning: 'toast-warning'
    },
    positionClass: 'toast-bottom-right',
    messageClass: 'toast-message',
    progressBar: false,
    tapToDismiss: true,
    titleClass: 'toast-title'
  });
}]);

// Overwrite the built-in exceptionHandler service to log errors to the backend
// (so that they can be fixed).
oppia.factory('$exceptionHandler', ['$log', function($log) {
  var MIN_TIME_BETWEEN_ERRORS_MSEC = 5000;
  var timeOfLastPostedError = Date.now() - MIN_TIME_BETWEEN_ERRORS_MSEC;

  return function(exception, cause) {
    var messageAndSourceAndStackTrace = [
      '',
      'Cause: ' + cause,
      exception.message,
      String(exception.stack),
      '    at URL: ' + window.location.href
    ].join('\n');

    // To prevent an overdose of errors, throttle to at most 1 error every
    // MIN_TIME_BETWEEN_ERRORS_MSEC.
    if (Date.now() - timeOfLastPostedError > MIN_TIME_BETWEEN_ERRORS_MSEC) {
      // Catch all errors, to guard against infinite recursive loops.
      try {
        // We use jQuery here instead of Angular's $http, since the latter
        // creates a circular dependency.
        $.ajax({
          type: 'POST',
          url: '/frontend_errors',
          data: $.param({
            csrf_token: GLOBALS.csrf_token,
            payload: JSON.stringify({
              error: messageAndSourceAndStackTrace
            }),
            source: document.URL
          }, true),
          contentType: 'application/x-www-form-urlencoded',
          dataType: 'text',
          async: true
        });

        timeOfLastPostedError = Date.now();
      } catch (loggingError) {
        $log.warn('Error logging failed.');
      }
    }

    $log.error.apply($log, arguments);
  };
}]);

oppia.constant('LABEL_FOR_CLEARING_FOCUS', 'labelForClearingFocus');

// Add a String.prototype.trim() polyfill for IE8.
if (typeof String.prototype.trim !== 'function') {
  String.prototype.trim = function() {
    return this.replace(/^\s+|\s+$/g, '');
  };
}

// Add an Object.create() polyfill for IE8.
if (typeof Object.create !== 'function') {
  (function() {
    var F = function() {};
    Object.create = function(o) {
      if (arguments.length > 1) {
        throw Error('Second argument for Object.create() is not supported');
      }
      if (o === null) {
        throw Error('Cannot set a null [[Prototype]]');
      }
      if (typeof o !== 'object') {
        throw TypeError('Argument must be an object');
      }
      F.prototype = o;
      return new F();
    };
  })();
}

// Add a Number.isInteger() polyfill for IE.
Number.isInteger = Number.isInteger || function(value) {
  return (
    typeof value === 'number' && isFinite(value) &&
    Math.floor(value) === value);
};


// Add Array.fill() polyfill for IE.
if (!Array.prototype.fill) {
  Object.defineProperty(Array.prototype, 'fill', {
    value: function(value) {
      // Steps 1-2.
      if (this === null) {
        throw new TypeError('this is null or not defined');
      }

      var O = Object(this);

      // Steps 3-5.
      var len = O.length >>> 0;

      // Steps 6-7.
      var start = arguments[1];
      var relativeStart = start >> 0;

      // Step 8.
      var k = relativeStart < 0 ?
        Math.max(len + relativeStart, 0) :
        Math.min(relativeStart, len);

      // Steps 9-10.
      var end = arguments[2];
      var relativeEnd = end === undefined ?
        len : end >> 0;

      // Step 11.
      var final = relativeEnd < 0 ?
        Math.max(len + relativeEnd, 0) :
        Math.min(relativeEnd, len);

      // Step 12.
      while (k < final) {
        O[k] = value;
        k++;
      }

      // Step 13.
      return O;
    }
  });
}
