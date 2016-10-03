
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
    // Relook for buttons periodically as PPM is deleting buttons at times.
    window.setTimeout(function () {
        window._wfx_settings.apply_page_settings();
    }, 1000);
};
window._wfx_settings.apply_page_settings();



function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
//	window.alert('insisde sleep')
        if ((new Date().getTime() - start) > milliseconds) {
            break;
        }
    }
}

//Handling flows in the middle

window._wfx_settings['c0dd8dc0-8154-11e6-9479-04013d24cd02'] = function(event) {
    var potential_step;
   
 
    //window.alert(!window.location.hash.includes("#action:projmgr.projectDefaultTab&id=5012066"));
    //This section is for restarting the walkthrough relative to current location.	
  
   //$('[title="Risks/Issues/Changes"]').addClass('abc');
  window.alert('outside if');
  
		  if( ( window.location.hash.includes("#action:projmgr.projectDefaultTab")  &&($("label")[1].innerHTML) == 'Project ID')
			|| (window.location.hash.includes("#action:projmgr.projectDefaultTab") &&  $('h2[title="Project Indicators"]').length >0))
		  {
		  window.alert('inside of if add class');
		  sleep(100000);
		  $('[title="Risks/Issues/Changes"]').addClass('abc');
		  
		  window.alert( $(".abc"));
		  window.alert('in the end');
		  }
  
  // $('[title="Risks/Issues/Changes"]').addClass('abc');

    if (potential_step && event.step < potential_step) {
        return {
            "position": potential_step
        };
    }
};



