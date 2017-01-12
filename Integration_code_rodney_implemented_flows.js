/*--------------------------------------------------------------------------------------------------------------
                ##Integration Script for "letzNav" by Excers.## 
                >>Description: This script is developed for CAPPM's sandbox instance for ppmcontent.
                >>Git Repository:: https://github.com/atolat/ca-world.git
                >>Ver 1.0
                >>Authors: PraKash, Amarish Mittapalli, Arpan Tolat, Arjun Pawar
        ---------------------------------------------------------------------------------------------------------------*/
console.log('start');
/*Default Code >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Begin>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>.*/

$(document).ready(function () {
    $.get("https://s3-us-west-2.amazonaws.com/helpdemoresources/test/obj.json", function (data, status) {
        //data = JSON.parse(data);
        window.tooltip1_url = data.tooltips.tooltip1_url;
        //window.alert(data.tooltips.tooltip1_url);
        window.tooltip2_url = data.tooltips.tooltip2_url;
        window.tooltip3_url = data.tooltips.tooltip3_url;
        window.tooltip4_url = data.tooltips.tooltip4_url;
        //window.video_url = data.video.video1_url;
        //window.pdf_url = data.pdf.pdf1_url;
    });
});



//This code is for enabling Self Help Widget
// Adding the self Help Widget.
window._wfx_widget = {
    "position": "brm"
    , "label": "letzNav"
    , "mode": "live_here"
    , "ent_id": "12fbce70-6f83-11e6-90aa-04013d24cf02"
    , "color": "#4c4b4b"

};


//Generic self help widget LNF
window._wfx_settings.theme = {
    "widget_size": "20px"
, };

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

// Whatfix setting change to let the tip come over menu.
//balloons to appear over pop ups and for 2nd step in general.
window._wfx_settings.z_refresh = true;

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
        //console.log("Tracking");
    }, 1000);

};

window._wfx_settings.apply_page_settings();



//For flow segmentation
window._wfx_settings.equals = function (one, two) {
    if (!one) {
        if (!two) {
            return true;
        } else {
            return false;
        }
    } else {
        if (!two) {
            return false;
        } else {
            return one == two;
        }
    }
}



//---------------BUTTON JQUERY DEF------------------------//

//CSS for the tooltips associated with the "?" icons/buttons.

var toolTipCss = '<style>\r\n.tooltip {\r\n    position: relative;\r\n    display: inline-block;\r\n    border-bottom: 1px dotted black;\r\n}\r\n\r\n.tooltip .tooltiptext {\r\n    visibility: hidden;\r\n    background-color: black;\r\n    color: #fff;\r\n    text-align: center;\r\n    border-radius: 6px;\r\n    padding: 5px 0;\r\n    \r\n    \/* Position the tooltip *\/\r\n    position: absolute;\r\n    z-index: 1;\r\n    top: -5px;\r\n    right: 105%;\r\n}\r\n\r\n.tooltip:hover .tooltiptext {\r\n    visibility: visible;\r\n}\r\n<\/style>';

//CSS for "?" button, includes some animations, hover function definitions.

var buttonCss = '<style>\r\n.button-hov { \r\n display: inline-block;\r\n position: absolute;\r\n right: 20px; inline-block;\r\n border-radius: 84px;\r\n background-color: #1c9a1a;\r\n border: 1px solid #1c9a1a;\r\n color: #FFFFFF;\r\n text-align: center;\r\n font-size: 10px;\r\n padding: 4px 6px 4px 6px;\r\n cursor: pointer;\r\n margin: 4px 10px 0px 0px;\r\n}\r\n#check {position: relative;z-index: 10000;fill: none;stroke: green;stroke-width: 20;stroke-linecap: round;stroke-dasharray: 180;stroke-dashoffset: 180;  animation: draw 2s 1 ease;}@keyframes draw {  to {    stroke-dashoffset: 0;  }}<\/style>';



// "Validate 1" button
window._wfx_settings.add_button = function (name, button, parentSelector, action) {
    var validate_id = "wfx_" + name + "_validate";
    if (document.getElementById(validate_id)) {
        return;
    }
    var validate = $('<button/>', {
        html: button
        , class: 'ppm_button button'
        , click: action
        , id: validate_id
    });
    $(parentSelector).append(validate);
};



// "Report Status" Button/ "?" icon
window._wfx_settings.add_button_report_status = function (name, img, parentSelector) {
    var report_status_id = "wfx_" + name + "_report_status";
    if (document.getElementById(report_status_id)) {
        return;
    }
    var report_status = $('<button/>', {
        text: "?"
        , style: "vertical-align:middle"
        , class: 'button-hov'
        , id: report_status_id
    });
    $(report_status).append(toolTipCss).append(buttonCss).addClass("tooltip").append(' <span class="tooltiptext"><img src="' + img + '" /></span>');

    $(parentSelector).append(report_status);
};


// "Schedule Status" Button
window._wfx_settings.add_button_schedule_status = function (name, img, parentSelector) {
    var schedule_status_id = "wfx_" + name + "_schedule_status";
    if (document.getElementById(schedule_status_id)) {
        return;
    }
    var schedule_status = $('<button/>', {
        text: "?"
        , style: "vertical-align:middle"
        , class: 'button-hov'
        , id: schedule_status_id
    });
    $(schedule_status).append(toolTipCss).append(buttonCss).addClass("tooltip").append(' <span class="tooltiptext"><img src="' + img + '" /></span>');

    $(parentSelector).append(schedule_status);
};


// Scope Status Button
window._wfx_settings.add_button_scope_status = function (name, img, parentSelector) {
    var scope_status_id = "wfx_" + name + "_scope_status";
    if (document.getElementById(scope_status_id)) {
        return;
    }
    var scope_status = $('<button/>', {
        text: "?"
        , style: "vertical-align:middle"
        , class: 'button-hov'
        , id: scope_status_id
    });
    $(scope_status).append(toolTipCss).append(buttonCss).addClass("tooltip").append(' <span class="tooltiptext"><img src="' + img + '" /></span>');

    $(parentSelector).append(scope_status);
};


// "Cost & Effort" Button
window._wfx_settings.add_button_ce_status = function (name, img, parentSelector) {
    var ce_status_id = "wfx_" + name + "_ce_status";
    if (document.getElementById(ce_status_id)) {
        return;
    }
    var ce_status = $('<button/>', {
        text: "?"
        , style: "vertical-align:middle"
        , class: 'button-hov'
        , id: ce_status_id
    });
    $(ce_status).append(toolTipCss).append(buttonCss).addClass("tooltip").append(' <span class="tooltiptext"><img src="' + img + '" /></span>');

    $(parentSelector).append(ce_status);
};


//---------------------------------------------------------//


//--------------------------------------------------------//

//Invokes functions to add buttons to pages

window._wfx_settings.init_page = function (name, settings) {

    // Validate button addition.
    console.log("Tracking...");

    if (settings.validate) {
        window._wfx_settings.add_button(name, "Validate", settings.button_bar, settings.validate);
    }

    //Report Status button addition.

    window._wfx_settings.add_button_report_status(name, window.tooltip1_url, settings.button_bar_one);

    //Schedule Status button addition.

    window._wfx_settings.add_button_schedule_status(name, window.tooltip2_url, settings.button_bar_two);

    //Scope Status button addition.

    window._wfx_settings.add_button_scope_status(name, window.tooltip3_url, settings.button_bar_three);

    //Cost & Effect Status button addition.

    window._wfx_settings.add_button_ce_status(name, window.tooltip4_url, settings.button_bar_four);

    // Update self help widget if required.
    if (settings.self_help && (!window._wfx_settings.equals(settings.self_help.tags, window._wfx_widget.tags) || !window._wfx_settings.equals(settings.self_help.color, window._wfx_widget.color))) {
        window._wfx_widget.tags = settings.self_help.tags;
        window._wfx_widget.filter_by_tag = settings.self_help.tags;
        window._wfx_widget.color = settings.self_help.color;
        window._wfx_refresh();
    }
};



//Validate 1 button click action
var status_report_validate = function () {

    var str = document.querySelector('[maxlength="80"]').value;
    var date_regex = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/;
    var res = date_regex.test(str.substring(14)) && str.includes('Week Ending');
    var valtip_one = $("<warn1/>", {
        'class': 'tooltips'
        , 'html': '&nbsp;&nbsp;&nbsp;&#9888<msg>Enter Report Name in Correct Format: "Week Ending - MM/DD/YYYY"</msg>'
    }).append('<style>\r\nwarn1.tooltips {\r\n  position: relative;\r\n  display: inline-block;\r\n}\r\nwarn1.tooltips msg {\r\n  position: absolute;\r\n width: 235px;\r\n color: #ff0000;\r\n background: #ffffff;\r\n line-height: 30px;\r\n text-align: center;\r\n visibility: hidden;\r\n border-radius: 9px;\r\n font-weight: bold;\r\n border: 2px solid #ff0000;\r\n}\r\nwarn1:hover.tooltips msg {\r\n  visibility: visible;\r\n  opacity: 1;\r\n  left: 100%;\r\n  top: 50%;\r\n  margin-top: -15px;\r\n  margin-left: 15px;\r\n  z-index: 999;\r\n}\r\n}<\/style>');

    var valtip_two = $("<warn2/>", {
        'class': 'tooltips'
        , 'html': '&nbsp;&nbsp;&nbsp;&#9888<msg>Schedule status is required.</msg>'
    }).append('<style>\r\nwarn2.tooltips {\r\n  position: relative;\r\n  display: inline-block;\r\n}\r\nwarn2.tooltips msg {\r\n  position: absolute;\r\n width: 235px;\r\n color: #ff0000;\r\n background: #ffffff;\r\n line-height: 30px;\r\n text-align: center;\r\n visibility: hidden;\r\n border-radius: 9px;\r\n font-weight: bold;\r\n border: 2px solid #ff0000;\r\n}\r\nwarn2:hover.tooltips msg {\r\n  visibility: visible;\r\n  opacity: 1;\r\n  left: 100%;\r\n  top: 50%;\r\n  margin-top: -15px;\r\n  margin-left: 15px;\r\n  z-index: 999;\r\n}\r\n}<\/style>');

    var valtip_three = $("<warn3/>", {
        'class': 'tooltips'
        , 'html': '&nbsp;&nbsp;&nbsp;&#9888<msg>Variance Explanation is required when status is not On-Track.</msg>'
    }).append('<style>\r\nwarn3.tooltips {\r\n  position: relative;\r\n  display: inline-block;\r\n}\r\nwarn3.tooltips msg {\r\n  position: absolute;\r\n width: 235px;\r\n color: #ff0000;\r\n background: #ffffff;\r\n line-height: 30px;\r\n text-align: center;\r\n visibility: hidden;\r\n border-radius: 9px;\r\n font-weight: bold;\r\n border: 2px solid #ff0000;\r\n}\r\nwarn3:hover.tooltips msg {\r\n  visibility: visible;\r\n  opacity: 1;\r\n  left: 100%;\r\n  top: 50%;\r\n  margin-top: -15px;\r\n  margin-left: 15px;\r\n  z-index: 999;\r\n}\r\n}<\/style>');

    var valtip_four = $("<warn4/>", {
        'class': 'tooltips'
        , 'html': '&nbsp;&nbsp;&nbsp;&#9888<msg>Scope Status is Required.</msg>'
    }).append('<style>\r\nwarn4.tooltips {\r\n  position: relative;\r\n  display: inline-block;\r\n}\r\nwarn4.tooltips msg {\r\n  position: absolute;\r\n width: 235px;\r\n color: #ff0000;\r\n background: #ffffff;\r\n line-height: 30px;\r\n text-align: center;\r\n visibility: hidden;\r\n border-radius: 9px;\r\n font-weight: bold;\r\n border: 2px solid #ff0000;\r\n}\r\nwarn4:hover.tooltips msg {\r\n  visibility: visible;\r\n  opacity: 1;\r\n  left: 100%;\r\n  top: 50%;\r\n  margin-top: -15px;\r\n  margin-left: 15px;\r\n  z-index: 999;\r\n}\r\n}<\/style>');

    var valtip_five = $("<warn5/>", {
        'class': 'tooltips'
        , 'html': '&nbsp;&nbsp;&nbsp;&#9888<msg>Variance Explanation is required when status is not On-Track.</msg>'
    }).append('<style>\r\nwarn5.tooltips {\r\n  position: relative;\r\n  display: inline-block;\r\n}\r\nwarn5.tooltips msg {\r\n  position: absolute;\r\n width: 235px;\r\n color: #ff0000;\r\n background: #ffffff;\r\n line-height: 30px;\r\n text-align: center;\r\n visibility: hidden;\r\n border-radius: 9px;\r\n font-weight: bold;\r\n border: 2px solid #ff0000;\r\n}\r\nwarn5:hover.tooltips msg {\r\n  visibility: visible;\r\n  opacity: 1;\r\n  left: 100%;\r\n  top: 50%;\r\n  margin-top: -15px;\r\n  margin-left: 15px;\r\n  z-index: 999;\r\n}\r\n}<\/style>');

    var valtip_six = $("<warn6/>", {
        'class': 'tooltips'
        , 'html': '&nbsp;&nbsp;&nbsp;&#9888<msg>Cost & Effort Status is Required.</msg>'
    }).append('<style>\r\nwarn6.tooltips {\r\n  position: relative;\r\n  display: inline-block;\r\n}\r\nwarn6.tooltips msg {\r\n  position: absolute;\r\n width: 235px;\r\n color: #ff0000;\r\n background: #ffffff;\r\n line-height: 30px;\r\n text-align: center;\r\n visibility: hidden;\r\n border-radius: 9px;\r\n font-weight: bold;\r\n border: 2px solid #ff0000;\r\n}\r\nwarn6:hover.tooltips msg {\r\n  visibility: visible;\r\n  opacity: 1;\r\n  left: 100%;\r\n  top: 50%;\r\n  margin-top: -15px;\r\n  margin-left: 15px;\r\n  z-index: 999;\r\n}\r\n}<\/style>');

    var valtip_seven = $("<warn7/>", {
        'class': 'tooltips'
        , 'html': '&nbsp;&nbsp;&nbsp;&#9888<msg>Variance Explanation is required when status is not On-Track.</msg>'
    }).append('<style>\r\nwarn7.tooltips {\r\n  position: relative;\r\n  display: inline-block;\r\n}\r\nwarn7.tooltips msg {\r\n  position: absolute;\r\n width: 235px;\r\n color: #ff0000;\r\n background: #ffffff;\r\n line-height: 30px;\r\n text-align: center;\r\n visibility: hidden;\r\n border-radius: 9px;\r\n font-weight: bold;\r\n border: 2px solid #ff0000;\r\n}\r\nwarn7:hover.tooltips msg {\r\n  visibility: visible;\r\n  opacity: 1;\r\n  left: 100%;\r\n  top: 50%;\r\n  margin-top: -15px;\r\n  margin-left: 15px;\r\n  z-index: 999;\r\n}\r\n}<\/style>');

    var repname = $('[maxlength="80"]');
    var schedule_status = $('[name="cop_schedule_status"]');
    var schedule_exp = $('[name="cop_schedule_exp"]');
    var scope_status = $('[name="cop_scope_status"]');
    var scope_exp = $('[name="cop_scope_exp"]');
    var costeffort_status = $('[name="cop_cost_eft_status"]');
    var costeffort_exp = $('[name="cop_effort_exp"]');


    if (res == false) {
        $('tick1').remove();
        if (!($('warn1').length)) {
            repname = repname.addClass('animation').append('<style>\r\n.animation{\r\n  animation: 0.5s animateBorderOne ease 3;\r\n outline: 2px; box-shadow: 0 0 0 2px red;}\r\n\r\n@keyframes animateBorderOne {\r\n  to {\r\n  box-shadow: 0 0 0 2px white;\r\n  }\r\n}<\/style>');
            repname = repname.after(valtip_one);
        }

    } else {
        $('warn1').remove();
        repname = repname.removeClass("animation");
        if (!($('tick1').length)) {
            //repname = repname.addClass('animation1').append('<style>\r\n.animation1{\r\n  animation: 1s animateBorderOne ease 3;\r\n outline: 2px; box-shadow: 0 0 0 2px blue;}\r\n\r\n@keyframes animateBorderOne {\r\n  to {\r\n  box-shadow: 0 0 0 2px white;\r\n  }\r\n}<\/style>');
            repname.after('<tick1><font color="blue">&nbsp;&nbsp;&nbsp;&#10004<font></tick1>');
        }

    }


    if ((document.querySelector('[name="cop_schedule_status"]').selectedIndex == 0)) {
        $('tick2').remove();
        if (!($('warn2').length)) {
            schedule_status = schedule_status.addClass('animation').append('<style>\r\n.animation{\r\n  animation: 0.5s animateBorderOne ease 3;\r\n outline: 2px; box-shadow: 0 0 0 2px red;}\r\n\r\n@keyframes animateBorderOne {\r\n  to {\r\n  box-shadow: 0 0 0 2px white;\r\n  }\r\n}<\/style>');
            schedule_status = schedule_status.after(valtip_two);
        }
    } else {
        $('warn2').remove();
        schedule_status = schedule_status.removeClass("animation");
        if (!($('tick2').length)) {
            //schedule_status = schedule_status.addClass('animation1').append('<style>\r\n.animation1{\r\n  animation: 1s animateBorderOne ease 3;\r\n outline: 2px; box-shadow: 0 0 0 2px blue;}\r\n\r\n@keyframes animateBorderOne {\r\n  to {\r\n  box-shadow: 0 0 0 2px white;\r\n  }\r\n}<\/style>');
            schedule_status.after('<tick2><font color="blue">&nbsp;&nbsp;&nbsp;&#10004</font></tick2>');
        }
    }

    if ((document.querySelector('[name="cop_schedule_status"]').selectedIndex != 1) && document.querySelector('[name="cop_schedule_exp"]').value.length == 0) {
        $('tick3').remove();
        if (!($('warn3').length)) {
            schedule_exp = schedule_exp.addClass('animation').append('<style>\r\n.animation{\r\n  animation: 0.5s animateBorderOne ease 3;\r\n outline: 2px; box-shadow: 0 0 0 2px red;}\r\n\r\n@keyframes animateBorderOne {\r\n  to {\r\n  box-shadow: 0 0 0 2px white;\r\n  }\r\n}<\/style>');
            schedule_exp = schedule_exp.after(valtip_three);
        }
    } else {
        $('warn3').remove();
        schedule_exp = schedule_exp.removeClass("animation");
        if (!($('tick3').length)) {
            //schedule_exp = schedule_exp.addClass('animation1').append('<style>\r\n.animation1{\r\n  animation: 1s animateBorderOne ease 3;\r\n outline: 2px; box-shadow: 0 0 0 2px blue;}\r\n\r\n@keyframes animateBorderOne {\r\n  to {\r\n  box-shadow: 0 0 0 2px white;\r\n  }\r\n}<\/style>');
            schedule_exp.after('<tick3><font color="blue">&nbsp;&nbsp;&nbsp;&#10004</font></tick3>');
        }
    }


    if ((document.querySelector('[name="cop_scope_status"]').selectedIndex == 0)) {
        $('tick4').remove();
        if (!($('warn4').length)) {
            scope_status = scope_status.addClass('animation').append('<style>\r\n.animation{\r\n  animation: 0.5s animateBorderOne ease 3;\r\n outline: 2px; box-shadow: 0 0 0 2px red;}\r\n\r\n@keyframes animateBorderOne {\r\n  to {\r\n  box-shadow: 0 0 0 2px white;\r\n  }\r\n}<\/style>');
            scope_status = scope_status.after(valtip_four);
        }

    } else {
        $('warn4').remove();
        scope_status = scope_status.removeClass("animation");
        if (!($('tick4').length)) {
            //scope_status = scope_status.addClass('animation1').append('<style>\r\n.animation1{\r\n  animation: 1s animateBorderOne ease 3;\r\n outline: 2px; box-shadow: 0 0 0 2px blue;}\r\n\r\n@keyframes animateBorderOne {\r\n  to {\r\n  box-shadow: 0 0 0 2px white;\r\n  }\r\n}<\/style>');
            scope_status.after('<tick4><font color="blue">&nbsp;&nbsp;&nbsp;&#10004</font></tick4>');
        }
    }


    if ((document.querySelector('[name="cop_scope_status"]').selectedIndex != 1) && document.querySelector('[name="cop_scope_exp"]').value.length == 0) {
        $('tick5').remove();
        if (!($('warn5').length)) {
            scope_exp = scope_exp.addClass('animation').append('<style>\r\n.animation{\r\n  animation: 0.5s animateBorderOne ease 3;\r\n outline: 2px; box-shadow: 0 0 0 2px red;}\r\n\r\n@keyframes animateBorderOne {\r\n  to {\r\n  box-shadow: 0 0 0 2px white;\r\n  }\r\n}<\/style>');
            scope_exp = scope_exp.after(valtip_five);
        }
    } else {
        $('warn5').remove();
        scope_exp = scope_exp.removeClass("animation");
        if (!($('tick5').length)) {
            //scope_exp = scope_exp.addClass('animation1').append('<style>\r\n.animation1{\r\n  animation: 1s animateBorderOne ease 3;\r\n outline: 2px; box-shadow: 0 0 0 2px blue;}\r\n\r\n@keyframes animateBorderOne {\r\n  to {\r\n  box-shadow: 0 0 0 2px white;\r\n  }\r\n}<\/style>');
            scope_exp.after('<tick5><font color="blue">&nbsp;&nbsp;&nbsp;&#10004</font></tick5>');
        }
    }

    if ((document.querySelector('[name="cop_cost_eft_status"]').selectedIndex == 0)) {
        $('tick6').remove();
        if (!($('warn6').length)) {
            costeffort_status = costeffort_status.addClass('animation').append('<style>\r\n.animation{\r\n  animation: 0.5s animateBorderOne ease 3;\r\n outline: 2px; box-shadow: 0 0 0 2px red;}\r\n\r\n@keyframes animateBorderOne {\r\n  to {\r\n  box-shadow: 0 0 0 2px white;\r\n  }\r\n}<\/style>');
            costeffort_status = costeffort_status.after(valtip_six);
        }

    } else {
        $('warn6').remove();
        costeffort_status = costeffort_status.removeClass("animation");
        if (!($('tick6').length)) {
            //costeffort_status = costeffort_status.addClass('animation1').append('<style>\r\n.animation1{\r\n  animation: 1s animateBorderOne ease 3;\r\n outline: 2px; box-shadow: 0 0 0 2px blue;}\r\n\r\n@keyframes animateBorderOne {\r\n  to {\r\n  box-shadow: 0 0 0 2px white;\r\n  }\r\n}<\/style>');
            costeffort_status.after('<tick6><font color="blue">&nbsp;&nbsp;&nbsp;&#10004<font></tick6>');
        }
    }


    if ((document.querySelector('[name="cop_cost_eft_status"]').selectedIndex != 1) && document.querySelector('[name="cop_effort_exp"]').value.length == 0) {
        $('tick7').remove();
        if (!($('warn7').length)) {
            costeffort_exp = costeffort_exp.addClass('animation').append('<style>\r\n.animation{\r\n  animation: 0.5s animateBorderOne ease 3;\r\n outline: 2px; box-shadow: 0 0 0 2px red;}\r\n\r\n@keyframes animateBorderOne {\r\n  to {\r\n  box-shadow: 0 0 0 2px white;\r\n  }\r\n}<\/style>');
            costeffort_exp = costeffort_exp.after(valtip_seven);
        }

    } else {
        $('warn7').remove();
        costeffort_exp = costeffort_exp.removeClass("animation");
        if (!($('tick7').length)) {
            //costeffort_exp = costeffort_exp.addClass('animation1').append('<style>\r\n.animation1{\r\n  animation: 1s animateBorderOne ease 3;\r\n outline: 2px; box-shadow: 0 0 0 2px blue;}\r\n\r\n@keyframes animateBorderOne {\r\n  to {\r\n  box-shadow: 0 0 0 2px white;\r\n  }\r\n}<\/style>');
            costeffort_exp.after('<tick7><font color="blue">&nbsp;&nbsp;&nbsp;&#10004</font></tick7>');
        }
    }

};

// Validate one button for New status report.
window._wfx_settings['page_settings']['create_status_report'] = {
    "hash": "#action:odf.subObjectProperties"
    , "button_bar": "#ppm_workspace_bb .ppm_button_bar,form .ppm_button_bar"
    , "validate": status_report_validate
};


// Validate two button for Existing status report.
window._wfx_settings['page_settings']['update_status_report'] = {
    "hash": "#action:odf.cop_prj_statusrptProperties"
    , "button_bar": "#ppm_workspace_bb .ppm_button_bar,form .ppm_button_bar"
    , "validate": status_report_validate
};

// Report Status button for New Status Report.
window._wfx_settings['page_settings']['report_status_one'] = {
    "hash": "#action:odf.subObjectProperties"
    , "button_bar_one": "[title = 'Status Report']"
};

// Report Status button for Existing Status Report.
window._wfx_settings['page_settings']['report_status_two'] = {
    "hash": "#action:odf.cop_prj_statusrptProperties"
    , "button_bar_one": "[title = 'Status Report']"
};


// Schedule Status button for New Status Report.
window._wfx_settings['page_settings']['schedule_status_one'] = {
    "hash": "#action:odf.subObjectProperties"
    , "button_bar_two": "[title = 'Schedule']"

};

// Schedule Status button for Existing Status Report.
window._wfx_settings['page_settings']['schedule_status_two'] = {
    "hash": "#action:odf.cop_prj_statusrptProperties"
    , "button_bar_two": "[title = 'Schedule']"

};


// Scope Status button for New Status Report.
window._wfx_settings['page_settings']['scope_status_one'] = {
    "hash": "#action:odf.subObjectProperties"
    , "button_bar_three": "[title = 'Scope']"

};


// Scope Status button for Existing Status Report.
window._wfx_settings['page_settings']['scope_status_two'] = {
    "hash": "#action:odf.cop_prj_statusrptProperties"
    , "button_bar_three": "[title = 'Scope']"

};


// Cost & Effort Status button for New Status Report.
window._wfx_settings['page_settings']['cost_and_effort_status_one'] = {
    "hash": "#action:odf.subObjectProperties"
    , "button_bar_four": "[title = 'Cost and Effort']"

};

// Cost & Effort Status button for Existing Status Report.
window._wfx_settings['page_settings']['cost_and_effort_status_two'] = {
    "hash": "#action:odf.cop_prj_statusrptProperties"
    , "button_bar_four": "[title = 'Cost and Effort']"

};




//--------------------------------------------------------//



//>>>>>>>>>>>>>>>>>PORTFOLIO
//How to create a Portfolio Plan ?

window._wfx_settings['aff31620-800e-11e6-90aa-04013d24cf02'] = [
[],                                             //0
[],                                             //1
["#action:pfm.portfolioList"],                 //2
["#action:pfm.portfolioDefaultTab","#action:pfm.portfolioProperties"],          //3
["#action:pfm.planList"],       //4
["#action:pfm.portfolioPlanCreate"],        //5
["#action:pfm.portfolioPlanCreate"],       //6
["#action:pfm.portfolioPlanCreate"],       //7
["#action:pfm.portfolioPlanCreate"],       //8
["#action:pfm.portfolioPlanProperties"]        //9
];

//How to set a portfolio plan as the plan of record?
window._wfx_settings['caa38560-863d-11e6-a787-04013d24cf02'] = [
  [],														//0
  [],														//1
  ["#action:pfm.portfolioList"],							//2
  ["#action:pfm.portfolioList","#action:pfm.planList"],		//3
  ["#action:pfm.planList"],									//4
  ["#action:pfm.planList"],									//5
  ["#action:pfm.portfolioList", "#action:pfm.planList"],	//6
  ["#action:pfm.portfolioList"],							//7
  ["#action:pfm.portfolioList"],							//8
  ["#action:pfm.portfolioList"],							//9
  ["#action:pfm.portfolioList"] 							//10
];

//How to create a Portfolio?
window._wfx_settings['d4009dc0-96c6-11e6-836b-04013d24cc02'] = [
  [],														//0
  [],														//1
  ["#action:pfm.portfolioList"],							//2
  ["#action:pfm.portfolioCreate&partition_code=NIKU.ROOT"],		//3
  ["#action:pfm.portfolioCreate&partition_code=NIKU.ROOT"],				//4
  ["#action:pfm.portfolioCreate&partition_code=NIKU.ROOT"],			//5
  ["#action:pfm.portfolioCreate&partition_code=NIKU.ROOT"],				//6
  ["#action:pfm.portfolioCreate&partition_code=NIKU.ROOT"],			//7
  ["#action:pfm.portfolioCreate&partition_code=NIKU.ROOT"],				//8
  ["#action:pfm.portfolioCreate&partition_code=NIKU.ROOT"],				//9
  ["#action:pfm.portfolioCreate&partition_code=NIKU.ROOT"],				//10
  ["#action:pfm.portfolioCreate&partition_code=NIKU.ROOT"], 				//11
  ["#action:pfm.portfolioCreate&partition_code=NIKU.ROOT"],				//12
  ["#action:pfm.portfolioProperties"], 							//13
  ["#action:pfm.portfolioProperties"], 							//14
  ["#action:pfm.portfolioProperties&odf_view=pfm_portfolio.metrics"],                //15
  ["#action:pfm.portfolioProperties&odf_view=pfm_portfolio.metrics"],                //16
  ["#action:pfm.portfolioProperties&odf_view=pfm_portfolio.metrics"]               //17
];

//How to synchronize Portfolio instantly?
window._wfx_settings['b7efd2a0-a679-11e6-a0e0-04013d24cd02'] = [
  [],														//0
  [],														//1
  ["#action:pfm.portfolioList"],							//2
 ["#action:pfm.portfolioDefaultTab&odf_return_to=pfm.portfolioList","#action:pfm.portfolioProperties"],		//3
  ["#action:pfm.portfolioContentsEditor"]				//4
];

//Change the Synchronization Schedule for Portfolio  #4
window._wfx_settings['d1ab2ee0-8afb-11e6-a787-04013d24cf02d1ab2ee0-8afb-11e6-a787-04013d24cf02'] = [
  [],
  [],
/*02*/["#action:pfm.portfolioList"],
/*03*/["#action:pfm.portfolioDefaultTab", "#action:pfm.portfolioProperties"],
/*04*/["#action:pfm.portfolioDefaultTab", "#action:pfm.portfolioProperties"],
/*05*/["#action:pfm.portfolioDefaultTab", "#action:pfm.portfolioProperties"],
/*06*/["#action:pfm.portfolioDefaultTab", "#action:pfm.portfolioProperties"],
/*07*/["#action:pfm.portfolioDefaultTab", "#action:pfm.portfolioProperties"],
/*08*/["#action:pfm.portfolioInvestments"],
/*09*/["#action:pfm.portfolioWorksheet"],
/*10*/["#action:pfm.portfolioContentsEditor"],
/*11*/["#action:pfm.portfolioContentsEditor"],
/*12*/["#action:pfm.portfolioContentsEditor"],
/*13*/["#action:pfm.portfolioInvestments"],
/*14*/["#action:pfm.portfolioContentsEditor"],
/*15*/["#action:pfm.portfolioProperties"],
/*16*/["#action:pfm.portfolioProperties"],
/*17*/["#action:nmc.reportAccess"],
/*18*/["#action:nmc.reportAccess"],
/*19*/["#action:nmc.reportAccess"],
/*20*/["#action:nmc.reportAccess"]
]

//>>>>>>>>>>>>>>>>>DEMAND
//How to add a team to an idea  #5

window._wfx_settings['06bd5ca0-86fd-11e6-b370-04013d24cc02'] = [

  [],
  [],
/*02*/["#action:pma.ideaList"],
/*03*/["#action:pma.ideaProperties"],
/*04*/["#action:projmgr.npioStaffing.id"],
/*05*/["#action:projmgr.npioStaffing.id"],
/*06*/["#action:projmgr.npioStaffing.id"]

]


//How to approve an Idea?  #6
window._wfx_settings['dcdefb90-84a5-11e6-ae8d-04013d24cf02'] = [
  [],
  [],
/*02*/["#action:pma.ideaList"],
/*03*/["#action:pma.ideaProperties"],
/*04*/["#action:pma.ideaProperties"],
/*05*/["#action:pma.ideaProperties"]
]


//How to Create an Issue?  #7

window._wfx_settings['2c7450c0-8496-11e6-ae8d-04013d24cf02'] = [

  [],
  [],
/*02*/["#action:mainnav.work&classCode=project"],
/*03*/["#action:projmgr.projectDefaultTab","#action:projmgr.projectProperties","#action:projmgr.projectDashboard"],
/*04*/["#action:itl.riskList"],
/*05*/["#action:itl.riskList"],
/*06*/["#action:itl.issueList"],
/*07*/["#action:itl.issueObject"],
/*08*/["#action:itl.issueObject"],
/*09*/["#action:itl.issueObject"],
/*10*/["#action:itl.issueObject"]
]

//How to create an Idea?
window._wfx_settings['d0a36250-8499-11e6-ae8d-04013d24cf02'] = [
  [],
  [],
/*02*/["#action:pma.ideaList"],
/*03*/["#action:pma.ideaCreate"],
/*04*/["#action:pma.ideaCreate"],
/*05*/["#action:pma.ideaCreate"],
/*06*/["#action:pma.ideaCreate"],
/*07*/["#action:pma.ideaCreate"],
/*08*/["#action:pma.ideaCreate"],
/*09*/["#action:pma.ideaCreate"],
/*10*/["#action:pma.ideaCreate"],
/*11*/["#action:pma.ideaCreate"],
/*12*/["#action:pma.ideaCreate"],
/*13*/["#action:pma.ideaCreate"]
]


//How to Reject an Idea?
window._wfx_settings['2ff9dbb0-855f-11e6-ba2f-04013d24cd02'] = [
  [],
  [],
/*02*/["#action:pma.ideaList"],
/*03*/["#action:pma.ideaProperties"],
/*04*/["#action:pma.ideaProperties"],
/*05*/["#action:pma.ideaProperties"],
/*06*/["#action:pma.ideaProperties"]
]



//How to Request More Information for an Idea?  #9
window._wfx_settings['36a4e110-854d-11e6-ae8d-04013d24cf02'] = [
  [],
  [],
/*02*/["#action:pma.ideaList"],
/*03*/["#action:pma.ideaProperties"],
/*04*/["#action:pma.ideaProperties"],
/*05*/["#action:pma.ideaProperties"],
/*06*/["#action:pma.ideaProperties"]
]


//How to Submit an Idea?  #10
window._wfx_settings['d55289f0-8964-11e6-85ad-04013d24cd02'] = [
  [],
  [],
/*02*/["#action:pma.ideaList"],
/*03*/["#action:pma.ideaList"],
/*04*/["#action:pma.ideaList"],
/*05*/["#action:pma.ideaList"],
/*06*/["#action:pma.ideaProperties"],
/*07*/["#action:pma.ideaProperties"],
/*08*/["#action:pma.ideaProperties"]
]

//How to Convert an Incident to a Project?  #11
window._wfx_settings['634f9870-912f-11e6-b370-04013d24cc02'] = [
  [],
  [],
/*02*/["#action:itl.incidentList"],
/*03*/["#action:itl.incidentList"],
/*04*/["#action:itl.selectConvertType"],
/*05*/["#action:itl.selectConvertType"],
/*06*/["#action:projmgr.projectNew"]
]


//How to Convert an Incident to a Task?  #12
window._wfx_settings['becbaa30-8956-11e6-a787-04013d24cf02'] = [
  [],
  [],
/*02*/["#action:itl.incidentList"],
/*03*/["#action:itl.incidentList"],
/*04*/["#action:itl.chooseProjectForTask"],
/*05*/["#action:itl.chooseProjectForTask"],
/*06*/["#action:projmgr.taskProperties"],
/*07*/["#action:projmgr.taskProperties"],
/*08*/["#action:projmgr.taskProperties"],
/*09*/["#action:itl.incidentList"],
/*10*/["#action:itl.incidentObject"]
]


//How to Create an Incident?  #13
window._wfx_settings['463c1f00-8636-11e6-b370-04013d24cc02'] = [
  [],
  [],
/*02*/["#action:itl.incidentList"],
/*03*/["#action:itl.incidentObject"],
/*04*/["#action:itl.incidentObject"],
/*05*/["#action:itl.incidentObject"],
/*06*/["#action:itl.incidentObject"],
/*07*/["#action:itl.incidentObject"],
/*08*/["#action:itl.incidentObject"],
/*09*/["#action:itl.incidentObject"],
/*10*/["#action:itl.incidentObject"],
/*11*/["#action:itl.incidentObject"],
/*12*/["#action:itl.incidentObject"]
]

//How to Flag an Incident for Conversion?    #14
window._wfx_settings['9927f260-864b-11e6-a787-04013d24cf02'] = [
  [],
  [],
/*02*/["#action:itl.incidentList"],
/*03*/["#action:itl.incidentList"],
/*04*/["#action:itl.incidentObject"],
/*05*/["#action:itl.incidentObject"],
/*06*/["#action:itl.incidentObject"],
/*07*/["#action:itl.incidentObject"],
/*08*/["#action:itl.incidentObject"],
/*09*/["#action:itl.incidentObject"],
/*10*/["#action:itl.incidentList"]
]

//Manually Convert an Idea to an Investment  #15
window._wfx_settings['751c3b40-99df-11e6-a426-04013d24cc02'] = [
  [],
  [],
/*02*/["#action:pma.ideaList"],
/*03*/["#action:pma.ideaProperties"],
/*04*/["#action:pma.ideaProperties"],
/*05*/["#action:pma.ideaConvert"],
/*06*/["#action:pma.ideaConvert"],
/*07*/["#action:projmgr.projectNew"],
/*08*/["#action:projmgr.projectNew"]
]


//>>>>>>>>>>>>>>>>>PROJECT

//How to create a Change Request?

window._wfx_settings['c0dd8dc0-8154-11e6-9479-04013d24cd02'] = [

  [],
  [],
  /*02*/["#action:mainnav.work&classCode=project"],
/*03*/["#action:projmgr.projectDefaultTab","#action:projmgr.projectProperties","#action:projmgr.projectDashboard","#action:dashboardProjectStatus"],
/*04*/["#action:itl.riskList","#action:dashboardProjectStatus"],
/*05*/["#action:itl.riskList"],
/*06*/["#action:itl.changeList","#action:itl.riskList"],
/*07*/["#action:itl.changeObject"],
/*08*/["#action:itl.changeObject"],
/*09*/["#action:itl.changeObject"],
/*10*/["#action:itl.changeObject"],
  
/*11*/["#action:itl.changeObject"],
  
/*12*/["#action:itl.changeObject"],
  
/*13*/["#action:itl.changeObject"],
  
/*14*/["#action:itl.changeObject"],
  
/*15*/["#action:itl.changeObject"],
  /*16*/["#action:itl.changeObject"]
  
  ];

//How to Allocate Resource from Estimates?

window._wfx_settings['35c8a770-8153-11e6-9479-04013d24cd02'] = [

  [],
  [],
/*02*/["#action:mainnav.work&classCode=project"],
/*03*/["#action:projmgr.projectDefaultTab","#action:projmgr.projectProperties","#action:projmgr.projectDashboard"],
/*04*/["#action:projmgr.roster"],
/*05*/["#action:projmgr.roster"],
/*06*/["#action:projmgr.roster"]

];

//How to Approve a Submitted Budget Plan?

window._wfx_settings['a9ff4050-8495-11e6-a247-04013d24cc02'] = [

  [],
  [],
/*02*/["#action:mainnav.work&classCode=project"],
/*03*/["#action:projmgr.projectDefaultTab","#action:projmgr.projectProperties","#action:projmgr.projectDashboard"],
/*04*/["#action:revmgr.costplanList.project&id"],
/*05*/["#action:revmgr.budgetList&id"],

];

//How to Add Document to a Project?

window._wfx_settings['72f65ac0-977e-11e6-836b-04013d24cc02'] = [

  [],
  [],
/*02*/["#action:mainnav.work&classCode=project"],
/*03*/["#action:projmgr.projectDefaultTab","#action:projmgr.projectProperties","#action:projmgr.projectDashboard"],
/*04*/["#action:dms.ProjectsFileManager"],
/*05*/["#action:dms.ProjectsaddMultipleFiles"],
/*06*/["#action:dms.ProjectsaddMultipleFiles"],
/*07*/["#action:dms.ProjectsaddMultipleFiles"],
/*08*/["#action:dms.ProjectsaddMultipleFiles"],
/*09*/["#action:dms.ProjectsaddMultipleFiles"]

];

//How to replace a Role throughout the Project?

window._wfx_settings['d55462e0-847b-11e6-ba2f-04013d24cd02'] = [

  [],
  [],
/*02*/["#action:mainnav.work&classCode=project"],
/*03*/["#action:projmgr.projectDefaultTab","#action:projmgr.projectProperties","#action:projmgr.projectDashboard"],
/*04*/["#action:projmgr.roster"],
/*05*/["#action:projmgr.roster"],
/*06*/["#action:projmgr.roster"]
];








//How to Create a requisition for a Role?

window._wfx_settings['b3856630-9b4d-11e6-9b3b-04013d24cd02'] = [

  [],
  [],
/*02*/["#action:mainnav.work&classCode=project"],
/*03*/["#action:projmgr.projectDefaultTab","#action:projmgr.projectProperties","#action:projmgr.projectDashboard","#action:dashboardProjectStatus&id"],
/*04*/["#action:projmgr.roster"],
/*05*/["#action:projmgr.roster"],
/*06*/["#action:projmgr.roster"],
/*07*/["#action:projmgr.roster"],
/*08*/["#action:projmgr.teamList&view_code=projectTeamStaff&instanceCode=FILTER_projmgr.teamList&objectCode=teams&componentId=projmgr&hpdFactor=1&page_projmgr.teamList_collapse=false&view_id=projmgr.projectTeamStaff&superSecretTokenKey=superSecretTokenValue&id"],
/*09*/["#action:projmgr.teamList&view_code=projectTeamStaff&instanceCode=FILTER_projmgr.teamList&objectCode=teams&componentId=projmgr&hpdFactor=1&page_projmgr.teamList_collapse=false&view_id=projmgr.projectTeamStaff&superSecretTokenKey=superSecretTokenValue&id"],
/*10*/["#action:projmgr.teamList&view_code=projectTeamStaff&instanceCode=FILTER_projmgr.teamList&objectCode=teams&componentId=projmgr&hpdFactor=1&page_projmgr.teamList_collapse=false&view_id=projmgr.projectTeamStaff&superSecretTokenKey=superSecretTokenValue&id"],
/*11*/["#action:projmgr.teamList&view_code=projectTeamStaff&instanceCode=FILTER_projmgr.teamList&objectCode=teams&componentId=projmgr&hpdFactor=1&page_projmgr.teamList_collapse=false&view_id=projmgr.projectTeamStaff&superSecretTokenKey=superSecretTokenValue&id"],
/*12*/["#action:projmgr.teamList&view_code=projectTeamStaff&instanceCode=FILTER_projmgr.teamList&objectCode=teams&componentId=projmgr&hpdFactor=1&page_projmgr.teamList_collapse=false&view_id=projmgr.projectTeamStaff&superSecretTokenKey=superSecretTokenValue&id"],
/*13*/["#action:projmgr.teamList&view_code=projectTeamStaff&instanceCode=FILTER_projmgr.teamList&objectCode=teams&componentId=projmgr&hpdFactor=1&page_projmgr.teamList_collapse=false&view_id=projmgr.projectTeamStaff&superSecretTokenKey=superSecretTokenValue&id"],
/*14*/["#action:projmgr.teamList&view_code=projectTeamStaff&instanceCode=FILTER_projmgr.teamList&objectCode=teams&componentId=projmgr&hpdFactor=1&page_projmgr.teamList_collapse=false&view_id=projmgr.projectTeamStaff&superSecretTokenKey=superSecretTokenValue&id"],
/*15*/["#action:projmgr.teamList&view_code=projectTeamStaff&instanceCode=FILTER_projmgr.teamList&objectCode=teams&componentId=projmgr&hpdFactor=1&page_projmgr.teamList_collapse=false&view_id=projmgr.projectTeamStaff&superSecretTokenKey=superSecretTokenValue&id"],

];





//How to Close an Action Item Assigned to You (v2)?

window._wfx_settings['14144ca0-d6b8-11e6-b2c3-04013d24cc02'] = [

  [],
  [],
/*02*/["#action:mainnav.work&classCode=project"],
/*03*/["#action:calendar.actionitemDetails&odf_pk"],
/*04*/["#action:calendar.actionitemDetails&odf_pk"],
/*05*/["#action:calendar.actionitemDetails&odf_pk"],

];





//How to Close an Action Item Assigned to You?

window._wfx_settings['d77800f0-9b4a-11e6-a426-04013d24cc02'] = [

  [],
  [],
/*02*/["#action:calendar.organizerHome"],
/*03*/["#action:calendar.organizerHome"],
/*04*/["#action:calendar.actionItemList&uitk.navigation.parent.location=Workspace&uitk.navigation.last.workspace.action=calendar.organizerHome&object_id=-1&aiListType=AssginedToMe&superSecretTokenKey=superSecretTokenValue"],
/*05*/["#action:calendar.actionitemDetails&odf_pk="],
/*06*/["#action:calendar.actionitemDetails&odf_pk="],

];














//How to create a Status Report?

window._wfx_settings['12f0f050-847c-11e6-ae8d-04013d24cf02'] = [

  [],
  [],
/*02*/["#action:mainnav.work&classCode=project"],
/*03*/["#action:projmgr.projectDefaultTab","#action:projmgr.projectProperties&odf_view=projectGeneral","#action:projmgr.projectDashboard","#action:dashboardProjectStatus","#action:projmgr.projectProperties&id"],
/*04*/["#action:projmgr.projectDefaultTab","#action:projmgr.projectProperties&odf_view=projectGeneral","#action:projmgr.projectDashboard","#action:projmgr.projectProperties&id"],
/*05*/["#action:projmgr.projectProperties&odf_view"],
/*06*/["odf_code=cop_prj_statusrpt", "#action:odf.cop_prj_statusrptProperties"],
/*07*/["odf_code=cop_prj_statusrpt", "#action:odf.cop_prj_statusrptProperties"],
/*08*/["odf_code=cop_prj_statusrpt", "#action:odf.cop_prj_statusrptProperties"],
/*09*/["odf_code=cop_prj_statusrpt", "#action:odf.cop_prj_statusrptProperties"],
/*10*/["odf_code=cop_prj_statusrpt", "#action:odf.cop_prj_statusrptProperties"],
/*11*/["odf_code=cop_prj_statusrpt", "#action:odf.cop_prj_statusrptProperties"],
/*12*/["odf_code=cop_prj_statusrpt", "#action:odf.cop_prj_statusrptProperties"],
/*13*/["odf_code=cop_prj_statusrpt", "#action:odf.cop_prj_statusrptProperties"],
/*14*/["odf_code=cop_prj_statusrpt", "#action:odf.cop_prj_statusrptProperties"],
/*15*/["odf_code=cop_prj_statusrpt", "#action:odf.cop_prj_statusrptProperties"],
/*16*/["odf_code=cop_prj_statusrpt", "#action:odf.cop_prj_statusrptProperties"],
/*17*/["odf_code=cop_prj_statusrpt"]

];

//How to add a Participant Group?

window._wfx_settings['dbb513e0-99d5-11e6-a426-04013d24cc02'] = [

  [],
  [],
/*02*/["#action:mainnav.work&classCode=project"],
/*03*/["#action:projmgr.projectDefaultTab","#action:projmgr.projectProperties","#action:projmgr.projectDashboard"],
/*04*/["#action:projmgr.roster"],
/*05*/["#action:collab.groupsView"],
/*06*/["#action:collab.groupsView"],
/*07*/["#action:collab.groupsView"],
/*08*/["#action:collab.groupsView"],
/*09*/["#action:collab.groupsView"],
/*10*/["#action:collab.groupsView"],
/*11*/["#action:collab.groupsView"],
/*12*/["#action:collab.groupsView"]

];


//How to create a Project ?
window._wfx_settings['87329a20-8186-11e6-ae8d-04013d24cf02'] = [

  [],
  [],
/*02*/["#action:mainnav.work&classCode=project"],
/*03*/["#action:projmgr.projectNew&partition"],
/*04*/["#action:projmgr.projectNew&partition"],
/*05*/["#action:projmgr.projectNew&partition"],
/*06*/["#action:projmgr.projectNew&partition"],
/*07*/["#action:projmgr.projectNew&partition"],
/*08*/["#action:projmgr.projectNew&partition"],
/*09*/["#action:projmgr.projectNew&partition"],
/*10*/["#action:projmgr.projectNew&partition"],
/*11*/["#action:projmgr.projectNew&partition"]

];

//How to make a Collaboration Manager?

window._wfx_settings['3e5a4420-99cc-11e6-a426-04013d24cc02'] = [

  [],
  [],
/*02*/["#action:mainnav.work&classCode=project"],
/*03*/["#action:projmgr.projectDefaultTab","#action:projmgr.projectProperties","#action:projmgr.projectDashboard"],
/*04*/["#action:projmgr.roster"],
/*05*/["#action:collab.projectParticipants"],
/*06*/["#action:collab.projectParticipants"],
/*07*/["#action:collab.makeManagerConfirmation"],
/*08*/["#action:collab.projectParticipants","#action:collab.makeManagerConfirmation"]

];


//How to create a baseline?

window._wfx_settings['9748f410-80b7-11e6-a47d-04013d24cc02'] = [

  [],
  [],
/*02*/["#action:mainnav.work&classCode=project"],
/*03*/["#action:projmgr.projectProperties","#action:projmgr.projectDefaultTab","#action:projmgr.projectDashboard"],
/*04*/["#action:projmgr.projectProperties"],
/*05*/["#action:projmgr.baselineRevisionList"],
/*06*/["#action:projmgr.baselineRevisionProperties"],
/*07*/["#action:projmgr.baselineRevisionProperties"],
/*08*/["#action:projmgr.baselineRevisionProperties"],
/*09*/["#action:projmgr.baselineRevisionProperties"]

];

//Create a Risk

window._wfx_settings['33c53fe0-815f-11e6-90aa-04013d24cf02'] = [

  [],
  [],
/*02*/["#action:mainnav.work&classCode=project"],
/*03*/["#action:projmgr.projectDefaultTab","#action:projmgr.projectProperties","#action:projmgr.projectDashboard"],
/*04*/["#action:itl.riskList"],
/*05*/["#action:itl.riskObject"],
/*06*/["#action:itl.riskObject"],
/*07*/["#action:itl.riskObject"],
/*08*/["#action:itl.riskObject"],
/*09*/["#action:itl.riskObject"],
/*10*/["#action:itl.riskObject"],
/*11*/["#action:itl.riskObject&odf_pk"],
/*12*/["#action:itl.riskObject&odf_pk"],
/*13*/["#action:itl.riskObject&odf_pk"],
/*14*/["#action:projmgr.projectProperties","#action:itl.riskList"],
/*15*/["#action:projmgr.projectProperties"]

];
   
window._wfx_settings['4be97380-84b0-11e6-a247-04013d24cc02'] = [

  [],
  [],
/*02*/["#action:mainnav.work&classCode=project"],
/*03*/["#action:projmgr.selectProjectTemplate&cancelAction"],
/*04*/["#action:projmgr.selectProjectTemplate&cancelAction"],
/*05*/["#action:projmgr.projectNew&template"],
/*06*/["#action:projmgr.projectNew&template"],
/*07*/["#action:projmgr.projectNew&template"]

];
 

//How to add a Participant?
window._wfx_settings['fd7d9a20-99bb-11e6-9bb3-04013d24cf02'] = [
  [],														//0
  [],														//1
  ["#action:mainnav.work"],							//2
  ["#action:projmgr.projectDefaultTab","#action:dashboardProjectStatus","#action:projmgr.projectProperties","#action:projmgr.projectDashboard"],		                    //3
  ["#action:projmgr.roster"],				//4
  ["#action:collab.projectParticipants"],			    //5
  ["#action:collab.projectParticipants"],			//6
  ["#action:collab.projectParticipants"]			//7
];


//Create a Program  #31
window._wfx_settings['bd1dfc60-8965-11e6-a787-04013d24cf02'] = [
  [],
  [],
/*02*/["#action:projmgr.programs"],
/*03*/["#action:projmgr.programNew"],
/*04*/["#action:projmgr.programNew"],
/*05*/["#action:projmgr.programNew"],
/*06*/["#action:projmgr.programNew"]
]

//Manage Allocations for a Staff Member  #37
window._wfx_settings['23bc09d0-80c4-11e6-90aa-04013d24cf02'] = [
  [],
  [],
/*02*/["#action:mainnav.work"],
/*03*/["#action:projmgr.projectDefaultTab","#action:projmgr.projectProperties","#action:projmgr.projectDashboard"],
/*04*/["#action:projmgr.roster"],
/*05*/["#action:projmgr.getResourceProjectObjectList"],
/*06*/["#action:projmgr.getResourceProjectObjectList"],
/*07*/["#action:projmgr.getResourceProjectObjectList"],
/*08*/["#action:projmgr.getResourceProjectObjectList"],
/*09*/["#action:projmgr.getResourceProjectObjectList"],
/*10*/["#action:projmgr.getResourceProjectObjectList"],
/*11*/["#action:projmgr.getResourceProjectObjectList"],
/*12*/["#action:projmgr.getResourceProjectObjectList"],
/*13*/["#action:projmgr.getResourceProjectObjectList"],
/*14*/["#action:projmgr.getResourceProjectObjectList"]
]


//How to financially enable a Project  #46
window._wfx_settings['dad54b20-9778-11e6-914c-04013d24cd02'] = [

  [],
  [],
/*02*/["#action:mainnav.work"],
/*03*/["#action:projmgr.projectDefaultTab","#action:projmgr.projectProperties","#action:projmgr.projectDashboard"],
/*04*/["#action:projmgr.projectProperties"],
/*05*/["#action:projmgr.projectProperties"],
/*06*/["#action:projmgr.projectProperties"],
/*07*/["#action:projmgr.projectProperties"],
/*08*/["#action:projmgr.projectProperties"],
/*09*/["#action:projmgr.projectProperties"],
/*10*/["#action:projmgr.projectProperties"],
/*11*/["#action:projmgr.projectProperties"],
/*12*/["#action:projmgr.projectProperties"]
]


//Create a cost plan from the task assignments  #47
window._wfx_settings['b3a59dd0-84a3-11e6-a247-04013d24cc02'] = [

  [],
  [],
/*02*/["#action:mainnav.work"],
/*03*/["#action:projmgr.projectDefaultTab","#action:projmgr.projectProperties","#action:projmgr.projectDashboard"],
/*04*/["#action:revmgr.costplanList.project"],
/*05*/["#action:revmgr.costplanList.project"],
/*06*/["#action:revmgr.costplanProperties&object_code=project&superSecretTokenKey=superSecretTokenValue&id"],
/*07*/["#action:revmgr.costplanProperties&object_code=project&superSecretTokenKey=superSecretTokenValue&id"],
/*08*/["#action:revmgr.costplanProperties&object_code=project&superSecretTokenKey=superSecretTokenValue&id"],
/*09*/["#action:revmgr.costplanProperties&object_code=project&superSecretTokenKey=superSecretTokenValue&id"],

]


//How to Add Links and Notes to a Project  #60
window._wfx_settings['1cf893b0-9b5f-11e6-a426-04013d24cc02'] = [
  [],
  [],
/*02*/["#action:mainnav.work"],
/*03*/["###"],
/*04*/["#action:projmgr.projectProperties"],
/*05*/["#action:projmgr.projectProperties"],
/*06*/["#action:projmgr.projectProperties"],
/*07*/["#action:projmgr.projectProperties"],
/*08*/["#action:projmgr.projectProperties"],
/*09*/["#action:projmgr.projectProperties"],
/*10*/["#action:projmgr.projectProperties"],
/*11*/["#action:projmgr.projectProperties"],
/*12*/["#action:projmgr.projectProperties"],
/*13*/["#action:projmgr.projectProperties"],
/*14*/["#action:projmgr.projectProperties"],
/*15*/["#action:projmgr.projectProperties"],
/*16*/["#action:projmgr.projectProperties"],
/*17*/["#action:projmgr.projectProperties"]
]


//>>>>>>>>>>>>>>>>>FINANCIAL


//how to create a benefit plan

window._wfx_settings['5dac4a20-83cf-11e6-ba2f-04013d24cd02'] = [

  [],
  [],
/*02*/["#action:mainnav.work&classCode=project"],
/*03*/["#action:projmgr.projectDefaultTab","#action:projmgr.projectProperties","#action:projmgr.projectDashboard"],
/*04*/["#action:revmgr.costplanList.project"],
/*05*/["#action:revmgr.costplanList.project"],
/*06*/["#action:revmgr.benefitplanList"],
/*07*/["#action:revmgr.benefitplanProperties"],
/*08*/["#action:revmgr.benefitplanProperties"],
/*09*/["#action:revmgr.benefitplanProperties"],
/*10*/["#action:revmgr.benefitplanProperties"]

];

//Copy of Cost Plan

window._wfx_settings['73182fd0-8494-11e6-ae8d-04013d24cf02'] = [
[],                 //0
[],                 //1
["#action:mainnav.work&classCode=project"],    //2
["#action:projmgr.projectDefaultTab","#action:projmgr.projectProperties","#action:projmgr.projectDashboard"],               //3
["#action:revmgr.costplanList.project"],            //4
["#action:revmgr.costplanList.project"],           //5
["#action:revmgr.costplanList.project"],          //6
["#action:revmgr.costplanList.project"],           //7
["#action:revmgr.costplanList.project"],          //8
["#action:revmgr.costplanList.project"]           //9
];

//>>>>>>>>>>>>>>>Resource

//How to add Skills to a Resource?
window._wfx_settings['c27eaad0-849a-11e6-ae8d-04013d24cf02'] = [
  [],														//0
  [],														//1
  ["#action:projmgr.getResources"],							//2
  ["#action:projmgr.editResource"],		                    //3
  ["#action:resource.openSkillsAssociation"],				//4
  ["#action:resource.skillsAssociationSelect"],			    //5
  ["#action:resource.skillsAssociationSelectSort"],			//6
  ["#action:resource.skillsAssociationSelectSort"],			//7
  ["#action:resource.openSkillsAssociationReturn"],			//8
  ["#action:resource.openSkillsAssociationReturn"],			//9
  ["#action:resource.openSkillsAssociationReturn"]			//10
];

//How to create a Resource?
window._wfx_settings['ff602ea0-7f55-11e6-a47d-04013d24cc02'] = [
  [],														//0
  [],														//1
  ["#action:projmgr.getResources"],							//2
  ["#action:projmgr.resourceNewOptions_odf"],		                    //3
  ["#action:projmgr.newResource"],				//4
  ["#action:projmgr.newResource"],			    //5
  ["#action:projmgr.newResource"],			//6
  ["#action:projmgr.newResource"],			//7
  ["#action:projmgr.newResource"]			//8
];

//How to Create a Role?
window._wfx_settings['deb84cd0-89f2-11e6-a787-04013d24cf02'] = [
  [],														//0
  [],														//1
  ["#action:projmgr.getResources"],							//2
  ["#action:projmgr.resourceNewOptions_odf"],		                    //3
  ["#action:projmgr.resourceNewOptions_odf"],				//4
  ["#action:projmgr.newResource"],			    //5
  ["#action:projmgr.newResource"],			//6
  ["#action:projmgr.newResource"]			//7
];

//How to add documents to a resource?
window._wfx_settings['08929ba0-9781-11e6-836b-04013d24cc02'] = [
  [],														//0
  [],														//1
  ["#action:projmgr.getResources"],							//2
  ["#action:projmgr.editResource"],		                    //3
  ["#action:dms.ResourcesFileManager"],				//4
  ["#action:dms.ResourcesaddMultipleFiles"],			    //5
  ["#action:dms.ResourcesaddMultipleFiles"]			//6
];

//How to financially enable a Resource?
window._wfx_settings['298e3520-978c-11e6-b5ed-04013d24cf02'] = [
  [],														//0
  [],														//1
  ["#action:projmgr.getResources"],							//2
  ["#action:projmgr.editResource"],		//3
  ["#action:projmgr.editResource"],				//4
  ["#action:revmgr.resourceFinancials"],			//5
  ["#action:revmgr.resourceFinancials"],				//6
  ["#action:revmgr.resourceFinancials"],			//7
  ["#action:revmgr.resourceFinancials"],				//8
  ["#action:revmgr.resourceFinancials"],				//9
  ["#action:revmgr.resourceFinancials"],				//10
  ["#action:revmgr.resourceFinancials"], 				//11
  ["#action:revmgr.resourceFinancials"],				//12
  ["#action:revmgr.resourceFinancials"], 							//13
  ["#action:revmgr.resourceFinancials"], 							//14
  ["#action:revmgr.resourceFinancials"],                //15
  ["#action:revmgr.resourceFinancials"],                //16
  ["#action:revmgr.resourceFinancials"],               //17
  ["#action:revmgr.resourceFinancials"]               //18
];

//How to designate proxy for a Resource?
window._wfx_settings['5a06a300-9a7e-11e6-9bb3-04013d24cf02'] = [
  [],														//0
  [],														//1
  ["#action:personal.settings"],							//2
  ["#action:personal.proxySettings"],		                    //3
  ["#action:personal.proxySettings"],				//4
  ["#action:personal.proxySettings"],			    //5
  ["#action:personal.proxySettings"],			//6
  ["#action:personal.proxySettings"],			//7
  ["#action:personal.proxySettings"],			//8
  ["#action:personal.proxySettings"]			//9
];

//How to change notification settings of a user?
window._wfx_settings['3a588b80-9b4c-11e6-9b3b-04013d24cd02'] = [
  [],														//0
  [],														//1
  ["#action:personal.settings"],							//2
  ["#action:personal.notifications"],		                    //3
  ["#action:personal.notifications"],				//4
  ["#action:personal.notifications"],			    //5
  ["#action:personal.notifications"]			//6
];

//How to configure your personal account settings?
window._wfx_settings['c6638810-9b41-11e6-9bb3-04013d24cf02'] = [
  [],														//0
  [],														//1
  ["#action:personal.settings"],							//2
  ["#action:personal.settings"],		                    //3
  ["#action:personal.settings"],				//4
  ["#action:personal.settings"]			    //5
];


//How to Shift a Resource Allocation in a Project ?
window._wfx_settings['4cf6fa90-9b67-11e6-9bb3-04013d24cf02'] = [
  [],														//0
  [],														//1
  ["#action:mainnav.work"],							//2
 ["#action:projmgr.projectDefaultTab","#action:dashboardProjectStatus","#action:projmgr.projectProperties","#action:projmgr.projectDashboard"],		                    //3
  ["#action:projmgr.roster","#action:projmgr.teamList"],				//4
  ["#action:projmgr.roster"],			    //5
  ["#action:projmgr.roster"],			//6
  ["#action:projmgr.roster"],			//7
  ["#action:projmgr.roster"],			//8
  ["#action:projmgr.roster"],			//9
  ["#action:projmgr.roster"],			//10
  ["#action:projmgr.roster"],			//11
  ["#action:projmgr.roster"]			//12
];



//>>>>>>>>>>>>General

//How to run a Job?
window._wfx_settings['4e97f580-a1ab-11e6-961a-04013d24cf02'] = [
  [],														//0
  [],														//1
  ["#action:nmc.reportAccess"],							//2
  ["#action:nmc.reportAccess"],		                    //3
  ["#action:nmc.reportAccess"],				//4
  ["#action:nmc.jobPropertiesNew"],			    //5
  ["#action:nmc.jobPropertiesNew"]			//6
];


//How to run a process?
window._wfx_settings['666db330-91f1-11e6-b370-04013d24cc02'] = [
  [],														//0
  [],														//1
  ["#action:calendar.organizerHome"],							//2
  ["#action:calendar.organizerProcessInstances"],		                    //3
  ["#action:calendar.organizerProcessInstances"],				//4
  ["#action:calendar.organizerProcessDefinitions"],			    //5
  ["#action:calendar.organizerProcessDefinitions"],			//6
  ["#action:calendar.organizerProcessInstances","#action:calendar.organizerProcessInstancesSort"]			//7
];

//How to create an Action Item to a resource?
window._wfx_settings['84b840a0-9b77-11e6-93e6-04013d24cc02'] = [
  [],														//0
  [],														//1
  ["#action:calendar.organizerHome"],							//2
  ["#action:calendar.actionitemProperties"],		//3
  ["#action:calendar.actionitemProperties"],				//4
  ["#action:calendar.actionitemProperties"],			//5
  ["#action:calendar.actionitemProperties"],				//6
  ["#action:calendar.actionitemProperties"],			//7
  ["#action:calendar.actionitemProperties"],				//8
  ["#action:calendar.actionitemProperties"],				//9
  ["#action:calendar.actionitemProperties"],				//10
  ["#action:calendar.actionitemProperties"], 				//11
  ["#action:calendar.actionitemProperties"],				//12
  ["#action:calendar.actionitemProperties"], 							//13
  ["#action:calendar.actionitemProperties"], 							//14
  ["#action:calendar.actionitemProperties"],                //15
  ["#action:calendar.actionitemProperties"],                //16
  ["#action:calendar.actionitemProperties"],               //17
  ["#action:calendar.actionitemProperties"]               //18
];





//<<<<<<<<<<<<<<<Timesheets

//How to Add a Note for a Time Entry?

window._wfx_settings['ce45b450-895c-11e6-85ad-04013d24cd02'] = [

  [],														//0
  ["#action:timeadmin.editTimesheet"],														//1
  ["#action:timeadmin.editTimesheet"],							//2
   ["#action:timeadmin.editTimesheet"],			                    //3
    ["#action:timeadmin.editTimesheet"],	//4
   ["#action:timeadmin.editTimesheet"]	    //5
];


//How to add an indirect row?
window._wfx_settings['f5afd310-912f-11e6-85ad-04013d24cd02'] = [
  [],														//0
  ["#action:timeadmin.editTimesheet"],														//1
  ["#action:timeadmin.editTimesheet"],							//2
   ["#action:timeadmin.editTimesheet"]		                    //3
    
    
    ];

    //How to Populate your Timesheet ?


window._wfx_settings['0b9bf480-895e-11e6-85ad-04013d24cd02'] = [
  [],														//0
  ["#action:timeadmin.editTimesheet"],														//1
  ["#action:timeadmin.confirmAction","#action:timeadmin.editTimesheet"],							//2
   ["#action:timeadmin.editTimesheet","#action:timeadmin.confirmAction"]		                    //3
    
    
    ];
    
//How to Return your Submitted Timesheet?

window._wfx_settings['f5530a50-895e-11e6-b370-04013d24cc02'] = [
  [],														//0
  [],														//1
  ["#action:timeadmin.timesheetBrowserReturn"],							//2
  ["#action:timeadmin.timesheetBrowserReturn"],		//3
  ["#action:timeadmin.timesheetBrowser"],				//4
  ["#action:timeadmin.timesheetBrowser"],			//5
  ["#action:timeadmin.timesheetBrowserReturn"],				//6
  ["#action:timeadmin.timesheetBrowserReturn"],			//7
  ["#action:timeadmin.timesheetBrowser"]				
];


//<<<<<<<<<<<<<<<<<HashEnd

var current_flow_id=0;
var current_step=0;
var hashIndex=0;

//Setting up the wfx object to control flow, branching/page level step control.
window._wfx_settings.onBeforeShow = function (event) {
	//console.log(window.location.hash.includes(window._wfx_settings.hash_mapping[event.flow_id][event.step]));
	
	console.log('onbeforeshowEvent');
	current_flow_id=event.flow_id;
	current_step=event.step;
    if (!window._wfx_settings[event.flow_id]) {
        return window._wfx_settings[event.flow_id](event);
    }

	for(step = event.step ;step < window._wfx_settings[event.flow_id].length - 1;step++) {
		for(hashIndex = 0; hashIndex <= window._wfx_settings[event.flow_id][step].length; hashIndex ++) {
			if (window.location.hash.includes(window._wfx_settings[event.flow_id][step][hashIndex])) {
				current_step=step;
				console.log('onBeforeClose Current Step=>>'+current_step);
				return {"position" : step};
			}
		}
	}
};

var hashFound=0;

$(window).hashchange(function () {
	if(_wfx_is_live()){
		console.log('hashChangeEvent');
		console.log('Current Step=>>'+current_step);
		console.log('Current Hash=>>'+window.location.hash);
		
		hashFound=0;
		
		if(current_step==(window._wfx_settings[current_flow_id].length-1)){
			console.log('Last Step');
		}
		
		if(current_step>=1){
			for(hashIndex = 0; hashIndex <= window._wfx_settings[current_flow_id][current_step].length; hashIndex ++) {
				console.log('Hash from Hashmap=>>['+hashIndex+']'+window._wfx_settings[current_flow_id][current_step+1][hashIndex]);
				if(window.location.hash.includes(window._wfx_settings[current_flow_id][current_step+1][hashIndex])) {
					hashFound=1;
					break;
				}
			}
			if(!hashFound){
				window._wfx_close_live();
				console.log('flow closed');
				current_step=0;
				current_flow_id=0;
			}
		}
	}
});