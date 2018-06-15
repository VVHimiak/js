// var bros = 1;
//
//
// jQuery('img').on('mouseover',function () {
//     jQuery(this).attr('src', 'images/read-more-orange.jpg');
//     if(bros === 1) {
//
//         bros = 2;
//
//     }else if(bros === 2) {
//         jQuery(this).attr('src', 'images/read-more-gray.jpg');
//
//         bros = 1;
//     }
// });
//
// jQuery('a').on('click', function (event) {
//     jQuery('.paragraph').addClass('first');
//     event.preventDefault();
//     event.stopPropagation();
// });
//
// var onor = jQuery('input[type = text]').val();
// jQuery('#vv').next().text = onor;
//
// jQuery('input[type = text]').on('keyup', function () {
//     var Val = jQuery(this).val();
//     jQuery('#vv').empty();
//     jQuery('#vv').text(Val);
// });
//
// jQuery('button').on('click', function () {
//     jQuery('.anim').hide(500);
// });
//
// jQuery('button').on('click', function () {
//     jQuery('.anim').hide('fast');
// });
//
// jQuery('button').on('click', function () {
// jQuery('.anim').hide(1000, function () {
//     jQuery(this).show(500);
// });
// });
//
// slideUp();
// slideDown();
// slideToggle();

//
// jQuery('.parent h1').on('click', function () {
//     jQuery('.vv').slideDown();
// });
/*

function changeClass() {

    jQuery(this).prev().toggleClass('active');

}

jQuery(function () {
    jQuery('.art h2').on('click', function () {
        jQuery(this).next().slideToggle(500);
        jQuery(this).toggleClass('active');

    })
})


};
*/

// 1 lesson
/*
function funOne() {
    var radioButtons = document.getElementsByName('v1');

    for(var i = 0; i < radioButtons.length; i++) {
        if(radioButtons[i].checked) {
            alert(`chose ${i} element.}`);
        }
    }
}

document.getElementById('button').addEventListener('click', funOne);*/

// 2 lesson Work with select
/*
function fun2() {
    var selectM = document.getElementById('mySecondLesson').selectedIndex;
    var selectOption = document.getElementById('mySecondLesson').options;

    alert(`choose ${selectOption[selectM].text}`);
}

document.getElementById('mySecondLesson').addEventListener('change', fun2);*/
/*
function fun3() {
  var inp = document.getElementById('inpute').value;

  var paragraph = document.getElementById('p2');

  paragraph.innerHTML = inp;
}

document.getElementById('inpute').addEventListener('input', fun3);*/

//Lesson 3 Menu-nav
/*document.getElementById('nav').addEventListener('click', function (event) {
    var target = event.target;
    //return console.log(target);
    if (target.className === 'menu-item'){
        var sub = target.getElementsByClassName('submenu');
        closeMenu();
        jQuery(sub[0]).stop().slideToggle('fast');
    }

});

document.addEventListener('click', function (event) {
    var fu = event.target;
   if(fu.className !== 'menu-item' && fu.className !== 'submenu') {
       closeMenu();
   }
});

function closeMenu() {
    var menus = document.getElementById('nav');
    var childs = document.getElementsByClassName('submenu');

    for (var i = 0; i < childs.length; i++){
        jQuery(childs[i]).stop().slideUp('fast');
    }
}*/

//lesson 5 Tabs
/*
var tab;
var tabContent;

window.onload = function() {
    tabContent = document.getElementsByClassName('tabContent');
    tab = document.getElementsByClassName('tab');

    hideTabsContent(2);
};


function hideTabsContent(a) {
    for(var i = a; i < tabContent.length; i++) {
        tabContent[i].classList.remove('show');
        tabContent[i].classList.add('hide');

        tab[i].classList.remove('blackborder');
    }
}

document.getElementById('tabs').onclick = function (event) {
   var target = event.target;
   if(target.className == 'tab') {
       for(var i = 0; i < tab.length; i++) {
           if(target == tab[i]){
               showTabsContent(i);
               break;
           }
       }
   }
}

function showTabsContent(b) {
    if(tabContent[b].classList.contains('hide')) {
        hideTabsContent(0);
        tab[b].classList.add('blackborder');
        tabContent[b].classList.remove('hide');
        tabContent[b].classList.add('show');
    }
}

*/
/* lesson 6 Modal Window

var modal = document.getElementById('myModal');
var myBtn = document.getElementById('myBtn');
var span = document.getElementsByClassName('close')[0];

myBtn.addEventListener('click', function () {
    jQuery(modal).fadeIn(400);
});

span.addEventListener('click', function () {
    jQuery(modal).fadeOut(400);
});

document.addEventListener('click', function (event) {
    var fu = event.target;
    if(fu === modal ) {
        jQuery(modal).fadeOut(400);
    }
});*/



