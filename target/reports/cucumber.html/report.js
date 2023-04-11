$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/techfios.feature");
formatter.feature({
  "name": "Set SkyBlue Background button",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@BackgroundFeature"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.scenario({
  "name": "Validate and change web page background color",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@BackgroundFeature"
    },
    {
      "name": "@Regression"
    },
    {
      "name": "@OtherScenario1"
    }
  ]
});
formatter.step({
  "name": "Sky Blue Background button exists or not",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.Steps.sky_Blue_Background_button_exists_or_not()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on the button",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.Steps.i_click_on_the_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The background color will change to sky blue",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.Steps.the_background_color_will_change_to_sky_blue()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate and change web page background color",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@BackgroundFeature"
    },
    {
      "name": "@Regression"
    },
    {
      "name": "@OtherScenario2"
    }
  ]
});
formatter.step({
  "name": "White Background button exists or not",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.Steps.white_Background_button_exists_or_not()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on the White Background button",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.Steps.i_click_on_the_White_Background_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The background color will change to white",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.Steps.the_background_color_will_change_to_white()"
});
formatter.result({
  "status": "passed"
});
});