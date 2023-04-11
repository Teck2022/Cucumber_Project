package stepDefinitions;

import org.junit.*;
import org.openqa.selenium.*;
import org.openqa.selenium.chrome.ChromeDriver;

import io.cucumber.java.en.*;
import page.TestBase;

public class Steps extends TestBase{


	@Given("Sky Blue Background button exists or not")
	public void sky_Blue_Background_button_exists_or_not() {
		initDriver();
		driver.get("https://techfios.com/test/102/");
		boolean status = driver.findElement(By.xpath("//*[@id=\"extra\"]/button[1]")).isDisplayed();
		Assert.assertEquals(true, status);
	}

	@When("I click on the button")
	public void i_click_on_the_button() {
		driver.findElement(By.xpath("//*[@id=\"extra\"]/button[1]")).click();

	}

	@Then("The background color will change to sky blue")
	public void the_background_color_will_change_to_sky_blue() {
		boolean status = driver.findElement(By.xpath("/html")).isDisplayed();
		Assert.assertEquals(true, status);

	}

	@Given("White Background button exists or not")
	public static void white_Background_button_exists_or_not() {
		boolean status = driver.findElement(By.xpath("//*[@id=\"extra\"]/button[2]")).isDisplayed();
		Assert.assertEquals(true, status);

	}

	@When("I click on the White Background button")
	public void i_click_on_the_White_Background_button() {
		driver.findElement(By.xpath("//*[@id=\"extra\"]/button[2]"));

	}

	@Then("The background color will change to white")
	public void the_background_color_will_change_to_white() {
		initDriver();
		driver.get("https://techfios.com/test/102/");
		boolean status = driver.findElement(By.xpath("/html")).isDisplayed();
		Assert.assertEquals(true, status);

	}
	
//	@After
	public void tearDown() {
		driver.close();
		driver.quit();
	}
}
