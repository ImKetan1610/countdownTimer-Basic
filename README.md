
# Countdown Timer: Problem Statement

## 1. Introduction

Create a web application that allows users to input a specific date and time, after which the application will display a countdown timer that counts down to the specified date and time from the current date and time.

## 2. Features

-   User input for the target date and time.
    
-   Real-time countdown display.
    
-   Ability to cancel and create a new countdown at any time.
    
-   Responsive design for various screen sizes.
    
-   Optional: Sound notification for when the countdown is complete.
    
-   Optional: Persist countdown even if the browser tab is reopened again.
    

## 3. User Stories

-   As a user, I want to be able to easily input the target date and time for the countdown.
    
-   As a user, I want to see a real-time countdown displayed in an easy-to-understand format.
    
-   As a user, I want the countdown timer to be visually appealing and responsive on different devices.
    

## 4. Functional Requirements

### 4.1 Input Form

-   Provide a form with fields for the user to input the target date and time.
    
-   Validate the input to ensure it is a valid date and time format.
    

### 4.2 Countdown Timer

-   Display the countdown timer in a visually appealing format.
    
-   Update the countdown timer in real-time to reflect the remaining time.
    

### 4.3 Cancel / Stop Countdown timer

-   Allow the user to stop the countdown timer at any point of time.
    

### 4.4 Validations

-   The maximum days for the countdown timer should be 99 days.
    
-   The maximum hours for the countdown timer should be 23 hours
    
-   The maximum minutes for the countdown timer should be 59 minutes
    
-   The maximum seconds for the countdown timer should be 59 seconds
    
-   The cut-off date for the date picker should be 99 days from the current date
    
-   The countdown timer should not go below 0
    

### 4.5 Responsive Design

-   Ensure the application is responsive and displays correctly on desktop and mobile devices.
    

## 5. Technologies

Frontend: HTML, CSS, Javascript, React