1. Create a model for Account
2. Create a model for User
3. Create a model for Company



- Design the routine.
- Code the routine.
- Check the code.
- Clean up loose ends.
- Repeat as needed.

==================== BluePrint   ====================

### Design the Routine

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

19. Compile the Code

20. Step through Code

21.Test the Code

22.Remove Errors from the Routine

23.
 ====================================================
## Checklist


 ## How to Use Routine Parameters

 1.  Put Paramters in input-modify order:
 2.  Make sure you have used all parameters:
 3.  Put Status or error variables last 
 4.  Dont use routine parameters as a working variables instead
 use local variables
 5.  Document Interface assumptions about parameters

  - Whether parameters are input-only, modified, or output-only
  - Units of numeric parameters (inches, feet, meters, and so on)
  - Meanings of status codes and error values if enumerated types aren’t used
  - Ranges of expected values
  - Specific values that should never appear

6.  Limit the no of parameters to about 7
7.  Consider an input, modify  and output naming convention
for parameters
8.  Pass the variables or objects that the routine needs to 
maintain its Interface abstraction.

9.  Use Named Paramters
10. Make sure actual parameters match formal parameters.



 ===================================================

                  ## Signup


 - Define the Problem the routine will solve::

 
 1. The information the routine will hide:

 - This routine will hide the signup process for Company
 or user. This routine will create a new account or
 create new company and store result in Account and Company

 
 2. Inputs to the routine :

 ```js
  {
    "first_name": "Haider",
    "last_name":"malik",
    "email":"haidermalik504@gmilcom",
    "password":"htc@123",
    "mobile":"03430051240",
    "city":"FSD"

  }
  ```

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


#Login

- Define the Problem the routine will solve::

 1. The information the routine will hide
 
 - This routine will hide the login process. If current account is user
 then show products .If current account is company then show Dashboard to user
 
 - This routine will login to account and send back token with details

 2. Inputs to the routine 
  
  ```
   {
   
    "email":"haidermalik504@gmail.com",
    "password":"yastdy12@12"
   
   }
  ```

 3. Outputs from the routine.
 
  ```
   {
    "company":{},
    "account":{}
    "token":""
   }
  ```

 4. Preconditions

  - Company must have account
  - Company must be registered
   
  
 5. PostConditions

 - token property must be added to req object

 6. Name of Routine
 
 - login

 7. Decide how to test routine

 - Is token generated?
 - Has account found ?
 - Has Company found ?
 

 8. Research Functionalities available in standard Library
 
 - Existing System

 9.Think about error handling:
 
 - if invalid field then send 400
 - if account not found send 404
 - if company not found send 404

10. Think about Efficieny:
 
 11. Research Algorithms and Data Type

 12. Write Pseudocode:

13. Think about data:

14. Check the Pseudocode:

15. Iterate Pseudocode if not best:

15. Write Routine Declration

16.Fill the code bellow each comment:

17. Check whether the code should be further factored or not:

18 Mentally Check the routine for errors

19. Compile the Code

20. Step through Code

21.Test the Code

22.Remove Errors from the Routine
