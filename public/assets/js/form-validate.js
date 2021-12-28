// const { check,sanitizeBody } = require('express-validator');
(function ($) {
    'use strict';
    //used in signup page
    // Bootstrap 4 used in-valid and valid as classes for error representation
    $(".needs-validation").validate({
        errorClass: "is-invalid",
        validClass: "is-valid",
        //put error message behind each form element
        errorPlacement: function (error, element) {
            //adding error label after select2 wrapper
            if(element.hasClass("select2") == true){
                error.insertAfter(element.next());
            }else{
                error.insertAfter(element)
            }

        },
    });
})(window.jQuery);
// exports.form=[
//     // first Name validation
//   //   check('firstName').trim().notEmpty().withMessage('First Name required')
//   //   .matches(/^[a-zA-Z ]*$/).withMessage('Only Characters with white space are allowed'),
//   //  // last Name validation
//   //   check('lastName').notEmpty().withMessage('Last Name required')
//   //   .matches(/^[a-zA-Z ]*$/).withMessage('Only Characters with white space are allowed'),
//   //   // email address validation
//   //   check('emailAddress').notEmpty().withMessage('Email Address required').normalizeEmail().isEmail().withMessage('must be a valid email'),
//     // password validation
//     check('password').trim().notEmpty().withMessage('Password required')
//     .isLength({ min: 10 }).withMessage('password must be minimum 10 length')
//     .matches(/(?=.*?[A-Z])/).withMessage('At least one Uppercase')
//     .matches(/(?=.*?[a-z])/).withMessage('At least one Lowercase')
//     .matches(/(?=.*?[0-9])/).withMessage('At least one Number')
//     .matches(/(?=.*?[#?!@$%^&*-])/).withMessage('At least one special character')
//     .not().matches(/^$|\s+/).withMessage('White space not allowed'),
//     // confirm password validation
//     check('confirm_password').custom((value, { req }) => {
//          if (value !== req.body.password) {
//                throw new Error('Enter Confirm Password Same as Password');
//           }
//           return true;
//      })
//   ]