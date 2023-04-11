@BackgroundFeature @Regression
Feature: Set SkyBlue Background button

@OtherScenario1 
	Scenario: Validate and change web page background color
	Given Sky Blue Background button exists or not
	When I click on the button
	Then The background color will change to sky blue

@OtherScenario2
	Scenario: Validate and change web page background color
	Given White Background button exists or not
	When I click on the White Background button
	Then The background color will change to white

