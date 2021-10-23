package stepdef;

import org.junit.Before;
import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)

@CucumberOptions(
		features = "src/test/java/feature",
		glue = "stepdef",
		monochrome = true,
		plugin = { 
	        			"pretty", 
	        			"html:target/reports"
	                },
		strict = true

		)
public class RunCuke {
	

}
