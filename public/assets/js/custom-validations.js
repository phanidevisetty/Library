//jQuery validation
jQuery.validator.addMethod("namespace", function (value, element) {
    // allow any non-whitespace characters as the host part
    return this.optional(element) || /^[a-zA-Z ]*$/.test(value);
}, 'Please enter charactes only.');

jQuery.validator.addMethod("mobilecheck", function (value, element) {
    // allow any non-whitespace characters as the host part
    return this.optional(element) || /^[0-9+]*$/.test(value);
}, 'Please enter charactes only.');

jQuery.validator.addMethod("notificationMessage", function (value, element) {
    // allow any non-whitespace characters as the host part
    return this.optional(element) || /^[a-zA-Z0-9\s'"!@#$&;:()-.,_%?😀😁😂🤣😃😄😅😆😉😊😋😎😍😘🥰😗😙😚☺️🙂🤗🤩🤔🤨😐😑😶🙄😏😣😥😮🤐😯😪😫😴😌😛😜😝🤤😒😓😔😕🙃🤑😲☹️🙁😖😞😟😤😢😭😦😧😨😩🤯😬😰😱🥵🥶😳🤪😵😡😠🤬😷🤒🤕🤢🤮🤧😇🤠🤡🥳🥴🥺🤥🤫🤭🧐🤓😈👿👹👺💀👻👽🤖💩😺😸😹😻😼😽🙀😿😾👚👕👖👔👗👙👘👠👡👢👞👟⛑👑👝👛👜💼🎒👓🕶👶👧👦👩👨👵👴👲👳‍♀️👳‍♂️👱‍♂️👱‍♀️👨👮‍♀️👮‍♂️👷‍♀️👷‍♂️💂‍♀️💂‍♂️🕵️‍♀️🕵️‍♂️👩‍⚕️👨‍⚕️👩‍🌾👨‍🌾👩‍🍳👨‍🍳👩‍🎓👨‍🎓👩‍🎤👨‍🎤👩‍🏫👨‍🏫👩‍🏭👨‍🏭👩‍💻👨‍💻👩‍💼👨‍💼👩‍🔧👨‍🔧👩‍🔬👨‍🔬👩‍🎨👨‍🎨👩‍🚒👨‍🚒👩‍✈️👨‍✈️👩‍🚀👨‍🚀👩‍⚖️👨‍⚖️👰👸🎅🙇‍♀️🙇‍♂️💁‍♀️💁‍♂️🙅‍♀️🙅‍♂️🙆‍♀️🙆‍♂️🙋‍♀️🙋‍♂️🙎‍♀️🙎‍♂️🙍‍♀️🙍‍♂️💇‍♀️💇‍♂️💆‍♀️💆‍♂️👯‍♀️👯‍♂️🕴🚶‍♀️🚶‍♂️🏃‍♀️🏃‍♂️👫👭👬💑👩‍❤️‍👩👨‍❤️‍👨💏👩‍❤️‍💋‍👩👨‍❤️‍💋‍👨👪👨‍👩‍👧👨‍👩‍👧‍👦👨‍👩‍👦‍👦👨‍👩‍👧‍👧👩‍👩‍👦👩‍👩‍👧👩‍👩‍👧‍👦👩‍👩‍👦‍👦👩‍👩‍👧‍👧👨‍👨‍👦👨‍👨‍👧👨‍👨‍👧‍👦👨‍👨‍👦‍👦👨‍👨‍👧‍👧👩‍👦👩‍👧👩‍👧‍👦👩‍👦‍👦👩‍👧‍👧👨‍👦👨‍👧👨‍👧‍👦👨‍👦‍👦👨‍👧‍👧👍👎👊✊✌️🤘👌👈👉👆👇☝️✋🖐🖖👋💪🖕✍️🙏💍💄💋👄👅👂👃👣👁👀🗣👤👥]*$/.test(value);
}, 'Please enter valid Message.');

jQuery.validator.addMethod("messagecheck", function (value, element) {
    // allow any non-whitespace characters as the host part
    return this.optional(element) || /^[a-zA-Z0-9\s'"!@#$&;:()-.,_%?]+$/.test(value);
}, 'Please enter valid Message.');

jQuery.validator.addMethod("nospace", function (value, element) {
    // allow any non-whitespace characters as the host part
    return this.optional(element) || /^(?![\s.]+$)[a-zA-Z\s.]*$/.test(value);
}, 'Please enter valid Message.');

jQuery.validator.addMethod("valueNotEquals", function (value, element, arg) {
    return arg !== value;
}, "Please select an Net Worth!");

jQuery.validator.addMethod("pwcheck", function(value) {
    return /^[A-Za-z0-9\d=!\-@._*]*$/.test(value) && /[a-z]/.test(value) && /\d/.test(value) 
    && /[A-Z]/.test(value);
}, "please mentain");

$(".addcountry1").validate({

    rules: {
        name: {
            required: true,
            minlength: 4,
            namespace: true
        },
        email: {
            required: true,
            minlength: 4,
            email: true,
            nospace: false,
            messagecheck: true
        },
        mobilenumber: {
            required: true,
            minlength: 10,
            maxlength: 10,
            mobilecheck: true
        },
        company: {
            required: true,
            minlength: 2,
            messagecheck: true
        },
        message: {
            required: true,
            minlength: 4,
            messagecheck: true
        },
    },
    messages: {
        name: {
            required: "Please enter a  Name",
            messagecheck: "Please enter valid country Name"
        },
        email: {
            required: "Please enter a  email",
            messagecheck: "Please enter valid email"
        },
        mobilenumber: {
            required: "Please enter a  Phone Number",
            messagecheck: "Please enter valid Phone Number"
        },
        company: {
            required: "Please enter a qualification",
            messagecheck: "Please enter valid qualification"
        },
        messagecheck: {
            required: "Please enter a  Name",
            messagecheck: "Please enter valid country Name"
        },
    }
});

$('#id_form_employees').validate({
    rules: {
        name: {
            required: true,
        },
        point_of_contact: {
            required: true,
            minlength: 10,
            maxlength: 10
        },
        phone_number: {
            required: true,
            minlength: 10,
            maxlength: 10
        },
        password: {
            required: true,
            minlength: 5
        },
        confirm_password: {
            required: true,
            minlength: 5
        },
        address: {
            required: true
        },
        email : {
            required : true
        },
        gender : {
            required : true
        },
        role_name : {
            required : true
        },
    },
    messages: {
        dob: {
            required: "Enter Your Date of Birth",
        },
        point_of_contact: {
            required: "Enter Alternamte Mobile Number",
            minlength: "Enter a valid Mobile Number",
            maxlength: "Enter a valid Mobile Number"
        },
        phone_number: {
            required: "Enter Your Mobile Number",
            minlength: "Enter a valid Mobile Number",
            maxlength: "Enter a valid Mobile Number"
        },
        password: {
            required: "Enter Your Password",
            minlength: "Hey! Enter Valid Password"
        },
        confirm_password: {
            required: "Enter Your Password",
            minlength: "Hey! Enter Valid Password"
        },
        address: {
            required: "Hey! Don't you have address"
        },
        name : {
            required : "Enter Vendor Name"
        },
        email : {
            required : "Enter Vendor Email"
        },
        gender : {
            required : "Select Gender"
        },
        role_name : {
            required : "Select Role"
        },
    }
})
$('#bookadd').validate({
    rules: {
        book_name: {
            required: true,
        }
    },
    messages: {
        book_name: {
            required: "Enter Book Name",
        }
    }
})

$('#id_form_editLocation').validate({
    rules: {
        location_name: {
            required: true,
        },
        city_name : {
            required : true
        },
        location_type : {
            required : true
        },
        state_name : {
            required : true
        },
        department_name: {
            required: true
        }
    },
    messages: {
        location_name: {
            required: "Hey! Enter Your Location Name",
        },
        city_name : {
            required : "Hey! Select City Name"
        },
        location_type : {
            required : "Hey! Select Location Type"
        },
        state_name : {
            required : "Hey! Select State"
        },
        department_name: {
            required: "Hey! Select Department"
        }
    }
})
$('#id_edit_users').validate({
    rules: {
        constituency: {
            required: true,
        },
        usertype: {
            required: true,
        },
        mobile: {
            required: true,
            minlength: 10,
            maxlength: 10
        },
        username: {
            required: true,
        },
        email: {
            required: true,
        },
        address: {
            required: true,
        },
    },
    messages: {
        constituency: {
            required: "Hey! Select constituency",
        },
        usertype: {
            required: "Hey! Select UserType",
        },
        mobile: {
            required: "Don't you have Mobile",
            minlength: "Enter a valid Mobile Number",
            maxlength: "Enter a valid Mobile Number"
        },
        username: {
            required: "Hey! UserName please",
            minlength: "Hey! Enter a valid mobile number"
        },
        email: {
            required: "Hey! Enter your email address",
            email: "Hey! Enter a valid email"
        },
        address: {
            required: "Hey! Don't you have address"
        }
    }
})

$('#notifications_form').validate({
    rules:{
        constituency:{
            required: true
        },
        users:{
            required: true
        },
        message:{
            required: true,
            minlength: 5,
            maxlength: 150,
            notificationMessage: true
        }
    },
    messages:{
        constituency:{
            required: "Hey! Select Constituency"
        },
        users:{
            required: " Hey! Select User"
        },
        message:{
            required: "Hey! Write A Message",
            minlength: "Message Too Short!",
            maxlength: "Message Too Lengthy",

        }
    }
})

$('#id_edit_country').validate({
    rules: {
        country_name: {
            required: true
        },
        country_code: {
            required: true
        },
        country_currency: {
            required: true
        },
    },
    messages: {
        country_name: {
            required: "Hey! Enter Country Name"
        },
        country_code: {
            required: "Hey! Enter Country Code"
        },
        country_currency: {
            required: "Hey! Enter Country Currency"
        }
    }
})

$('#id_form_add_country').validate({
    rules: {
        country_name: {
            required: true
        },
        country_code: {
            required: true
        },
        country_currency: {
            required: true
        },
    },
    messages: {
        country_name: {
            required: "Hey! Enter Country Name"
        },
        country_code: {
            required: "Hey! Enter Country Code"
        },
        country_currency: {
            required: "Hey! Enter Country Currency"
        }
    }
})

$('#id_form_states').validate({
    rules: {
        country: {
            required: true
        },
        state_name: {
            required: true
        },
        state_code: {
            required: true
        }
    },
    messages: {
        country: {
            required: "Hey! Select A Country"
        },
        state_name: {
            required: "Hey! Enter State Name"
        },
        state_code: {
            required: "Hey! Enter State Code"
        }
    },
})

$('#id_edit_state_form').validate({
    rules: {
        country: {
            required: true
        },
        state_name: {
            required: true
        },
        state_code: {
            required: true
        }
    },
    messages: {
        country: {
            required: "Hey! Select A Country"
        },
        state_name: {
            required: "Hey! Enter State Name"
        },
        state_code: {
            required: "Hey! Enter State Code"
        }
    },
})

$('#id_form_clusters').validate({
    rules: {
        states: {
            required: true
        },
        cluster_name: {
            required: true
        },
    },
    messages: {
        states: {
            required: "Hey! Select A State"
        },
        cluster_name: {
            required: "Hey! Enter Cluster Name"
        },
    },
})


$('#id_edit_cluster_form').validate({
    rules: {
        state: {
            required: true
        },
        cluster_name: {
            required: true
        },
    },
    messages: {
        state: {
            required: "Hey! Select A State"
        },
        cluster_name: {
            required: "Hey! Enter Cluster Name"
        },
    },
})

$('#id_form_locationTypes').validate({
    rules: {
        location_type: {
            required: true
        },
        rules: {
            required: true
        }
    },
    messages: {
        location_type: {
            required: "Hey! Select A Store Format"
        },
        rules: {
            required: "Hey! Select A Rule"
        }
    },
})

$('#id_edit_location_type_form').validate({
    rules: {
        location_type_name: {
            required: true
        },
        rules: {
            required: true
        }
    },
    messages: {
        location_type_name: {
            required: "Hey! Enter A Store Format Name"
        },
        rules: {
            required: "Hey! Select A Rule"
        }
    },
})

$('#id_form_departments').validate({
    rules: {
        department_name: {
            required: true
        },
        department_friendly_name: {
            required: true
        },
        inStock: {
            required: true
        }
    },
    messages: {
        department_name: {
            required: "Hey! Select A Department Name"
        },
        department_friendly_name: {
            required: "Hey! Enter Department Friendly Name"
        },
        inStock: {
            required: "Hey! Select In Stock"
        }
    },
})

$('#id_edit_department').validate({
    rules: {
        department_name: {
            required: true
        },
        department_friendly_name: {
            required: true
        },
        inStock: {
            required: true
        }
    },
    messages: {
        department_name: {
            required: "Hey! Enter Department Name"
        },
        department_friendly_name: {
            required: "Hey! Enter Department Friendly Name"
        },
        inStock: {
            required: "Hey! Select In Stock"
        }
    },
})

$('#id_form_teams').validate({
    rules: {
        store_type: {
            required: true
        },
        assignShowroom: {
            required: true
        },
        location: {
            required: true
        },
        team_name: {
            required: true
        },

    },
    messages: {
        store_type: {
            required: "Hey! Select A Store Type"
        },
        assignShowroom: {
            required: "Hey! Assign A Showroon"
        },
        location: {
            required: "Hey! Select A Location"
        },
        team_name: {
            required: "Hey! Enter A Team Name"
        }
    },
})

$('#id_form_edit_teams').validate({
    rules: {
        store_type: {
            required: true
        },
        assignShowroom: {
            required: true
        },
        location: {
            required: true
        },
        team_name: {
            required: true
        },

    },
    messages: {
        store_type: {
            required: "Hey! Select A Store Type"
        },
        assignShowroom: {
            required: "Hey! Assign A Showroom"
        },
        location: {
            required: "Hey! Select A Location"
        },
        team_name: {
            required: "Hey! Enter A Team Name"
        }
    },
})

$('#id_form_visitTypes').validate({
    rules: {
        name: {
            required: true
        }
    },
    messages: {
        name: {
            required: "Hey! Enter Visit Type Name"
        }
    },
})

$('#id_edit_visitType').validate({
    rules: {
        name: {
            required: true
        }
    },
    messages: {
        name: {
            required: "Hey! Enter Visit Type Name"
        }
    },
})

$('#id_form_role').validate({
    rules: {
        department: {
            required: true
        },
        role_name: {
            required: true
        }
    },
    messages: {
        department: {
            required: "Hey! Select Department"
        },
        role_name: {
            required: "Hey! Enter A Role Name"
        }
    },
})

$('#id_edit_classification').validate({
    rules: {
        classification_name: {
            required: true
        },
        classification_friendly_name: {
            required: true
        }
    },
    messages: {
        classification_name: {
            required: "Hey! Enter Classification Name"
        },
        classification_friendly_name: {
            required: "Hey! Enter Classification Friendly Name"
        }
    },
})

$('#id_form_addClassification').validate({
    rules: {
        classification_name: {
            required: true
        },
        classification_friendly_name: {
            required: true
        },
        classification_image: {
            required: true
        }
    },
    messages: {
        classification_name: {
            required: "Hey! Enter Classification Name"
        },
        classification_friendly_name: {
            required: "Hey! Enter Classification Friendly Name"
        },
        classification_image: {
            required: "Hey! Upload image"
        }
    },
})

$('#id_form_addCategory').validate({
    rules: {
        category_name: {
            required: true
        },
        category_friendly_name: {
            required: true
        },
        classification: {
            required: true
        },
        category_image: {
            required: true
        }
    },
    messages: {
        category_name: {
            required: "Hey! Enter Category Name"
        },
        category_friendly_name: {
            required: "Hey! Enter Category Friendly Name"
        },
        classification: {
            required: "Hey! Select A Classification"
        },
        category_image: {
            required: "Hey! Upload image"
        }
    },
})

$('#id_form_editCategory').validate({
    rules: {
        category_name: {
            required: true
        },
        category_friendly_name: {
            required: true
        },
        classification: {
            required: true
        }
    },
    messages: {
        category_name: {
            required: "Hey! Enter Category Name"
        },
        category_friendly_name: {
            required: "Hey! Enter Category Friendly Name"
        },
        classification: {
            required: "Hey! Select A Classification"
        }
    },
})

$('#id_form_addSubCategory').validate({
    rules: {
        sub_category_name: {
            required: true
        },
        sub_category_friendly_name: {
            required: true
        },
        classification: {
            required: true
        },
        sub_category_image: {
            required: true
        }
    },
    messages: {
        sub_category_name: {
            required: "Hey! Enter Sub Category Name"
        },
        sub_category_friendly_name: {
            required: "Hey! Enter Sub Category Friendly Name"
        },
        classification: {
            required: "Hey! Select A Classification"
        },
        sub_category_image: {
            required: "Hey! Upload Image"
        }
    },
})

$('#id_form_editSubCategory').validate({
    rules: {
        sub_category_name: {
            required: true
        },
        sub_category_friendly_name: {
            required: true
        },
        classification: {
            required: true
        }
    },
    messages: {
        sub_category_name: {
            required: "Hey! Enter Sub Category Name"
        },
        sub_category_friendly_name: {
            required: "Hey! Enter Sub Category Friendly Name"
        },
        classification: {
            required: "Hey! Select A Classification"
        }
    },
})

$('#id_form_addSubSubCategory').validate({
    rules: {
        sub_sub_category_name: {
            required: true
        },
        sub_sub_category_friendly_name: {
            required: true
        },
        classification: {
            required: true
        },
        sub_category_image: {
            required: true
        }
    },
    messages: {
        sub_sub_category_name: {
            required: "Hey! Enter Sub Sub Category Name"
        },
        sub_sub_category_friendly_name: {
            required: "Hey! Enter Sub Sub Category Friendly Name"
        },
        classification: {
            required: "Hey! Select A Classification"
        },
        sub_category_image: {
            required: "Hey! Upload Image"
        }
    },
})

$('#id_form_editSubSubCategory').validate({
    rules: {
        sub_sub_category_name: {
            required: true
        },
        sub_sub_category_friendly_name: {
            required: true
        },
        classification: {
            required: true
        }
    },
    messages: {
        sub_sub_category_name: {
            required: "Hey! Enter Sub Sub Category Name"
        },
        sub_sub_category_friendly_name: {
            required: "Hey! Enter Sub Sub Category Friendly Name"
        },
        classification: {
            required: "Hey! Select A Classification"
        }
    },
})

$('#id_form_addProductType').validate({
    rules: {
        product_type_name: {
            required: true
        },
        product_type_friendly_name: {
            required: true
        },
        classification: {
            required: true
        },
        product_type_image: {
            required: true
        }
    },
    messages: {
        product_type_name: {
            required: "Hey! Enter Product Type Name"
        },
        product_type_friendly_name: {
            required: "Hey! Enter Product Type Friendly Name"
        },
        classification: {
            required: "Hey! Select A Classification"
        },
        product_type_image: {
            required: "Hey! Upload Image"
        }
    },
})

$('#id_form_editProductTypes').validate({
    rules: {
        product_type_name: {
            required: true
        },
        product_type_friendly_name: {
            required: true
        },
        classification: {
            required: true
        }
    },
    messages: {
        product_type_name: {
            required: "Hey! Enter Product Type Name"
        },
        product_type_friendly_name: {
            required: "Hey! Enter Product Type Friendly Name"
        },
        classification: {
            required: "Hey! Select A Classification"
        }
    },
})
$('#id_form_metalbom').validate({
    rules: {
        metal_name: {
            required: true
        },
        metal_type: {
            required: true
        },
        metal_color: {
            required: true
        },
        metal_india_rate: {
            required: true
        },
        metal_usa_rate: {
            required: true
        },
        karat_color:{
            required:true
        },
        karat:{
            required:true
        }
    },
    messages: {
        metal_name: {
            required: "Hey! Enter Metal Name"
        },
        metal_type: {
            required: "Hey! Enter Metal Type"
        },
        metal_color: {
            required: "Hey! Enter Metal Color"
        },
        metal_india_rate: {
            required: "Hey! Enter Metal India Rate"
        },
        metal_usa_rate: {
            required: "Hey! Enter Metal USA Rate"
        },
        karat_color: {
            required: "Hey! Karat Color"
        },
        karat: {
            required: "Hey! Enter Karat"
        }
    },
})
$('#id_form_stones').validate({
    rules: {
        stone_name: {
            required: true
        },
        stone_type: {
            required: true
        },
        stone_color: {
            required: true
        },
        stone_shape: {
            required: true
        },
        stone_quality: {
            required: true
        },
        wt_range:{
            required:true
        },
        usa_rate_carat:{
            required:true
        }
    },
    messages: {
        stone_name: {
            required: "Hey! Enter Stone Name"
        },
        stone_type: {
            required: "Hey! Enter Stone Type"
        },
        stone_color: {
            required: "Hey! Enter Stone Color"
        },
        stone_shape: {
            required: "Hey! Enter Stone Shape"
        },
        stone_quality: {
            required: "Hey! Enter Stone Quality"
        },
        wt_range: {
            required: "Hey! Enter weight Range"
        },
        usa_rate_carat: {
            required: "Hey! Enter USA Rate karat"
        }
    },
})

$('#id_form_hub').validate({
    rules:{
        state:{
            required: true
        },
        hub_name: {
            required: true
        }
    },
    messages:{
        state:{
            required: "Hey! Select A State"
        },
        hub_name: {
            required: "Enter Hub Name"
        }
    }
})

$('#id_edit_hub').validate({
    rules:{
        state: {
            required: true
        },
        hub_name: {
            required: true
        }
    },
    messages:{
        state: {
            required: "Hey! Select A State"
        },
        hub_name: {
            required: "Enter Hub Name"
        }
    }
})

$('#id_form_cities').validate({
    rules:{
        cluster: {
            required: true
        },
        state: {
            required: true
        },
        hub: {
            required: true
        },
        city_name: {
            required: true
        }
    },
    messages:{
        cluster: {
            required: "Hey! Select Cluster"
        },
        state: {
            required: "Hey! Select State"
        },
        hub: {
            required: "Hey! Select Hub"
        },
        city_name: {
            required: "Enter City Name"
        }
    }
})

$('#id_edit_city').validate({
    rules:{
        cluster: {
            required: true
        },
        state: {
            required: true
        },
        hub: {
            required: true
        },
        city_name: {
            required: true
        }
    },
    messages:{
        cluster: {
            required: "Hey! Select Cluster"
        },
        state: {
            required: "Hey! Select State"
        },
        hub: {
            required: "Hey! Select Hub"
        },
        city_name: {
            required: "Enter City Name"
        }
    }
})

$('#assignEmployee').validate({
    rules:{
        assign_employee: {
            required: true
        }
    },
    messages:{
        assign_employee: {
            required: "Hey Select an Employee"
        }
    }
})

$('#id_form_add_metalMaster').validate({
    rules:{
        karat_color: {
            required: true
        },
        metal_color: {
            required: true
        },
        karat_name: {
            required: true
        },
        metal_type: {
            required: true
        }
    },
    messages:{
        karat_color: {
            required: "Hey! Enter Karat Color"
        },
        metal_color: {
            required: "Hey! Enter Metal Color"
        },
        karat_name: {
            required: "Hey! Enter Karat Name"
        },
        metal_type: {
            required: "Hey! Enter Metal Type"
        }
    }
})

$('#id_form_edit_metalMaster').validate({
    rules:{
        karat_color: {
            required: true
        },
        metal_color: {
            required: true
        },
        karat_name: {
            required: true
        },
        metal_type: {
            required: true
        }
    },
    messages:{
        karat_color: {
            required: "Hey! Enter Karat Color"
        },
        metal_color: {
            required: "Hey! Enter Metal Color"
        },
        karat_name: {
            required: "Hey! Enter Karat Name"
        },
        metal_type: {
            required: "Hey! Enter Metal Type"
        }
    }
})

$('#add_faq_form').validate({
    rules:{
        question: {
            required: true
        },
        answer: {
            required: true
        }
    },
    messages:{
        question: {
            required: "Hey! Enter Question"
        },
        answer: {
            required: "Hey! Enter Answer"
        }
    }
})

$('#edit_faq_form').validate({
    rules:{
        question: {
            required: true
        },
        answer: {
            required: true
        }
    },
    messages:{
        question: {
            required: "Hey! Enter Question"
        },
        answer: {
            required: "Hey! Enter Answer"
        }
    }
})
$('#login_page').validate({
    rules: {
        email:  { 
            required: true,
            email: true,
            nospace: false,
            messagecheck: true
        },
        password: { required: true },
    },
    messages: {
        email: {
            required: "Hey! enter email",
            messagecheck: "Hey! enter valid email"
        },
        password: {
            required: "Hey! enter password"
        }
    }
})

$('#signup_page').validate({
    rules: {
        name: { 
            required: true,
            minlength: 4,
            namespace: true 
        },
        phone_number: { 
            required: true,
            minlength: 10,
            maxlength: 10,
            mobilecheck: true
        },
        email:  { 
            required: true,
            minlength: 4,
            email: true,
            nospace: false,
            messagecheck: true
        },
        place: {
            required: true,
        },
        password: { 
            required: true,
            minlength: 8,
            maxlength: 30,
            pwcheck: true,
            // checklower: true,
            // checkupper: true,
            // checkdigit: true
        },
        confirm_password: {
            required: true,
            equalTo: "#password"
        }
    },
    messages: {
        name: { 
            required: "Hey! enter name"
        },
        phone_number: {
            required: "Hey! enter phone number",
            messagecheck: "Hey! enter valid Phone Number"
        },
        email: {
            required: "Hey! enter email",
            messagecheck: "Hey! enter valid email"
        },
        place: {
            required: "Hey! select place"
        },
        password: {
            required: "Hey! enter password",
            pwcheck: "Password must contain at least 1 uppercase, 1 lowercase, 1 digit, and 1 special character.",
            // checklower: "Need atleast 1 lowercase alphabet",
            // checkupper: "Need atleast 1 uppercase alphabet",
            // checkdigit: "Need atleast 1 digit"
        },
        confirm_password: { 
            required: "Hey! enter confirm password",
            messagecheck: "Hey! enter confirm password same as password"
        },
    }
})

$('#reset_password').validate({
    rules: {
        oldPassword: {
            required: true
        },
        newPassword: {
            required: true,
            minlength: 10,
            maxlength: 30,
            pwcheck: true,
        },
        rePassword: {
            required: true,
            equalTo: "#newPassword"
        },
    },
    messages: {
        oldPassword: {
            required: 'Hey! enter old password'
        },
        newPassword: {
            required: 'Hey! enter new password',
            pwcheck: "Password must contain at least 1 uppercase, 1 lowercase, 1 digit, and 1 special character.",
        },
        rePassword: {
            required: 'Hey! enter new password again',
            messagecheck: "Hey! enter password same as new password"
        },
    }
})

$('#forgetpassword_page').validate({
    rules: {
        newPassword: {
            required: true,
            minlength: 10,
            maxlength: 30,
            pwcheck: true,
        },
        rePassword: {
            required: true,
            equalTo: "#newPassword"
        },
    },
    messages: {
        newPassword: {
            required: 'Hey! enter new password',
            pwcheck: "Password must contain at least 1 uppercase, 1 lowercase, 1 digit, and 1 special character.",
        },
        rePassword: {
            required: 'Hey! enter new password again',
            messagecheck: "Hey! enter password same as new password"
        },
    }
})