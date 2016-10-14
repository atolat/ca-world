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
        "label": "Excers Help",
        "mode": "live_here",
        "ent_id": "12fbce70-6f83-11e6-90aa-04013d24cf02",
        "color": "black"

    };

    //Setting up the wfx object to control flow, branching/page level step control.
    window._wfx_settings.onBeforeShow = function (event) {
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

    window._wfx_settings.apply_page_settings = function () {
        var self_help_applied;
        $.each(window._wfx_settings['page_settings'], function (name, settings) {
            if (window.location.hash.indexOf(settings.hash) != -1) {
                window._wfx_settings.init_page(name, settings);
                if (settings.self_help) {
                    self_help_applied = true;
                }
            }
        });

        /* Below code is to relook for buttons periodically as PPM is deleting buttons at times.
        >>>>>>>>>>>>>>>>>>>>>>>>Begin*/

        window.setTimeout(function () {
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
        $('[title = "Portfolios"]').addClass('port').css('z-index', '1000099');

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


    /*Sleep Funtion >>>>>>>>>>>>>>>>>>>>> Beign*/
    window._wfx_settings.apply_page_settings();

    function sleep(milliseconds) {
        var start = new Date().getTime();
        for (var i = 0; i < 1e7; i++) {
            if ((new Date().getTime() - start) > milliseconds) {
                break;
            }
        }
    }
    /*<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< End <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/


    /* Below code is for killing the flow by when user go out of the flow >>>>>>>>>>>>>>>>>>>>>>>>>>>> Begin >>>>>>>>>>>>>>>>>>>>>>>..*/

    //To close the balloon on url change
    var how_to_create_a_portfolio_triggerReady = false;
    var how_to_create_a_portfolio_step = 0;
    //Based on Hash Change this function runs
    $(window).hashchange(function () {

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

            if (window._wfx_is_live()) {
                console.log('Live Workflow');
                potential_step = 0;
                window._wfx_settings['203a5610-7f64-11e6-9479-04013d24cd02'] = function (event) {
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
                } /* Jump Step <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< End <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/
            }
        })
        /*Killing flow<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< End <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/
