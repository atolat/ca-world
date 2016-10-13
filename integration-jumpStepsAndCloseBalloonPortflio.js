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

//if(window.location.hash.startsWith("#action:npt.overview")){
//one is for balloon, one for box
    $('[class="WFEMGM"]').css('z-index','1000005');
    $('[class="WFEMHL"]').css('z-index','1000005');
//}


    //Portfolios flow.
    //Adding custom classes to elements...
	
	
	//custom class added to save
    if (window.location.hash.startsWith("#action:pfm.portfolioList")) {
       $('[onclick=\"navigateToURL(\'nu?action=npt.setObjectUserPartitions\',\'navFromActionId=pfm.portfolioList\',\'navToActionId=pfm.portfolioCreate\',\'objectCode=pfm_portfolio\',\'ui.page.space=pfm.portfolios\');\"]').addClass("new_one");
    }

    if ($('[title="Create Portfolio"]').length && window.location.hash.startsWith("#action:pfm.portfolioCreate")) {
        $('[onclick=\"optionSelectAll(\'pagex\',\'owner\');optionSelectAll(\'pagex\',\'stakeholder\');submitForm(\'pagex\',\'pfm.portfolioCreateSave\',\'redirect_action=pfm.portfolioProperties\');\"]').addClass("portfolio_save");

        $('[onclick*="pfm.portfolioCreateSubmit"]').addClass("portfolio_save_return");
    }
    //$('[id="ppm_nav_app_menu"]').attr('style',"min-width: 67px; display: none; top: 29.5714px; left: 51.571px; height: auto;");
    
	$('[title = "Portfolios"]').addClass('port').css('z-index','1000000');
	
   
  
  //Change Request Flow
  //add custom class to Risks/Issues/Change tab
    if( ( window.location.hash.includes("#action:projmgr.projectDefaultTab")  &&($("label")[1].innerHTML) == 'Project ID')
			|| (window.location.hash.includes("#action:projmgr.projectDefaultTab") &&  $('h2[title="Project Indicators"]').length >0))
		  {
		  $('[title="Risks/Issues/Changes"]').addClass('proj_ric');
		  }
//add custom class to Risks/Issues/Change for hover action
    if (window.location.hash.startsWith("#action:itl.riskList") && $('h1[title*="Project"]').length) {
        $('[title="Risks/Issues/Changes"]').addClass("project_ric_hover");
    }

    if (window.location.hash.includes("changeList")) {
        $('[onclick*="action=itl.changeObject"]').addClass("changereq_new");
    }

    // Relook for buttons periodically as PPM is deleting buttons at times.
    window.setTimeout(function () {
        window._wfx_settings.apply_page_settings();
        
        //style="height: auto; min-width: 67px; display: none; top: 29.5714px; left: 51.5799px; z-index: 1000002;"

    }, 1000);

	
};



window._wfx_settings.apply_page_settings();

function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > milliseconds) {
            break;
        }
    }
}



//How to create a portfolio

//to close the balloon on url change
var how_to_create_a_portfolio_triggerReady = false;
var how_to_create_a_portfolio_step =0;
  var potential_step;
$(window).hashchange(function(){
	//console.log('1.'+window.location.hash);
	//console.log('2.'+window._wfx_is_live());
	//console.log('3.'+how_to_create_a_portfolio_triggerReady);

	if(how_to_create_a_portfolio_triggerReady){
    
            window._wfx_close_live();
		
		console.log('function called');
		how_to_create_a_portfolio_triggerReady=false;
	}
    //for step number 12 
     if(how_to_create_a_portfolio_step == 12 && !window.location.hash.includes('#action:pfm.portfolioProperties')){
        how_to_create_a_portfolio_step  = 0;           
           window._wfx_close_live();
            }
                //for step number 14 
             if(how_to_create_a_portfolio_step == 14 && !window.location.hash.includes('#action:pfm.portfolioProperties&odf_view=pfm_portfolio.metrics')){
        how_to_create_a_portfolio_step  = 0;           
           window._wfx_close_live();
            }
            
	
	if (window._wfx_is_live()){
        console.log('Live Workflow');
		window._wfx_settings['203a5610-7f64-11e6-9479-04013d24cd02'] = function(event) {
			console.log(event.step);
            //Create page
			if ((event.step >= 4 && event.step<12) && window.location.hash.includes('#action:pfm.portfolioCreate&partition_code')) {
				how_to_create_a_portfolio_triggerReady = true;
                
			}
            //Create page last step 
            if((event.step == 12))
            {
                how_to_create_a_portfolio_step  = 12;
                how_to_create_a_portfolio_triggerReady = false;
            }
            
            //Update page - properties
             if((event.step >= 13 && event.step<14) && window.location.hash.includes('#action:pfm.portfolioProperties')) 
            {
				how_to_create_a_portfolio_triggerReady = true
                }
                //Update page - properties last step
                 if((event.step == 14))
            {
                how_to_create_a_portfolio_step  = 14;
                how_to_create_a_portfolio_triggerReady = false;
            }
                
                //Portfolio: sdf - Properties - Metrics
                 if((event.step >= 15 && event.step<18) && window.location.hash.includes('#action:pfm.portfolioProperties&odf_view=pfm_portfolio.metrics')) 
            {
				how_to_create_a_portfolio_triggerReady = true
                }
           
           
           //Handling flows in the  between - jump steps
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
            if (potential_step && event.step < potential_step) {
        return {
            "position": potential_step
        };
    }
           
			console.log(how_to_create_a_portfolio_triggerReady);
		}
	}
}
)

