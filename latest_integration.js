/*--------------------------------------------------------------------------------------------------------------
                ##Integration Script for "Help" by Excers.## 
                >>Description: This script is developed for CAPPM's sandbox instance for ppmcontent.
                >>Git Repository:: https://github.com/atolat/ca-world.git
                >>Ver 1.0
                >>Authors:Amarish Mittapalli, Arpan Tolat, Arjun Pawar
        ---------------------------------------------------------------------------------------------------------------*/
/*Default Code >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Begin>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>.*/
//This code is for enabling Self Help Widget
// Adding the self Help Widget.
window._wfx_widget = {
    "position": "brm",
    "label": "letzNav",
    "mode": "live_here",
    "ent_id": "12fbce70-6f83-11e6-90aa-04013d24cf02",
    "color": "#4c4b4b"

};


//Generic self help widget LNF
window._wfx_settings.theme = {
                "widget_size":"20px",
};

//Setting up the wfx object to control flow, branching/page level step control.
window._wfx_settings.onBeforeShow = function(event) {
    if (window._wfx_settings[event.flow_id]) {
        return window._wfx_settings[event.flow_id](event);
    }
};

//Setting up the object for adding buttons at page level.
window._wfx_settings['page_settings'] = {};

// Default self help settings.
window._wfx_settings['default_page_settings'] = {
    "self_help": {}
};

// Whatfix setting change to let the tip come over menu.
//balloons to appear over pop ups and for 2nd step in general.
window._wfx_settings.z_refresh = true;

window._wfx_settings.apply_page_settings = function() {
    var self_help_applied;
    $.each(window._wfx_settings['page_settings'], function(name, settings) {
        if (window.location.hash.indexOf(settings.hash) != -1) {
            window._wfx_settings.init_page(name, settings);
            if (settings.self_help) {
                self_help_applied = true;
            }
        }
    });

    /* Below code is to relook for buttons periodically as PPM is deleting buttons at times.
    >>>>>>>>>>>>>>>>>>>>>>>>Begin*/

    window.setTimeout(function() {
        window._wfx_settings.apply_page_settings();
    }, 1000);
    /*<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<End*/

    /*Common Code to resolve z-index for 2nd step balloon >>>>>>>>>>>>>>>>> Begin*/
    $('[class="WFEMGM"]').css('z-index', '1000099');
    $('[class="WFEMHL"]').css('z-index', '1000099');
    /*<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< End*/

    /*Default Code <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< End*/

    /*Below Code is for Portfolio flow "How to create Protfolio?". >>>>>>>>>>>>>>>>>>>>>>>>>>>> Begin*/

    //Adding custom classes to elements...

    //1.Custom class added to New button
    if (window.location.hash.startsWith("#action:pfm.portfolioList")) {
        $('[onclick=\"navigateToURL(\'nu?action=npt.setObjectUserPartitions\',\'navFromActionId=pfm.portfolioList\',\'navToActionId=pfm.portfolioCreate\',\'objectCode=pfm_portfolio\',\'ui.page.space=pfm.portfolios\');\"]').addClass("new_one");
    }
    //2.Custom class added to Save button
    if ($('[title="Create Portfolio"]').length && window.location.hash.startsWith("#action:pfm.portfolioCreate")) {
        $('[onclick=\"optionSelectAll(\'pagex\',\'owner\');optionSelectAll(\'pagex\',\'stakeholder\');submitForm(\'pagex\',\'pfm.portfolioCreateSave\',\'redirect_action=pfm.portfolioProperties\');\"]').addClass("portfolio_save");
        //3.Custom class added to Save 7 Return button
        $('[onclick*="pfm.portfolioCreateSubmit"]').addClass("portfolio_save_return");
    }
    //4.Custome class added to show the ballon for 2nd step only for Portfolio
    //we don't need this anymore
    //$('[title = "Portfolios"]').addClass('port').css('z-index', '1000099');

    /*How to create Protfolio <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< End*/

    /*Below code is for "Change Request" flow >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Begin>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/
    //1. Adding custom class to Risks/Issues/Change tab to uniquely identify
    if ((window.location.hash.includes("#action:projmgr.projectDefaultTab") && ($("label")[1].innerHTML) == 'Project ID') ||
        (window.location.hash.includes("#action:projmgr.projectDefaultTab") && $('h2[title="Project Indicators"]').length > 0)) {
        $('[title="Risks/Issues/Changes"]').addClass('proj_ric');
    }
    //2. Add custom class to Risks/Issues/Change for hover action
    if (window.location.hash.startsWith("#action:itl.riskList") && $('h1[title*="Project"]').length) {
        $('[title="Risks/Issues/Changes"]').addClass("project_ric_hover");
    }
    //3. Add custom class to New button under "Change Request" flow
    if (window.location.hash.includes("changeList")) {
        $('[onclick*="action=itl.changeObject"]').addClass("changereq_new");
    }
    /*"Change Request" flow <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< End<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/

};


/* Below code is for killing the flow by when user go out of the flow >>>>>>>>>>>>>>>>>>>>>>>>>>>> Begin >>>>>>>>>>>>>>>>>>>>>>>..*/

//To close the balloon on url change
/* variable for how_to_create_a_portfolio */

/*<<<<<<<<<<<< Begin <<<<<<<<<<<<<<<<<<<<<*/
var how_to_create_a_portfolio_triggerReady = false;
var how_to_create_a_portfolio_step = 0;
/*>>>>>>>>>> End >>>>>>>>>>>>>>>>>>>>>> */

/* variable for  how_to_create_an_issue */

/*<<<<<<<<<<<<< Begin <<<<<<<<<<<<<<<<*/
var how_to_create_an_issue_triggerReady = false;
var how_to_create_an_issue_step = 0;
/*>>>>>>>>>> End >>>>>>>>>>>>>>>>>>>>>> */


/* variable for  how_to_create_a_program */

/*<<<<<<<<<<<<< Begin <<<<<<<<<<<<<<<<*/
var how_to_create_a_program_triggerReady = false;
var how_to_create_a_program_step = 0;
/*>>>>>>>>>> End >>>>>>>>>>>>>>>>>>>>>> */

/* variable for How to Create a Role */

/*<<<<<<<<<<<<< Begin <<<<<<<<<<<<<<<<*/
var how_to_create_a_role_triggerReady = false;
var how_to_create_a_role_step = 0;
/*>>>>>>>>>> End >>>>>>>>>>>>>>>>>>>>>> */

/* variable for How to Create a Project */

/*<<<<<<<<<<<<< Begin <<<<<<<<<<<<<<<<*/
var how_to_create_a_project_triggerReady = false;
var how_to_create_a_project_step = 0;
/*>>>>>>>>>> End >>>>>>>>>>>>>>>>>>>>>> */

/* variable for How to Create a Project from a template */

/*<<<<<<<<<<<<< Begin <<<<<<<<<<<<<<<<*/
var how_to_create_a_project_from_a_template_triggerReady = false;
var how_to_create_a_project_from_a_template_step = 0;
/*>>>>>>>>>> End >>>>>>>>>>>>>>>>>>>>>> */

/* variable for How to change an ETC value */

/*<<<<<<<<<<<<< Begin <<<<<<<<<<<<<<<<*/
var how_to_change_an_etc_value_triggerReady = false;
var how_to_change_an_etc_value_triggerReady_step = 0;
/*>>>>>>>>>> End >>>>>>>>>>>>>>>>>>>>>> */

/* variable for how_to_create_change_request_step */
/*<<<<<<<<<<<<< Begin <<<<<<<<<<<<<<<<*/
var how_to_create_change_request_triggerReady = false;
var how_to_create_change_request_step = 0;
/*>>>>>>>>>> End >>>>>>>>>>>>>>>>>>>>>> */


/* variable for How to modify a submitted Timesheet*/

/*<<<<<<<<<<<<< Begin <<<<<<<<<<<<<<<<*/
var how_to_modify_a_submitted_timesheet_triggerReady = false;
var how_to_how_to_modify_a_submitted_timesheet_step = 0;
/*>>>>>>>>>> End >>>>>>>>>>>>>>>>>>>>>> */

/* variable for How to Create a Risk*/

/*<<<<<<<<<<<<< Begin <<<<<<<<<<<<<<<<*/
var how_to_create_a_risk_triggerReady = false;
var how_to_create_a_risk_step = 0;
/*>>>>>>>>>> End >>>>>>>>>>>>>>>>>>>>>> */


/* variable for How to Modify a Posted Timesheet*/

/*<<<<<<<<<<<<< Begin <<<<<<<<<<<<<<<<*/
var how_to_create_idea_triggerReady = false;
var how_to_create_idea_step = 0;
/*>>>>>>>>>> End >>>>>>>>>>>>>>>>>>>>>> */


/* variable for How to Submit idea for approval*/

/*<<<<<<<<<<<<< Begin <<<<<<<<<<<<<<<<*/
var how_to_submit_idea_approval_triggerReady = false;
var how_to_submit_idea_approval_step = 0;
/*>>>>>>>>>> End >>>>>>>>>>>>>>>>>>>>>> */


/* variable for how to replace a role*/

/*<<<<<<<<<<<<< Begin <<<<<<<<<<<<<<<<*/
var how_to_replace_a_role_triggerReady = false;
var how_to_replace_a_role_step = 0;
/*>>>>>>>>>> End >>>>>>>>>>>>>>>>>>>>>> */


/* variable for how to submit a timesheet*/

/*<<<<<<<<<<<<< Begin <<<<<<<<<<<<<<<<*/
var how_to_submit_timesheet_triggerReady = false;
var how_to_submit_timesheet_step = 0;
/*>>>>>>>>>> End >>>>>>>>>>>>>>>>>>>>>> */


/* variable for how_to_create_change_request_step */
/*<<<<<<<<<<<<< Begin <<<<<<<<<<<<<<<<*/
var how_to_create_change_request_triggerReady = false;
var how_to_create_change_request_step = 0;
/*>>>>>>>>>> End >>>>>>>>>>>>>>>>>>>>>> */



/* variable for incident to task*/

/*<<<<<<<<<<<<< Begin <<<<<<<<<<<<<<<<*/
var incident_to_task_triggerReady = false;
var incident_to_task_step = 0;
/*>>>>>>>>>> End >>>>>>>>>>>>>>>>>>>>>> */

/*How to Allocate Resource from Estimates?*/
/*<<<<<<<<<<<<< Begin <<<<<<<<<<<<<<<<*/
var how_to_allocate_resource_from_estimates_triggerReady = false;
var how_to_allocate_resource_from_estimates_step = 0;
/*>>>>>>>>>> End >>>>>>>>>>>>>>>>>>>>>> */



/*How to create a plan?*/
/*<<<<<<<<<<<<< Begin <<<<<<<<<<<<<<<<*/
var how_to_create_a_plan_triggerReady = false;
var how_to_create_a_plan_step = 0;
/*>>>>>>>>>> End >>>>>>>>>>>>>>>>>>>>>> */


/*How to create a baseline?*/
/*<<<<<<<<<<<<< Begin <<<<<<<<<<<<<<<<*/
var how_to_create_a_baseline_triggerReady = false;
var how_to_create_a_baseline_step = 0;
/*>>>>>>>>>> End >>>>>>>>>>>>>>>>>>>>>> */


/*How to create a resource?*/
/*<<<<<<<<<<<<< Begin <<<<<<<<<<<<<<<<*/
var how_to_create_a_resource_triggerReady = false;
var how_to_create_a_resource_step = 0;
/*>>>>>>>>>> End >>>>>>>>>>>>>>>>>>>>>> */





/*How to Create a Copy of the Cost Plan?*/
/*<<<<<<<<<<<<< Begin <<<<<<<<<<<<<<<<*/
var how_to_create_a_copy_of_cost_plan_triggerReady = false;
var how_to_create_a_copy_of_cost_plan_step = 0;
/*>>>>>>>>>> End >>>>>>>>>>>>>>>>>>>>>> */


/* variable for  how_to_flag_an_incident_for_conversion */
/*<<<<<<<<<<<<< Begin <<<<<<<<<<<<<<<<*/
var how_to_flag_an_incident_for_conversion_triggerReady = false;
var how_to_flag_an_incident_for_conversion_step = 0;
/*>>>>>>>>>> End >>>>>>>>>>>>>>>>>>>>>> */
 


/*How to Create a Benefit Plan*/
/*<<<<<<<<<<<<< Begin <<<<<<<<<<<<<<<<*/
var how_to_create_a_benefit_plan_triggerReady = false;
var how_to_create_a_benefit_plan_step = 0;
/*>>>>>>>>>> End >>>>>>>>>>>>>>>>>>>>>> */


/*How to Reject an Idea*/
/*<<<<<<<<<<<<< Begin <<<<<<<<<<<<<<<<*/
var how_to_reject_an_idea_triggerReady = false;
var how_to_reject_an_idea_step = 0;
/*>>>>>>>>>> End >>>>>>>>>>>>>>>>>>>>>> */



/*How to Request More Information for an Idea?*/
/*<<<<<<<<<<<<< Begin <<<<<<<<<<<<<<<<*/
var how_to_request_more_information_for_an_idea_triggerReady = false;
var how_to_request_more_information_for_an_idea_step = 0;
/*>>>>>>>>>> End >>>>>>>>>>>>>>>>>>>>>> */




/*How to add a team to an Idea?*/
/*<<<<<<<<<<<<< Begin <<<<<<<<<<<<<<<<*/
var how_to_add_a_team_to_an_idea_triggerReady = false;
var how_to_add_a_team_to_an_idea_step = 0;
/*>>>>>>>>>> End >>>>>>>>>>>>>>>>>>>>>> */


/*How to create a status report?*/
/*<<<<<<<<<<<<< Begin <<<<<<<<<<<<<<<<*/
var how_to_create_a_status_report_triggerReady = false;
var how_to_create_a_status_report_step = 0;
/*>>>>>>>>>> End >>>>>>>>>>>>>>>>>>>>>> */

/*How to create an Incident?*/
/*<<<<<<<<<<<<< Begin <<<<<<<<<<<<<<<<*/
var how_to_create_an_incident_triggerReady = false;
var how_to_create_an_incident_step = 0;
/*>>>>>>>>>> End >>>>>>>>>>>>>>>>>>>>>> */


/*How to add document to a Resource?*/
/*<<<<<<<<<<<<< Begin <<<<<<<<<<<<<<<<*/
var how_to_add_document_to_a_resource_triggerReady = false;
var how_to_add_document_to_a_resource_step = 0;
/*>>>>>>>>>> End >>>>>>>>>>>>>>>>>>>>>> */





/*How to Add a Note for a Time Entry??*/
/*<<<<<<<<<<<<< Begin <<<<<<<<<<<<<<<<*/
var how_to_add_a_note_for_a_time_entry_triggerReady = false;
var how_to_add_a_note_for_a_time_entry_step = 0;
/*>>>>>>>>>> End >>>>>>>>>>>>>>>>>>>>>> */

/* variable for  how_to_submit_an_idea_step */
/*<<<<<<<<<<<<< Begin <<<<<<<<<<<<<<<<*/
var how_to_submit_an_idea_triggerReady = false;
var how_to_submit_an_idea_step = 0;
/*>>>>>>>>>> End >>>>>>>>>>>>>>>>>>>>>> */


/* variable for How to Add a Non-project Investment Row? */
/*<<<<<<<<<<<<< Begin <<<<<<<<<<<<<<<<*/
var how_to_add_a_non_project_investment_row_triggerReady = false;
var how_to_add_a_non_project_investment_row_step = 0;
/*>>>>>>>>>> End >>>>>>>>>>>>>>>>>>>>>> */


/* variable for How to convert an Incident to a Project? */
/*<<<<<<<<<<<<< Begin <<<<<<<<<<<<<<<<*/
var how_to_convert_an_incident_to_a_project_triggerReady = false;
var how_to_convert_an_incident_to_a_project_step = 0;
/*>>>>>>>>>> End >>>>>>>>>>>>>>>>>>>>>> */


/* variable for How to populate your timesheet */
/*<<<<<<<<<<<<< Begin <<<<<<<<<<<<<<<<*/
var how_to_populate_your_timesheet_triggerReady = false;
var how_to_populate_your_timesheet_step = 0;
/*>>>>>>>>>> End >>>>>>>>>>>>>>>>>>>>>> */



/* variable for How to add an incident row?*/
/*<<<<<<<<<<<<< Begin <<<<<<<<<<<<<<<<*/
var how_to_add_an_incident_row_triggerReady = false;
var how_to_add_an_incident_row_step = 0;
/*>>>>>>>>>> End >>>>>>>>>>>>>>>>>>>>>> */


/*How to Return your Submitted Timesheet?*/
/*<<<<<<<<<<<<< Begin <<<<<<<<<<<<<<<<*/
var how_to_return_your_submitted_timesheet_triggerReady = false;
var how_to_return_your_submitted_timesheet_step = 0;
/*>>>>>>>>>> End >>>>>>>>>>>>>>>>>>>>>> */


/* How to add an Indirect row*/
/*<<<<<<<<<<<<< Begin <<<<<<<<<<<<<<<<*/
var how_to_add_an_indirect_row_triggerReady = false;
var how_to_add_an_indirect_row_step = 0;
/*>>>>>>>>>> End >>>>>>>>>>>>>>>>>>>>>> */



/* How to set a portfolio plan as the plan of record?*/
/*<<<<<<<<<<<<< Begin <<<<<<<<<<<<<<<<*/
var how_to_set_a_portfolio_plan_as_the_plan_of_record_triggerReady = false;
var how_to_set_a_portfolio_plan_as_the_plan_of_record_step = 0;
/*>>>>>>>>>> End >>>>>>>>>>>>>>>>>>>>>> */

/* variable for how_to_add_doc_to_project_step */
/*<<<<<<<<<<<<< Begin <<<<<<<<<<<<<<<<*/
var how_to_add_doc_to_project_triggerReady = false;
var how_to_add_doc_to_project_step = 0;
/*>>>>>>>>>> End >>>>>>>>>>>>>>>>>>>>>> */



/* variable for how_to_create_benefit_plan_step */
/*<<<<<<<<<<<<< Begin <<<<<<<<<<<<<<<<*/
var how_to_create_benefit_plan_triggerReady = false;
var how_to_create_benefit_plan_step = 0;
/*>>>>>>>>>> End >>>>>>>>>>>>>>>>>>>>>> */

/* variable for how_to_convert_idea_to_investment_step */
/*<<<<<<<<<<<<< Begin <<<<<<<<<<<<<<<<*/
var how_to_convert_idea_to_investment_triggerReady = false;
var how_to_convert_idea_to_investment_step = 0;
/*>>>>>>>>>> End >>>>>>>>>>>>>>>>>>>>>> */


/* variable for how_to_manage_allocations_of_staff_member_step */
/*<<<<<<<<<<<<< Begin <<<<<<<<<<<<<<<<*/
var how_to_manage_allocations_of_staff_member_triggerReady = false;
var how_to_manage_allocations_of_staff_member_step = 0;
/*>>>>>>>>>> End >>>>>>>>>>>>>>>>>>>>>> */

/* variable for how_to_make_collaboration_manager_step */
/*<<<<<<<<<<<<< Begin <<<<<<<<<<<<<<<<*/
var how_to_make_collaboration_manager_triggerReady = false;
var how_to_make_collaboration_manager_step = 0;
/*>>>>>>>>>> End >>>>>>>>>>>>>>>>>>>>>> */

//GTC
/*How to Enable a Project Financially */
/*<<<<<<<<<<<<< Begin <<<<<<<<<<<<<<<<*/
var how_to_enable_project_financially_triggerReady = false;
var how_to_enable_project_financially_step = 0;
/*>>>>>>>>>> End >>>>>>>>>>>>>>>>>>>>>> */

/* variable for  How to add a Participant */
/*<<<<<<<<<<<<< Begin <<<<<<<<<<<<<<<<*/
var how_to_add_participant_triggerReady = false;
var how_to_add_participant_step = 0;
/*>>>>>>>>>> End >>>>>>>>>>>>>>>>>>>>>> */


/* variable for How to create a risk */
/*<<<<<<<<<<<<< Begin <<<<<<<<<<<<<<<<*/
var how_to_create_risk__step = 0;
var how_to_create_risk_triggerReady = false;
/*>>>>>>>>>> End >>>>>>>>>>>>>>>>>>>>>> */

/* variable for How to create a cost plan from the resource plan */
/*<<<<<<<<<<<<< Begin <<<<<<<<<<<<<<<<*/
var how_to_create_a_cost_plan_from_the_resource_plan_triggerReady = false;
var how_to_create_a_cost_plan_from_the_resource_plan_step = 0;
/*>>>>>>>>>> End >>>>>>>>>>>>>>>>>>>>>> */

/* variable for How to change notification settings of a user */
/*<<<<<<<<<<<<< Begin <<<<<<<<<<<<<<<<*/
var how_to_change_notification_settings_of_a_user_triggerReady = false;
var how_to_change_notification_settings_of_a_user_step = 0;
/*>>>>>>>>>> End >>>>>>>>>>>>>>>>>>>>>> */

/* variable for  How to Enable a resource Financially */
/*<<<<<<<<<<<<< Begin <<<<<<<<<<<<<<<<*/
var how_to_enable_a_resource_financially_triggerReady = false;
var how_to_enable_a_resource_financially_step = 0;
/*>>>>>>>>>> End >>>>>>>>>>>>>>>>>>>>>> */

/* variable for How to designate proxy for a Resource */
/*<<<<<<<<<<<<< Begin <<<<<<<<<<<<<<<<*/
var how_to_designate_proxy_for_a_resource_triggerReady = false;
var how_to_designate_proxy_for_a_resource_step = 0;
/*>>>>>>>>>> End >>>>>>>>>>>>>>>>>>>>>> */

/* variable for  How to configure your personal account settings */
/*<<<<<<<<<<<<< Begin <<<<<<<<<<<<<<<<*/
var how_to_configure_user_personal_information_triggerReady = false;
var how_to_configure_user_personal_information_step = 0;
/*>>>>>>>>>> End >>>>>>>>>>>>>>>>>>>>>> */

/* variable for How to run a process */
/*<<<<<<<<<<<<< Begin <<<<<<<<<<<<<<<<*/
var how_to_run_a_process_triggerReady = false;
var how_to_run_a_process_step = 0;
/*>>>>>>>>>> End >>>>>>>>>>>>>>>>>>>>>> */

/* variable for How to run a Job */
/*<<<<<<<<<<<<< Begin <<<<<<<<<<<<<<<<*/
var how_to_run_a_job_triggerReady = false;
var how_to_run_a_job_step = 0;
/*>>>>>>>>>> End >>>>>>>>>>>>>>>>>>>>>> */

/* variable for how to add unplanned task row*/
/*<<<<<<<<<<<<< Begin <<<<<<<<<<<<<<<<*/
var how_to_add_a_unplanned_task_row_triggerReady = false;
var how_to_add_a_unplanned_task_row_step = 0;
/*>>>>>>>>>> End >>>>>>>>>>>>>>>>>>>>>> */


/* set variables for How to add an incident row */
/*<<<<<<<<<<<<< Begin <<<<<<<<<<<<<<<<*/
var add_an_incident_row = 0;
var add_an_incident_row_triggerReady = false;
/*>>>>>>>>>> End >>>>>>>>>>>>>>>>>>>>>> */

/* set variables for Add an Existing Project Task Row*/
/*<<<<<<<<<<<<< Begin <<<<<<<<<<<<<<<<*/
var project_task_row_step = 0;
var project_task_row_triggerReady = false;
/*>>>>>>>>>> End >>>>>>>>>>>>>>>>>>>>>> */










//Based on Hash Change this function runs

$(window).hashchange(function() {

        /* Below code is for How to Create a Portfolio >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Begin >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/
        var potential_step = 0;
        console.log('1.' + window.location.hash);
        console.log('2.' + window._wfx_is_live());
        console.log('3.' + how_to_create_a_portfolio_triggerReady);
        if (how_to_create_a_portfolio_triggerReady) {
            window._wfx_close_live();
            console.log('function called');
            how_to_create_a_portfolio_triggerReady = false;
        }
        //1. For step number 2
        if (how_to_create_a_portfolio_step == 2 && !window.location.hash.includes('#action:pfm.portfolioCreate&partition_code')) {
            how_to_create_a_portfolio_step = 0;
            window._wfx_close_live();
        }

        //2. For step number 12 
        if (how_to_create_a_portfolio_step == 12 && !window.location.hash.includes('#action:pfm.portfolioProperties')) {
            how_to_create_a_portfolio_step = 0;
            window._wfx_close_live();
        }

        //3. For step number 14 
        if (how_to_create_a_portfolio_step == 14 && !window.location.hash.includes('#action:pfm.portfolioProperties&odf_view=pfm_portfolio.metrics')) {
            how_to_create_a_portfolio_step = 0;
            window._wfx_close_live();
        }

        //4. For step number 17 
        if (how_to_create_a_portfolio_step == 17 && !window.location.hash.includes('#action:pfm.portfolioList')) {
            how_to_create_a_portfolio_step = 0;
            window._wfx_close_live();
        }

        /* this condition checks weather the flow is live or not*/
        /*for each flow change the step number (event.step) and match corresponding hash*/
        if (window._wfx_is_live()) {
            console.log('Live Workflow');
            potential_step = 0;
            window._wfx_settings['d4009dc0-96c6-11e6-836b-04013d24cc02'] = function(event) {
                potential_step = 0;
                console.log('current' + event.step);
                console.log('current potential_step' + potential_step);
                //5. New buttons at Creating a Portfolio page
                if ((event.step == 2) && (window.location.hash.includes("#action:pfm.portfolioList"))) {
                    how_to_create_a_portfolio_step = 2;
                    how_to_create_a_portfolio_triggerReady = false;
                }

                //6. Create Portfolio page
                if ((event.step >= 4 && event.step < 12) && window.location.hash.includes('#action:pfm.portfolioCreate&partition_code')) {
                    how_to_create_a_portfolio_triggerReady = true;
                }
                //7. Create page last step 
                if ((event.step == 12)) {
                    how_to_create_a_portfolio_step = 12;
                    how_to_create_a_portfolio_triggerReady = false;
                }

                //8. Update page - Properties
                if ((event.step >= 13 && event.step < 14) && window.location.hash.includes('#action:pfm.portfolioProperties')) {
                    how_to_create_a_portfolio_triggerReady = true
                }
                //9. Update page - Properties last step
                if ((event.step == 14)) {
                    how_to_create_a_portfolio_step = 14;
                    how_to_create_a_portfolio_triggerReady = false;
                }

                //10. Portfolio: sdf - Properties - Metrics
                if ((event.step >= 15 && event.step < 18) && window.location.hash.includes('#action:pfm.portfolioProperties&odf_view=pfm_portfolio.metrics')) {
                    how_to_create_a_portfolio_triggerReady = true
                }

                if (event.step == 17) {
                    how_to_create_a_portfolio_step = 17;
                    how_to_create_a_portfolio_triggerReady = false;

                }

                if (event.step == 18) {
                    how_to_create_a_portfolio_triggerReady = false;
                }
                /* Closing balloon - How to Create a Portfolio <<<<<<<<<<<<<<<<<<<<<<<<<<<<<< End <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/

                /* Below code is for Jump Steps - Create Portofolio Flow >>>>>>>>>>>>>>>>>>> Begin >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/
                //Handling flows in-between - jump steps

                if (window.location.hash.includes("#action:pfm.portfolioList")) {
                    potential_step = 2;
                }


                if (window.location.hash.includes("#action:pfm.portfolioCreate&partition_code")) {
                    console.log('3 step');
                    potential_step = 3;

                }

                if (window.location.hash.includes("#action:pfm.portfolioProperties")) {

                    potential_step = 13;
                }

                if (window.location.hash.includes("#action:pfm.portfolioProperties&odf_view=pfm_portfolio.metrics")) {

                    potential_step = 15;
                }



                console.log('setting potential_step' + potential_step);
                if (potential_step && event.step <= potential_step) {
                    return {
                        "position": potential_step
                    };
                }

                console.log(how_to_create_a_portfolio_triggerReady);
            } 
		}
		/* Jump Step <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< End of How to create a Portfolio <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/
        

								
						/* ******************************************** how_to_set_a_portfolio_plan_as_the_plan_of_record ****************************************** */

                /* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Begin>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */
				
				
				 if (how_to_set_a_portfolio_plan_as_the_plan_of_record_triggerReady) {
                window._wfx_close_live();
                how_to_set_a_portfolio_plan_as_the_plan_of_record_triggerReady = false;
            }
			
			// For step number 2
            if (how_to_set_a_portfolio_plan_as_the_plan_of_record_step == 2 && !window.location.hash.includes('#action:pfm.planList&odf_return_to=pfm.')) {
                how_to_set_a_portfolio_plan_as_the_plan_of_record_step = 0;
                window._wfx_close_live();
            }
				
				// For step number 4
            if (how_to_set_a_portfolio_plan_as_the_plan_of_record_step == 4&& !window.location.hash.includes('#action:pfm.planList&i')) {
                how_to_set_a_portfolio_plan_as_the_plan_of_record_step = 0;
                window._wfx_close_live();
            }
			
			
			// For step number 6
            if (how_to_set_a_portfolio_plan_as_the_plan_of_record_step == 6&& !window.location.hash.includes('#action:pfm.portfolioList')) {
                how_to_set_a_portfolio_plan_as_the_plan_of_record_step = 0;
                window._wfx_close_live();
            }
				
			if (window._wfx_is_live()) {
                        window._wfx_settings['caa38560-863d-11e6-a787-04013d24cf02'] = function (event) {
                            potential_step = 0;
				
				//click on icon
				if ((event.step == 2) && window.location.hash.includes("#action:pfm.portfolioList")) {
                            how_to_set_a_portfolio_plan_as_the_plan_of_record_step = 2;
                            how_to_set_a_portfolio_plan_as_the_plan_of_record_triggerReady = false;
                        }
				
				
				//select any plan and click set plan of record button
				
				 if ((event.step >= 3 && event.step < 4) && (window.location.hash.includes("#action:pfm.planList&odf_return_to=pfm."))) {
                        how_to_set_a_portfolio_plan_as_the_plan_of_record_triggerReady = true;
                    }
				
				//set plan of record button
				
				if ((event.step == 4) && window.location.hash.includes("#action:pfm.planList&odf_return_to=pfm.")) {
                            how_to_set_a_portfolio_plan_as_the_plan_of_record_step = 4;
                            how_to_set_a_portfolio_plan_as_the_plan_of_record_triggerReady = false;
                        }
				
				
				
					//go back to portfolios
				
				 if ((event.step >= 5 && event.step < 6) && (window.location.hash.includes("#action:pfm.planList&i"))) {
                        how_to_set_a_portfolio_plan_as_the_plan_of_record_triggerReady = true;
                    }
				
				
				//click on portfolios link
				
				if ((event.step == 6) && window.location.hash.includes("#action:pfm.planList&i")) {
                            how_to_set_a_portfolio_plan_as_the_plan_of_record_step = 6;
                            how_to_set_a_portfolio_plan_as_the_plan_of_record_triggerReady = false;
                        }
				
				
				
				
				 if ((event.step >= 7 && event.step < 11) && (window.location.hash.includes("#action:pfm.planList&i"))) {
                        how_to_set_a_portfolio_plan_as_the_plan_of_record_triggerReady = true;
                    }
					
					//save button
					
				if ((event.step == 10) && window.location.hash.includes("#action:pfm.planList&i")) {
                            how_to_set_a_portfolio_plan_as_the_plan_of_record_step = 10;
                            how_to_set_a_portfolio_plan_as_the_plan_of_record_triggerReady = false;
                        }
						
				
						}
						
			}
			
			
				
				
				
				
				
				
  /*<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< end of how_to_set_a_portfolio_plan_as_the_plan_of_record<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/
  
  
		
		
/* ******************************************************how_to_add_doc_to_project***************************************************/
/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Begin>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/
	if (how_to_add_doc_to_project_triggerReady)
	{
		window._wfx_close_live();
		how_to_add_doc_to_project_triggerReady = false;
	}

	// For step number 2
	if (how_to_add_doc_to_project_step == 2 && !window.location.hash.includes('#action:projmgr.projectDefaultTab')) 
	{
		how_to_add_doc_to_project_step = 0;
		window._wfx_close_live();
	}

	// For step number 3
	if (how_to_add_doc_to_project_step == 3 && !window.location.hash.includes('#action:dms.ProjectsFileManager&')) 
	{
		how_to_add_doc_to_project_step = 0;
		window._wfx_close_live();
	}

	// For step number 4
	if (how_to_add_doc_to_project_step == 4 && !window.location.hash.includes('#action:dms.ProjectsaddMultipleFiles')) 
	{
		how_to_add_doc_to_project_step = 0;
		window._wfx_close_live();
	}

	// For step number 9
	if (how_to_add_doc_to_project_step == 9 && !window.location.hash.includes('#action:dms.ProjectsaddMultipleFiles')) 
	{
		how_to_add_doc_to_project_step = 0;
		window._wfx_close_live();
	}

	if (window._wfx_is_live()) 
	{
		window._wfx_settings['72f65ac0-977e-11e6-836b-04013d24cc02'] = function (event) 
	{
		potential_step = 0;


			if ((event.step==2) && (window.location.hash.includes('#action:mainnav.work'))) 
			{
				how_to_add_doc_to_project_step = 2
				how_to_add_doc_to_project_triggerReady = false;
			}

			if ((event.step==3) && (window.location.hash.includes('#action:projmgr.projectDefaultTab'))) 
			{
				how_to_add_doc_to_project_step = 3
				how_to_add_doc_to_project_triggerReady = false;
			}

			if ((event.step==4) && (window.location.hash.includes('#action:dms.ProjectsFileManager'))) 
			{
				how_to_add_doc_to_project_step = 4
				how_to_add_doc_to_project_triggerReady = false;
			}

			if ((event.step >= 5 && event.step < 9) && (window.location.hash.includes('#action:dms.ProjectsaddMultipleFiles'))) 
			{
				how_to_add_doc_to_project_triggerReady = true;
			}
			if ((event.step==9) && (window.location.hash.includes('#action:dms.ProjectsFileManager'))) 
			{
				how_to_add_doc_to_project_step = 9
				how_to_add_doc_to_project_triggerReady = false;
			}


/*jump steps */
			if ((window.location.hash.includes('#action:mainnav.work'))) 
			{
				potential_step = 2;
			}

			if ((window.location.hash.includes('#action:projmgr.projectDefaultTab'))) 
			{
				potential_step = 3;
			}
			
			

	     if ((window.location.hash.includes('#action:dms.ProjectsFileManager')) ||(window.location.hash.includes('action:projmgr.projectDashboard'))) 
			{
				potential_step = 4;
			}

			if ((window.location.hash.includes('#action:dms.ProjectsaddMultipleFiles'))) 
			{
				potential_step = 5;
			}

			if (potential_step && event.step <= potential_step) 
			{
				return {
				"position": potential_step
				};
			}
		}
	}

/*<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< End of how_to_add_doc_to_project<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/
		
		
        /* ******************************************************how to create an issue***************************************************/

        /* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Begin>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/

        if (how_to_create_an_issue_triggerReady) {
            window._wfx_close_live();
            how_to_create_an_issue_triggerReady = false;
        }
        //for step number 2
        if (how_to_create_an_issue_step == 2 && !window.location.hash.includes('#action:projmgr.projectDefaultTa')) {
            how_to_create_an_issue_step = 0;
            window._wfx_close_live();
        }

        //for step number 3
        if (how_to_create_an_issue_step == 3 && !window.location.hash.includes('#action:itl.riskList')) {
            console.log('step 3');
            how_to_create_an_issue_step = 0;
            window._wfx_close_live();
        }

        //for step number 4
        if (how_to_create_an_issue_step == 4 && !window.location.hash.includes('#action:itl.issueList')) {
            how_to_create_an_issue_step = 0;
            window._wfx_close_live();
        }

        //for step number 6
        if (how_to_create_an_issue_step == 6 && !window.location.hash.includes('#action:itl.issueObject&')) {
            how_to_create_an_issue_step = 0;
            window._wfx_close_live();
        }

        //for step number 10
        if (how_to_create_an_issue_step == 10 && !window.location.hash.includes('#action:itl.issueObject&odf_pk')) {
            how_to_create_an_issue_step = 0;
            window._wfx_close_live();
        }

        if (window._wfx_is_live()) {
            window._wfx_settings['2c7450c0-8496-11e6-ae8d-04013d24cf02'] = function(event) {
                potential_step = 0;
                if ((event.step == 2) && (window.location.hash.includes("#action:mainnav.work&classCode=project"))) {
                    how_to_create_an_issue_step = 2;
                    how_to_create_an_issue_triggerReady = false;
                }
                if ((event.step == 3) && (window.location.hash.includes("#action:projmgr.projectDefaultTab"))) {
                    console.log('step 3 correct');
                    how_to_create_an_issue_step = 3;
                    how_to_create_an_issue_triggerReady = false;
                }
                if ((event.step == 4) && (window.location.hash.includes("#action:itl.riskList"))) {
                    how_to_create_an_issue_step = 4;
                    how_to_create_an_issue_triggerReady = false;
                }


                if ((event.step >= 5 && event.step < 7) && window.location.hash.includes('#action:itl.issueList')) {
                    how_to_create_an_issue_triggerReady = true;
                }
                if ((event.step == 6)) {
                    how_to_create_an_issue_step = 6;
                    how_to_create_an_issue_triggerReady = false;
                }

                if ((event.step >= 7 && event.step < 10) && window.location.hash.includes('#action:itl.issueObject')) {
                    how_to_create_an_issue_triggerReady = true;
                }

                if ((event.step == 10)) {
                    how_to_create_an_issue_step = 10;
                    how_to_create_an_issue_triggerReady = false;
                }

                /*jump steps */
                if ((window.location.hash.includes("#action:mainnav.work&classCode=project"))) {
                    potential_step = 2;

                }

                if ((window.location.hash.includes("#action:projmgr.projectDefaultTab"))) {

                    potential_step = 3;
                }

                if ((window.location.hash.includes("#action:itl.riskList"))) {

                    potential_step = 4;
                }
                if (window.location.hash.includes('#action:itl.issueList')) {
                    potential_step = 4;
                }

                if ((window.location.hash.includes('#action:itl.issueObject'))) {
                    potential_step = 7;
                }
                if (potential_step && event.step <= potential_step) {
                    return {
                        "position": potential_step
                    };
                }
            }
        }



        /*<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< End of How to create an Issue <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/

		
		
		
		
		
		
		
        /* ******************************************************how to create a Program***************************************************/

        /* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Begin>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/


        if (how_to_create_a_program_triggerReady) {
            window._wfx_close_live();
            how_to_create_a_program_triggerReady = false;
        }

        //1. For step number 2
        if (how_to_create_a_program_step == 2 && !window.location.hash.includes('#action:projmgr.programNew&partition_code=NIKU.ROOT&newProject')) {
            how_to_create_a_program_step = 0;
            window._wfx_close_live();
        }

        //1. For step number 6
        if (how_to_create_a_program_step == 6 && !window.location.hash.includes('#action:projmgr.projectPropertie')) {
            how_to_create_a_program_step = 0;
            window._wfx_close_live();
        }


        if (window._wfx_is_live()) {
            window._wfx_settings['bd1dfc60-8965-11e6-a787-04013d24cf02'] = function(event) {
                potential_step = 0;

                if ((event.step == 2) && (window.location.hash.includes("#action:projmgr.programs"))) {
                    how_to_create_a_program_step = 2;
                    how_to_create_a_program_triggerReady = false;
                }

                if ((event.step >= 3 && event.step < 6) && (window.location.hash.includes("#action:projmgr.programNew&partition_code=NIKU.ROOT&newProject"))) {
                    how_to_create_a_program_triggerReady = true;
                }

                if ((event.step == 6) && (window.location.hash.includes("#action:projmgr.programNew&partition_code=NIKU.ROOT&newProject"))) {
                    how_to_create_a_program_step = 6;
                    how_to_create_a_program_triggerReady = false;
                }




                /*jump steps */
                if ((window.location.hash.includes("#action:projmgr.programs"))) {
                    potential_step = 2;

                }

                if ((window.location.hash.includes("#action:projmgr.programNew&partition_code=NIKU.ROOT&newProject"))) {
                    potential_step = 3;

                }

                if (potential_step && event.step <= potential_step) {
                    return {
                        "position": potential_step
                    };
                }


            }
        }

        /*<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< End of How to create a Program <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/


		/* ******************************************************how_to_make_collaboration_manager***************************************************/
/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Begin>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/
	if (how_to_make_collaboration_manager_triggerReady)
	{
		window._wfx_close_live();
		how_to_make_collaboration_manager_triggerReady = false;
	}

	// For step number 2
	if (how_to_make_collaboration_manager_step == 2 && !window.location.hash.includes('#action:projmgr.projectDefau')) 
	{
		how_to_make_collaboration_manager_step = 0;
		window._wfx_close_live();
	}

	// For step number 3
	if (how_to_make_collaboration_manager_step == 3 && !window.location.hash.includes('#action:projmgr.roster&')) 
	{
		how_to_make_collaboration_manager_step = 0;
		window._wfx_close_live();
	}
	
		// For step number 4
	if (how_to_make_collaboration_manager_step == 4 && !window.location.hash.includes('#action:collab.projectParti')) 
	{
		how_to_make_collaboration_manager_step = 0;
		window._wfx_close_live();
	}

	// For step number 6
	if (how_to_make_collaboration_manager_step == 6 && !window.location.hash.includes('#action:collab.makeManagerConfirmati')) 
	{
		how_to_make_collaboration_manager_step = 0;
		window._wfx_close_live();
	}

	// For step number 7
	if (how_to_make_collaboration_manager_step == 7 && !window.location.hash.includes('#action:collab.projectParticipant')) 
	{
		how_to_make_collaboration_manager_step = 0;
		window._wfx_close_live();
	}
	
	// For step number 8
	if (how_to_make_collaboration_manager_step == 8 && !window.location.hash.includes('#action:collab.projectParti')) 
	{
		how_to_make_collaboration_manager_step = 0;
		window._wfx_close_live();
	}



	if (window._wfx_is_live()) 
	{
		window._wfx_settings['3e5a4420-99cc-11e6-a426-04013d24cc02'] = function (event) 
	{
		potential_step = 0;


			if ((event.step==2) && (window.location.hash.includes('#action:mainnav.work'))) 
			{
				how_to_make_collaboration_manager_step = 2
				how_to_make_collaboration_manager_triggerReady = false;
			}

			if ((event.step==3) && (window.location.hash.includes('#action:projmgr.projectDefau'))) 
			{
				how_to_make_collaboration_manager_step = 3
				how_to_make_collaboration_manager_triggerReady = false;
			}

			if ((event.step>=4 ) && (window.location.hash.includes('#action:projmgr.roster'))) 
			{
				how_to_make_collaboration_manager_step = 4
				how_to_make_collaboration_manager_triggerReady = false;
			}

			if ((event.step>=5 && event.step < 7) && (window.location.hash.includes('#action:collab.projectParticipants'))) 
			{
				how_to_make_collaboration_manager_triggerReady = true;
			}

			if ((event.step==6) && (window.location.hash.includes('#action:collab.projectParticipants'))) 
			{
				how_to_make_collaboration_manager_step = 6;
				how_to_make_collaboration_manager_triggerReady = false;
			}
			
			if ((event.step==7) && (window.location.hash.includes('#action:collab.makeManagerConfirma'))) 
			{
				how_to_make_collaboration_manager_step = 7;
				how_to_make_collaboration_manager_triggerReady = false;
			}

			if ((event.step==8) && (window.location.hash.includes('#action:collab.projectParticipant')))
			{
				how_to_make_collaboration_manager_step = 8
				how_to_make_collaboration_manager_triggerReady = false;
			}

			
/*jump steps */
			if ((window.location.hash.includes('#action:mainnav.work'))) 
			{
				potential_step = 2;
			}

			if ((window.location.hash.includes('#action:projmgr.projectDefaultTab'))) 
			{
				potential_step = 3;
			}

			if ((window.location.hash.includes('#action:projmgr.roster'))) 
			{
				potential_step = 4;
			}

			if ((window.location.hash.includes('#action:collab.projectParticipants'))) 
			{
				potential_step = 5;
			}

			if ((window.location.hash.includes('#action:collab.makeManagerConfirma'))) 
			{
				potential_step = 7;
			}
			

			if (potential_step && event.step <= potential_step) 
			{
				return {
				"position": potential_step
				};
			}
		}
	}

/*<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< End of how_to_make_collaboration_manager<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/


        /* ******************************************************How to Create a Role***************************************************/

        /* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Begin>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/


        if (how_to_create_a_role_triggerReady) {
            window._wfx_close_live();
            how_to_create_a_role_triggerReady = false;
        }

        // For step number 2
        if (how_to_create_a_role_step == 2 && !window.location.hash.includes('#action:projmgr.resourceNewOptions_odf')) {
            how_to_create_a_role_step = 0;
            window._wfx_close_live();
        }

        //for step number 4
        if (how_to_create_a_role_step == 4 && !window.location.hash.includes('#action:projmgr.resourceNewOptions_od')) {
            how_to_create_a_role_step = 0;
            window._wfx_close_live();
        }

        //for step number 8
        if (how_to_create_a_role_step == 7 && !window.location.hash.includes('#action:projmgr.editResource&reso')) {
            how_to_create_a_role_step = 0;
            window._wfx_close_live();
        }


        if (window._wfx_is_live()) {
            window._wfx_settings['deb84cd0-89f2-11e6-a787-04013d24cf02'] = function(event) {
                potential_step = 0;
                console.log("Step::"+event.step+"::Bool_val::"+how_to_create_a_role_triggerReady);
                //new button on resource  list page
                if ((event.step == 2) && (window.location.hash.includes("#action:projmgr.getResources"))) {
                    how_to_create_a_role_step = 2;
                    how_to_create_a_role_triggerReady = false;
                }


                //Select reource type page
                if ((event.step >= 3 && event.step < 5) && (window.location.hash.includes("#action:projmgr.resourceNewOptions_od"))) {
                    how_to_create_a_role_triggerReady = true;
                }

                //Next button on Select reource type page
                if ((event.step == 4) && (window.location.hash.includes("#action:projmgr.resourceNewOptions_od"))) {
                    how_to_create_a_role_step = 4;
                    how_to_create_a_role_triggerReady = false;
                }


                //Create Role Labor page
                if ((event.step >= 5 && event.step < 7) && (window.location.hash.includes("#action:projmgr.newResource&isRole=1&superSecretTokenKey"))) {
                    console.log("here");
                    how_to_create_a_role_triggerReady = true;
                }

                if ((event.step == 7)) {
                    how_to_create_a_role_step = 7;
                    how_to_create_a_role_triggerReady = false;
                }


                /*jump steps */
                if ((window.location.hash.includes("#action:projmgr.getResources"))) {
                    potential_step = 2;

                }

                if ((window.location.hash.includes("#action:projmgr.resourceNewOptions_od"))) {
                    potential_step = 3;

                }

                if ((window.location.hash.includes("#action:projmgr.newResource&isRole=1&superSecretTokenKey")) || (window.location.hash.includes('action:projmgr.editResource&resourceType'))) {
                    potential_step = 5;

                }


                if (potential_step && event.step <= potential_step) {
                    return {
                        "position": potential_step
                    };
                }



            }

        }
        /*<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< End of How to Create a Role <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/



        /* ******************************************************how to create a Project***************************************************/

        /* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Begin>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/

        if (how_to_create_a_project_triggerReady) {
            window._wfx_close_live();
            how_to_create_a_project_triggerReady = false;
        }

        // For step number 2
        if (how_to_create_a_project_step == 2 && !window.location.hash.includes('#action:projmgr.projectNew&partition')) {
            how_to_create_a_project_step = 0;
            window._wfx_close_live();
        }

        // For step number 11
        if (how_to_create_a_project_step == 11 && !window.location.hash.includes('#action:projmgr.projectDashboard')) {
            how_to_create_a_project_step = 0;
            window._wfx_close_live();
        }

        if (window._wfx_is_live()) {
            window._wfx_settings['87329a20-8186-11e6-ae8d-04013d24cf02'] = function(event) {
                potential_step = 0;

                //new button Projects page
                if ((event.step == 2) && (window.location.hash.includes("#action:mainnav.work&classCode=project"))) {
                    how_to_create_a_project_step = 2;
                    how_to_create_a_project_triggerReady = false;
                }

                //create project page
                if ((event.step >= 3 && event.step < 12) && (window.location.hash.includes("#action:projmgr.projectNew&partition"))) {
                    how_to_create_a_project_triggerReady = true;
                }

                //create project page - save and return button
                if ((event.step == 11) && (window.location.hash.includes("#action:projmgr.projectNew&partition"))) {
                    how_to_create_a_project_step = 11;
                    how_to_create_a_project_triggerReady = false;
                }



                /*jump steps */
                if ((window.location.hash.includes("#action:mainnav.work&classCode=project"))) {
                    potential_step = 2;

                }

                if ((window.location.hash.includes("#action:projmgr.projectNew&partition"))) {
                    potential_step = 3;

                }

                if (potential_step && event.step <= potential_step) {
                    return {
                        "position": potential_step
                    };
                }
            }

        }

        /*<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< End of How to Create a Project <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/


        /* ******************************************************how to create a Project from a template***************************************************/

        /* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Begin>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/


        if (how_to_create_a_project_from_a_template_triggerReady) {
            window._wfx_close_live();
            how_to_create_a_project_from_a_template_triggerReady = false;
        }

         //For step number 2
        if (how_to_create_a_project_from_a_template_step == 2 && !window.location.hash.includes('#action:projmgr.selectProjectTemplate&cancelAction=projmgr.projectList')) {
            console.log('here 1');
            how_to_create_a_project_from_a_template_step = 0;
            window._wfx_close_live();
        }

        // For step number 4
        if (how_to_create_a_project_from_a_template_step == 4 && !window.location.hash.includes('#action:projmgr.projectNew&templat')) {
            how_to_create_a_project_from_a_template_step = 0;
            window._wfx_close_live();
        }

        // For step number 6
        if (how_to_create_a_project_from_a_template_step == 6 && !window.location.hash.includes('#action:dashboardProjectStatu')) {
            how_to_create_a_project_from_a_template_step = 0;
            window._wfx_close_live();
        }

        if (window._wfx_is_live()) {
            window._wfx_settings['4be97380-84b0-11e6-a247-04013d24cc02'] = function(event) {
                potential_step = 0;
                console.log(event.step);
                console.log("bool_val::"+how_to_create_a_project_from_a_template_triggerReady);
                //new from template button on Projects page

                if ((event.step == 2) && (window.location.hash.includes("#action:mainnav.work&classCode=project"))) {
                    
                    how_to_create_a_project_from_a_template_step = 2;
                    how_to_create_a_project_from_a_template_triggerReady = false;
                }


                //select template project
                if ((event.step == 4) ) {
                    console.log('here');
                    how_to_create_a_project_from_a_template_triggerReady = true;
                }

                // select template project - next button
                if ((event.step == 4) && (window.location.hash.includes("#action:projmgr.selectProjectTemplate&cancelAction"))) {
                    how_to_create_a_project_from_a_template_step = 4;
                    how_to_create_a_project_from_a_template_triggerReady = false;
                }

                //Project Template: Application COTS Template - Create Project
                if ((event.step >= 5 && event.step < 6) && (window.location.hash.includes("#action:projmgr.projectNew&template"))) {
                    how_to_create_a_project_from_a_template_triggerReady = true;
                }


                //Project Template: Application COTS Template - Create Project -- save button
                if ((event.step == 6) && (window.location.hash.includes("#action:projmgr.projectNew&template"))) {
                    how_to_create_a_project_from_a_template_step = 6;
                    how_to_create_a_project_from_a_template_triggerReady = false;
                }

                /*jump steps */
                if ((window.location.hash.includes("#action:mainnav.work&classCode=project"))) {
                    potential_step = 2;

                }

                if ((window.location.hash.includes("#action:projmgr.selectProjectTemplate&cancelAction"))) {
                    potential_step = 3;

                }
                if ((window.location.hash.includes("#action:projmgr.projectNew&template"))) {
                    potential_step = 5;
                }

                if (potential_step && event.step <= potential_step) {
                    return {
                        "position": potential_step
                    };
                }

            }

        }
        /*<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< End of How to Create a Project from a template <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/


						/* ******************************************** How to Populate your Timesheet ? ****************************************** */

                /* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Begin>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */
				
					 if (how_to_populate_your_timesheet_triggerReady) {
                window._wfx_close_live();
                how_to_populate_your_timesheet_triggerReady = false;
            }
			 // For step number 1
            if (how_to_populate_your_timesheet_step == 1 && !window.location.hash.includes('#action:timeadmin.confirmAction&ts_')) {
                how_to_populate_your_timesheet_step = 0;
                window._wfx_close_live();
            }
			
			 // For step number 2
            if (how_to_populate_your_timesheet_step == 2 && !window.location.hash.includes('#action:timeadmin.editTimesheet&')) {
                how_to_populate_your_timesheet_step = 0;
                window._wfx_close_live();
            }
			
			
			// For step number 3
            if (how_to_populate_your_timesheet_step == 3 && !window.location.hash.includes('#action:timeadmin.editTimesheet')) {
                how_to_populate_your_timesheet_step = 0;
                window._wfx_close_live();
            }
			
			
			
			
				if (window._wfx_is_live()) {
                        window._wfx_settings['0b9bf480-895e-11e6-85ad-04013d24cd02'] = function (event) {
                            potential_step = 0;
					
					
							
				if ((event.step == 1) && window.location.hash.includes("#action:timeadmin.editTimesheet&resid=1&t")) {
                            how_to_populate_your_timesheet_step = 1;
                            how_to_populate_your_timesheet_triggerReady = false;
                        }
						
						//alert message
						if ((event.step == 2) && window.location.hash.includes("#action:timeadmin.confirmAction&ts_")) {
                            how_to_populate_your_timesheet_step = 2;
                            how_to_populate_your_timesheet_triggerReady = false;
                        }
						
						//save button
						
							if ((event.step == 3) && window.location.hash.includes("#action:timeadmin.editTimesheet&")) {
                            how_to_populate_your_timesheet_step = 3;
                            how_to_populate_your_timesheet_triggerReady = false;
                        }
						
						
						
						 /*jump steps */
                        if ((window.location.hash.includes("#action:timeadmin.editTimesheet&resid=1&t"))) {
                            potential_step = 1;
                        }

                        if ((window.location.hash.includes("#action:timeadmin.confirmAction&ts_"))) {
                            potential_step = 2;
                        }

                       

                        if (potential_step && event.step <= potential_step) {
                            return {
                                "position": potential_step
                            };
                        }
					


						}

				}
				
				
				
				
				
				
				
  /*<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< end of How to Populate your Timesheet ?<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/
  
  
		
		
		
		
		
		
		
		
		
		
		
		
        /* ******************************************************how to change an ETC value***************************************************/

        /* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Begin>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/


        if (how_to_change_an_etc_value_triggerReady) {
            window._wfx_close_live();
            how_to_change_an_etc_value_triggerReady = false;
        }

        // For step number 3
        if (how_to_change_an_etc_value_triggerReady_step == 3 && !window.location.hash.includes('#action:timeadmin.editTimesheet&')) {
            how_to_change_an_etc_value_triggerReady_step = 0;
            window._wfx_close_live();
        }


        if (window._wfx_is_live()) {
            window._wfx_settings['8988bfb0-8948-11e6-b370-04013d24cc02'] = function(event) {
                potential_step = 0;

                //Timesheets page
                if ((event.step >= 1 && event.step < 3) && (window.location.hash.includes("#action:timeadmin.editTimesheet"))) {
                    how_to_change_an_etc_value_triggerReady = true;
                }

                //Timesheets page Save Button
                if ((event.step == 3) && (window.location.hash.includes("#action:timeadmin.editTimesheet"))) {
                    how_to_change_an_etc_value_triggerReady_step = 3;
                    how_to_change_an_etc_value_triggerReady = false;
                }

                //Timesheets page
                if ((event.step >= 4 && event.step < 6) && (window.location.hash.includes("#action:timeadmin.editTimesheet"))) {
                    how_to_change_an_etc_value_triggerReady = true;
                }

                /*jump steps */
                if ((window.location.hash.includes("#action:timeadmin.editTimesheet"))) {
                    potential_step = 1;
                }

                if (potential_step && event.step <= potential_step) {
                    return {
                        "position": potential_step
                    };
                }
            }
        }
        /*<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< End of how to change an ETC value <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/

        /* *********************************************how to modify a submitted Timesheet ****************************************** */

        /* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Begin>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */

        //CHECK AGAIN NOT WORKING

        if (how_to_modify_a_submitted_timesheet_triggerReady) {
            window._wfx_close_live();
            how_to_modify_a_submitted_timesheet_triggerReady = false;
        }


        // For step number 2
        if (how_to_how_to_modify_a_submitted_timesheet_step == 2 && !window.location.hash.includes('#action:timeadmin.editTimesheet')) {
            how_to_how_to_modify_a_submitted_timesheet_step = 0;
            window._wfx_close_live();
        }

        // For step number 3
        if (how_to_how_to_modify_a_submitted_timesheet_step == 3 && !window.location.hash.includes('#action:timeadmin.timesheetBrowserReturn')) {
            how_to_how_to_modify_a_submitted_timesheet_step = 0;
            window._wfx_close_live();
        }

        // For step number 4
        if (how_to_how_to_modify_a_submitted_timesheet_step == 4 && !window.location.hash.includes('#action:timeadmin.editTimesheet&')) {
            how_to_how_to_modify_a_submitted_timesheet_step = 0;
            window._wfx_close_live();
        }

        // For step number 5
        if (how_to_how_to_modify_a_submitted_timesheet_step == 4 && !window.location.hash.includes('#action:timeadmin.editTimesheet&')) {
            how_to_how_to_modify_a_submitted_timesheet_step = 0;
            window._wfx_close_live();
        }

        // For step number 6
        if (how_to_how_to_modify_a_submitted_timesheet_step == 6 && !window.location.hash.includes('#action:timeadmin.timesheetBrowserReturn')) {
            how_to_how_to_modify_a_submitted_timesheet_step = 0;
            window._wfx_close_live();
        }

        if (window._wfx_is_live()) {
            window._wfx_settings['7af89700-895b-11e6-a787-04013d24cf02'] = function(event) {
                potential_step = 0;

                //Timesheets page
                if ((event.step == 2) && (window.location.hash.includes("#action:timeadmin.timesheetBrowserReturn"))) {
                    how_to_how_to_modify_a_submitted_timesheet_step = 2;
                    how_to_modify_a_submitted_timesheet_triggerReady = false;
                }

                //Timesheets page return timesheet button
                if ((event.step == 3) && (window.location.hash.includes("#action:timeadmin.editTimesheet"))) {
                    how_to_how_to_modify_a_submitted_timesheet_step = 3;
                    how_to_modify_a_submitted_timesheet_triggerReady = false;
                }

                //Timesheets page click the returned timesheet
                if ((event.step == 4) && (window.location.hash.includes("#action:timeadmin.timesheetBrowserReturn"))) {
                    how_to_how_to_modify_a_submitted_timesheet_step = 4;
                    how_to_modify_a_submitted_timesheet_triggerReady = false;
                }


                //modify the time and click submit for approval
                if ((event.step >= 5 && event.step < 7) && (window.location.hash.includes("#action:timeadmin.editTimesheet"))) {
                    how_to_modify_a_submitted_timesheet_triggerReady = false;
                }

                //submit for approval
                if ((event.step == 6) && (window.location.hash.includes("#action:timeadmin.editTimesheet"))) {
                    how_to_how_to_modify_a_submitted_timesheet_step = 6;
                    how_to_modify_a_submitted_timesheet_triggerReady = false;
                }



                /*jump steps */
                if ((window.location.hash.includes("#action:timeadmin.timesheetBrowserReturn"))) {
                    potential_step = 2;
                }

                if ((window.location.hash.includes("#action:timeadmin.editTimesheet"))) {
                    potential_step = 3;
                }


                if (potential_step && event.step <= potential_step) {
                    return {
                        "position": potential_step
                    };
                }
            }
        }




        /*<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< end of how to modify a submitted Timesheet <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/


		
		
		



        /* *********************************************How to Create an Idea?****************************************** */

        /* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Begin>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */



        if (how_to_create_idea_triggerReady) {
            window._wfx_close_live();
            how_to_create_idea_triggerReady = false;
        }

        //For last step on every page
        // For step number 2
        if (how_to_create_idea_step == 2 && !window.location.hash.includes('#action:pma.ideaList')) {
            how_to_create_idea_step = 0;
            window._wfx_close_live();
        }

        // For step number 13
        if (how_to_create_idea_step == 13 && !window.location.hash.includes('#action:pma.ideaCreate&partition_code')) {
            how_to_create_idea_step = 0;
            window._wfx_close_live();
        }

        if (window._wfx_is_live()) {
            potential_step = 0;
            window._wfx_settings['d0a36250-8499-11e6-ae8d-04013d24cf02'] = function(event) {
                potential_step = 0;
                console.log("here::" + how_to_create_idea_triggerReady + " " + event.step);



                if ((event.step == 2) && window.location.hash.includes("#action:pma.ideaCreate&partition_code")) {
                    how_to_create_idea_step = 2;
                    how_to_create_idea_triggerReady = false;
                }


                // For step number 4 to 13
                if ((event.step >= 3 && event.step < 14) && window.location.hash.includes('#action:pma.ideaCreate&partition_code')) {
                    how_to_create_idea_triggerReady = true;
                }

                /*jump steps */
                if ((window.location.hash.includes("#action:pma.ideaList"))) {
                    potential_step = 2;
                }

                if ((window.location.hash.includes("#action:pma.ideaCreate&partition_code"))) {
                    potential_step = 3;
                }

                if (potential_step && event.step <= potential_step) {
                    return {
                        "position": potential_step
                    };
                }
            }
        }




        /*<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< end of how to create an Idea <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/


		
		
				
		
		

        /* *********************************************Idea for Approval?****************************************** */

        /* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Begin>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */



        if (how_to_submit_idea_approval_triggerReady) {
            window._wfx_close_live();
            how_to_submit_idea_approval_triggerReady = false;
        }

        //For last step on every page
        // For step number 2
        if (how_to_submit_idea_approval_step == 2 && !window.location.hash.includes('#action:pma.ideaList')) {
            how_to_submit_idea_approval_step = 0;
            window._wfx_close_live();
        }

        // For step number 4
        if (how_to_create_idea_step == 4 && !window.location.hash.includes('#action:pma.ideaProperties&return_to=pma.ideaList&id')) {
            how_to_create_idea_step = 0;
            window._wfx_close_live();
        }

        if (window._wfx_is_live()) {
            potential_step = 0;
            window._wfx_settings['dcdefb90-84a5-11e6-ae8d-04013d24cf02'] = function(event) {
                potential_step = 0;
                console.log("here::" + how_to_create_idea_triggerReady + " " + event.step);



                if ((event.step == 2) && window.location.hash.includes("#action:pma.ideaProperties&return_to=pma.ideaList&id")) {
                    how_to_submit_idea_approval_step = 2;
                    how_to_submit_idea_approval_triggerReady = false;
                }


                // For step number 3 to 5
                if ((event.step >= 3 && event.step < 4) && window.location.hash.includes('#action:pma.ideaProperties&return_to=pma.ideaList&id')) {
                    how_to_submit_idea_approval_triggerReady = true;
                }

                if ((event.step == 4) && window.location.hash.includes("&odf_view=ideaProperties&return_to=pma.ideaList")) {
                    how_to_submit_idea_approval_step = 4;
                    how_to_submit_idea_approval_triggerReady = false;
                }


                /*jump steps */
                if ((window.location.hash.includes("#action:pma.ideaList"))) {
                    potential_step = 2;
                }

                if ((window.location.hash.includes("#action:pma.ideaProperties&return_to=pma.ideaList&id"))) {
                    potential_step = 3;
                }

                if (window.location.hash.includes("&odf_view=ideaProperties&return_to=pma.ideaList")) {
                    potential_step = 5;
                }

                if (potential_step && event.step <= potential_step) {
                    return {
                        "position": potential_step
                    };
                }
            }
        }




        /*<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< end of Idea for approval <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/




        /* ********************************************Replace a role****************************************** */

        /* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Begin>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */



        if (how_to_replace_a_role_triggerReady) {
            window._wfx_close_live();
            how_to_replace_a_role_triggerReady = false;
        }

        //For last step on every page
        // For step number 2
        if (how_to_replace_a_role_step == 2 && !window.location.hash.includes('#action:mainnav.work&classCode=project')) {
            how_to_replace_a_role_step = 0;
            window._wfx_close_live();
        }

        // For step number 3
        if (how_to_replace_a_role_step == 3 && !window.location.hash.includes('#action:projmgr.projectDefaultTab&id')) {
            how_to_replace_a_role_step = 0;
            window._wfx_close_live();
        }


        if (window._wfx_is_live()) {
            potential_step = 0;
            window._wfx_settings['d55462e0-847b-11e6-ba2f-04013d24cd02'] = function(event) {
                potential_step = 0;
                console.log("here::" + how_to_replace_a_role_triggerReady + " " + event.step);



                if ((event.step == 2) && window.location.hash.includes("#action:projmgr.projectDefaultTab&id")) {
                    how_to_replace_a_role_step = 2;
                    how_to_replace_a_role_triggerReady = false;
                }

                if ((event.step == 3) && window.location.hash.includes("#action:projmgr.roster&id")) {
                    how_to_replace_a_role_step = 3;
                    how_to_replace_a_role_triggerReady = false;
                }


                // For step number 4 to 6
                if ((event.step >= 4 && event.step < 6) && window.location.hash.includes('#action:projmgr.roster&id')) {
                    how_to_replace_a_role_triggerReady = true;
                }

                /*jump steps */
                if ((window.location.hash.includes("#action:mainnav.work&classCode=project"))) {
                    potential_step = 2;
                }

                if ((window.location.hash.includes("#action:projmgr.projectDefaultTab&id"))) {
                    potential_step = 3;
                }

                if (window.location.hash.includes("#action:projmgr.roster&id")) {
                    potential_step = 4;
                }

                if (potential_step && event.step <= potential_step) {
                    return {
                        "position": potential_step
                    };
                }
            }
        }




        /*<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< end of Replace a role<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/




        /* ********************************************Submit Your Timesheet****************************************** */

        /* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Begin>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */



        if (how_to_submit_timesheet_triggerReady) {
            window._wfx_close_live();
            how_to_submit_timesheet_triggerReady = false;
        }

        //For last step on every page
        // For step number 2
        if (how_to_submit_timesheet_step == 2 && !window.location.hash.includes('#action:timeadmin.editTimesheet&resid')) {
            how_to_submit_timesheet_step = 0;
            window._wfx_close_live();
        }

        // For step number 3
        if (how_to_submit_timesheet_step == 3 && !window.location.hash.includes('...')) {
            how_to_submit_timesheet_step = 0;
            window._wfx_close_live();
        }


        if (window._wfx_is_live()) {
            potential_step = 0;
            window._wfx_settings['5c25a9e0-8950-11e6-a787-04013d24cf02'] = function(event) {
                potential_step = 0;
                console.log("here::" + how_to_submit_timesheet_triggerReady + " " + event.step);



                if ((event.step == 2) && window.location.hash.includes("...")) {
                    how_to_submit_timesheet_step = 2;
                    how_to_submit_timesheet_triggerReady = false;
                }

                if ((event.step == 3) && window.location.hash.includes("...")) {
                    how_to_submit_timesheet_step = 3;
                    how_to_submit_timesheet_triggerReady = false;
                }


                // For step number 4 to 6
                if ((event.step >= 4 && event.step < 6) && window.location.hash.includes('#action:projmgr.roster&id')) {
                    how_to_submit_timesheet_triggerReady = true;
                }

                /*jump steps */
                if ((window.location.hash.includes("#action:mainnav.work&classCode=project"))) {
                    potential_step = 2;
                }

                if ((window.location.hash.includes("#action:projmgr.projectDefaultTab&id"))) {
                    potential_step = 3;
                }

                if (window.location.hash.includes("#action:projmgr.roster&id")) {
                    potential_step = 4;
                }

                if (potential_step && event.step <= potential_step) {
                    return {
                        "position": potential_step
                    };
                }
            }
        }




        /*<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< end of How to submit a timesheet<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/




        /* ********************************************Convert Incident to a task****************************************** */

        /* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Begin>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */



        if (incident_to_task_triggerReady) {
            window._wfx_close_live();
            incident_to_task_triggerReady = false;
        }

        //For last step on every page

        // For step number 3
        if (incident_to_task_step == 3 && !window.location.hash.includes('#action:itl.chooseProjectForTask&inciden')) {
            incident_to_task_step = 0;
            window._wfx_close_live();
        }

        // For step number 4
        if (incident_to_task_step ==5 && !window.location.hash.includes('#action:projmgr.taskProperties&incident_')) {
            incident_to_task_step = 0;
            window._wfx_close_live();
        }

        // For step number 6
        if (incident_to_task_step == 6 && !window.location.hash.includes('#action:projmgr.taskPropertiesOpt&')) {
            incident_to_task_step = 0;
            window._wfx_close_live();
        }
		
		 // For step number 8
        if (incident_to_task_step == 8 && !window.location.hash.includes('#action:itl.incidentList')) {
            incident_to_task_step = 0;
            window._wfx_close_live();
        }

        // For step number 9
        if (incident_to_task_step == 9 && !window.location.hash.includes('#action:itl.incidentObject&od')) {
            incident_to_task_step = 0;
            window._wfx_close_live();
        }
		
		
		 // For step number 10
        if (incident_to_task_step == 10 && !window.location.hash.includes('#action:itl.incidentAssociation')) {
            incident_to_task_step = 0;
            window._wfx_close_live();
        }


        if (window._wfx_is_live()) {
            potential_step = 0;
            window._wfx_settings['becbaa30-8956-11e6-a787-04013d24cf02'] = function(event) {
                potential_step = 0;
             
			 
				 if ((event.step == 2) && window.location.hash.includes("#action:itl.incidentList")) {
                    incident_to_task_triggerReady = true;
					}
				
					if ((event.step >= 2 && event.step < 3) && (window.location.hash.includes("#action:itl.incidentList"))) {
                        incident_to_task_triggerReady = true;
                    }
			 
                if ((event.step == 3) && window.location.hash.includes("#action:itl.incidentList")) {
                    incident_to_task_step = 3;
                    incident_to_task_triggerReady = false;
                }

               
				if ((event.step >= 4 && event.step < 5) && (window.location.hash.includes("#action:itl.chooseProjectForTask&inci"))) {
                        incident_to_task_triggerReady = true;
                    }

                if ((event.step == 5) && window.location.hash.includes("#action:itl.chooseProjectForTask&inci")) {
                    incident_to_task_step = 5;
                    incident_to_task_triggerReady = false;
                }

                if ((event.step == 6) && window.location.hash.includes("#action:projmgr.task")) {
                    incident_to_task_step = 6;
                    incident_to_task_triggerReady = false;
                }

                if ((event.step >= 7 && event.step <8)&& window.location.hash.includes('#action:projmgr.taskPropertiesOpt&')) {
                    incident_to_task_triggerReady = true;
                }

				if ((event.step == 8) && window.location.hash.includes("#action:projmgr.taskPropertiesOpt&")) {
                    incident_to_task_step = 8;
                    incident_to_task_triggerReady = false;
                }
				
                if ((event.step == 9) && window.location.hash.includes("#action:itl.incidentLis")) {
                    incident_to_task_step = 9;
                    incident_to_task_triggerReady = false;
                }
				
				 if ((event.step == 10) && window.location.hash.includes("#action:itl.incidentObject&odf")) {
                    incident_to_task_step = 10;
                    incident_to_task_triggerReady = false;
                }


              

                /*jump steps */
				
				 if ((window.location.hash.includes("#action:itl.incidentList"))) {
                            potential_step = 2;
                        }

                        if ((window.location.hash.includes("#action:itl.chooseProjectForTask&inci"))) {
                            potential_step = 4;
                        }

                        if (window.location.hash.includes("#action:projmgr.task")) {
                            potential_step = 6;
                        }

						if (window.location.hash.includes("#action:projmgr.taskPropertiesOpt&id")) {
							potential_step = 7;
						}

						if ((window.location.hash.includes("#action:itl.incidentList")) && event.step == 9) {
							potential_step = 9;
						}

						if (window.location.hash.includes("#action:itl.incidentObject&odf_pk")) {
							potential_step = 10;
						}


                if (potential_step && event.step <= potential_step) {
                    return {
                        "position": potential_step
                    };
                }
            }
        }




        /*<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< end of Incident to task<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/


        /* ******************************************** How to Allocate Resource from Estimates? ****************************************** */

        /* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Begin>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */


        if (how_to_allocate_resource_from_estimates_triggerReady) {
            window._wfx_close_live();
            how_to_allocate_resource_from_estimates_triggerReady = false;
        }

        //For last step on every page
        // For step number 2
        if (how_to_allocate_resource_from_estimates_step == 2 && !window.location.hash.includes('#action:projmgr.projectDefaultTa')) {
            how_to_allocate_resource_from_estimates_step = 0;
            window._wfx_close_live();
        }

        // For step number 3 Team Tab
        if (how_to_allocate_resource_from_estimates_step == 3 && !window.location.hash.includes('#action:projmgr.roster')) {
            how_to_allocate_resource_from_estimates_step = 0;
            window._wfx_close_live();
        }

        // For step number 6
        if (how_to_allocate_resource_from_estimates_step == 6 && !window.location.hash.includes('#action:projmgr.roster')) {
            how_to_allocate_resource_from_estimates_step = 0;
            window._wfx_close_live();
        }



        if (window._wfx_is_live()) {
            window._wfx_settings['35c8a770-8153-11e6-9479-04013d24cd02'] = function(event) {
                potential_step = 0;


                if ((event.step == 2) && window.location.hash.includes("#action:mainnav.work&classCode=project")) {
                    how_to_allocate_resource_from_estimates_step = 2;
                    how_to_allocate_resource_from_estimates_triggerReady = false;
                }


                if ((event.step == 3) && window.location.hash.includes("#action:projmgr.projectDefaultTa")) {
                    how_to_allocate_resource_from_estimates_step = 3;
                    how_to_allocate_resource_from_estimates_triggerReady = false;
                }

                if ((event.step >= 4 && event.step < 6) && (window.location.hash.includes("#action:projmgr.roster"))) {
                    how_to_create_a_project_triggerReady = true;
                }

                if ((event.step == 6) && window.location.hash.includes("#action:projmgr.roster")) {
                    how_to_allocate_resource_from_estimates_step = 6;
                    how_to_allocate_resource_from_estimates_triggerReady = false;
                }

                /*jump steps */
                if ((window.location.hash.includes("#action:mainnav.work&classCode=project"))) {
                    potential_step = 2;
                }

                if ((window.location.hash.includes("#action:projmgr.projectDefaultTa"))) {
                    potential_step = 3;
                }

                if (window.location.hash.includes("#action:projmgr.roster")) {
                    potential_step = 4;
                }

                if (potential_step && event.step <= potential_step) {
                    return {
                        "position": potential_step
                    };
                }



            }
        }

        /*<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< end of How to Allocate Resource from Estimates?<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/


		
		
		
	/* ******************************************** How to convert an Incident to a Project? ****************************************** */

                /* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Begin>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */
				
				if (how_to_convert_an_incident_to_a_project_triggerReady) {
                window._wfx_close_live();
                how_to_convert_an_incident_to_a_project_triggerReady = false;
            }
			
			// For step number 2
            if (how_to_convert_an_incident_to_a_project_step == 2 && !window.location.hash.includes('#action:itl.incidentObject&odf_p')) {
                how_to_convert_an_incident_to_a_project_step = 0;
                window._wfx_close_live();
            }
			
			// For step number 3
            if (how_to_convert_an_incident_to_a_project_step == 3 && !window.location.hash.includes('#action:itl.selectConvertType&incid')) {
                how_to_convert_an_incident_to_a_project_step = 0;
                window._wfx_close_live();
            }
			
			// For step number 4
            if (how_to_convert_an_incident_to_a_project_step == 4 && !window.location.hash.includes('#action:projmgr.projectNew&return_to=itl.incidentLis')) {
                how_to_convert_an_incident_to_a_project_step = 0;
                window._wfx_close_live();
            }
			
			// For step number 6
            if (how_to_convert_an_incident_to_a_project_step == 6 && !window.location.hash.includes('#action:projmgr.projectDashboa')) {
                how_to_convert_an_incident_to_a_project_step = 0;
                window._wfx_close_live();
            }
			
				if (window._wfx_is_live()) {
                        window._wfx_settings['634f9870-912f-11e6-b370-04013d24cc02'] = function (event) {
                            potential_step = 0;
				
				
				//incident list
				if ((event.step == 2) && window.location.hash.includes("#action:itl.incidentList")) {
                            how_to_convert_an_incident_to_a_project_step = 2;
                            how_to_convert_an_incident_to_a_project_triggerReady = false;
                        }
						
						
						//convert to project button
				if ((event.step == 3) && window.location.hash.includes("#action:itl.incidentList")) {
                            how_to_convert_an_incident_to_a_project_step = 3;
                            how_to_convert_an_incident_to_a_project_triggerReady = false;
                        }
						
						//next button
				if ((event.step == 4) && window.location.hash.includes("#action:itl.selectConvertType&incid")) {
                            how_to_convert_an_incident_to_a_project_step = 4;
                            how_to_convert_an_incident_to_a_project_triggerReady = false;
                        }
				
				//create project page
				 if ((event.step >= 5 && event.step < 6) && (window.location.hash.includes("#action:projmgr.projectNew&return_to=itl.in"))) {
                        how_to_convert_an_incident_to_a_project_triggerReady = true;
                    }
				
				
				//save button
				if ((event.step == 6) && window.location.hash.includes("#action:projmgr.projectNew&return_to=itl.in")) {
                            how_to_convert_an_incident_to_a_project_step = 6;
                            how_to_convert_an_incident_to_a_project_triggerReady = false;
                        }
				
				/*jump steps */
                        if ((window.location.hash.includes("#action:itl.incidentList"))) {
                            potential_step = 2;
                        }

                        if ((window.location.hash.includes("#action:itl.incidentObject&odf_p"))) {
                            potential_step = 3;
                        }

                        if (window.location.hash.includes("#action:itl.selectConvertType&inci")) {
                            potential_step = 4;
                        }
						 if (window.location.hash.includes("#action:projmgr.projectNew&return_to=")) {
                            potential_step = 5;
                        }

                        if (potential_step && event.step <= potential_step) {
                            return {
                                "position": potential_step
                            };
                        }
				
				
				
						}
				}
				
				
  /*<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< end of How to convert an Incident to a Project?<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/
  
		
		
		
		
		
		
        /* ******************************************** How to create a plan ****************************************** */

        /* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Begin>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */


        if (how_to_create_a_plan_triggerReady) {
            window._wfx_close_live();
            how_to_create_a_plan_triggerReady = false;
        }

        // For step number 2
        if (how_to_create_a_plan_step == 2 && !window.location.hash.includes('#action:pfm.portfolioDefaultTab&odf_return')) {
            how_to_create_a_plan_step = 0;
            window._wfx_close_live();
        }

        // For step number 3
        if (how_to_create_a_plan_step == 3 && !window.location.hash.includes('#action:pfm.planList')) {
            how_to_create_a_plan_step = 0;
            window._wfx_close_live();
        }

        // For step number 4
        if (how_to_create_a_plan_step == 4 && !window.location.hash.includes('#action:pfm.portfolioPlanCreate&portfolio')) {
            how_to_create_a_plan_step = 0;
            window._wfx_close_live();
        }

        // For step number 8
        if (how_to_create_a_plan_step == 8 && !window.location.hash.includes('#action:pfm.portfolioPlanProperti')) {
            how_to_create_a_plan_step = 0;
            window._wfx_close_live();
        }

        // For step number 9
        if (how_to_create_a_plan_step == 9 && !window.location.hash.includes('#action:pfm.planList&i')) {
            how_to_create_a_plan_step = 0;
            window._wfx_close_live();
        }


        if (window._wfx_is_live()) {
            window._wfx_settings['aff31620-800e-11e6-90aa-04013d24cf02'] = function(event) {
                potential_step = 0;

                //portfolios link
                if ((event.step == 2) && window.location.hash.includes("#action:pfm.portfolioList")) {
                    how_to_create_a_plan_step = 2;
                    how_to_create_a_plan_triggerReady = false;
                }


                //plans tab
                if ((event.step == 3) && window.location.hash.includes("#action:pfm.portfolioDefaultTab&odf_return")) {
                    how_to_create_a_plan_step = 3;
                    how_to_create_a_plan_triggerReady = false;
                }

                //new button
                if ((event.step == 4) && window.location.hash.includes("#action:pfm.planList")) {
                    how_to_create_a_plan_step = 4;
                    how_to_create_a_plan_triggerReady = false;
                }


                //create portfolio plan
                if ((event.step >= 5 && event.step < 8) && (window.location.hash.includes("#action:pfm.portfolioPlanCreate&portfolio"))) {
                    how_to_create_a_plan_triggerReady = true;
                }

                //save button
                if ((event.step == 8) && window.location.hash.includes("#action:pfm.portfolioPlanCreate&portfolio")) {
                    how_to_create_a_plan_step = 8;
                    how_to_create_a_plan_triggerReady = false;
                }

                //save and return button
                if ((event.step == 9) && window.location.hash.includes("#action:pfm.portfolioPlanPropert")) {
                    how_to_create_a_plan_step = 9;
                    how_to_create_a_plan_triggerReady = false;
                }

                /*jump steps */
                if ((window.location.hash.includes("#action:pfm.portfolioList"))) {
                    potential_step = 2;
                }

                if ((window.location.hash.includes("#action:pfm.portfolioDefaultTab&odf_return")) || (window.location.hash.includes('action:pfm.portfolioPropertie'))) {
                    potential_step = 3;
                }

                if (window.location.hash.includes("#action:pfm.planList")) {
                    potential_step = 4;
                }

                if (window.location.hash.includes("#action:pfm.portfolioPlanCreate&portfolio")) {
                    potential_step = 5;
                }

                if (potential_step && event.step <= potential_step) {
                    return {
                        "position": potential_step
                    };
                }



            }

        }
        /*<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< end of How to create a plan<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/

        /* ******************************************** How to create a Baseline ****************************************** */

        /* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Begin>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */

        if (how_to_create_a_baseline_triggerReady) {
            window._wfx_close_live();
            how_to_create_a_baseline_triggerReady = false;
        }

        // For step number 2
        if (how_to_create_a_baseline_step == 2 && !window.location.hash.includes('#action:projmgr.projectDefaultTa')) {
            how_to_create_a_baseline_step = 0;
            window._wfx_close_live();
        }
		
		// For step number 3
        if (how_to_create_a_baseline_step == 3 && !window.location.hash.includes('#action:projmgr.projectPropertie')) {
            how_to_create_a_baseline_step = 0;
            window._wfx_close_live();
        }

        // For step number 4
        if (how_to_create_a_baseline_step == 4 && !window.location.hash.includes('#action:projmgr.baselineRevisionL')) {
            how_to_create_a_baseline_step = 0;
            window._wfx_close_live();
        }

        // For step number 5
        if (how_to_create_a_baseline_step == 5 && !window.location.hash.includes('#action:projmgr.baselineRevisionProperties')) {
            how_to_create_a_baseline_step = 0;
            window._wfx_close_live();
        }

        // For step number 9
        if (how_to_create_a_baseline_step == 9 && !window.location.hash.includes('#action:projmgr.baselineRevisionLis')) {
            how_to_create_a_baseline_step = 0;
            window._wfx_close_live();
        }


        if (window._wfx_is_live()) {
            window._wfx_settings['9748f410-80b7-11e6-a47d-04013d24cc02'] = function(event) {
                potential_step = 0;

                //click on any project
                if ((event.step == 2) && window.location.hash.includes("#action:mainnav.work&classCode=project")) {
                    how_to_create_a_baseline_step = 2;
                    how_to_create_a_baseline_triggerReady = false;
                }
				
				   //click on any properties
                if ((event.step == 3) && window.location.hash.includes("#action:projmgr.projectDefaultTa")) {
                    how_to_create_a_baseline_step = 3;
                    how_to_create_a_baseline_triggerReady = false;
                }



                //click baseline
                if ((event.step == 4) && window.location.hash.includes("#action:projmgr.projectPropertie")) {
                    how_to_create_a_baseline_step = 4;
                    how_to_create_a_baseline_triggerReady = false;
                }


                //new button
                if ((event.step == 5) && window.location.hash.includes("#action:projmgr.baselineRevisionList&")) {
                    how_to_create_a_baseline_step = 5;
                    how_to_create_a_baseline_triggerReady = false;
                }


                // Baseline Revision Properties
                if ((event.step >= 6 && event.step < 9) && (window.location.hash.includes("#action:projmgr.baselineRevisionProperties"))) {
                    how_to_create_a_baseline_triggerReady = true;
                }

                //save and return button
                if ((event.step == 9) && window.location.hash.includes("#action:projmgr.baselineRevisionProperties")) {
                    how_to_create_a_baseline_step = 9;
                    how_to_create_a_baseline_triggerReady = false;
                }


                /*jump steps */
                if ((window.location.hash.includes("#action:mainnav.work&classCode=project"))) {
                    potential_step = 2;
                }

                if ((window.location.hash.includes("#action:projmgr.projectDefaultTa")) || (window.location.hash.includes('#action:projmgr.projectDashboar'))) {
                    potential_step = 3;
                }
				
				  if ((window.location.hash.includes("#action:projmgr.projectProperti"))) {
                    potential_step = 3;
                }


                if (window.location.hash.includes("#action:projmgr.baselineRevisionList&")) {
                    potential_step = 5;
                }
				

                if (window.location.hash.includes("#action:projmgr.baselineRevisionProperties")) {
                    potential_step = 6;
                }

                if (potential_step && event.step <= potential_step) {
                    return {
                        "position": potential_step
                    };
                }


            }
        }

        /*<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< end of How to create a Baseline<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/


		
		
		
						/* ********************************************How to add an indirect row? ****************************************** */

                /* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Begin>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */
				
					 if (how_to_add_an_indirect_row_triggerReady && !window.location.hash.includes("#action:timeadmin.editTimesheet") ) {
                window._wfx_close_live();
                how_to_add_an_indirect_row_triggerReady = false;
            }
				
			
				
				
					if (window._wfx_is_live()) {
                        window._wfx_settings['f5afd310-912f-11e6-85ad-04013d24cd02'] = function (event) {
                            potential_step = 0;
						
                        
				if ((event.step == 1)) {
                        how_to_add_an_indirect_row_triggerReady = true;
                    }
				
				
				
									
					 /*jump steps */
                        if ((window.location.hash.includes("#action:timeadmin.editTimesheet"))) {
                            potential_step = 1;
                        }

                       
                        if (potential_step && event.step <= potential_step) {
                            return {
                                "position": potential_step
                            };
                        }
				
				
				
				
				}
			}
				
  /*<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< end of How to add an indirect row?<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/
  
		
		
		
		

        /* ******************************************** How to create a resource? ****************************************** */

        /* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Begin>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */


        if (how_to_create_a_resource_triggerReady) {
          
            how_to_create_a_resource_triggerReady = false;
			  window._wfx_close_live();
        }

        // For step number 2
        if (how_to_create_a_resource_step == 2 && !window.location.hash.includes('#action:projmgr.resourceNewOptions_od')) {
            how_to_create_a_resource_step = 0;
            window._wfx_close_live();
        }

        // For step number 3
        if (how_to_create_a_resource_step == 3 && !window.location.hash.includes('#action:projmgr.newResource&isRole=0&superSecretTokenKey')) {
            how_to_create_a_resource_step = 0;
            window._wfx_close_live();
        }

        // For step number 8
        if (how_to_create_a_resource_step == 8 && !window.location.hash.includes('#action:projmgr.editResource&resour')) {
            how_to_create_a_resource_step = 0;
            window._wfx_close_live();
        }



        if (window._wfx_is_live()) {
            window._wfx_settings['ff602ea0-7f55-11e6-a47d-04013d24cc02'] = function(event) {
                potential_step = 0;

                //new button
                if ((event.step == 2) && window.location.hash.includes("#action:projmgr.getResources&")) {
                    how_to_create_a_resource_step = 2;
                    how_to_create_a_resource_triggerReady = false;
                }
                //next button
                if ((event.step == 3) && window.location.hash.includes("#action:projmgr.resourceNewOptions_od")) {
                    how_to_create_a_resource_step = 3;
                    how_to_create_a_resource_triggerReady = false;
                }


                if ((event.step >= 4 && event.step < 8) && (window.location.hash.includes("#action:projmgr.newResource&isRol"))) {
                    how_to_create_a_project_triggerReady = true;
                }

                //save button
                if ((event.step == 8) && window.location.hash.includes("#action:projmgr.newResource&isRol")) {
                    how_to_create_a_resource_step = 8;
                    how_to_create_a_resource_triggerReady = false;
                }

                /*jump steps */
                if ((window.location.hash.includes("#action:projmgr.getResources&"))) {
                    potential_step = 2;
                }

                if ((window.location.hash.includes("#action:projmgr.resourceNewOptions_od"))) {
                    potential_step = 3;
                }

                if (window.location.hash.includes("#action:projmgr.newResource&isRole=0&superSecretTokenKey")) {
                    potential_step = 4;
                }

                if (potential_step && event.step <= potential_step) {
                    return {
                        "position": potential_step
                    };
                }



            }

        }

        /*<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< end of How to create a resource<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/

        /* ******************************************** How to create a copy of cost plan ****************************************** */

        /* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Begin>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */




        if (how_to_create_a_copy_of_cost_plan_triggerReady) {
            window._wfx_close_live();
            how_to_create_a_copy_of_cost_plan_triggerReady = false;
        }


        // For step number 2
        if (how_to_create_a_copy_of_cost_plan_step == 2 && !window.location.hash.includes('#action:projmgr.projectDefaultTab')) {
            how_to_create_a_copy_of_cost_plan_step = 0;
            window._wfx_close_live();
        }

        // For step number 3
        if (how_to_create_a_copy_of_cost_plan_step == 3 && !window.location.hash.includes('#action:revmgr.costplanList.project&')) {
            how_to_create_a_copy_of_cost_plan_step = 0;
            window._wfx_close_live();
        }

        // For step number 6
        if (how_to_create_a_copy_of_cost_plan_step == 6 && !window.location.hash.includes('#action:revmgr.costplanList.project&')) {
            how_to_create_a_copy_of_cost_plan_step = 0;
            window._wfx_close_live();
        }

        // For step number 9
        if (how_to_create_a_copy_of_cost_plan_step == 9 && !window.location.hash.includes('#action:revmgr.costplanList&i')) {
            how_to_create_a_copy_of_cost_plan_step = 0;
            window._wfx_close_live();
        }

        if (window._wfx_is_live()) {
            window._wfx_settings['73182fd0-8494-11e6-ae8d-04013d24cf02'] = function(event) {
                potential_step = 0;

                //click on any project
                if ((event.step == 2) && window.location.hash.includes("#action:mainnav.work&classCode=project")) {
                    how_to_create_a_copy_of_cost_plan_step = 2;
                    how_to_create_a_copy_of_cost_plan_triggerReady = false;
                }
                //click on financial plans
                if ((event.step == 3) && window.location.hash.includes("#action:projmgr.projectDefaultTab")) {
                    how_to_create_a_copy_of_cost_plan_step = 3;
                    how_to_create_a_copy_of_cost_plan_triggerReady = false;
                }

                if ((event.step >= 4 && event.step < 6) && (window.location.hash.includes("#action:revmgr.costplanList.project&"))) {
                    how_to_create_a_project_triggerReady = true;
                }

                //click on copy cost plan
                if ((event.step == 6) && window.location.hash.includes("#action:revmgr.costplanList.project&")) {
                    how_to_create_a_copy_of_cost_plan_step = 6;
                    how_to_create_a_copy_of_cost_plan_triggerReady = false;
                }

                if ((event.step >= 7 && event.step < 9) && (window.location.hash.includes("#action:revmgr.costplanList.project&"))) {
                    how_to_create_a_project_triggerReady = true;
                }

                //click on save and return
                if ((event.step == 9) && window.location.hash.includes("#action:revmgr.costplanList.project&")) {
                    how_to_create_a_copy_of_cost_plan_step = 9;
                    how_to_create_a_copy_of_cost_plan_triggerReady = false;
                }


                /*jump steps */
                if ((window.location.hash.includes("#action:mainnav.work&classCode=project"))) {
                    potential_step = 2;
                }


                if (window.location.hash.includes("#action:projmgr.projectDefaultTab")) {
                    potential_step = 3;
                }

                if ((window.location.hash.includes("#action:revmgr.costplanList.project&"))) {
                    potential_step = 4;
                }




                if (potential_step && event.step <= potential_step) {
                    return {
                        "position": potential_step
                    };
                }




            }
        }


        /*<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< end of How to create a copy of cost plan<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/


		//1
        /* ******************************************** How to Create a Benefit Plan? ****************************************** */

        /* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Begin>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */
        //not working
        if (how_to_create_a_benefit_plan_triggerReady) {
            window._wfx_close_live();
            how_to_create_a_benefit_plan_triggerReady = false;
            console.log('default');
        }

        // For step number 2
        if (how_to_create_a_benefit_plan_step == 2 && !window.location.hash.includes('#action:projmgr.projectDefaultTab')) {
            how_to_create_a_benefit_plan_step = 0;
            window._wfx_close_live();
            console.log('step 2');
        }

        // For step number 3
        if (how_to_create_a_benefit_plan_step == 3 && !window.location.hash.includes('#action:revmgr.costplanList.project&')) {
            how_to_create_a_benefit_plan_step = 0;
            window._wfx_close_live();
            console.log('step 3');
        }

        // For step number 5
        if (how_to_create_a_benefit_plan_step == 5 && !window.location.hash.includes('#action:revmgr.benefitplanLis')) {
            how_to_create_a_benefit_plan_step = 0;
            window._wfx_close_live();
            console.log('step 5');
        }

        // For step number 6
        if (how_to_create_a_benefit_plan_step == 6 && !window.location.hash.includes('#action:revmgr.benefitplanLis')) {
            how_to_create_a_benefit_plan_step = 0;
            console.log('step 6');
            window._wfx_close_live();
        }

        // For step number 10
        if (how_to_create_a_benefit_plan_step == 10 && !window.location.hash.includes('#action:revmgr.benefitplanProperties')) {
            how_to_create_a_benefit_plan_step = 0;
            window._wfx_close_live();
            console.log('step 10');
        }


        if (window._wfx_is_live()) {
            window._wfx_settings['5dac4a20-83cf-11e6-ba2f-04013d24cd02'] = function(event) {
                potential_step = 0;


                //select project
                if ((event.step == 2) && window.location.hash.includes("#action:mainnav.work&classCode=project")) {
                    how_to_create_a_benefit_plan_step = 2;
                    how_to_create_a_benefit_plan_triggerReady = false;
                }

                //click on financial tab
                if ((event.step == 3) && window.location.hash.includes("#action:projmgr.projectDefaultTab")) {
                    how_to_create_a_benefit_plan_step = 3;
                    how_to_create_a_benefit_plan_triggerReady = false;
                }


                //hover on financial tab and click benefit plan
                if ((event.step >= 4 && event.step < 5) && (window.location.hash.includes("#action:revmgr.costplanList.projec"))) {
                    how_to_create_a_project_triggerReady = true;
                }


                //click on benefit plan
                if ((event.step == 5) && window.location.hash.includes("#action:revmgr.costplanList.project")) {
                    how_to_create_a_benefit_plan_step = 5;
                    how_to_create_a_benefit_plan_triggerReady = false;
                }


                //click new button
                if ((event.step == 6) && window.location.hash.includes("#action:revmgr.benefitplanList&")) {
                    how_to_create_a_benefit_plan_step = 6;
                    how_to_create_a_benefit_plan_triggerReady = false;
                }

                //create benefit plan
                if ((event.step >= 7 && event.step < 11) && (window.location.hash.includes("#action:revmgr.benefitplanProperties"))) {
                    how_to_create_a_project_triggerReady = true;
                }

                //save button
                if ((event.step == 10) && window.location.hash.includes("#action:revmgr.benefitplanProperties")) {
                    how_to_create_a_benefit_plan_step = 10;
                    how_to_create_a_benefit_plan_triggerReady = false;
                }



                /*jump steps */
                if ((window.location.hash.includes("#action:mainnav.work&classCode=project"))) {
                    potential_step = 2;
                }

                if ((window.location.hash.includes("#action:projmgr.projectDefaultTab"))) {
                    potential_step = 3;
                }

                if (window.location.hash.includes("#action:revmgr.costplanList.projec")) {
                    potential_step = 4;
                }
                if (window.location.hash.includes("#action:revmgr.benefitplanList&")) {
                    potential_step = 6;
                }

                if (window.location.hash.includes("#action:revmgr.benefitplanProperties")) {
                    potential_step = 7;
                }

                if (potential_step && event.step <= potential_step) {
                    return {
                        "position": potential_step
                    };
                }




            }

        }


        /*<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< end of How to Create a Benefit Plan?<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/

		
		
/* ******************************************************how_to_convert_idea_to_investment***************************************************/
/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Begin>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/
	if (how_to_convert_idea_to_investment_triggerReady)
	{
		window._wfx_close_live();
		how_to_convert_idea_to_investment_triggerReady = false;
	}

	// For step number 2
	if (how_to_convert_idea_to_investment_step == 2 && !window.location.hash.includes('#action:pma.ideaProperties')) 
	{
		how_to_convert_idea_to_investment_step = 0;
		window._wfx_close_live();
	}

	// For step number 4
	if (how_to_convert_idea_to_investment_step == 4 && !window.location.hash.includes('#action:pma.ideaConvert')) 
	{
		how_to_convert_idea_to_investment_step = 0;
		window._wfx_close_live();
	}

	// For step number 6
	if (how_to_convert_idea_to_investment_step == 6 && !window.location.hash.includes('#action:projmgr.projectNew&idea_id')) 
	{
		how_to_convert_idea_to_investment_step = 0;
		window._wfx_close_live();
	}
	
	// For step number 8
	if (how_to_convert_idea_to_investment_step == 8 && !window.location.hash.includes('#action:projmgr.applicationProperties&i')) 
	{
		how_to_convert_idea_to_investment_step = 0;
		window._wfx_close_live();
	}



	if (window._wfx_is_live()) 
	{
		window._wfx_settings['751c3b40-99df-11e6-a426-04013d24cc02'] = function (event) 
	{
		potential_step = 0;


			if ((event.step==2) && (window.location.hash.includes('#action:pma.ideaList'))) 
			{
				how_to_convert_idea_to_investment_step = 2
				how_to_convert_idea_to_investment_triggerReady = false;
			}

			if ((event.step >= 3 && event.step < 4) && (window.location.hash.includes('#action:pma.ideaProperties'))) 
			{
				how_to_convert_idea_to_investment_triggerReady = true;
			}

			if ((event.step==4) && (window.location.hash.includes('#action:pma.ideaProperties'))) 
			{
				how_to_convert_idea_to_investment_step = 4
				how_to_convert_idea_to_investment_triggerReady = false;
			}

			if ((event.step >= 5 && event.step < 6) && (window.location.hash.includes('#action:pma.ideaConvert'))) 
			{
				how_to_convert_idea_to_investment_triggerReady = true;
			}

			if ((event.step==6) && (window.location.hash.includes('#action:pma.ideaConvert'))) 
			{
				how_to_convert_idea_to_investment_step = 6
				how_to_convert_idea_to_investment_triggerReady = false;
			}

			if ((event.step >= 7 && event.step <= 9) && (window.location.hash.includes('#action:projmgr.applicationNew'))) 
			{
				how_to_convert_idea_to_investment_triggerReady = true;
			}
			
			
			if ((event.step==8) && (window.location.hash.includes('#action:projmgr.applicationNew'))) 
			{
				how_to_convert_idea_to_investment_step = 8
				how_to_convert_idea_to_investment_triggerReady = false;
			}
			


/*jump steps */
			if ((window.location.hash.includes('#action:pma.ideaList'))) 
			{
				potential_step = 2;
			}

			if ((window.location.hash.includes('#action:pma.ideaProperties'))) 
			{
				potential_step = 3;
			}

			if ((window.location.hash.includes('#action:pma.ideaConvert'))) 
			{
				potential_step = 5;
			}

			if ((window.location.hash.includes('#action:projmgr.projectNew&i'))) 
			{
				potential_step = 7;
			}


			if (potential_step && event.step <= potential_step) 
			{
				return {
				"position": potential_step
				};
			}
		}
	}

/*<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< End of how_to_convert_idea_to_investment<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/

		
		
		
		
		/* ******************************************************how_to_create_change_request***************************************************/
/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Begin>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/
	if (how_to_create_change_request_triggerReady)
	{
		window._wfx_close_live();
		how_to_create_change_request_triggerReady = false;
	}

	// For step number 2
	if (how_to_create_change_request_step == 2 && !window.location.hash.includes('#action:projmgr.projectDefaultTab')) 
	{
		how_to_create_change_request_step = 0;
		window._wfx_close_live();
	}

	// For step number 3
	if (how_to_create_change_request_step == 3 && !window.location.hash.includes('#action:itl.riskList')) 
	{
		how_to_create_change_request_step = 0;
		window._wfx_close_live();
	}

	// For step number 5
	if (how_to_create_change_request_step == 5 && !window.location.hash.includes('#action:itl.changeList')) 
	{
		how_to_create_change_request_step = 0;
		window._wfx_close_live();
	}

	// For step number 6
	if (how_to_create_change_request_step == 6 && !window.location.hash.includes('#action:itl.changeObject&')) 
	{
		how_to_create_change_request_step = 0;
		window._wfx_close_live();
	}

	// For step number 16
	if (how_to_create_change_request_step == 16 && !window.location.hash.includes('#act')) 
	{
		how_to_create_change_request_step = 0;
		window._wfx_close_live();
	}



	if (window._wfx_is_live()) 
	{
		window._wfx_settings['c0dd8dc0-8154-11e6-9479-04013d24cd02'] = function (event) 
	{
		potential_step = 0;


			if ((event.step==2) && (window.location.hash.includes('#action:mainnav.work'))) 
			{
				how_to_create_change_request_step = 2
				how_to_create_change_request_triggerReady = false;
			}

			if ((event.step==3) && (window.location.hash.includes('#action:projmgr.projectDefaultTab'))) 
			{
				how_to_create_change_request_step = 3
				how_to_create_change_request_triggerReady = false;
			}

			if ((event.step >= 4 && event.step < 5) && (window.location.hash.includes('#action:itl.riskList'))) 
			{
				how_to_create_change_request_triggerReady = true;
			}

			if ((event.step==5) && (window.location.hash.includes('#action:itl.riskList'))) 
			{
				how_to_create_change_request_step = 5
				how_to_create_change_request_triggerReady = false;
			}

			if ((event.step==6) && (window.location.hash.includes('#action:itl.changeList&'))) 
			{
				how_to_create_change_request_step = 6
				how_to_create_change_request_triggerReady = false;
			}

			if ((event.step >= 7 && event.step < 16) && (window.location.hash.includes('#action:itl.changeObject'))) 
			{
				how_to_create_change_request_triggerReady = true;
			}
			
			if ((event.step == 16) && (window.location.hash.includes('#action:itl.changeObject'))) 
			{
					how_to_create_change_request_step = 16
				how_to_create_change_request_triggerReady = false;
			}


/*jump steps */
			if ((window.location.hash.includes('#action:mainnav.work'))) 
			{
				potential_step = 2;
			}

			if ((window.location.hash.includes('#action:projmgr.projectDefaultTab'))) 
			{
				potential_step = 3;
			}

			if ((window.location.hash.includes('#action:itl.riskList'))) 
			{
				potential_step = 4;
			}

			if ((window.location.hash.includes('#action:itl.changeList'))) 
			{
				potential_step = 6;
			}

			if ((window.location.hash.includes('#action:itl.changeObject'))) 
			{
				potential_step = 7;
			}

			if (potential_step && event.step <= potential_step) 
			{
				return {
				"position": potential_step
				};
			}
		}
	}

/*<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< End of how_to_create_change_request<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/
		
		
        /* ******************************************** How to Reject an Idea? ****************************************** */

        /* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Begin>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */


        if (how_to_reject_an_idea_triggerReady) {
            window._wfx_close_live();
            how_to_reject_an_idea_triggerReady = false;
        }


        // For step number 2
        if (how_to_reject_an_idea_step == 2 && !window.location.hash.includes('#action:pma.ideaProperties&return')) {
            how_to_reject_an_idea_step = 0;
            window._wfx_close_live();
        }

        // For step number 6
        if (how_to_reject_an_idea_step == 6 && !window.location.hash.includes('#action:pma.ideaList')) {
            how_to_reject_an_idea_step = 0;
            window._wfx_close_live();
        }

        if (window._wfx_is_live()) {
            window._wfx_settings['2ff9dbb0-855f-11e6-ba2f-04013d24cd02'] = function(event) {
                potential_step = 0;


                if ((event.step == 2) && window.location.hash.includes("#action:pma.ideaList")) {
                    how_to_reject_an_idea_step = 2;
                    how_to_reject_an_idea_triggerReady = false;
                }



                if ((event.step >= 3 && event.step < 7) && (window.location.hash.includes("#action:pma.ideaProperties&return"))) {
                    how_to_create_a_project_triggerReady = true;
                }

                if ((event.step == 6) && window.location.hash.includes("#action:pma.ideaProperties&return")) {
                    how_to_reject_an_idea_step = 6;
                    how_to_reject_an_idea_triggerReady = false;
                }

                /*jump steps */
                if ((window.location.hash.includes("#action:pma.ideaList"))) {
                    potential_step = 2;
                }

                if ((window.location.hash.includes("#action:pma.ideaProperties&return"))) {
                    potential_step = 3;
                }


                if (potential_step && event.step <= potential_step) {
                    return {
                        "position": potential_step
                    };
                }




            }
        }

        /*<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< end of How to Reject an Idea?<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/



        /* ******************************************** How to Request More Information for an Idea?****************************************** */

        /* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Begin>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */



        if (how_to_request_more_information_for_an_idea_triggerReady) {
            window._wfx_close_live();
            how_to_request_more_information_for_an_idea_triggerReady = false;
        }



        // For step number 2
        if (how_to_request_more_information_for_an_idea_step == 2 && !window.location.hash.includes('#action:pma.ideaProperties')) {
            how_to_request_more_information_for_an_idea_step = 0;
            window._wfx_close_live();
        }

        // For step number 6
        if (how_to_request_more_information_for_an_idea_step == 6 && !window.location.hash.includes('#action:pma.ideaList')) {
            how_to_request_more_information_for_an_idea_step = 0;
            window._wfx_close_live();
        }


        if (window._wfx_is_live()) {
            window._wfx_settings['36a4e110-854d-11e6-ae8d-04013d24cf02'] = function(event) {
                potential_step = 0;


                //idea page
                if ((event.step == 2) && window.location.hash.includes("#action:pma.ideaList")) {
                    how_to_request_more_information_for_an_idea_step = 2;
                    how_to_request_more_information_for_an_idea_triggerReady = false;
                }



                //Idea- Process Improvement
                if ((event.step >= 3 && event.step < 6) && (window.location.hash.includes("#action:pma.ideaProperties"))) {
                    how_to_request_more_information_for_an_idea_triggerReady = true;
                }

                //return button
                if ((event.step == 6) && window.location.hash.includes("#action:pma.ideaProperties")) {
                    how_to_request_more_information_for_an_idea_step = 6;
                    how_to_request_more_information_for_an_idea_triggerReady = false;
                }




                /*jump steps */
                if ((window.location.hash.includes("#action:pma.ideaList"))) {
                    potential_step = 2;
                }

                if ((window.location.hash.includes("#action:pma.ideaProperties"))) {
                    potential_step = 3;
                }



                if (potential_step && event.step <= potential_step) {
                    return {
                        "position": potential_step
                    };
                }


            }

        }

        /*<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< end of How to Request More Information for an Idea?<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/

		/* ******************************************************how_to_manage_allocations_of_staff_member***************************************************/
/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Begin>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/
	if (how_to_manage_allocations_of_staff_member_triggerReady)
	{
		window._wfx_close_live();
		how_to_manage_allocations_of_staff_member_triggerReady = false;
	}

	// For step number 2
	if (how_to_manage_allocations_of_staff_member_step == 2 && !window.location.hash.includes('#action:projmgr.projectDefaultT')) 
	{
		how_to_manage_allocations_of_staff_member_step = 0;
		window._wfx_close_live();
	}

	// For step number 3
	if (how_to_manage_allocations_of_staff_member_step == 3 && !window.location.hash.includes('#action:projmgr.roster')) 
	{
		how_to_manage_allocations_of_staff_member_step = 0;
		window._wfx_close_live();
	}
	
	// For step number 4
	if (how_to_manage_allocations_of_staff_member_step == 4 && !window.location.hash.includes('#action:projmgr.getResourceProjectObjectLis')) 
	{
		how_to_manage_allocations_of_staff_member_step = 0;
		window._wfx_close_live();
	}

	
	
	
	// For step number 6
	if (how_to_manage_allocations_of_staff_member_step == 6 && !window.location.hash.includes('#action:projmgr.getResourceProjectObjectList')) 
	{
		how_to_manage_allocations_of_staff_member_step = 0;
		window._wfx_close_live();
	}

	// For step number 14
	if (how_to_manage_allocations_of_staff_member_step == 14 && !window.location.hash.includes('#action:projmgr.teamList')) 
	{
		how_to_manage_allocations_of_staff_member_step = 0;
		window._wfx_close_live();
	}

	if (window._wfx_is_live()) 
	{
		window._wfx_settings['23bc09d0-80c4-11e6-90aa-04013d24cf02'] = function (event) 
	{
		potential_step = 0;


			if ((event.step==2) && (window.location.hash.includes('#action:mainnav.work&classCo'))) 
			{
				how_to_manage_allocations_of_staff_member_step = 2
				how_to_manage_allocations_of_staff_member_triggerReady = false;
			}

			if ((event.step==3) && (window.location.hash.includes('#action:projmgr.projectDefaultT'))) 
			{
				how_to_manage_allocations_of_staff_member_step = 3;
				how_to_manage_allocations_of_staff_member_triggerReady = false;
			}

			if ((event.step==4) && (window.location.hash.includes('#action:projmgr.roster'))) 
			{
				how_to_manage_allocations_of_staff_member_step = 4;
				how_to_manage_allocations_of_staff_member_triggerReady = false;
			}

			 if ((event.step >= 5 && event.step < 6) && (window.location.hash.includes("#action:projmgr.getResourceProjectObjec"))) {
                        how_to_manage_allocations_of_staff_member_triggerReady = true;
                    }
			

			if ((event.step==6) && (window.location.hash.includes('#action:projmgr.getResourceProjectObjec'))) 
			{
				how_to_manage_allocations_of_staff_member_step = 6;
				how_to_manage_allocations_of_staff_member_triggerReady = false;
			}

			if ((event.step >= 7 && event.step < 14) && (window.location.hash.includes('#action:projmgr.teamList'))) 
			{
				how_to_manage_allocations_of_staff_member_triggerReady = true;
			}
			if ((event.step==14) && (window.location.hash.includes('#action:projmgr.teamList'))) 
			{
				how_to_manage_allocations_of_staff_member_step = 14;
				how_to_manage_allocations_of_staff_member_triggerReady = false;
			}


/*jump steps */
			if ((window.location.hash.includes('#action:mainnav.work&classCo'))) 
			{
				potential_step = 2;
			}

			if ((window.location.hash.includes('#action:projmgr.projectDefaultT'))) 
			{
				potential_step = 3;
			}

			if ((window.location.hash.includes('#action:projmgr.roster'))) 
			{
				potential_step = 4;
			}

			if ((window.location.hash.includes('#action:projmgr.getResourceProjectObjec'))) 
			{
				potential_step = 5;
			}
		if ((window.location.hash.includes('#action:projmgr.teamList'))) 
			{
				potential_step = 7;
			}

			if (potential_step && event.step <= potential_step) 
			{
				return {
				"position": potential_step
				};
			}
		}
	}

/*<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< End of how_to_manage_allocations_of_staff_member<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/



        /* ******************************************** How to add a team to an idea? ****************************************** */

        /* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Begin>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */

        if (how_to_add_a_team_to_an_idea_triggerReady) {
            window._wfx_close_live();
            how_to_add_a_team_to_an_idea_triggerReady = false;
        }


        // For step number 2
        if (how_to_add_a_team_to_an_idea_step == 2 && !window.location.hash.includes('#action:pma.ideaProperties&return_to=pma.ideaList')) {
            how_to_add_a_team_to_an_idea_step = 0;
            window._wfx_close_live();
        }

        // For step number 3
        if (how_to_add_a_team_to_an_idea_step == 3 && !window.location.hash.includes('#action:projmgr.npioStaffing.id')) {
            how_to_add_a_team_to_an_idea_step = 0;
            window._wfx_close_live();
        }

        // For step number 4
        if (how_to_add_a_team_to_an_idea_step == 4 && !window.location.hash.includes("#action:projmgr.npioStaffing.id")) {
            how_to_add_a_team_to_an_idea_step = 0;
            window._wfx_close_live();
        }


        if (window._wfx_is_live()) {
            window._wfx_settings['06bd5ca0-86fd-11e6-b370-04013d24cc02'] = function(event) {
                potential_step = 0;



                //idea page
                if ((event.step == 2) && window.location.hash.includes("#action:pma.ideaList")) {
                    how_to_add_a_team_to_an_idea_step = 2;
                    how_to_add_a_team_to_an_idea_triggerReady = false;
                }


                //team tab
                if ((event.step == 3) && window.location.hash.includes("#action:pma.ideaProperties&return_to=pma.ideaList")) {
                    how_to_add_a_team_to_an_idea_step = 3;
                    how_to_add_a_team_to_an_idea_triggerReady = false;
                }


                //add button
                if ((event.step == 4) && window.location.hash.includes("#action:projmgr.npioStaffing.id")) {
                    how_to_add_a_team_to_an_idea_step = 4;
                    how_to_add_a_team_to_an_idea_triggerReady = false;
                }


                /*jump steps */
                if ((window.location.hash.includes("#action:pma.ideaList"))) {
                    potential_step = 2;
                }

                if ((window.location.hash.includes("#action:pma.ideaProperties&return_to=pma.ideaList"))) {
                    potential_step = 3;
                }

                if (window.location.hash.includes("#action:projmgr.npioStaffing.id")) {
                    potential_step = 4;
                }

                if (potential_step && event.step <= potential_step) {
                    return {
                        "position": potential_step
                    };
                }


            }

        }




        /*<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< end of How to add a team to an idea?<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/

		
		/* ********************************************How to add an incident row? ****************************************** */

                /* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Begin>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */
				
				 if (how_to_add_a_non_project_investment_row_triggerReady) {
                window._wfx_close_live();
                how_to_add_a_non_project_investment_row_triggerReady = false;
            }
				
				// For step number 1
            if (how_to_add_a_non_project_investment_row_step == 1 && !window.location.hash.includes('#action:timeadmin.selectTimesheetInciden')) {
                how_to_add_a_non_project_investment_row_step = 0;
				
                window._wfx_close_live();
            }
				
				
				// For step number 2
				if (how_to_add_a_non_project_investment_row_step == 2 && !window.location.hash.includes('#action:timeadmin.selectTimesheetIncident&sortColum')) {
                how_to_add_a_non_project_investment_row_step = 0;
                window._wfx_close_live();
				}
			
			
			
			// For step number 4
            if (how_to_add_a_non_project_investment_row_step == 4 && !window.location.hash.includes('#action:timeadmin.editTimesheet&')) {
                how_to_add_a_non_project_investment_row_step = 0;
                window._wfx_close_live();
            }
				
				//step 5
				if ((event.step == 5) && window.location.hash.includes("#action:timeadmin.editTimesheet")) {
				how_to_add_a_non_project_investment_row_step = 0;
                window._wfx_close_live();                    
				}
				
				
				
				
				if (window._wfx_is_live()) {
                        window._wfx_settings['e1f46340-86f8-11e6-a787-04013d24cf02'] = function (event) {
                            potential_step = 0;
			
				if ((event.step == 1) && window.location.hash.includes("#action:timeadmin.editTimesheet")) {
                            how_to_add_a_non_project_investment_row_step = 1;
                            how_to_add_a_non_project_investment_row_triggerReady = false;
							console.log('1');
                        }
				
				
				//show all button
					if ((event.step == 2) && window.location.hash.includes("#action:timeadmin.selectTimesheetInciden")) {
                            how_to_add_a_non_project_investment_row_step = 2;
                            how_to_add_a_non_project_investment_row_triggerReady = false;
                        }
				
					//incident selection
			 if ((event.step >= 3 && event.step < 4) && (window.location.hash.includes("#action:timeadmin.selectTimesheetIncident&sortColum"))) {
                        how_to_add_a_non_project_investment_row_triggerReady = true;
                    }
				
			
				if ((event.step == 4) && window.location.hash.includes("#action:timeadmin.selectTimesheetIncident&sortColum")) {
                            how_to_add_a_non_project_investment_row_step = 4;
                            how_to_add_a_non_project_investment_row_triggerReady = false;
                        }
				
				
				//save button
				if ((event.step == 5) && window.location.hash.includes("#action:timeadmin.editTimesheet&")) {
                            how_to_add_a_non_project_investment_row_step = 5;
                            how_to_add_a_non_project_investment_row_triggerReady = false;
                        }
						
						 /*jump steps */
                        if ((window.location.hash.includes("#action:timeadmin.editTimesheet"))) {
                            potential_step = 1;
                        }

                        if ((window.location.hash.includes("#action:timeadmin.selectTimesheetInciden"))) {
                            potential_step = 2;
                        }

                        if (window.location.hash.includes("#action:timeadmin.selectTimesheetIncident&sortColum")) {
                            potential_step = 3;
                        }

                        if (potential_step && event.step <= potential_step) {
                            return {
                                "position": potential_step
                            };
                        }
					
					}
				}
				
				
  /*<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< end of How to add an incident row?<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/
  
  
		
		
		

        /* ******************************************** How to create a status report? ****************************************** */

        /* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Begin>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */

        if (how_to_create_a_status_report_triggerReady) {
            window._wfx_close_live();
            how_to_create_a_status_report_triggerReady = false;
        }

        // For step number 2
        if (how_to_create_a_status_report_step == 2 && !window.location.hash.includes('#action:projmgr.projectDefaultTab')) {
            how_to_create_a_status_report_step = 0;
            window._wfx_close_live();
        }


        // For step number 3
        if (how_to_create_a_status_report_step == 3 && !window.location.hash.includes('#action:projmgr.projectProperties&')) {
            how_to_create_a_status_report_step = 0;
            window._wfx_close_live();
        }

        // For step number 4
        if (how_to_create_a_status_report_step == 4 && !window.location.hash.includes('#action:projmgr.projectProperties&odf_view=projectCreate.subObjList')) {
            how_to_create_a_status_report_step = 0;
            window._wfx_close_live();
        }


        // For step number 5
        if (how_to_create_a_status_report_step == 5 && !window.location.hash.includes('#action:odf.subObjectProperties&odf_code=cop_prj_statusrpt&parent_odf_view=projec')) {
            how_to_create_a_status_report_step = 0;
            window._wfx_close_live();
        }

        // For step number 7
        if (how_to_create_a_status_report_step == 7 && !window.location.hash.includes('#action:projmgr.projectProperties&odf_vi')) {
            how_to_create_a_status_report_step = 0;
            window._wfx_close_live();
        }


        if (window._wfx_is_live()) {
            window._wfx_settings['12f0f050-847c-11e6-ae8d-04013d24cf02'] = function(event) {
                potential_step = 0;



                //select a project
                if ((event.step == 2) && window.location.hash.includes("#action:mainnav.work&classCode=project")) {
                    how_to_create_a_status_report_step = 2;
                    how_to_create_a_status_report_triggerReady = false;
                }

                //click on properties
                if ((event.step == 3) && window.location.hash.includes("#action:projmgr.projectDefaultTab")) {
                    how_to_create_a_status_report_step = 3;
                    how_to_create_a_status_report_triggerReady = false;
                }

                //click on status report
                if ((event.step == 4) && window.location.hash.includes("#action:projmgr.projectProperties&")) {
                    how_to_create_a_status_report_step = 3;
                    how_to_create_a_status_report_triggerReady = false;
                }

                //click on new button
                if ((event.step == 5) && window.location.hash.includes("#action:projmgr.projectProperties&odf_view=projectCreate.subObjList")) {
                    how_to_create_a_status_report_step = 5;
                    how_to_create_a_status_report_triggerReady = false;
                }


                if ((event.step >= 6 && event.step < 7) && (window.location.hash.includes("#action:odf.subObjectProperties&odf_code=cop_prj_statusrpt&parent_odf_view=proj"))) {
                    how_to_create_a_project_triggerReady = true;
                }

                //save and return button
                if ((event.step == 7) && window.location.hash.includes("#action:odf.subObjectProperties&odf_code=cop_prj_statusrpt&parent_odf_view=proj")) {
                    how_to_create_a_status_report_step = 7;
                    how_to_create_a_status_report_triggerReady = false;
                }


                /*jump steps */
                if ((window.location.hash.includes("#action:mainnav.work&classCode=project"))) {
                    potential_step = 2;
                }

                if ((window.location.hash.includes("#action:projmgr.projectDefaultTab"))) {
                    potential_step = 3;
                }

                if (window.location.hash.includes("#action:projmgr.projectProperties&")) {
                    potential_step = 3;
                }
                if (window.location.hash.includes("#action:projmgr.projectProperties&odf_view=projectCreate.subObjList")) {
                    potential_step = 5;
                }
                if (window.location.hash.includes("#action:odf.subObjectProperties&odf_code=cop_prj_statusrpt&parent_odf_view=proj")) {
                    potential_step = 6;
                }

                if (potential_step && event.step <= potential_step) {
                    return {
                        "position": potential_step
                    };
                }

            }
        }

        /*<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< end of How to create a Status Report??<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/

		
		
		
		/* ******************************************** How to Return your Submitted Timesheet? ****************************************** */

		/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Begin>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */
				
			
				 if (how_to_return_your_submitted_timesheet_triggerReady) {
                window._wfx_close_live();
                how_to_return_your_submitted_timesheet_triggerReady = false;
            }
			// For step number 3
            if (how_to_return_your_submitted_timesheet_step == 3 && !window.location.hash.includes('#action:timeadmin.timesheetBrowser&sortColumn=FULL_NAME&sortDirecti')) {
                how_to_return_your_submitted_timesheet_step = 0;
                window._wfx_close_live();
            }
			// For step number 5
            if (how_to_return_your_submitted_timesheet_step == 5 && !window.location.hash.includes('#action:timeadmin.timesheetBrowserReturn')) {
                how_to_return_your_submitted_timesheet_step = 0;
                window._wfx_close_live();
            }
			
			// For step number 7
            if (how_to_return_your_submitted_timesheet_step == 7 && !window.location.hash.includes('#action:timeadmin.timesheetBrowser&sortColumn=FULL_NAME&s')) {
                how_to_return_your_submitted_timesheet_step = 0;
                window._wfx_close_live();
            }
			
			// For step number 8
            if (how_to_return_your_submitted_timesheet_step == 8 && !window.location.hash.includes('#action:timeadmin.timesheetBrowser&sortColumn=FULL_')) {
                how_to_return_your_submitted_timesheet_step = 0;
                window._wfx_close_live();
            }
			
			
			if (window._wfx_is_live()) {
                        window._wfx_settings['f5530a50-895e-11e6-b370-04013d24cc02'] = function (event) {
                            potential_step = 0;
							
							
							//filter and return
								if ((event.step >= 2 && event.step < 4) && (window.location.hash.includes("#action:timeadmin.timesheetBrowserReturn"))) {
                        how_to_return_your_submitted_timesheet_triggerReady = true;
                    }
					
					//filter button
					if ((event.step == 3) && window.location.hash.includes("#action:timeadmin.timesheetBrowserReturn")) {
                            how_to_return_your_submitted_timesheet_step = 3;
                            how_to_return_your_submitted_timesheet_triggerReady = false;
                        }
						
						
							//select timesheet you want to return
					if ((event.step >= 4 && event.step < 5) && (window.location.hash.includes("#action:timeadmin.timesheetBrowser&sortColumn=FULL_NAME&sortDirecti"))) {
                        how_to_return_your_submitted_timesheet_triggerReady = true;
                    }
					
					//return timesheet button
					if ((event.step == 5) && window.location.hash.includes("#action:timeadmin.timesheetBrowser&sortColumn=FULL_NAME&sortDirecti")) {
                            how_to_return_your_submitted_timesheet_step = 5;
                            how_to_return_your_submitted_timesheet_triggerReady = false;
                        }
					
							
							//timesheet browser 
					if ((event.step >= 6 && event.step < 7) && (window.location.hash.includes("#action:timeadmin.timesheetBrowserReturn"))) {
                        how_to_return_your_submitted_timesheet_triggerReady = true;
                    }
							
							//filter button
					if ((event.step == 7) && window.location.hash.includes("#action:timeadmin.timesheetBrowserReturn")) {
                            how_to_return_your_submitted_timesheet_step = 7;
                            how_to_return_your_submitted_timesheet_triggerReady = false;
                        }
						
							//seeing the returned timesheet
						
					if ((event.step == 8) && window.location.hash.includes("#action:timeadmin.timesheetBrowser&sortColumn=FULL_NAME&sortD")) {
                            how_to_return_your_submitted_timesheet_step = 8;
                            how_to_return_your_submitted_timesheet_triggerReady = false;
                        }
							
							
							 /*jump steps */
                        if ((window.location.hash.includes("#action:timeadmin.timesheetBrowserReturn"))) {
                            potential_step = 2;
                        }

                        if ((window.location.hash.includes("#action:timeadmin.timesheetBrowser&sortColumn=FULL_NAME&sortDirecti"))) {
                            potential_step = 4;
                        }

                       

                        if (potential_step && event.step <= potential_step) {
                            return {
                                "position": potential_step
                            };
                        }
							
						}
			}
				
				
				
				
				
  /*<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< end of How to Return your Submitted Timesheet?<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/
  
		
		

        /* ******************************************** How to create an Incident?? ****************************************** */

        /* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Begin>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */

        if (how_to_create_an_incident_triggerReady) {
            window._wfx_close_live();
            how_to_create_an_incident_triggerReady = false;
        }


        // For step number 2
        if (how_to_create_an_incident_step == 2 && !window.location.hash.includes('#action:itl.incidentObject&partition_code')) {
            how_to_create_an_incident_step = 0;
            window._wfx_close_live();
        }


        // For step number 11
        if (how_to_create_an_incident_step == 11 && !window.location.hash.includes('#action:itl.incidentList&incidentListT')) {
            how_to_create_an_incident_step = 0;
            window._wfx_close_live();
        }

        // For step number 12
        if (how_to_create_an_incident_step == 12 && !window.location.hash.includes('#action:itl.incidentList&incidentListT')) {
            how_to_create_an_incident_step = 0;
            window._wfx_close_live();
        }



        if (window._wfx_is_live()) {
            window._wfx_settings['463c1f00-8636-11e6-b370-04013d24cc02'] = function(event) {
                potential_step = 0;


                if ((event.step == 2) && window.location.hash.includes("#action:itl.incidentList")) {
                    how_to_create_an_incident_step = 2;
                    how_to_create_an_incident_triggerReady = false;
                }

                //create incident
                if ((event.step >= 3 && event.step < 11) && (window.location.hash.includes("#action:itl.incidentObject&partition_code"))) {
                    how_to_create_an_incident_triggerReady = true;
                }

                //save and return
                if ((event.step == 11) && window.location.hash.includes("#action:itl.incidentObject&partition_code")) {
                    how_to_create_an_incident_step = 11;
                    how_to_create_an_incident_triggerReady = false;
                }


                //last step 
                if ((event.step == 12) && window.location.hash.includes("#action:itl.incidentList&incidentListT")) {
                    how_to_create_an_incident_step = 12;
                    how_to_create_an_incident_triggerReady = false;
                }




                /*jump steps */
                if ((window.location.hash.includes("#action:itl.incidentList"))) {
                    potential_step = 2;
                }

                if ((window.location.hash.includes("#action:itl.incidentObject&partition_code"))) {
                    potential_step = 3;
                }

                if (window.location.hash.includes("#action:itl.incidentList&incidentListT")) {
                    potential_step = 12;
                }

                if (potential_step && event.step <= potential_step) {
                    return {
                        "position": potential_step
                    };
                }

            }
        }
        


        /*<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< end of How to create an Incident??<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/

        /* ********************************************How to add document to a Resource? ****************************************** */

        /* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Begin>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */



        if (how_to_add_document_to_a_resource_triggerReady) {
            window._wfx_close_live();
            how_to_add_document_to_a_resource_triggerReady = false;
        }


        // For step number 2
        if (how_to_add_document_to_a_resource_step == 2 && !window.location.hash.includes('#action:projmgr.editResource&odf_return_to=projmgr.get')) {
            how_to_add_document_to_a_resource_step = 0;
            window._wfx_close_live();
        }

        // For step number 3
        if (how_to_add_document_to_a_resource_step == 3 && !window.location.hash.includes('#action:dms.ResourcesFileManager&')) {
            how_to_add_document_to_a_resource_step = 0;
            window._wfx_close_live();
        }

        // For step number 4
        if (how_to_add_document_to_a_resource_step == 4 && !window.location.hash.includes('#action:dms.ResourcesaddMultipleFiles&uitk.navigation.')) {
            how_to_add_document_to_a_resource_step = 0;
            window._wfx_close_live();
        }

        // For step number 6
        if (how_to_add_document_to_a_resource_step == 6 && !window.location.hash.includes('#action:dms.ResourcesFileManager&taskID=&cancelAction=dms')) {
            how_to_add_document_to_a_resource_step = 0;
            window._wfx_close_live();
        }

        if (window._wfx_is_live()) {
            window._wfx_settings['08929ba0-9781-11e6-836b-04013d24cc02'] = function(event) {
                potential_step = 0;


                //resource list
                if ((event.step == 2) && window.location.hash.includes("#action:projmgr.getResources&rel")) {
                    how_to_add_document_to_a_resource_step = 2;
                    how_to_add_document_to_a_resource_triggerReady = false;
                }



                //click on document manager
                if ((event.step == 3) && window.location.hash.includes("#action:projmgr.editResource&odf_return_to=projmgr.get")) {
                    how_to_add_document_to_a_resource_step = 3;
                    how_to_add_document_to_a_resource_triggerReady = false;
                }

                //select add documents from drop down
                if ((event.step == 4) && window.location.hash.includes("#action:dms.ResourcesFileManager&")) {
                    how_to_add_document_to_a_resource_step = 4;
                    how_to_add_document_to_a_resource_triggerReady = false;
                }

                //choose and upload document
                if ((event.step >= 5 && event.step < 6) && (window.location.hash.includes("#action:dms.ResourcesaddMultipleFile"))) {
                    how_to_add_document_to_a_resource_triggerReady = true;
                }
                //ADD button
                if ((event.step == 6) && window.location.hash.includes("#action:dms.ResourcesaddMultipleFile")) {
                    how_to_add_document_to_a_resource_step = 6;
                    how_to_add_document_to_a_resource_triggerReady = false;
                }



                /*jump steps */
                if ((window.location.hash.includes("#action:projmgr.getResources&rel"))) {
                    potential_step = 2;
                }

                if ((window.location.hash.includes("#action:projmgr.editResource&odf_return_to=projmgr.get"))) {
                    potential_step = 3;
                }

                if (window.location.hash.includes("#action:dms.ResourcesFileManager&")) {
                    potential_step = 4;
                }

                if (window.location.hash.includes("#action:dms.ResourcesaddMultipleFile")) {
                    potential_step = 5;
                }

                if (potential_step && event.step <= potential_step) {
                    return {
                        "position": potential_step
                    };
                }



            }
        }




        /*<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< end of How to add document to a Resource?<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/




        /* ******************************************** How to Add a Note for a Time Entry?? ****************************************** */

        /* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Begin>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */


        if (how_to_add_a_note_for_a_time_entry_triggerReady) {
            window._wfx_close_live();
            how_to_add_a_note_for_a_time_entry_triggerReady = false;
        }


        // For step number 2
        if (how_to_add_a_note_for_a_time_entry_step == 2 && !window.location.hash.includes('#action:timeadmin.editTimesheet&re')) {
            how_to_add_a_note_for_a_time_entry_step = 0;
            window._wfx_close_live();
        }
        // For step number 5
        if (how_to_add_a_note_for_a_time_entry_step == 5 && !window.location.hash.includes('#action:timeadmin.editTimesheet&re')) {
            how_to_add_a_note_for_a_time_entry_step = 0;
            window._wfx_close_live();
        }

        if (window._wfx_is_live()) {
            window._wfx_settings['ce45b450-895c-11e6-85ad-04013d24cd02'] = function(event) {
                potential_step = 0;

                //add a note
                if ((event.step == 1) && window.location.hash.includes("#action:timeadmin.editTimesheet&re")) {
                    how_to_add_a_note_for_a_time_entry_step = 2;
                    how_to_add_a_note_for_a_time_entry_triggerReady = false;
                }

                //save 
                if ((event.step == 5) && window.location.hash.includes("#action:timeadmin.editTimesheet&re")) {
                    how_to_add_a_note_for_a_time_entry_step = 5;
                    how_to_add_a_note_for_a_time_entry_triggerReady = false;
                }

                /*jump steps */
                if ((window.location.hash.includes("#action:timeadmin.editTimesheet&re"))) {
                    potential_step = 1;
                }

                if (potential_step && event.step <= potential_step) {
                    return {
                        "position": potential_step
                    };
                }




            }
        }
        /*<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< end of How to Add a Note for a Time Entry??<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/

		
		 /* ******************************************** How to Add a Non-project Investment Row?? ****************************************** */

        /* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Begin>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */

        if (how_to_add_a_non_project_investment_row_triggerReady) {
            window._wfx_close_live();
            how_to_add_a_non_project_investment_row_triggerReady = false;
        }

        // For step number 2
        if (how_to_add_a_non_project_investment_row_step == 1 && !window.location.hash.includes('#action:timeadmin.selectTimesheetInvestmentO')) {
            how_to_add_a_non_project_investment_row_step = 0;
            window._wfx_close_live();
        }

        // For step number 3
        if (how_to_add_a_non_project_investment_row_step == 3 && !window.location.hash.includes('#action:timeadmin.editTimesheet&i')) {
            how_to_add_a_non_project_investment_row_step = 0;
            window._wfx_close_live();
        }

        // For step number 4
        if (how_to_add_a_non_project_investment_row_step == 4 && !window.location.hash.includes('#action:timeadmin.editTimeshee')) {
            how_to_add_a_non_project_investment_row_step = 0;
            window._wfx_close_live();
        }


        if (window._wfx_is_live()) {
            window._wfx_settings['8b7295b0-8945-11e6-a787-04013d24cf02'] = function(event) {
                potential_step = 0;

                if ((event.step == 1) && window.location.hash.includes("#action:timeadmin.editTimesheet&r")) {
                    how_to_add_a_non_project_investment_row_step = 1;
                    how_to_add_a_non_project_investment_row_triggerReady = false;
                }



                if ((event.step >= 2 && event.step < 4) && (window.location.hash.includes("#action:timeadmin.selectTimesheetInvestmentO"))) {
                    how_to_add_a_non_project_investment_row_triggerReady = true;
                }

                //add button
                if ((event.step == 3) && window.location.hash.includes("#action:timeadmin.selectTimesheetInvestmentO")) {
                    how_to_add_a_non_project_investment_row_step = 3;
                    how_to_add_a_non_project_investment_row_triggerReady = false;
                }

                //save button
                if ((event.step == 4) && window.location.hash.includes("#action:timeadmin.editTimesheet&i")) {
                    how_to_add_a_non_project_investment_row_step = 4;
                    how_to_add_a_non_project_investment_row_triggerReady = false;
                }

                /*jump steps */
                if ((window.location.hash.includes("#action:timeadmin.editTimesheet&r"))) {
                    potential_step = 1;
                }

                if ((window.location.hash.includes("#action:timeadmin.selectTimesheetInvestmentO"))) {
                    potential_step = 2;
                }

                if (window.location.hash.includes("#action:timeadmin.editTimesheet&i")) {
                    potential_step = 4;
                }

                if (potential_step && event.step <= potential_step) {
                    return {
                        "position": potential_step
                    };
                }




            }

        }



        /*<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< end of How to Add a Non-project Investment Row??<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/


		
		
		
        /* ******************************************** How to submit an Idea? ****************************************** Rishi */

        /* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Begin>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */

        if (how_to_submit_an_idea_triggerReady) {
            window._wfx_close_live();
            how_to_submit_an_idea_triggerReady = false;
        }

        // For step number 2
        if (how_to_submit_an_idea_step == 2 && !window.location.hash.includes('#action:pma.ideaList')) {
            how_to_submit_an_idea_step = 0;
            window._wfx_close_live();
        }


        // For step number 3
        if (how_to_submit_an_idea_step == 3 && !window.location.hash.includes('#action:pma.ideaList')) {
            how_to_submit_an_idea_step = 0;
            window._wfx_close_live();
        }

        // For step number 4
        if (how_to_submit_an_idea_step == 4 && !window.location.hash.includes('#action:pma.ideaList&page_pma.ideaList_')) {
            how_to_submit_an_idea_step = 0;
            window._wfx_close_live();
        }

        // For step number 5
        if (how_to_submit_an_idea_step == 5 && !window.location.hash.includes('#action:pma.ideaProperties&return_to=')) {
            how_to_submit_an_idea_step = 0;
            window._wfx_close_live();
        }

        // For step number 6
        if (how_to_submit_an_idea_step == 6 && !window.location.hash.includes('#action:pma.ideaProperties&return_to')) {
            how_to_submit_an_idea_step = 0;
            window._wfx_close_live();
        }

        // For step number 7
        if (how_to_submit_an_idea_step == 7 && !window.location.hash.includes('#action:pma.ideaProperties&return_to=pma.ideaList')) {
            how_to_submit_an_idea_step = 0;
            window._wfx_close_live();
        }


        if (window._wfx_is_live()) {
            window._wfx_settings['d55289f0-8964-11e6-85ad-04013d24cd02'] = function(event) {
                potential_step = 0;



                //Click on plus icon
                if ((event.step == 2) && window.location.hash.includes("#action:pma.ideaList")) {
                    how_to_submit_an_idea_step = 2;
                    how_to_submit_an_idea_triggerReady = false;
                }

                //Select Status as Unapproved
                if ((event.step == 3) && window.location.hash.includes("#action:pma.ideaList")) {
                    how_to_submit_an_idea_step = 3;
                    how_to_submit_an_idea_triggerReady = false;
                }

                //Click on Filter button
                if ((event.step == 4) && window.location.hash.includes("#action:pma.ideaList")) {
                    how_to_submit_an_idea_step = 4;
                    how_to_submit_an_idea_triggerReady = false;
                }

                //Click on any Idea
                if ((event.step == 5) && window.location.hash.includes("#action:pma.ideaList&page_pma.ideaList")) {
                    how_to_submit_an_idea_step = 5;
                    how_to_submit_an_idea_triggerReady = false;
                }

                //Select Status as Submitted for Approval
                if ((event.step >= 6 && event.step < 7) && (window.location.hash.includes("#action:pma.ideaProperties&return_to=pma.ideaList"))) {
                    how_to_submit_an_idea_triggerReady = true;
                }

                //save and return button
                if ((event.step == 7) && window.location.hash.includes("#action:pma.ideaProperties&return_to=pma.ideaList")) {
                    how_to_submit_an_idea_step = 7;
                    how_to_submit_an_idea_triggerReady = false;
                }


                /*jump steps */
                if ((window.location.hash.includes("#action:pma.ideaList"))) {
                    potential_step = 2;
                }
                if (window.location.hash.includes("#action:pma.ideaProperties&return_to=pma.ideaList")) {
                    potential_step = 6;
                }

                if (potential_step && event.step <= potential_step) {
                    return {
                        "position": potential_step
                    };
                }




            }
        }


        /*<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< end of How to submit an Idea?<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/

	


		     /* ******************************************** How to Flag an Incident for Conversion? ******************************************Rishi */
 
        /* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Begin>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */
 
        if (how_to_flag_an_incident_for_conversion_triggerReady) {
            window._wfx_close_live();
            how_to_flag_an_incident_for_conversion_triggerReady = false;
        }
 
        // For step number 2
        if (how_to_flag_an_incident_for_conversion_step == 2 && !window.location.hash.includes('#action:itl.incidentList')) {
            how_to_flag_an_incident_for_conversion_step = 0;
            window._wfx_close_live();
        }
 
        // For step number 3
        if (how_to_flag_an_incident_for_conversion_step == 3 && !window.location.hash.includes('#action:itl.incidentList&incidentListType=reportedBy&ui.page.space=itl.incidentList')) {
            how_to_flag_an_incident_for_conversion_step = 0;
            window._wfx_close_live();
        }
 
        // For step number 4
        if (how_to_flag_an_incident_for_conversion_step == 4 && !window.location.hash.includes('#action:itl.incidentObject')) {
            how_to_flag_an_incident_for_conversion_step = 0;
            window._wfx_close_live();
        }
 
        // For step number 5
        if (how_to_flag_an_incident_for_conversion_step == 5 && !window.location.hash.includes('#action:itl.incidentObject')) {
            how_to_flag_an_incident_for_conversion_step = 0;
            window._wfx_close_live();
        }
 
        // For step number 6
        if (how_to_flag_an_incident_for_conversion_step == 6 && !window.location.hash.includes('#action:itl.incidentObject')) {
            how_to_flag_an_incident_for_conversion_step = 0;
            window._wfx_close_live();
        }
 
        // For step number 7
        if (how_to_flag_an_incident_for_conversion_step == 7 && !window.location.hash.includes('#action:itl.incidentObject')) {
            how_to_flag_an_incident_for_conversion_step = 0;
            window._wfx_close_live();
        }
        // For step number 8
        if (how_to_flag_an_incident_for_conversion_step == 8 && !window.location.hash.includes('#action:itl.incidentObject')) {
            how_to_flag_an_incident_for_conversion_step = 0;
            window._wfx_close_live();
        }
        // For step number 9
        if (how_to_flag_an_incident_for_conversion_step == 9 && !window.location.hash.includes('#action:itl.incidentObject')) {
            how_to_flag_an_incident_for_conversion_step = 0;
            window._wfx_close_live();
        }
        // For step number 10
        if (how_to_flag_an_incident_for_conversion_step == 10 && !window.location.hash.includes('#action:itl.incidentList&id=&id=&id=&incidentListType=reportedBy')) {
            how_to_flag_an_incident_for_conversion_step = 0;
            window._wfx_close_live();
        }
 
        if (window._wfx_is_live()) {
            window._wfx_settings['9927f260-864b-11e6-a787-04013d24cf02'] = function(event) {
                potential_step = 0;
 
 
 
                //Click  the Reported by Me tab
                if ((event.step == 2) && window.location.hash.includes("#action:itl.incidentList")) {
                    console.log(2);
                    how_to_flag_an_incident_for_conversion_step = 2;
                   how_to_flag_an_incident_for_conversion_triggerReady = false;
                }
 
                //Click onn required Incident
                if ((event.step == 3) && window.location.hash.includes("#action:itl.incidentList&incidentListType=reportedBy&ui.page.space=itl.incidentList")) {
                    how_to_flag_an_incident_for_conversion_step = 3;
                    how_to_flag_an_incident_for_conversion_triggerReady = false;
                }
 
                //Select Status as Submitted for Approval
                if ((event.step >= 4 && event.step < 9) && (window.location.hash.includes("#action:itl.incidentObject"))) {
                    how_to_flag_an_incident_for_conversion_triggerReady = true;
                }
 
                //Incident is now flagged for conversion
                if ((event.step == 10) && window.location.hash.includes("#action:itl.incidentList&id=&incidentListType=reportedBy")) {
                    how_to_flag_an_incident_for_conversion_step = 10;
                    how_to_flag_an_incident_for_conversion_triggerReady = false;
                }
 
 
                /*jump steps */
                if ((window.location.hash.includes("#action:itl.incidentList"))) {
                    potential_step = 2;
                }
                if (window.location.hash.includes("#action:itl.incidentList&incidentListType=reportedBy&ui.page.space=itl.incidentList")) {
                    potential_step = 3;
                }
                if ((event.step >= 4 && event.step < 9) && (window.location.hash.includes("#action:itl.incidentObject"))) {
                    how_to_create_a_project_triggerReady = true;
                }
                if (window.location.hash.includes("#action:itl.incidentList&id=&id=&id=&incidentListType=reportedBy")) {
                    potential_step = 10;
                }
 
                if (potential_step && event.step <= potential_step) {
                    return {
                        "position": potential_step
                    };
                }
 
 
 
 
            }
        }
 
 
 
 
        /*<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< end of How to Flag an Incident for Conversion?<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<Rishi<*/
 

       /* GTc*/
	   

/* ******************************************************<<<How to Enable a Project Financially>>>***************************************************/
//Author : Arun
/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Begin>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/
if (how_to_enable_project_financially_triggerReady) {
    window._wfx_close_live();
    how_to_enable_project_financially_triggerReady = false;
    console.log('closed' + how_to_enable_project_financially_step);
}
//for step number 2....... Click on any project for which you to enable financially
if (how_to_enable_project_financially_step == 2 && !window.location.hash.includes('#action:projmgr.projectDefaultTab')) {
    how_to_enable_project_financially_step = 0;
    window._wfx_close_live();
}

//for step number 3....... Click on the properties tab of the project
if (how_to_enable_project_financially_step == 3 && !window.location.hash.includes("#action:projmgr.projectProperties")) {
    how_to_enable_project_financially_step = 0;
    window._wfx_close_live();
}


//for step number 4....... Hover on properties tab click on financial link 
if (how_to_enable_project_financially_step == 4 && !window.location.hash.includes("#action:projmgr.projectProperties&odf_view=finpropertiesUpdate")) {
    how_to_enable_project_financially_step = 0;
    window._wfx_close_live();
}

//for step number 5....... Changing the financial status to open
if (how_to_enable_project_financially_step == 5 && !window.location.hash.includes('#action:projmgr.projectList&class')) {
    how_to_enable_project_financially_step = 0;
    window._wfx_close_live();
}

//for step number 12...... Click on save and return button
if (how_to_enable_project_financially_step == 12 && !window.location.hash.includes('#action:projmgr.projectList&class')) {
    how_to_enable_project_financially_step = 0;
    window._wfx_close_live();
}


if (window._wfx_is_live()) {
    window._wfx_settings['dad54b20-9778-11e6-914c-04013d24cd02'] = function(event) {
        potential_step = 0;
        //Click on any project for which you want to enable financially
        if ((event.step == 2) && (window.location.hash.includes("#action:mainnav.work&classCode=project"))) {
            how_to_enable_project_financially_step = 2;
            how_to_enable_project_financially_triggerReady = false;
        }
        //Click on the properties tab
        if ((event.step == 3) && (window.location.hash.includes("#action:projmgr.projectDefaultTab"))) {

            how_to_enable_project_financially_triggerReady = false;
            how_to_enable_project_financially_step = 3;
        }
        //Hover the properties tab, click on financial link
        if ((event.step == 4) && (window.location.hash.includes("#action:projmgr.projectProperties"))) {
            how_to_enable_project_financially_step = 4;
            how_to_enable_project_financially_triggerReady = false;
        }
        //Select the financial status link and select open
        if ((event.step >= 5 && event.step < 13) && (window.location.hash.includes("action:projmgr.projectProperties&odf_view=finpropertiesUpdate"))) {
            how_to_enable_project_financially_triggerReady = true;
		}
        //Click on save and return button
        if ((event.step == 12) && (window.location.hash.includes("#action:projmgr.projectProperties"))) {
            how_to_enable_project_financially_triggerReady = true;
        }

        /*jump steps */

        //Click on any project page
        if ((window.location.hash.includes("#action:mainnav.work&classCode=project"))) {
            potential_step = 2;

        }
        //Click on properties tab page
        if ((window.location.hash.includes("#action:projmgr.projectDefaultTab"))) {

            potential_step = 3;
        }
        //Hover on propertes tab, click on financial link page
        if ((window.location.hash.includes("#action:projmgr.projectProperties"))) {

            potential_step = 4;
        }
        //Changing the financial status page
        if ((window.location.hash.includes("#action:projmgr.projectProperties&odf_view=finpropertiesUpdate.projectCreate"))) {

            potential_step = 5;
        }

        if (potential_step && event.step <= potential_step) {
            return {
                "position": potential_step
            };
        }
    }
}

/*<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< End of How to Enable Project Financially <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/


/*<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<How to add a Participant>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/
/* @Author : Venu; 
 variable for  How to add a Participant Step */
/*<<<<<<<<<<<<< Begin <<<<<<<<<<<<<<<<*/

if (how_to_add_participant_triggerReady) {
    window._wfx_close_live();
    how_to_add_participant_triggerReady = false;
}
//for step number 2...Select any Project to add Participant
if (how_to_add_participant_step == 2 && !window.location.hash.includes('#action:projmgr.projectDefaultTab')) {
    how_to_add_participant_step = 0;
    window._wfx_close_live();
}
//for step number 3...Click on Team tab
if (how_to_add_participant_step == 3 && !window.location.hash.includes('#action:projmgr.roster')) {
    how_to_add_participant_step = 0;
    window._wfx_close_live();
}

//for step number 4...Click on Team tab
if (how_to_add_participant_step == 4 && !window.location.hash.includes('#action:collab.projectPartic')) {
    how_to_add_participant_step = 0;
    window._wfx_close_live();
}
//for step number 5...Click on Participants link
if (how_to_add_participant_step == 5 && !window.location.hash.includes('#action:collab.projectParticipants')) {
    how_to_add_participant_step = 0;
    window._wfx_close_live();
}

if (window._wfx_is_live()) {
    window._wfx_settings['fd7d9a20-99bb-11e6-9bb3-04013d24cf02'] = function(event) {
        potential_step = 0;
        //Select any Project to add Participant
        if ((event.step == 2) && (window.location.hash.includes("#action:mainnav.work&classCode=project"))) {
            how_to_add_participant_step = 2;
            how_to_add_participant_triggerReady = false;
        }
        //Click on Team tab
        if ((event.step == 3) && (window.location.hash.includes("#action:projmgr.projectDefaultTab"))) {
            how_to_add_participant_step = 3;
            how_to_add_participant_triggerReady = false;
        }
		
		
		//Click on Team tab
        if ((event.step == 4) && (window.location.hash.includes("#action:projmgr.roster"))) {
            how_to_add_participant_step = 4;
            how_to_add_participant_triggerReady = false;
        }
		
		
		
       
        //mouse over on team tab
        if ((event.step == 5) && (window.location.hash.includes("#action:collab.projectPartici"))) {
            how_to_add_participant_step = 5;
            how_to_add_participant_triggerReady = false;
        }
       

        /*jump steps */
        //project list page
        if ((window.location.hash.includes("#action:mainnav.work&classCode=project"))) {
            potential_step = 2;

        }
        //project default page
        if ((window.location.hash.includes("#action:projmgr.projectDefaultTab"))) {
            potential_step = 3;

        }
        //Team staff page
        if ((window.location.hash.includes("#action:projmgr.roster"))) {
            potential_step = 4;

        }
        //Participants Page
        if ((window.location.hash.includes("#action:collab.projectParticipants"))) {
            potential_step = 6;

        }
        if (potential_step && event.step <= potential_step) {
            return {
                "position": potential_step
            };
        }
    }
}
/*<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<END OF How to add a Participant>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*********************************/


/*<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<How to create a Risk>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*********************************/
/* @Author : Venu; 
 variable for  How to Create a Risk */
/*<<<<<<<<<<<<< Begin <<<<<<<<<<<<<<<<*/


if (how_to_create_risk_triggerReady) {
    window._wfx_close_live();
    how_to_create_risk_triggerReady = false;
}
//for step number 2...Click on any Project for which you want to create a Risk
if (how_to_create_risk__step == 2 && !window.location.hash.includes('#action:projmgr.projectDefaultTab')) {
    how_to_create_risk__step = 0;
    window._wfx_close_live();
}
//for step number 3...Click on Risks/Issues/Changes tab
if (how_to_create_risk__step == 3 && !window.location.hash.includes('#action:itl.riskList&id')) {
    how_to_create_risk__step = 0;
    window._wfx_close_live();
}
//for step number 4...Click on New button
if (how_to_create_risk__step == 4 && !window.location.hash.includes('#action:itl.riskObject&id')) {
    how_to_create_risk__step = 0;
    window._wfx_close_live();
}
//for step number 5...Create Risk Property section
if (how_to_create_risk__step == 5 && !window.location.hash.includes('#action:itl.riskObject&odf_pk')) {
    how_to_create_risk__step = 0;
    window._wfx_close_live();
}
//for step number 6...Click on Save button
if (how_to_create_risk__step == 11 && !window.location.hash.includes('#action:itl.riskList&ui.page.space=mainnav.work&page.space=mainnav.work&id')) {
    how_to_create_risk__step = 0;
    window._wfx_close_live();
}
//for step number 11...Click on Save button
if (how_to_create_risk__step == 13 && !window.location.hash.includes('#action:itl.riskList&ui.page.space=mainnav.work&page.space=mainnav.work&id')) {
    how_to_create_risk__step = 0;
    window._wfx_close_live();
}
//for step number 13...Click on Save And Return button		
if (how_to_create_risk__step == 13 && !window.location.hash.includes('#action:projmgr.projectProperties&id')) {
    how_to_create_risk__step = 0;
    window._wfx_close_live();
}
//for step number 14...Click on Properties tab and hover on it
if (how_to_create_risk__step == 14 && !window.location.hash.includes('#action:projmgr.projectProperties&odf_view=projectRisk&id')) {
    how_to_create_risk__step = 0;
    window._wfx_close_live();
}
//for step number 15...Click on Risk/Risk Rating link
if (how_to_create_risk__step == 15 && !window.location.hash.includes('#action:projmgr.projectProperties&odf_view=projectRisk&id')) {
    how_to_create_risk__step = 0;
    window._wfx_close_live();
}

if (window._wfx_is_live()) {
    window._wfx_settings['33c53fe0-815f-11e6-90aa-04013d24cf02'] = function(event) {
        potential_step = 0;
        //for step number 2...Click on any Project for which you want to create a Risk
        if ((event.step == 2) && (window.location.hash.includes("#action:mainnav.work&classCode=project"))) {
            how_to_create_risk__step = 2;
            how_to_create_risk_triggerReady = false;
        }
        //for step number 3...Click on Risks/Issues/Changes tab
        if ((event.step == 3) && (window.location.hash.includes("#action:projmgr.projectDefaultTab"))) {
            how_to_create_risk__step = 3;
            how_to_create_risk_triggerReady = false;
        }
        //for step number 4...Click on New button
        if ((event.step == 4) && (window.location.hash.includes("#action:itl.riskList&id"))) {
            how_to_create_risk__step = 4;
            how_to_create_risk_triggerReady = false;
        }
        //for step number 5...Create Risk Property section
        if ((event.step >= 5 && event.step < 10) && (window.location.hash.includes("#action:itl.riskObject&id"))) {
            how_to_create_risk_triggerReady = true;
        }

        if ((event.step == 10) && (window.location.hash.includes("#action:itl.riskObject&id"))) {
            how_to_create_risk__step = 10;
            how_to_create_risk_triggerReady = false;
        }
        //for step number 11 &12...Click on Save button
        if ((event.step >= 11 && event.step <= 12) && (window.location.hash.includes("#action:itl.riskObject&odf_pk"))) {
            how_to_create_risk_triggerReady = true;
        }

        //Click on Save button
        if ((event.step == 12) && (window.location.hash.includes("#action:itl.riskObject&odf_pk"))) {
            how_to_create_risk__step = 12;
            how_to_create_risk_triggerReady = false;
        }
        //for step number 13...Click on Save And Return button		
        if ((event.step == 13) && (window.location.hash.includes("#action:itl.riskList&ui.page.space=mainnav.work&page.space=mainnav.work&id"))) {
            how_to_create_risk__step = 13;
            how_to_create_risk_triggerReady = false;
        }

        //for step number 14...Click on Properties tab and hover on it
        if ((event.step == 14) && (window.location.hash.includes("#action:projmgr.projectProperties&id"))) {
            how_to_create_risk__step = 14;
            how_to_create_risk_triggerReady = false;
        }
        //for step number 15...Click on Risk/Risk Rating link
        if ((event.step == 15) && (window.location.hash.includes("#action:projmgr.projectProperties&odf_view=projectRisk&id"))) {
            how_to_create_risk__step = 15;
            how_to_create_risk_triggerReady = false;
        }

        /*jump steps */
        //project list page
        if ((window.location.hash.includes("#action:mainnav.work&classCode=project"))) {
            potential_step = 2;
        }
        //project default page
        if ((window.location.hash.includes("#action:projmgr.projectDefaultTab"))) {
            potential_step = 3;
        }
        //risk list
        if ((window.location.hash.includes("#action:itl.riskList&id"))) {
            potential_step = 4;
        }
        //create new risk button
        if ((window.location.hash.includes("#action:itl.riskObject&odf"))) {
            potential_step = 5;
        }

        //click on save button page
        if ((window.location.hash.includes("#action:itl.riskObject&odf_pk"))) {
            potential_step = 11;
        }
        //Click on Save And Return button page
        if ((window.location.hash.includes("#action:itl.riskList&ui.page.space=mainnav.work&page.space=mainnav.work&id"))) {
            potential_step = 13;
        }
        //Click on Properties tab and hover on it
        if ((window.location.hash.includes("#action:projmgr.projectProperties&id"))) {
            potential_step = 14;
        }
        //Click on Risk/Risk Rating link
        if ((window.location.hash.includes("#action:projmgr.projectProperties&odf_view=projectRisk&id"))) {
            potential_step = 15;
        }

        if (potential_step && event.step <= potential_step) {
            return {
                "position": potential_step
            };
        }
    }
}

/*<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<End of How to Create a Risk <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/


/* ******************************************************How to create a cost plan from the resource plan***************************************************/

//Pranavi 
/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Begin>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/

if (how_to_create_a_cost_plan_from_the_resource_plan_triggerReady) {
    window._wfx_close_live();
    how_to_create_a_cost_plan_from_the_resource_plan_triggerReady = false;
}
//for step number 2
if (how_to_create_a_cost_plan_from_the_resource_plan_step == 2 && !window.location.hash.includes('#action:projmgr.projectDefaultTab')) {
    how_to_create_a_cost_plan_from_the_resource_plan_step = 0;
    window._wfx_close_live();
}
//for step number 3
if (how_to_create_a_cost_plan_from_the_resource_plan_step == 3 && !window.location.hash.includes('#action:revmgr.costplanList.project&id')) {
    how_to_create_a_cost_plan_from_the_resource_plan_step = 0;
    window._wfx_close_live();
}
//for step number 4
if (how_to_create_a_cost_plan_from_the_resource_plan_step == 4 && !window.location.hash.includes('#action:revmgr.costplanProperties&id')) {
    how_to_create_a_cost_plan_from_the_resource_plan_step = 0;
    window._wfx_close_live();
}
//for step number 5
if (how_to_create_a_cost_plan_from_the_resource_plan_step == 5 && !window.location.hash.includes('#action:revmgr.costplandetailList&plan_id')) {
    how_to_create_a_cost_plan_from_the_resource_plan_step = 0;
    window._wfx_close_live();
}

//for step number 10
if (how_to_create_a_cost_plan_from_the_resource_plan_step == 10 && !window.location.hash.includes('#action:revmgr.populateFromResourcePlan&superSecretTokenKey=superSecretTokenValue&plan_id') && (window.location.hash.search("copyoption=Assignments") != -1)) {
    how_to_create_a_cost_plan_from_the_resource_plan_step = 0;
    window._wfx_close_live();
}
//for step number 12
if (how_to_create_a_cost_plan_from_the_resource_plan_step == 12 && !window.location.hash.includes('#action:revmgr.costplanProperties&plan_id')) {
    how_to_create_a_cost_plan_from_the_resource_plan_step = 0;
    window._wfx_close_live();
}
//for step number 13
if (how_to_create_a_cost_plan_from_the_resource_plan_step == 13 && !window.location.hash.includes('#action:revmgr.costplanList&object_code=project&id')) {
    how_to_create_a_cost_plan_from_the_resource_plan_step = 0;
    window._wfx_close_live();
}
//for step number 14
if (how_to_create_a_cost_plan_from_the_resource_plan_step == 14 && !window.location.hash.includes('#action:revmgr.costplanList&object_code=project&id')) {
    how_to_create_a_cost_plan_from_the_resource_plan_step = 0;
    window._wfx_close_live();
}

if (window._wfx_is_live()) {
    window._wfx_settings['b3a59dd0-84a3-11e6-a247-04013d24cc02'] = function(event) {
        potential_step = 0;

        if ((event.step == 2) && (window.location.hash.includes("#action:mainnav.work&classCode=project"))) {
            how_to_create_a_cost_plan_from_the_resource_plan_step = 2;
            how_to_create_a_cost_plan_from_the_resource_plan_triggerReady = false;
        }

        if ((event.step == 3) && (window.location.hash.includes("#action:projmgr.projectDefaultTab"))) {
            how_to_create_a_cost_plan_from_the_resource_plan_step = 3;
            how_to_create_a_cost_plan_from_the_resource_plan_triggerReady = false;
        }
        if ((event.step == 4) && (window.location.hash.includes("#action:revmgr.costplanList.project&id"))) {
            how_to_create_a_cost_plan_from_the_resource_plan_step = 4;
            how_to_create_a_cost_plan_from_the_resource_plan_triggerReady = false;
        }
        if ((event.step >= 5 && event.step < 9) && (window.location.hash.includes("#action:revmgr.costplanProperties&id"))) {
            how_to_create_a_cost_plan_from_the_resource_plan_triggerReady = true;
        }
        if ((event.step == 9) && (window.location.hash.includes("#action:revmgr.costplanProperties&id"))) {
            how_to_create_a_cost_plan_from_the_resource_plan_step = 9;
            how_to_create_a_cost_plan_from_the_resource_plan_triggerReady = false;
        }
        if ((event.step >= 10 && event.step < 12) && (window.location.hash.includes("#action:revmgr.costplandetailList&plan_id"))) {
            how_to_create_a_cost_plan_from_the_resource_plan_triggerReady = true;
        }
        if ((event.step == 11) && (window.location.hash.includes("#action:revmgr.costplandetailList&plan_id"))) {
            how_to_create_a_cost_plan_from_the_resource_plan_step = 11;
            how_to_create_a_cost_plan_from_the_resource_plan_triggerReady = false;
        }
        if ((event.step == 12) && (window.location.hash.includes("#action:revmgr.populateFromResourcePlan&superSecretTokenKey=superSecretTokenValue&plan_id")) && window.location.hash.search('copyoption=Assignments') != -1) {
            console.log('step no 12' + window.location.hash.search('copyoption=Assignments'));
            how_to_create_a_cost_plan_from_the_resource_plan_step = 12;
            how_to_create_a_cost_plan_from_the_resource_plan_triggerReady = false;
        }
        if ((event.step >= 13 && event.step < 14) && (window.location.hash.includes("#action:revmgr.costplanProperties&plan_id"))) {
			how_to_create_a_cost_plan_from_the_resource_plan_triggerReady = true;
        }
        if ((event.step == 14) && (window.location.hash.includes("#action:revmgr.costplanProperties&plan_id"))) {
            how_to_create_a_cost_plan_from_the_resource_plan_step = 14;
            how_to_create_a_cost_plan_from_the_resource_plan_triggerReady = false;
        }
        /*jump steps */
        if ((window.location.hash.includes("#action:mainnav.work&classCode=project"))) {
            potential_step = 2;

        }

        if ((window.location.hash.includes("#action:projmgr.projectDefaultTab&id"))) {

            potential_step = 3;
        }

        if ((window.location.hash.includes("#action:revmgr.costplanList.project&id"))) {

            potential_step = 4;
        }
        if ((window.location.hash.includes("#action:revmgr.costplanProperties&id"))) {

            potential_step = 5;
        }
        if ((window.location.hash.includes("#action:revmgr.costplandetailList&plan_id"))) {

            potential_step = 10;
        }
        if ((window.location.hash.includes("#action:revmgr.populateFromResourcePlan&superSecretTokenKey=superSecretTokenValue&plan_id"))) {
            potential_step = 12;
        }
        if ((window.location.hash.includes("#action:revmgr.costplanProperties&plan_id"))) {
            potential_step = 13;
        }
        if (potential_step && event.step <= potential_step) {
            return {
                "position": potential_step
            };
        }
    }
}

/*<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< End of How to create a cost plan from the resource plan <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/


/* ******************************************************How to change notification settings of a user ***************************************************/

//Pranavi 
/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Begin>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/

if (how_to_change_notification_settings_of_a_user_triggerReady) {
    window._wfx_close_live();
    how_to_change_notification_settings_of_a_user_triggerReady = false;
}
//for step number 2
if (how_to_change_notification_settings_of_a_user_step == 2 && !window.location.hash.includes('#action:personal.notifications')) {
    how_to_change_notification_settings_of_a_user_step = 0;
    window._wfx_close_live();
}
//for step number 3
if (how_to_change_notification_settings_of_a_user_step == 3 && !window.location.hash.includes('#action:personal.notifications')) {
    how_to_change_notification_settings_of_a_user_step = 0;
    window._wfx_close_live();
}
//for step number 8
if (how_to_change_notification_settings_of_a_user_step == 8 && !window.location.hash.includes('#action:personal.notifications')) {
    how_to_change_notification_settings_of_a_user_step = 0;
    window._wfx_close_live();
}

if (window._wfx_is_live()) {
    window._wfx_settings['3a588b80-9b4c-11e6-9b3b-04013d24cd02'] = function(event) {
        potential_step = 0;

        if ((event.step == 2) && (window.location.hash.includes("#action:personal.settings"))) {
            how_to_change_notification_settings_of_a_user_step = 2;
            how_to_change_notification_settings_of_a_user_triggerReady = false;
        }

        if ((event.step >= 3 && event.step < 7) && (window.location.hash.includes("#action:personal.notifications"))) {
            how_to_change_notification_settings_of_a_user_triggerReady = true;
        }
        if ((event.step == 8) && (window.location.hash.includes("#action:personal.notifications"))) {
            how_to_change_notification_settings_of_a_user_step = 8;
            how_to_change_notification_settings_of_a_user_triggerReady = false;
        }

        /*jump steps */
        if ((window.location.hash.includes("#action:personal.settings"))) {
            potential_step = 2;

        }

        if ((window.location.hash.includes("#action:personal.notifications"))) {

            potential_step = 3;
        }


        if (potential_step && event.step <= potential_step) {
            return {
                "position": potential_step
            };
        }
    }
}

/*<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< End of How to change notification settings of a user<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/

/* ******************************************************<<<How to Enable a Resource Financially>>>***************************************************/
//Author : Arun
/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Begin>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/
if (how_to_enable_a_resource_financially_triggerReady) {
    window._wfx_close_live();
    how_to_enable_a_resource_financially_triggerReady = false;
    console.log('closed' + how_to_enable_a_resource_financially_step);
}
//for step number 2....... Click on any resource for which you to enable financially
if (how_to_enable_a_resource_financially_step == 2 && !window.location.hash.includes('#action:projmgr.editResource&odf_return_to=projmgr.getResources')) {
    how_to_enable_a_resource_financially_step = 0;
    window._wfx_close_live();
}

//for step number 3....... Hover on the properties tab of the project
if (how_to_enable_a_resource_financially_step == 3 && !window.location.hash.includes("#action:revmgr.resourceFinancials&id")) {
    how_to_enable_a_resource_financially_step = 0;
    window._wfx_close_live();
}

if (how_to_enable_a_resource_financially_step == 4 && !window.location.hash.includes("#action:revmgr.resourceFinancials&id")) {
    how_to_enable_a_resource_financially_step = 0;
    window._wfx_close_live();
}

//for step number 4....... Click on financial link 
if (how_to_enable_a_resource_financially_step == 5 && !window.location.hash.includes("#action:projmgr.editResource&id")) {
    how_to_enable_a_resource_financially_step = 0;
    window._wfx_close_live();
}

//for step number 5....... Changing the financial data for resource
if (how_to_enable_a_resource_financially_step == 18 && !window.location.hash.includes('#action:projmgr.editResource&id')) {
    how_to_enable_a_resource_financially_step = 0;
    window._wfx_close_live();
}

if (window._wfx_is_live()) {
    window._wfx_settings['298e3520-978c-11e6-b5ed-04013d24cf02'] = function(event) {
        potential_step = 0;
        //Click on any resource for which you want to enable financially
        if ((event.step == 2) && (window.location.hash.includes("#action:projmgr.getResources&reload=true"))) {
            how_to_enable_a_resource_financially_step = 2;
            how_to_enable_a_resource_financially_triggerReady = false;
        }
        //Click on the properties tab
        if ((event.step == 3 && event.step < 5) && (window.location.hash.includes("#action:projmgr.editResource&odf_return_to=projmgr.getResources"))) {

            how_to_enable_a_resource_financially_triggerReady = false;
            how_to_enable_a_resource_financially_step = 3;
        }
        //Hover the properties tab, click on financial link
        if ((event.step == 4) && (window.location.hash.includes("#action:projmgr.editResource&odf_return_to=projmgr.getResources%26reload%3Dtrue&id"))) {
            how_to_enable_a_resource_financially_step = 4;
            how_to_enable_a_resource_financially_triggerReady = false;
        }
        //Select the financial data for resource
        if ((event.step >= 5 && event.step < 18) && (window.location.hash.includes("#action:revmgr.resourceFinancials&id"))) {
            how_to_enable_a_resource_financially_step = 5;
            how_to_enable_a_resource_financially_triggerReady = false;
        }
        //Click on save and return button
        if ((event.step == 18) && (window.location.hash.includes("#action:revmgr.resourceFinancials&id"))) {
            how_to_enable_a_resource_financially_step = 18;
            how_to_enable_a_resource_financially_triggerReady = false;
        }

        /*jump steps */

        //Click on any resource page
        if ((window.location.hash.includes("#action:projmgr.getResources&reload=true"))) {
            potential_step = 2;

        }
        //Hover on propertes tab, click on financial link page
        if ((window.location.hash.includes("#action:projmgr.editResource&odf_return_to=projmgr.getResources%26reload%3Dtrue&id"))) {

            potential_step = 3;
        }
        //Changing financial details page
        if ((window.location.hash.includes("#action:revmgr.resourceFinancials&id"))) {

            potential_step = 5;
        }

        if (potential_step && event.step <= potential_step) {
            return {
                "position": potential_step
            };
        }
    }
}

/*<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< End of How to Enable Resource Financially <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/



/* ******************************************************How to designate proxy for a Resource ***************************************************/

//Pranavi 
/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Begin>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/

if (how_to_designate_proxy_for_a_resource_triggerReady) {
    window._wfx_close_live();
    how_to_designate_proxy_for_a_resource_triggerReady = false;
}
//for step number 2
if (how_to_designate_proxy_for_a_resource_step == 2 && !window.location.hash.includes("#action:personal.proxySettings")) {
    how_to_designate_proxy_for_a_resource_step = 0;
    window._wfx_close_live();
}
//for step number 3
if (how_to_designate_proxy_for_a_resource_step == 3 && !window.location.hash.includes("#action:personal.proxySettings")) {
    how_to_designate_proxy_for_a_resource_step = 0;
    window._wfx_close_live();
}
//for step number 9
if (how_to_designate_proxy_for_a_resource_step == 9 && !window.location.hash.includes("#action:personal.proxySettings")) {
    how_to_designate_proxy_for_a_resource_step = 0;
    window._wfx_close_live();
}

if (window._wfx_is_live()) {
    window._wfx_settings['5a06a300-9a7e-11e6-9bb3-04013d24cf02'] = function(event) {
        potential_step = 0;

        if ((event.step == 2) && (window.location.hash.includes("#action:personal.settings"))) {
            how_to_designate_proxy_for_a_resource_step = 2;
            how_to_designate_proxy_for_a_resource_triggerReady = false;
        }

        if ((event.step >= 3 && event.step < 10) && (window.location.hash.includes("#action:personal.proxySettings"))) {
            how_to_designate_proxy_for_a_resource_triggerReady = true;
        }
        if ((event.step == 9) && (window.location.hash.includes("#action:personal.proxySettings"))) {
            how_to_designate_proxy_for_a_resource_step = 9;
            how_to_designate_proxy_for_a_resource_triggerReady = false;
        }

        /*jump steps */
        if ((window.location.hash.includes("#action:personal.settings"))) {
            potential_step = 2;

        }

        if ((window.location.hash.includes("#action:personal.proxySettings"))) {

            potential_step = 3;
        }


        if (potential_step && event.step <= potential_step) {
            return {
                "position": potential_step
            };
        }
    }
}

/*<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< End of How to designate proxy for a Resource<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/


/* ******************************************************<<<How to configure your personal account settings >>>***************************************************/
//Author : Arun
/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Begin>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/
if (how_to_configure_user_personal_information_triggerReady) {
    window._wfx_close_live();
    how_to_configure_user_personal_information_triggerReady = false;
    console.log('closed' + how_to_configure_user_personal_information_step);
}
//for step number 2....... Change Personal information for user
if (how_to_configure_user_personal_information_step == 2 && !window.location.hash.includes('#action:personal.settings')) {
    how_to_configure_user_personal_information_step = 0;
    window._wfx_close_live();
}

//for step number 5....... Click on Save Button 
if (how_to_configure_user_personal_information_step == 5 && !window.location.hash.includes("#action:personal.settings")) {
    how_to_configure_user_personal_information_step = 0;
    window._wfx_close_live();
}

if (window._wfx_is_live()) {
    window._wfx_settings['c6638810-9b41-11e6-9bb3-04013d24cf02'] = function(event) {
        potential_step = 0;
        //Change Personal information for user
        if ((event.step >= 2 && event.step < 6) && (window.location.hash.includes("#action:personal.settings"))) {
            how_to_configure_user_personal_information_step = 2;
            how_to_configure_user_personal_information_triggerReady = false;
        }
        //Click on Save Button 
        if ((event.step == 5) && (window.location.hash.includes("#action:personal.settings"))) {

            how_to_configure_user_personal_information_triggerReady = false;
            how_to_configure_user_personal_information_step = 3;
        }

        /*jump steps */

        //Change Personal information for user
        if ((window.location.hash.includes("#action:personal.settings"))) {
            potential_step = 2;

        }

        if (potential_step && event.step <= potential_step) {
            return {
                "position": potential_step
            };
        }
    }
}

/*<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<END OF How to configure your personal account settings <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/


/* ******************************************************How to run a Process ***************************************************/

//Pranavi 
/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Begin>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/

if (how_to_run_a_process_triggerReady) {
    window._wfx_close_live();
    how_to_run_a_process_triggerReady = false;
}
//for step number 2...Click on Processes tab
if (how_to_run_a_process_step == 2 && !window.location.hash.includes('#action:calendar.organizerProcessInstances&object_type=organizer&ui.page.space=calendar.organizerHome&ui.page.template=union.appPage')) {
    how_to_run_a_process_step = 0;
    window._wfx_close_live();
}

//for step number 3...Hover on Processes tab
if (how_to_run_a_process_step == 4 && !window.location.hash.includes('#action:calendar.organizerProcessDefinitions&bpm.ret')) {
    how_to_run_a_process_step = 0;
    window._wfx_close_live();
}

//for step number 5...Select any Process you want to run
if (how_to_run_a_process_step == 5 && !window.location.hash.includes('#action:calendar.organizerProcessInstances')) {
    how_to_run_a_process_step = 0;
    window._wfx_close_live();
}
//for step number 6...Click on Start button
if (how_to_run_a_process_step == 6 && !window.location.hash.includes('#action:calendar.organizerProcessInstances&object_t')) {
    how_to_run_a_process_step = 0;
    window._wfx_close_live();
}
if (window._wfx_is_live()) {
    window._wfx_settings['666db330-91f1-11e6-b370-04013d24cc02'] = function(event) {
        potential_step = 0;
        //for step number 2...Click on Processes tab
        if ((event.step == 2) && (window.location.hash.includes("#action:calendar.organizerHome"))) {
            how_to_run_a_process_step = 2;
            how_to_run_a_process_triggerReady = false;
        }
        //for step number 3...Hover on Processes tab
        if ((event.step >= 3 && event.step <5) && (window.location.hash.includes("#action:calendar.organizerProcessInstances"))) {
            how_to_run_a_process_triggerReady = true;
        }
        //for step number 4...Click on Availkable link
        if ((event.step == 4) && (window.location.hash.includes("#action:calendar.organizerProcessInstances"))) {
            how_to_run_a_process_step = 4;
            how_to_run_a_process_triggerReady = false;
        }
		//for step number 5...Select any Process you want to run
        if ((event.step == 5 && event.step < 7) && (window.location.hash.includes("#action:calendar.organizerProcessDefinitions&bpm.returnMod"))) {
            how_to_run_a_process_triggerReady = true;
        }
		//for step number 6...Click on Start button
        if ((event.step == 6) && (window.location.hash.includes("#action:calendar.organizerProcessDefinitions&bpm.returnModuleAction"))) {
            how_to_run_a_process_step = 6;
            how_to_run_a_process_triggerReady = false;
        }


        /*jump steps */
		//for step number 2...Click on Processes tab page
        if ((window.location.hash.includes("#action:calendar.organizerHome"))) {
            potential_step = 2;
        }
		//for step number 3...Hover on Processes tab page
        if ((window.location.hash.includes("#action:calendar.organizerProcessInstances&object_type=organizer&ui.page.space=calendar.organizerHome&ui.page.template=union.appPage"))) {
            potential_step = 3;
        }
		//for step number 5...Select any Process you want to run page
        if ((window.location.hash.includes("#action:calendar.organizerProcessDefinitions&bpm.returnModuleAction=calendar.organizerProcessInstancesReturn&object_type=organizer&ui.page.space=calendar.organizerHome&ui.page.template=union.appPage"))) {
            potential_step = 5;
        }

        if (potential_step && event.step <= potential_step) {
            return {
                "position": potential_step
            };
        }
    }
}

/*<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< End of How to run a Process<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/



/* ******************************************************How to run a Job ***************************************************/

//Pranavi 
/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Begin>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/

if (how_to_run_a_job_triggerReady) {
    window._wfx_close_live();
    how_to_run_a_job_triggerReady = false;
}
//for step number 2...Hover on Jobs Menu
if (how_to_run_a_job_step == 2 && !window.location.hash.includes('#action:nmc.jobPropertiesNew&job_definition_id')) {
    how_to_run_a_job_step = 0;
    window._wfx_close_live();
}
//for step number 5...Edit the job name 
if (how_to_run_a_job_step == 5 && !window.location.hash.includes('#action:nmc.jobNoMergeSearchReturn')) {
    how_to_run_a_job_step = 0;
    window._wfx_close_live();
}
//for step number 6...Click on submit button
if (how_to_run_a_job_step == 5 && !window.location.hash.includes('#action:nmc.jobNoMergeSearchReturn')) {
    how_to_run_a_job_step = 0;
    window._wfx_close_live();
}

if (window._wfx_is_live()) {
    window._wfx_settings['4e97f580-a1ab-11e6-961a-04013d24cf02'] = function(event) {
        potential_step = 0;
        //for step number 2...Hover on Jobs Menu
        if ((event.step == 2 && event.step < 5) && (window.location.hash.includes("#action:nmc.reportAccess"))) {
            how_to_run_a_job_triggerReady = true;
        }
        //for step number 2...Click on the job you want to run
        if ((event.step == 4) && (window.location.hash.includes("#action:nmc.reportAccess"))) {
            how_to_run_a_job_step = 4;
            how_to_run_a_job_triggerReady = false;
        }
		//for step number 5...Edit the job name 
        if ((event.step == 5 && event.step < 7) && (window.location.hash.includes("#action:nmc.jobPropertiesNew&job_definition_id"))) {
            how_to_run_a_job_triggerReady = true;
        }
		//for step number 6...Click on submit button
        if ((event.step == 6) && (window.location.hash.includes("##action:nmc.jobPropertiesNew&job_definition_id"))) {
            how_to_run_a_job_step = 6;
            how_to_run_a_job_triggerReady = false;
        }

        /*jump steps */
		//for step number 2...Hover on jobs menu page
        if ((window.location.hash.includes("#action:nmc.reportAccess"))) {
            potential_step = 2;
        }
		//for step number 5...Edit the job name page
        if ((window.location.hash.includes("#action:nmc.jobPropertiesNew&job_definition_id"))) {
            potential_step = 5;
        }

        if (potential_step && event.step <= potential_step) {
            return {
                "position": potential_step
            };
        }
    }
}

/*<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< End of How to run a Job <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/


/* ******************************************************How to add an unplanned task row ***************************************************/

//Arun
/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Begin>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/

if (how_to_add_a_unplanned_task_row_triggerReady) {
    window._wfx_close_live();
    how_to_add_a_unplanned_task_row_triggerReady = false;
}
//for step number 1....Click on Add Task button
if (how_to_add_a_unplanned_task_row_step == 1 && !window.location.hash.includes("#action:timeadmin.selectTimesheetTaskOpt")) {
    how_to_add_a_unplanned_task_row_step = 0;
    window._wfx_close_live();
}
//for step number 2....Click on Create Task Page
if (how_to_add_a_unplanned_task_row_step == 2 && !window.location.hash.includes("#action:timeadmin.createUnplannedTask")) {
    how_to_add_a_unplanned_task_row_step = 0;
    window._wfx_close_live();
}
//for step number 3....Click on investment link
if (how_to_add_a_unplanned_task_row_step == 3 && !window.location.hash.includes("#action:timeadmin.selectTimesheetTaskReturn&messageId=UNPLANNED_TASK_ADDED")) {
    how_to_add_a_unplanned_task_row_step = 0;
    window._wfx_close_live();
}
//for step number 7....Click on save and return button
if (how_to_add_a_unplanned_task_row_step == 7 && !window.location.hash.includes("#action:timeadmin.selectTimesheetTaskReturn&messageId")) {
    how_to_add_a_unplanned_task_row_step = 0;
    window._wfx_close_live();
}
//for step number 8....Click on return button		
if (how_to_add_a_unplanned_task_row_step == 8 && !window.location.hash.includes("#action:timeadmin.editTimesheet&id")) {
    how_to_add_a_unplanned_task_row_step = 0;
    window._wfx_close_live();
}
//for step number 9....Click on save button
if (how_to_add_a_unplanned_task_row_step == 9 && !window.location.hash.includes("#action:timeadmin.editTimesheet&id")) {
    how_to_add_a_unplanned_task_row_step = 0;
    window._wfx_close_live();
}

if (window._wfx_is_live()) {
    window._wfx_settings['193c02f0-86fd-11e6-85ad-04013d24cd02'] = function(event) {
        potential_step = 0;
        //for step number 1....Click on Add Task button
        if ((event.step == 1) && (window.location.hash.includes("#action:timeadmin.editTimesheet&resid"))) {
            how_to_add_a_unplanned_task_row_step = 1;
            how_to_add_a_unplanned_task_row_triggerReady = false;
        }
        //for step number 2....Click on Create Task Page
        if ((event.step == 2) && (window.location.hash.includes("#action:timeadmin.selectTimesheetTaskOpt"))) {
            how_to_add_a_unplanned_task_row_step = 2;
            how_to_add_a_unplanned_task_row_triggerReady = false;
        }
        //for step number 3....Click on investment link
        if ((event.step >= 3 && event.step < 8) && (window.location.hash.includes("#action:timeadmin.createUnplannedTask"))) {
            how_to_add_a_unplanned_task_row_step = 3;
            how_to_add_a_unplanned_task_row_triggerReady = false;
        }
        //for step number 7....Click on save and return button
        if ((event.step == 7) && (window.location.hash.includes("#action:timeadmin.createUnplannedTask"))) {
            how_to_add_a_unplanned_task_row_step = 7;
            how_to_add_a_unplanned_task_row_triggerReady = false;
        }
        //for step number 8....Click on return button
        if ((event.step == 8) && (window.location.hash.includes("#action:timeadmin.selectTimesheetTaskReturn&messageId"))) {
            how_to_add_a_unplanned_task_row_step = 8;
            how_to_add_a_unplanned_task_row_triggerReady = false;
        }
        //for step number 9....Click on save button
        if ((event.step == 9) && (window.location.hash.includes("#action:timeadmin.editTimesheet&id"))) {
            how_to_add_a_unplanned_task_row_step = 9;
            how_to_add_a_unplanned_task_row_triggerReady = false;
        }
        /*jump steps */
        //for step number 1....Click on Add Task button page
        if ((window.location.hash.includes("#action:timeadmin.editTimesheet&resid"))) {
            potential_step = 1;

        }
        //for step number 2....Click on Create Task Page
        if ((window.location.hash.includes("#action:timeadmin.selectTimesheetTaskOpt"))) {

            potential_step = 2;
        }
        //for step number 3....Click on investment link page
        if ((window.location.hash.includes("#action:timeadmin.createUnplannedTask&tsid"))) {

            potential_step = 3;
        }
        //for step number 8....Click on return button page
        if ((window.location.hash.includes("#action:timeadmin.selectTimesheetTaskReturn&messageId"))) {

            potential_step = 8;
        }
        //for step number 9....Click on save button page
        if ((window.location.hash.includes("#action:timeadmin.editTimesheet&id"))) {

            potential_step = 9;
        }
        if (potential_step && event.step <= potential_step) {
            return {
                "position": potential_step
            };
        }
    }
}

/*<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< End of How to add an unplanned task row <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/


/*<<<<<How to add an incident row >>>>*********************************/
/* @Author : Venu */
/*<<<<<<<<<<<<< Begin <<<<<<<<<<<<<<<<*/

if (add_an_incident_row_triggerReady) {
    window._wfx_close_live();
    add_an_incident_row_triggerReady = false;
}
//for step number 2...Click on Add Incident Button
if (add_an_incident_row == 2 && !window.location.hash.includes('#action:timeadmin.selectTimesheetIncident&sortColumn')) {
    add_an_incident_row = 0;
    window._wfx_close_live();
}

//for step number 2...Click on add button of incident page
if (add_an_incident_row == 4 && !window.location.hash.includes('#action:timeadmin.editTimesheet&id')) {
    add_an_incident_row = 0;
    window._wfx_close_live();
}
//for step number 5...Click on save button
if (add_an_incident_row == 5 && !window.location.hash.includes('#action:timeadmin.editTimesheet&id')) {
    add_an_incident_row = 0;
    window._wfx_close_live();
}

if (window._wfx_is_live()) {
    window._wfx_settings['e1f46340-86f8-11e6-a787-04013d24cf02'] = function(event) {
        potential_step = 0;
        //for step number 2...Click on Add Incident Button
        if ((event.step == 2) && (window.location.hash.includes("#action:timeadmin.selectTimesheetIncidentOpt&id"))) {
            add_an_incident_row = 2;
            add_an_incident_row_triggerReady = false;
        }
        //for step number 3...click on show all button of incident page
        if ((event.step >= 3 && event.step < 5) && (window.location.hash.includes("#action:timeadmin.selectTimesheetIncident&sortColumn"))) {
            add_an_incident_row_triggerReady = true;
        }
        //for step number 3...click on show all button of incident page
        if ((event.step == 4) && (window.location.hash.includes("#action:timeadmin.selectTimesheetIncident&sortColumn"))) {
            add_an_incident_row = 4;
            add_an_incident_row_triggerReady = false;
        }
        //click on add button of incident page
        if ((event.step == 5) && (window.location.hash.includes("#action:timeadmin.editTimesheet&id"))) {
            add_an_incident_row = 5;
            add_an_incident_row_triggerReady = false;
        }

        /*jump steps */
        //Click on Add Incident button page
        if ((window.location.hash.includes("#action:timeadmin.selectTimesheetIncidentOpt&id"))) {
            potential_step = 2;
        }
        //click on show all button of incident page
        if ((window.location.hash.includes("#action:timeadmin.selectTimesheetIncident&sortColumn"))) {
            potential_step = 3;
        }
        //click on add button of incident page
        if ((window.location.hash.includes("#action:timeadmin.editTimesheet&id"))) {
            potential_step = 5;
        }

        if (potential_step && event.step <= potential_step) {
            return {
                "position": potential_step
            };
        }
    }
}

/*<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<End of How to add an incident row? <<<<<<<<<<<<<<<<<<<<<<<<*/



/*<<<<<How to Add an Existing Project Task Row >>>>*********************************/
/* @Author : Venu */
/*<<<<<<<<<<<<< Begin <<<<<<<<<<<<<<<<*/

if (project_task_row_triggerReady) {
    window._wfx_close_live();
    project_task_row_triggerReady = false;
}
//for step number 1
if (project_task_row_step == 1 && !window.location.hash.includes("#action:timeadmin.selectTimesheetTaskOpt&id")) {
    project_task_row_step = 0;
    window._wfx_close_live();
}
//for step number 2...click on add task button
if (project_task_row_step == 2 && !window.location.hash.includes('#action:timeadmin.selectTimesheetTask&id')) {
    project_task_row_step = 0;
    window._wfx_close_live();
}

//for step number 6...Click on filter 
if (project_task_row_step == 6 && !window.location.hash.includes("#action:timeadmin.selectTimesheetTask&id")) {
    project_task_row_step = 0;
    window._wfx_close_live();
}
//click on project name
if (project_task_row_step == 7 && !window.location.hash.includes("#action:timeadmin.selectTimesheetTaskOpt&sortColumn")) {
    project_task_row_step = 0;
    window._wfx_close_live();
}

//click on add button page
if (project_task_row_step == 8 && !window.location.hash.includes("#action:timeadmin.editTimesheet&id")) {
    project_task_row_step = 0;
    window._wfx_close_live();
}

//click on add button page
if (project_task_row_step == 10 && !window.location.hash.includes("#action:timeadmin.editTimesheet&id")) {
    project_task_row_step = 0;
    window._wfx_close_live();
}
//click on save button page	
if (project_task_row_step == 11 && !window.location.hash.includes("#action:timeadmin.editTimesheet&id")) {
    project_task_row_step = 0;
    window._wfx_close_live();
}

if (window._wfx_is_live()) {
    window._wfx_settings['56c6e150-8967-11e6-b370-04013d24cc02'] = function(event) {
        potential_step = 0;

        if ((event.step == 1) && (window.location.hash.includes("#action:timeadmin.editTimesheet&resid"))) {
            project_task_row_step = 1;
            project_task_row_triggerReady = false;
        }
        //for step number 2...click on add task button 
        if ((event.step == 2 && event.step < 7) && (window.location.hash.includes("#action:timeadmin.selectTimesheetTaskOpt&id"))) {
            project_task_row_step = 2;
            project_task_row_triggerReady = false;
        }

        //for step number 6...Click on filter
        if ((event.step == 6) && (window.location.hash.includes("#action:timeadmin.selectTimesheetTaskOpt&id"))) {
            project_task_row_step = 6;
            project_task_row_triggerReady = false;

        }

        //for step number 7 ...click on project name
        if ((event.step == 7) && (window.location.hash.includes("#action:timeadmin.selectTimesheetTask&id"))) {
            project_task_row_step = 7;
            project_task_row_triggerReady = false;
        }

        //for step number 8.. expand the tasks
        if ((event.step == 8 && event.step < 11) && (window.location.hash.includes("#action:timeadmin.selectTimesheetTaskOpt&sortColumn"))) {
            project_task_row_step = 8;
            project_task_row_triggerReady = false;
        }

        //add button page
        if ((event.step == 10) && (window.location.hash.includes("#action:timeadmin.selectTimesheetTaskOpt"))) {
            project_task_row_step = 10;
            project_task_row_triggerReady = false;
        }
        //click on save button page
        if ((event.step == 11) && (window.location.hash.includes("#action:timeadmin.editTimesheet&id"))) {
            project_task_row_step = 11;
            project_task_row_triggerReady = false;
        }

        /*jump steps */

        if ((window.location.hash.includes("#action:timeadmin.editTimesheet&resid"))) {
            potential_step = 1;

        }
        //click on add task button page
        if ((window.location.hash.includes("#action:timeadmin.selectTimesheetTaskOpt&id"))) {
            potential_step = 2;
        }

        //select task for enter the time page
        if ((window.location.hash.includes("#action:timeadmin.selectTimesheetTask&id"))) {
            potential_step = 7;
        }

        //select task for enter the time page
        if ((window.location.hash.includes("#action:timeadmin.selectTimesheetTaskOpt&sortColumn"))) {
            potential_step = 8;
        }

        //add button page
        if ((window.location.hash.includes("#action:timeadmin.editTimesheet&id"))) {
            potential_step = 11;
        }

        if (potential_step && event.step <= potential_step) {
            return {
                "position": potential_step
            };
        }
    }
}
/*<<<<<End of Add an Existing Project Task Row >>>>*********************************/


    })
    /*Killing flow<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< End <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/