$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "Verify login functionality",
  "description": "This feature file will test all the login scenarios",
  "id": "verify-login-functionality",
  "keyword": "Feature"
});
formatter.before({
  "duration": 164400,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Verify login with valid credentials",
  "description": "अगर में लॉगिन पेज पे हु",
  "id": "verify-login-functionality;verify-login-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@smoke"
    },
    {
      "line": 3,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I enter username as Bharat",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I enter password as Bharat123",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Bharat",
      "offset": 20
    }
  ],
  "location": "login_steps.enterUserName(String)"
});
formatter.result({
  "duration": 85051671,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bharat123",
      "offset": 20
    }
  ],
  "location": "login_steps.enterPassword(String)"
});
formatter.result({
  "duration": 77724,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 8,
      "value": "#And I click on login button"
    },
    {
      "line": 9,
      "value": "#Then I am able to see the profile picture"
    }
  ],
  "line": 11,
  "name": "Verify login",
  "description": "अगर I am on login page",
  "id": "verify-login-functionality;verify-login",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "I enter username as \u003cusername\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I enter password as \u003cpassword\u003e",
  "keyword": "And "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "verify-login-functionality;verify-login;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 16,
      "id": "verify-login-functionality;verify-login;;1"
    },
    {
      "cells": [
        "sanjay",
        "sanjay123"
      ],
      "line": 17,
      "id": "verify-login-functionality;verify-login;;2"
    },
    {
      "cells": [
        "Satya",
        "satya123"
      ],
      "line": 18,
      "id": "verify-login-functionality;verify-login;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 57536,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Verify login",
  "description": "अगर I am on login page",
  "id": "verify-login-functionality;verify-login;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "I enter username as sanjay",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I enter password as sanjay123",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "sanjay",
      "offset": 20
    }
  ],
  "location": "login_steps.enterUserName(String)"
});
formatter.result({
  "duration": 77718,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sanjay123",
      "offset": 20
    }
  ],
  "location": "login_steps.enterPassword(String)"
});
formatter.result({
  "duration": 55714,
  "status": "passed"
});
formatter.before({
  "duration": 54981,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Verify login",
  "description": "अगर I am on login page",
  "id": "verify-login-functionality;verify-login;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "I enter username as Satya",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I enter password as satya123",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Satya",
      "offset": 20
    }
  ],
  "location": "login_steps.enterUserName(String)"
});
formatter.result({
  "duration": 110204,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "satya123",
      "offset": 20
    }
  ],
  "location": "login_steps.enterPassword(String)"
});
formatter.result({
  "duration": 71644,
  "status": "passed"
});
});