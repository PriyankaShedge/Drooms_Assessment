Feature: Demoblaze API Test

    Scenario: Verify entries count
        Given user creates "GET" request for "entries" endpoint
        Then verify result returns 9 records

    Scenario Outline: Verify entries result prices
        Given user creates "GET" request for "entries" endpoint
        Then verify result returns "2" records with prices "less" than 400
        And verify result returns "7" records with prices "more" than 400

    Scenario Outline: Verify entries result category
        Given user creates request body for "<category>"
        And user creates "POST" request for "bycat" endpoint
        Then verify result returns categories with count as "<count>"
        Examples:
            | category | count |
            | phone    | 7     |
            | notebook | 6     |
            | monitor  | 2     |

    Scenario: Verify add to cart
        Given user creates request body for login
        And user creates "POST" request for "login" endpoint
        When user "add" multiple products using "POST" request for "addtocart" endpoint
            | samsung galaxy s6 | 1 |
            | htc one m9        | 7 |
        Then user performs "POST" request for "viewcart" endpoint to verify cart for "added" items

    Scenario: Verify delete from cart
        Given user creates request body for login
        And user creates "POST" request for "login" endpoint
        When user "add" multiple products using "POST" request for "addtocart" endpoint
            | samsung galaxy s6 | 1 |
            | htc one m9        | 7 |
        Then user performs "POST" request for "viewcart" endpoint to verify cart for "added" items
        When user "delete" multiple products using "POST" request for "deleteitem" endpoint
        Then user performs "POST" request for "viewcart" endpoint to verify cart for "deleted" items