/*------------------------------------------------------------------------------------------------------------------------------------/
                                        ##Integration Script for "Help" by Excers.## 
    >>Description: This script is developed for CAPPM's sandbox instance for ppmcontent.
    >>Git Repository:: https://github.com/atolat/ca-world.git
    >>Ver 1.0
    >>Authors:Amarish Mittapalli, Arpan Tolat, Arjun Pawar
        

*/


/*----------------------------------------------------------------------------------------------------------------------------------*/

// Adding the self Help Widget.
window._wfx_widget = {
    "position": "brm"
    , "label": "Excers Help"
    , "mode": "live_here"
    , "ent_id": "12fbce70-6f83-11e6-90aa-04013d24cf02"
    , "color": "black"

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



    $('[class="WFEMGM"]').css('z-index', '1000099');
    $('[class="WFEMHL"]').css('z-index', '1000099');





    //Portfolios flow.
    //Adding custom classes to elements...
    if (window.location.hash.startsWith("#action:pfm.portfolioList")) {
        //window.alert('Event step is::'+event.step);
        $('[onclick=\"navigateToURL(\'nu?action=npt.setObjectUserPartitions\',\'navFromActionId=pfm.portfolioList\',\'navToActionId=pfm.portfolioCreate\',\'objectCode=pfm_portfolio\',\'ui.page.space=pfm.portfolios\');\"]').addClass("new_one");
    }

    if ($('[title="Create Portfolio"]').length && window.location.hash.startsWith("#action:pfm.portfolioCreate")) {
        $('[onclick=\"optionSelectAll(\'pagex\',\'owner\');optionSelectAll(\'pagex\',\'stakeholder\');submitForm(\'pagex\',\'pfm.portfolioCreateSave\',\'redirect_action=pfm.portfolioProperties\');\"]').addClass("portfolio_save");

        $('[onclick*="pfm.portfolioCreateSubmit"]').addClass("portfolio_save_return");
    }
    //$('[id="ppm_nav_app_menu"]').attr('style',"min-width: 67px; display: none; top: 29.5714px; left: 51.571px; height: auto;");
    $('[title = "Portfolios"]').addClass('port').css('z-index', '1000000');
    //Change Request Flow
    if (window.location.hash.startsWith("#action:projmgr") && $('[title="Project Indicators"]').length && $('h1[title*="Dashboard"]').length) {
        $('[title="Risks/Issues/Changes"]').addClass("project_ric_click");
    }

    if (window.location.hash.startsWith("#action:itl.riskList") && $('h1[title*="Project"]').length) {
        $('[title="Risks/Issues/Changes"]').addClass("project_ric_hover");
    }

    if (window.location.hash.includes("changeList")) {
        $('[onclick*="action=itl.changeObject"]').addClass("changereq_new");
    }

    // Relook for buttons periodically as PPM is deleting buttons at times.
    window.setTimeout(function () {
        window._wfx_settings.apply_page_settings();


    }, 1000);


};
window._wfx_settings.apply_page_settings();



//Handling flows in the middle
//How to create a portfolio

window.bool_port = [0,0,0];
window.onhashchange = function () {
    console.log(window.bool_port);
    if ($.inArray(true, [
            (window.location.hash.startsWith('#action:npt.overview') && (window.bool_port[0] != 1))
            
            , (window.location.hash.startsWith('#action:pfm.portfolioList') && (window.bool_port[1] != 1))
            
            , (window.location.hash.startsWith('#action:pfm.portfolioCreate')) && (window.bool_port[2] != 1)]) == -1) {

        window._wfx_close_live && window._wfx_close_live();

        console.log("Exit");
        window.bool_port = [0, 0, 0];
    }

};

window._wfx_settings['203a5610-7f64-11e6-9479-04013d24cd02'] = function (event) {


    window.bool_port[0] = 1;

    var potential_step;

    console.log(event.step);
    console.log(event.flow_id);


    if (window.location.hash.startsWith("#action:home") && event.step == 0) {
        potential_step = 1;
        window.bool_port[0]++;
    }

    if (window.location.hash.startsWith("#action:pfm.portfolioList")) {
        potential_step = 2;
        window.bool_port[1]++;
    }

    if (window.location.hash.startsWith("#action:pfm.portfolioCreate")) {
        potential_step = 3;
        window.bool_port[2]++;
    }

    if (potential_step && event.step < potential_step) {
        return {
            "position": potential_step
        };
    }
};