'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FootNote = _styledComponents2.default.div.withConfig({
  displayName: 'footer__FootNote',
  componentId: 'p3lei2-0'
})(['line-height:110px;background-color:#212a3d;color:#506179;text-align:center;']);

var FooterContent = _styledComponents2.default.div.withConfig({
  displayName: 'footer__FooterContent',
  componentId: 'p3lei2-1'
})(['height:728px;position:relative;background:#212a3d;background:url(/static/ny-skyline.svg),-moz-linear-gradient(-30deg,#212a3d 0,#212a3d 40%,#1c89ff 100%);background:url(/static/ny-skyline.svg),-webkit-linear-gradient(-30deg,#212a3d 0,#212a3d 40%,#1c89ff 100%);background:url(/static/ny-skyline.svg),linear-gradient(120deg,#212a3d 0,#212a3d 40%,#1c89ff 100%);filter:progid:DXImageTransform.Microsoft.gradient( startColorstr=\'#212a3d\',endColorstr=\'#1c89ff\',GradientType=1 );text-align:center;padding:130px 0;background-repeat:no-repeat;background-position:bottom;']);

exports.default = function (props) {
  return _react2.default.createElement('footer', null, _react2.default.createElement(FooterContent, null), _react2.default.createElement(FootNote, null, '\xA9 ECMAStack, 2017. All rights reserved'));
};