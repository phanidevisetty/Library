const errorMessages = {
  target_customers_error: "Select the target customers",
  offer_title_error: "Select the offers title",
  place_error: "Select the place",
  interest_error: "Select the interset",
  offer_description_error: "Enter the offer description",
  keywords_error: "Enter the keywords",
  thumbnail_error: "Choose the thumbnail image",
  banner_image_error: "Choose the banner image",

  offer_type_error: "Select the offer type",
  offer_category_error: "Select the offer category",
  offer_details_target_customers_error: "Select the target customers",
  category_error: "Select the category",
  sub_category_error: "Select the sub category",
  text1_error: "This field is required",
  quantity_error: "Enter the quantity",
  percent_off_error: "Select the percent off",
  text2_error: "This field is required",
  text3_error: "This field is required",

  step_title_error: "Enter the title",
  step_desc_error: "Enter the description",

  terms_conditions_title_error: "Enter the title",
  terms_conditions_desc_error: "Enter the description",
};

$("#create-offers-form").on("keyup keypress", function (e) {
  const keyCode = e.keyCode || e.which;
  if ([13, 44].includes(keyCode)) {
    e.preventDefault();
    return false;
  }
});

$("#keywords").tagsinput({
  trimValue: true,
  allowDuplicates: false,
  minTags: 3,
});

const handleCreateOfferInputChange = (e) => {
  const { id, value } = e.target || "";
  const errName = `${id}_error`;
  const err = `#${errName}`;
  if (value === "") {
    $(err).text(errorMessages[errName]);
    validatedOnce = false;
  } else {
    $(err).text("");
    return true;
  }
};

const validateOfferMetadata = () => {
  let validatedOnce = true;
  const validatedTargetCustomers = handleCreateOfferInputChange({
    target: {
      value: $("#target_customers").val(),
      id: "target_customers",
    },
  });
  if (!validatedTargetCustomers) {
    validatedOnce = false;
  }

  const validatedOffersTitle = handleCreateOfferInputChange({
    target: { value: $("#offer_title").val(), id: "offer_title" },
  });
  if (!validatedOffersTitle) {
    validatedOnce = false;
  }

  const validatedPlace = handleCreateOfferInputChange({
    target: { value: $("#place").val(), id: "place" },
  });
  if (!validatedPlace) {
    validatedOnce = false;
  }

  const validatedInterest = handleCreateOfferInputChange({
    target: { value: $("#interest").val(), id: "interest" },
  });
  if (!validatedInterest) {
    validatedOnce = false;
  }

  const validatedOfferDescription = handleCreateOfferInputChange({
    target: { value: $("#offer_description").val(), id: "offer_description" },
  });
  if (!validatedOfferDescription) {
    validatedOnce = false;
  }

  const validatedKeywords = handleCreateOfferInputChange({
    target: { value: $("#keywords").val(), id: "keywords" },
  });
  if (!validatedKeywords) {
    validatedOnce = false;
  }

  const validatedThumbnail = handleCreateOfferInputChange({
    target: { value: $("#thumbnail").val(), id: "thumbnail" },
  });
  if (!validatedThumbnail) {
    validatedOnce = false;
  }

  const validatedBannerImage = handleCreateOfferInputChange({
    target: { value: $("#banner_image").val(), id: "banner_image" },
  });
  if (!validatedBannerImage) {
    validatedOnce = false;
  }

  return validatedOnce;
};

const validateOfferDetails = () => {
  let validatedOnce = true;
  let inputData = handleCreateOfferInputChange({
    target: {
      value: $("#offer_type").val(),
      id: "offer_type",
    },
  });
  if (!inputData) {
    validatedOnce = false;
  }

  inputData = handleCreateOfferInputChange({
    target: { value: $("#offer_category").val(), id: "offer_category" },
  });
  if (!inputData) {
    validatedOnce = false;
  }

  inputData = handleCreateOfferInputChange({
    target: {
      value: $("#offer_details_target_customers").val(),
      id: "offer_details_target_customers",
    },
  });
  if (!inputData) {
    validatedOnce = false;
  }

  inputData = handleCreateOfferInputChange({
    target: { value: $("#category").val(), id: "category" },
  });
  if (!inputData) {
    validatedOnce = false;
  }

  inputData = handleCreateOfferInputChange({
    target: { value: $("#sub_category").val(), id: "sub_category" },
  });
  if (!inputData) {
    validatedOnce = false;
  }

  inputData = handleCreateOfferInputChange({
    target: { value: $("#text1").val(), id: "text1" },
  });
  if (!inputData) {
    validatedOnce = false;
  }

  inputData = handleCreateOfferInputChange({
    target: { value: $("#quantity").val(), id: "quantity" },
  });
  if (!inputData) {
    validatedOnce = false;
  }

  inputData = handleCreateOfferInputChange({
    target: { value: $("#percent_off").val(), id: "percent_off" },
  });
  if (!inputData) {
    validatedOnce = false;
  }

  inputData = handleCreateOfferInputChange({
    target: { value: $("#text2").val(), id: "text2" },
  });
  if (!inputData) {
    validatedOnce = false;
  }
  inputData = handleCreateOfferInputChange({
    target: { value: $("#text3").val(), id: "text3" },
  });
  if (!inputData) {
    validatedOnce = false;
  }

  return validatedOnce;
};

const handleDynamicFiledChange = (e, inp) => {
  const { name, value } = e.target || "";
  const errName = `${name}_error`;
  let validatedOnce = true;
  const err = $(inp.parentNode.parentNode).find(`.${name}_error`);
  if (!value || value === "") err.text(errorMessages[errName]);
  else err.text("");
  return validatedOnce;
};

const validateStepsToAvail = () => {
  let validatedOnce = true;
  let inputs = document.getElementsByClassName("step_title");
  for (var inp of inputs) {
    const err = $(inp.parentNode.parentNode).find(".step_title_error");
    if (!inp.value || inp.value === "")
      err.text(errorMessages.step_title_error);
    else err.text("");
  }

  inputs = document.getElementsByClassName("step_desc");
  for (var inp of inputs) {
    const err = $(inp.parentNode.parentNode).find(".step_desc_error");
    if (!inp.value || inp.value === "") err.text(errorMessages.step_desc_error);
    else err.text("");
  }

  return validatedOnce;
};

const validateTermsAndConditions = () => {
  let validatedOnce = true;
  let inputs = document.getElementsByClassName("terms_conditions_title");
  for (var inp of inputs) {
    const err = $(inp.parentNode.parentNode).find(
      ".terms_conditions_title_error"
    );
    if (!inp.value || inp.value === "")
      err.text(errorMessages.step_title_error);
    else err.text("");
  }

  inputs = document.getElementsByClassName("terms_conditions_desc");
  for (var inp of inputs) {
    const err = $(inp.parentNode.parentNode).find(
      ".terms_conditions_desc_error"
    );
    if (!inp.value || inp.value === "") err.text(errorMessages.step_desc_error);
    else err.text("");
  }

  return validatedOnce;
};
