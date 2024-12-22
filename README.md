# Express.js Unhandled Error in Route Handler

This repository demonstrates a common error in Express.js route handlers: the lack of proper error handling for invalid input.  The `bug.js` file shows a route that's vulnerable to crashing if an invalid user ID is provided. The solution `bugSolution.js` shows how to improve the handler with better error handling.

## Bug

The `bug.js` file contains an Express.js route that fetches user data based on a provided ID. However, it does not include any error handling for cases where the ID is invalid or the user is not found. This can result in the application crashing or returning unexpected errors.

## Solution

The `bugSolution.js` file addresses this issue by adding error handling. It checks if the user exists before attempting to access user data. If the user is not found, it returns a 404 Not Found response.  This prevents crashes and provides a more graceful user experience.