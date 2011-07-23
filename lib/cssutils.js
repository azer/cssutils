var cssutils = (function(){

  function classPattern(className){
    return ( new RegExp('(?:^|\\s+)'+className+'(?:\\s+|$)','gi') );
  }
  
  function addClass(el,className){
    if(!hasClass( el, className )){
      setClass(el, getClass(el)+' '+className );
    }
    return el;
  }

  function apply(el,css){
    for(var pname in css){
      prop( el, pname, css[ pname ] ); 
    }
    return el;
  }

  function getClass(el){
    return el.className;
  }

  function hasClass(el, className){
    return classPattern( className ).test( getClass( el ) ); 
  }

  function prop(el, propName, propValue){
    var style, value;

    if(propValue == undefined){
      style = el.ownerDocument.defaultView.getComputedStyle( el, null );
      value = style.getPropertyCSSValue( propName );
      return value&&value.cssText||null;
    }

    propName = propName.replace(/\-(\w)/g,function(){ return arguments[1].toUpperCase() });
    el.style[ propName ] = propValue;
    return el;
  }

  function removeClass(el,className){
    replaceClass( el, className, ''); 
    return el;
  }

  function replaceClass(el,className,replacement){
    setClass( el, getClass( el ).replace( classPattern( className ), ' '+replacement+' ' ) );
    return el;
  }

  function setClass(el,value){
    el.className = value;
    return el;
  }

  function toggleClass(el,className){
    if( hasClass( el, className ) ){
      removeClass(el,className);
    } else {
      addClass( el, className );
    }
    return el;
  }

  return {
    'addClass':addClass,
    'apply':apply,
    'getClass':getClass,
    'hasClass':hasClass,
    'prop':prop,
    'removeClass':removeClass,
    'replaceClass':replaceClass,
    'setClass':setClass,
    'toggleClass':toggleClass
  };

})();

if(typeof module != 'undefined' && module.exports){
  module.exports = cssutils;
}
