Feature: Verify login functionality
	This feature file will test all the login scenarios
	@smoke @regression
	Scenario: Verify login with valid credentials
		अगर में लॉगिन पेज पे हु
		When I enter username as Bharat
		And I enter password as Bharat123
		#And I click on login button
		#Then I am able to see the profile picture
	@regression
	Scenario Outline: Verify login
		अगर I am on login page
		When I enter username as <username>
		And I enter password as <password>
	Examples:
		|username | password |
		| sanjay 	| sanjay123|
		|	Satya 		| satya123 |
		
		