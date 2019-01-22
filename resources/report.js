$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("createAccountLabel.feature");
formatter.feature({
  "line": 1,
  "name": "Create An Account Label",
  "description": "",
  "id": "create-an-account-label",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Validate Create An Account label in sign up page",
  "description": "",
  "id": "create-an-account-label;validate-create-an-account-label-in-sign-up-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "User is on Facebook sign-up page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "The page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "\u0027Create An Account\u0027 label should be visible",
  "keyword": "Then "
});
formatter.match({
  "location": "SignupTestUsingBDD.user_is_on_Facebook_sign_up_page()"
});
formatter.result({
  "duration": 4120177662,
  "status": "passed"
});
formatter.match({
  "location": "SignupTestUsingBDD.the_page_is_loaded()"
});
formatter.result({
  "duration": 21873227,
  "status": "passed"
});
formatter.match({
  "location": "SignupTestUsingBDD.create_An_Account_label_should_be_visible()"
});
formatter.result({
  "duration": 959282678,
  "status": "passed"
});
formatter.uri("labeltest_simpleparameter.feature");
formatter.feature({
  "line": 2,
  "name": "Create An Account Label",
  "description": "",
  "id": "create-an-account-label",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@LabelTest"
    }
  ]
});
formatter.scenario({
  "line": 4,
  "name": "Validate Create An Account label in sign up page",
  "description": "",
  "id": "create-an-account-label;validate-create-an-account-label-in-sign-up-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "User is on Facebook sign-up page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "The page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "create account label \"Create an account\" and welcome label \"Facebook helps you connect and share with the people in your life.\" should be visible",
  "keyword": "Then "
});
formatter.match({
  "location": "SignupTestUsingBDD.user_is_on_Facebook_sign_up_page()"
});
formatter.result({
  "duration": 3419271238,
  "status": "passed"
});
formatter.match({
  "location": "SignupTestUsingBDD.the_page_is_loaded()"
});
formatter.result({
  "duration": 429026,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Create an account",
      "offset": 22
    },
    {
      "val": "Facebook helps you connect and share with the people in your life.",
      "offset": 60
    }
  ],
  "location": "SignupTestUsingBDD.create_account_label_and_welcome_label_should_be_visible(String,String)"
});
formatter.result({
  "duration": 998648116,
  "status": "passed"
});
formatter.uri("loginpasswordenter.feature");
formatter.feature({
  "line": 1,
  "name": "Login Action",
  "description": "",
  "id": "login-action",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Successful Login with Valid Credentials",
  "description": "",
  "id": "login-action;successful-login-with-valid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User is on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User Navigate to LogIn Page",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User should be able \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 7,
  "name": "",
  "description": "",
  "id": "login-action;successful-login-with-valid-credentials;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 8,
      "id": "login-action;successful-login-with-valid-credentials;;1"
    },
    {
      "cells": [
        "testuser_1",
        "Test@153"
      ],
      "line": 9,
      "id": "login-action;successful-login-with-valid-credentials;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 9,
  "name": "Successful Login with Valid Credentials",
  "description": "",
  "id": "login-action;successful-login-with-valid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User is on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User Navigate to LogIn Page",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User should be able \"testuser_1\" and \"Test@153\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SignupTestUsingBDD_examplekeyword.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 3703738360,
  "status": "passed"
});
formatter.match({
  "location": "SignupTestUsingBDD_examplekeyword.user_Navigate_to_LogIn_Page()"
});
formatter.result({
  "duration": 984735,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "testuser_1",
      "offset": 21
    },
    {
      "val": "Test@153",
      "offset": 38
    }
  ],
  "location": "SignupTestUsingBDD_examplekeyword.user_should_be_able_and(String,String)"
});
formatter.result({
  "duration": 1239220715,
  "status": "passed"
});
formatter.uri("loginpasswordenter_datakeyword.feature");
formatter.feature({
  "line": 1,
  "name": "Login Action",
  "description": "",
  "id": "login-action",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Successful Login with Valid Credentials",
  "description": "",
  "id": "login-action;successful-login-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "User is on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User Navigate to LogIn Page",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User should be able to enter username",
  "rows": [
    {
      "cells": [
        "testuser_1"
      ],
      "line": 7
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "able to enter password",
  "rows": [
    {
      "cells": [
        "Test@153"
      ],
      "line": 9
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "SignupTestUsingBDD_examplekeyword.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 3571075747,
  "status": "passed"
});
formatter.match({
  "location": "SignupTestUsingBDD_examplekeyword.user_Navigate_to_LogIn_Page()"
});
formatter.result({
  "duration": 714470,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});