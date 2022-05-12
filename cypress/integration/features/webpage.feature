Feature: Webpage Test

  @smoke
  Scenario: Check Google webpage --> should pass
    When the user opens the webpage "https://www.google.com"
    Then the Google search field is visible

  @smoke
  Scenario: Check Apple webpage --> should fail
    When the user opens the webpage "https://www.apple.com"
    Then the Google search field is visible
