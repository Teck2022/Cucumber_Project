package testRunner;


import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(
		features="C:\\Users\\Taylo\\Automation Exam Projects\\Cucumber_Project\\src\\test\\resources\\techfios.feature", 
		glue = "stepDefinitions",
		tags = {"@Regression"},
		monochrome = true, 
		dryRun = false, 
		plugin = {
				"pretty", 
				"html:target/reports/cucumber.html.",
				"json:target/reports/cucumber.json."
		}
		)

public class TestRunner {

}
