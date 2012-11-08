require.config({

  deps: ['boilerplate/boot', 'boot'],

  paths: {

    jquery:          'boilerplate/libs/jquery',
    lodash:          'boilerplate/libs/lodash',
    backbone:        'boilerplate/libs/backbone',

    layoutmanager:   'boilerplate/libs/backbone.layoutmanager',
    routefilter:     'boilerplate/libs/backbone.routefilter',
    queryparams:     'boilerplate/libs/backbone.queryparams',

    timeago:         'boilerplate/libs/jquery.timeago',
    iframetransport: 'boilerplate/libs/jquery.iframe-transport',
    toe:          'boilerplate/libs/jquery.toe',

    select2:         'boilerplate/libs/select2',
    prettyCheckable: 'boilerplate/libs/prettyCheckable',
    bootstrap:       'boilerplate/libs/bootstrap',
    kendoui:         'boilerplate/libs/kendoui',

    modal:           'boilerplate/libs/backbone.bootstrap-modal'

  },

  shim: {
    backbone: {
      deps: ['lodash', 'jquery'],
      exports: 'Backbone'
    },

    layoutmanager:   ['backbone'],
    routefilter:     ['backbone'],
    queryparams:     ['backbone'],

    bootstrap:       ['jquery'],
    select2:         ['jquery'],
    prettyCheckable: ['jquery'],
    kendoui:         ['jquery'],
    timeago:         ['jquery'],
    iframetransport: ['jquery'],
    toe:          ['jquery']

  }

});
