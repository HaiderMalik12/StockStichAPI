1. Create a model for Account
2. Create a model for User
3. Create a model for Company



■ Design the routine.
■ Code the routine.
■ Check the code.
■ Clean up loose ends.
■ Repeat as needed.

==================== BluePrint   ====================

1. Design the Routine ::

- Define the Problem the routine will solve::

 1. The information the routine will hide

 2. Inputs to the routine 

 3. Outputs from the routine.

 4. Preconditions

 5. PostConditions

 6. Name of Routine

 7. Decide how to test routine

 8. Research Functionalities available in standard Library

 9.Think about error handling:

10. Think about Efficieny:
 
 11. Research Algorithms and Data Type

 12. Write Pseudocode:

13. Think about data

14. Check the Pseudocode:

15. Iterate Pseudocode if not best:

15. Write Routine Declration

16.Fill the code bellow each comment:

17. Check whether the code should be further factored or not:

18 Mentally Check the routine for errors


 ====================================================

                  Signup


 - Define the Problem the routine will solve::

 
 1. The information the routine will hide:

 - This routine will hide the signup process for Company
 or user. This routine will create a new account or
 create new company and store result in Account and Company

 
 2. Inputs to the routine :

 `
  {
    "first_name": "Haider",
    "last_name:"malik",
    "email":"haidermalik504@gmilcom",
    "password":"htc@123",
    "mobile":"03430051240",
    "city":"FSD"

  }
  `

3. Output:
  
You have successfully created an account;

4. Preconditions:

-first_name last_name email mobile city must be string
-email must be unique
-password must be string

 5. PostConditions:

 - Account Data has been saved successfully in database

6. Name of Routine:

Signup

7.Decide how to test Routine:

Input must be valited

1. all the fileds will be validated like valid string, number
valid email


8. Research Functionalities available in standard Library:

 - Use lodash
 - Use bluebird to handle promises

 9.Think about error handling:

- what are bad input values
- invalid values return from other routines

 - first_name must be string
 - last_name must be string
 - email must be string or valid email
 - password must be validated
 - mobile must be string
 - city must be string

 If not valid fileds return an error message invalid field name

- If account is not created successfully send 500 error message

9. Think about Efficieny:

10. Research Algorithms and Data Type: