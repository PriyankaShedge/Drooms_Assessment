Feature: Demoblaze UI Test

Background: User opens home page
    Given User opens demoblaze homepage

    Scenario: Verify category
        Then verify user see all 3 categories
        |Phones|Laptops|Monitors|

    Scenario: verify price tags
        Then verify all products have price tags  
        

    Scenario: verify About us pop up
        When user clicks on About us option
        Then verify video is displayed in paused state


    Scenario: verify product added pop up 
        When user logins to the application
        Then user verifies Product Added pop up on adding product to cart

    Scenario: verify total amount calculation in cart
        When user adds few products to cart
        And navigates to cart page
        Then verify the Total amount matches with the total item prices in the cart
