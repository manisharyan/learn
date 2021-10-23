package stepdef;

import org.junit.Assert;

import cucumber.api.java.Before;
import cucumber.api.java.hi.अगर;
import cucumber.api.java.en.When;

public class login_steps {
	@अगर("में लॉगिन पेज पे हु")
	public void openLoginPage(){
		System.out.println("---Login Page---");
	}
	
	@When("I enter username as (.*)")
	public void enterUserName(String username){
		System.out.println("---UserName---" + username);
	//	Assert.fail("Failure");
	}
	
	@When("I enter password as (.*)")
	public void enterPassword(String password){
		System.out.println("---Password---" + password);
	}
	@Before
	public void setup(){
		System.out.println("-----launch");
	}

}
