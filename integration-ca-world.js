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



document.getElementsByTagName('body').onload = function () {
    window.alert('loaded');
}


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
    
    //Adding custom classes to elements...
    if(window.location.hash.startsWith("#action:pfm.portfolioList")){
      $('[onclick=\"navigateToURL(\'nu?action=npt.setObjectUserPartitions\',\'navFromActionId=pfm.portfolioList\',\'navToActionId=pfm.portfolioCreate\',\'objectCode=pfm_portfolio\',\'ui.page.space=pfm.portfolios\');\"]').addClass("new_one");
    }
    
    if($('[title="Create Portfolio"]').length && window.location.hash.startsWith("#action:pfm.portfolioCreate")){
        $('[onclick=\"optionSelectAll(\'pagex\',\'owner\');optionSelectAll(\'pagex\',\'stakeholder\');submitForm(\'pagex\',\'pfm.portfolioCreateSave\',\'redirect_action=pfm.portfolioProperties\');\"]').addClass("portfolio_save");
        
        $('[onclick*="pfm.portfolioCreateSubmit"]').addClass("portfolio_save_return");
    }
    
    // Relook for buttons periodically as PPM is deleting buttons at times.
    window.setTimeout(function () {
        window._wfx_settings.apply_page_settings();
    }, 1000);


};
window._wfx_settings.apply_page_settings();



//Handling flows in the middle
//How to create a portfolio
window._wfx_settings['203a5610-7f64-11e6-9479-04013d24cd02'] = function (event) {
    var potential_step;

    //Adding custom classes to elements
    // "New Button"
    if (window.location.hash.startsWith("#action:pfm.portfolioList")) {
        potential_step = 2;

    }

    //    //This section is for restarting the walkthrough relative to current location.	
    //    if (window.location.hash.includes("action:pma.ideaList")) {
    //        potential_step = 2;
    //
    //
    //    }
    //    if (window.location.hash.startsWith("#action:pma.ideaCreate")) {
    //        potential_step = 3;
    //
    //    }


    if (potential_step && event.step < potential_step) {
        return {
            "position": potential_step
        };
    }

    //  window.alert('outside if');
    //  
    //		  if( ( window.location.hash.includes("#action:projmgr.projectDefaultTab")  &&($("label")[1].innerHTML) == 'Project ID')
    //			|| (window.location.hash.includes("#action:projmgr.projectDefaultTab") &&  $('h2[title="Project Indicators"]').length >0))
    //		  {
    //		  window.alert('inside of if add class');
    //		  sleep(100000);
    //		  $('[title="Risks/Issues/Changes"]').addClass('abc');
    //		  
    //		  window.alert( $(".abc"));
    //		  window.alert('in the end');
    //		  }
    //  
    //  // $('[title="Risks/Issues/Changes"]').addClass('abc');





};