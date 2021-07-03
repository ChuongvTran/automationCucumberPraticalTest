$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/WhiteBG.feature");
formatter.feature({
  "line": 1,
  "name": "Confirm background is White",
  "description": "",
  "id": "confirm-background-is-white",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2216049200,
  "status": "passed"
});
formatter.before({
  "duration": 1707201800,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "User should be able to click set white background button and background turns white",
  "description": "",
  "id": "confirm-background-is-white;user-should-be-able-to-click-set-white-background-button-and-background-turns-white",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@smoke2"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "user is on the \"https://techfios.com/test/101/index.php\" page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user Clicks White background button",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "the background should turn White",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://techfios.com/test/101/index.php",
      "offset": 16
    }
  ],
  "location": "WhiteSteps.user_is_on_the_page(String)"
});
formatter.result({
  "duration": 444516800,
  "status": "passed"
});
formatter.match({
  "location": "WhiteSteps.user_Clicks_White_background_button()"
});
formatter.result({
  "duration": 46691800,
  "status": "passed"
});
formatter.match({
  "location": "WhiteSteps.the_background_should_turn_White()"
});
formatter.result({
  "duration": 23759900,
  "status": "passed"
});
});