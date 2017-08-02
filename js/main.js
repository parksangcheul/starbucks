(function ($) {
    'use strict';

    // _가 붙으면 건들이지 말아라
    var _sb = _sb || {};

    // Document Ready
    $(function () {
        _init();
       _initEvent();
    });

    // 정의를 내리는 부분
    function _init() {
        _sb.$topCard = $('.top-card')
    }


    // 기능을 실행하는 부분
    function _initEvent() {
        toggleTopCard();
    }

    function toggleTopCard() {
      $('.toggle-top-card').on({
              click: function () {
                  _sb.$topCard.slideToggle(400);
              },
                mouseenter: function () {
              animateToggleTopCardBtn();
          }
      })
    }

    function animateToggleTopCardBtn() {
        TweenMax.to('.toggle-top-card .cup', 1.5, {
            y: -30,
            repeat: -1,
            yoyo: true
        })
    };



}(jQuery));