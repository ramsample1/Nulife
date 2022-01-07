class Locators {
  community_patient = "div[id='community_patient'] h5[class='card-title']"; // community patient selector
  add_patients = ".addPatient > .d-flex > span"; // add community patient button
  first_name = "#first_name";
  last_name = "input[placeholder='Enter Last name']";
  address1 = "input[placeholder='Enter address line 1']";
  address2 = "input[placeholder='Enter address line 2']";
  dob_picker =
    "#default-pickerdate_of_birth";
  dob_selector =
    "body > div.flatpickr-calendar.animate.arrowTop.open > div.flatpickr-innerContainer > div > div.flatpickr-days > div > span:nth-child(8)";
  nursing_home =
    "body > div:nth-child(6) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > form:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1)";
  nursing_home_select = "#react-select-2-option-0";
  schedule =
    "body > div:nth-child(6) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > form:nth-child(1) > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1)";
  shcedule_select_nursingHome = "#react-select-3-option-0";
  schedule_select_community = "#react-select-3-option-0";
  mobile_no = "input[placeholder='Enter tele no.']";
  add_more_info = ".pr-2.m-0";
  cp_cardex_doctor = "input[placeholder='Enter Doctor Name']";
  gms_no = "input[placeholder='Enter GMS No.']";
  patient_weight = "input[placeholder='Weight']";
  post_code = "input[placeholder='Post Code']";
  country = "input[placeholder='Post Code']";
  country_select = "#react-select-9-option-0";
  email_patient = "input[placeholder='Enter email']";
  allergies = "input[placeholder='Enter Patient Allergies']";
  room_care = "input[placeholder='Enter Care of/Room']";
  admit_date =
    "body > div:nth-child(6) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > form:nth-child(1) > div:nth-child(5) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(8) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > input:nth-child(2)";
  admit_date_select =
    "body > div.flatpickr-calendar.animate.arrowTop.open > div.flatpickr-innerContainer > div > div.flatpickr-days > div > span:nth-child(8)";
  next_form_date =
    "body > div:nth-child(6) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > form:nth-child(1) > div:nth-child(5) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(8) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > input:nth-child(2)";
  next_form_date_select =
    'body > div.flatpickr-calendar.animate.arrowTop.open > div.flatpickr-innerContainer > div > div.flatpickr-days > div > span:nth-child(8)';
  diet = "input[placeholder='Enter Diet']";
  dependency_patient = "input[placeholder='Enter Dependency']";
  submit = "button[type='submit']";

  //nursing Home patient
  default_NH = ".css-1wa3eu0-placeholder"
  nh_select = ".css-1ew0esf"
  nh_sch_select = ".css-1ew0esf"
  nh_doc = ".select__placeholder.css-1wa3eu0-placeholder"
  nh_doc_select = ".select__menu.css-1bpab52-menu"
  pps_no = "input[placeholder='Enter PPS No.']"
  nh_admit_date = "#default-pickeradmittance_date"
  nh_next_date = "#default-pickernext_form_date"

// Edit Community patient selectors
    edit_cp_fn = "input[placeholder='Enter First name']"
    edit_cp_ln = "input[placeholder='Enter Last name']"
    edit_post_code = "input[placeholder='Post Code']"
    save_details = "button[type='submit']"
    edit_icon = "#row-0 > #cell-7qY_FwHdEC-undefined > .editAction > img"

// Filters on community patient page
    search_box = "input[placeholder='Search......']"
    filter_box = ".input-group"
    male_filter = "button:nth-child(2)"
    female_filter = "button:nth-child(3)"
    active_filter = "button:nth-child(4)"
    inactive_filter = "button:nth-child(5)"
    all_patients_filter = "body div[id='root'] div[class='d-flex justify-content-between'] div[class='d-flex justify-content-between'] button:nth-child(1)"    
    refresh_icon = "img[alt='refreshIcon']"

// Medications page of community patients 
    medication_button = ".nav-item"
    add_medicine = "button[type='button'] span"
    category_medicine = ".css-1wa3eu0-placeholder"
    pain_category = "#react-select-2-option-1"
    active_ingredient ="input[placeholder='Enter Active Ingredient']"
    enter_brand = "input[placeholder='Enter Brand']"
    enter_gms = "input[placeholder='Enter GMS number']"
    strength_size = "input[placeholder='Enter Strength/Size']"
    provider = "input[placeholder='Enter Provider']"
    type_medicine = ":nth-child(3) > .position-relative > .react-select > .css-9jfzet-control > .css-1hwfws3"
    type_medicine_select = "#react-select-3-option-0"
    shape_medicine = "body > div:nth-child(6) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > form:nth-child(1) > div:nth-child(2) > div:nth-child(4) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1)"
    shape_type = "#react-select-4-option-2"
    size = "body > div:nth-child(6) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > form:nth-child(1) > div:nth-child(2) > div:nth-child(5) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1)"
    size_type = "#react-select-5-option-1"
    warning_medicine = "input[placeholder='Type warning']"
    barcode_gen_button = "body > div:nth-child(6) > div > div.modal.show > div > div > div.modal-body > div > form > div:nth-child(4) > div.col-lg-12 > div > div > div:nth-child(2) > div.mb-1.col-md-3 > div > div > div:nth-child(3) > svg"

  //Cardex patient 
  patient_select = "#row-0"
  add_medication_button = "button[type='button'] span"
  search_medicine = ".css-1wa3eu0-placeholder"
  tab_select = "#react-select-3-option-2"
  edit_cardex_button = "div[id='row-0'] div:nth-child(2) img:nth-child(1)"
  frequency_edit = "body > div:nth-child(6) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > form:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(5) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1)"
  update_cardex_button = "div[class='p-0 modal-body'] button:nth-child(1) span:nth-child(1)"
  edit_slot_cardex = " input[placeholder='Enter Quantity'][name='slots_detail[1].new_dosage']"
  delete_icon_cardex = "div.app-container div.wrapper.horizontal-layout.horizontal-menu.navbar-floating.footer-static.menu-expanded div.app-content.content div.content-wrapper.animate__animated.animate__fadeIn div.content-body div.sc-fznxsB.hBxfkO div.sc-fznWqX.fiBTNe div.sc-AxjAm.fexZtx.rdt_Table div.sc-fzpjYC.fNcYWv.rdt_TableBody div.sc-fzoLsD.ejmCap.rdt_TableRow:nth-child(1) div.sc-AxhCb.sc-AxhUy.sc-AxgMl.kKJSfq.rdt_TableCell:nth-child(8) div.pl-1:nth-child(3) > img:nth-child(1)"
  delete_icon_nursing_home_cardex = "div.app-container div.wrapper.horizontal-layout.horizontal-menu.navbar-floating.footer-static.menu-expanded div.app-content.content div.content-wrapper.animate__animated.animate__fadeIn div.content-body div.sc-fznxsB.hBxfkO div.sc-fznWqX.fiBTNe div.sc-AxjAm.fexZtx.rdt_Table div.sc-fzpjYC.fNcYWv.rdt_TableBody div.sc-fzoLsD.ejmCap.rdt_TableRow div.sc-AxhCb.sc-AxhUy.sc-AxgMl.kKJSfq.rdt_TableCell:nth-child(9) div.pl-1:nth-child(3) > img:nth-child(1)"

  future_cardex_button = "div[id='row-0'] div:nth-child(1) img:nth-child(1)"
  future_medication = ".css-1wa3eu0-placeholder"

  //Schedules 
  schedules_button = "a[href='/schedules']"
  add_schedule = "button[type='button'] span"
  schedule_name = "input[placeholder='Enter identity name']"
  schedule_time_slot = "body > div:nth-child(6) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > form:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1)"
  schedule_slot_select = "#react-select-2-option-1"
  slot_1 = ":nth-child(1) > .position-relative > .react-select > .css-9jfzet-control > .css-1hwfws3"
  slot_2 = ":nth-child(2) > :nth-child(2) > .position-relative > .react-select > .css-9jfzet-control > .css-1hwfws3"
  slot_3 = ":nth-child(2) > :nth-child(3) > .position-relative > .react-select > .css-9jfzet-control > .css-1hwfws3"
  slot_4 = ":nth-child(4) > .position-relative > .react-select > .css-9jfzet-control > .css-1hwfws3"
  slot_1_select = "#react-select-24-option-2"
  slot_2_select = "##react-select-25-option-3"
  slot_3_select = "#react-select-26-option-4"
  slot_4_select = '#react-select-27-option-5'
  delete_schedules = "div[id='row-5'] div:nth-child(2) img:nth-child(1)"
  delete_schedule_confirm = "button[aria-label='Yes']"
  edit_schedule_button = "div[id='row-5'] div[class='d-flex justify-content-start'] div:nth-child(1)"
  edit_schedule_name = "input[placeholder='Enter identity name']"
  update_schedule_button = "button[type='submit']"
  add_ward_button = ".mt-2 > .d-flex > span"
  ward_name = "input[placeholder='Enter ward name']"
  ward_nursing_home = "div[class=' css-1xk5r9t-control'] div[class=' css-1wa3eu0-placeholder']"
  add_ward = "button[class='px-5 btn btn-primary customButtonDesing']"
  ward_select_schedule = ".css-1wa3eu0-placeholder"


  //Doctors TabNine
  doctor_tab = ":nth-child(3) > .d-flex"
  add_doctor = "button[class='d-flex justify-content-around align-items-center bg-mygreen btn btn-secondary'] span"
  doc_FN = "input[placeholder='First Name']"
  doc_LN = "input[placeholder='Last Name']"
  doc_address1 = "input[placeholder='Address Line 1']"
  doc_address2 = "input[placeholder='Address Line 2']"
  doc_post_code = "input[placeholder='Post Code']"
  doc_country = "div[class='react-select css-8qk4xw-container'] div[class=' css-1wa3eu0-placeholder']"
  doc_country_select = ".css-1ew0esf"
  doc_mobile = "input[placeholder='Telephone Number']"
  doc_fax = "input[placeholder='Enter Fax']"
  doc_email = "input[placeholder='Enter email']"
  doc_nursing_home = "#nursing_home"
  doc_nursing_home_select = ".css-1ew0esf"
  doc_clinic = "div[id='clinic'] div[class=' css-1wa3eu0-placeholder']"
  doc_clinic_select = ".css-1ew0esf"
  doc_gms = "input[placeholder='Enter GMS number']"
  doc_mcrn = "input[placeholder='Enter MCRN']"
  cardex_review_yes = "label[for='yes']"

  //Edit Doctor 
  edit_doc_FN = "input[placeholder='Enter first name']"
  edit_doc_LN = "input[placeholder='Enter last name']"
  edit_doc_address1 = "input[placeholder='Enter address line 1']"
  edit_doc_email = "input[placeholder='Enter email']"
  edit_doc_save = "button[type='submit']"

  //Nursing Homes
  add_nh_button = "button[type='button'] span"
  nursing_home_name = "input[placeholder='Nursing Home Name']"
  nh_address1 = "input[placeholder='Address Line 1']"
  nh_address2 = "input[placeholder='Address Line 2']"
  nh_post_code = "input[placeholder='Post Code']"
  nh_mobile = "input[placeholder='Telephone Number']"
  nh_don_name = "input[placeholder='Don Name']"
  nh_don_email = "input[placeholder='Don Email']"
  nh_submit_button = "button[type='submit']"
  nh_country = "div[class=' css-9jfzet-control'] div[class=' css-1hwfws3']"

  nh_clinic_icon = "#row-3 >div:nth-child(6) >div:nth-child(1) > div> [title='Add Clinic']"
  nh_clinic_name = "input[placeholder='Clinic Name']"
  nh_clinic_submit = "button[type='submit']"
  nh_clinic_edit = "img[title='Edit'][alt='editIcon']"
  nh_clinic_edit_name = "div[class='d-flex justify-content-between px-50 py-25 align-items-center card-body'] input[placeholder='Clinic Name']"
  nh_clinic_update = "button[class='btn btn-primary']"
  nh_clinic_delete = "img[title='Delete'][alt='Delete']"
  nh_refresh_clinics = "div[class='d-flex align-items-center justify-content-between'] img"
  nh_clinic_close = ".close"


  nh_edit_icon = "#row-3 >div:nth-child(6) >div:nth-child(1) > div> [title='Edit']"
  nh_edit_name = "input[placeholder='Nursing Home Name']"
  nh_edit_address1 = "input[placeholder='Address Line 1']"
  nh_edit_don_name = "input[placeholder='Don Name']"
  nh_save_edit_nh = "button[type='submit']"
  nh_delete_button = "#row-3 >div:nth-child(6) >div:nth-child(1) > div> [title='Delete']"
  nh_delete_confirm = "button[aria-label='Yes']"
  nh_delete_success = "button[aria-label='OK']"






  

}
export default Locators;
