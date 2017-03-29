'use strict';

var React = require('react/addons');
//var ReactTransitionGroup = React.addons.TransitionGroup;

// CSS
require('normalize.css');
require('../styles/main.scss');

var imageDatas = require('../data/imageDatas.json');

imageDatas = (function genImageURL(imageDatasArr){
  for(var i = 0; i < imageDatasArr.length; i++){
    var singleImageData = imageDatasArr[i];
    singleImageData.imageURL = require('../images/' + singleImageData.fileName);
    imageDatasArr[i] = singleImageData;
  }
  return imageDatasArr;
})(imageDatas);

var ReactGalleryApp = React.createClass({
  render: function() {
    return (
      <section className = "stage">
        <section className = "img-sec" ></section>
        <nav className="controller-nav">
        </nav>
      </section>
    );
  }
});
React.render(<ReactGalleryApp />, document.getElementById('content')); // jshint ignore:line

module.exports = ReactGalleryApp;
