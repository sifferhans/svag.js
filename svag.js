function Svag(element){
  var Element;

  var self = Object.defineProperties({},{
    'element': {
      get: function() { return Element; },
      set: function(value) {
        if(typeof value == 'string'){
          Element = document.querySelector(value);
        }
        else if(value instanceof HTMLElement) {
          Element = value;
        }
      }
    }
  });

  self.element = element;

  function build(){
    loadFile(Element.getAttribute('src'),render);
  }

  function loadFile(url,callback){
    var request = new XMLHttpRequest();
    request.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        callback(this.responseText);
      }
    }
    request.open('GET',url,true);
    request.send();
  }

  function render(content){
    Element.innerHTML = content;
  }

  build();
}

[].slice.call(document.querySelectorAll('svag')).forEach(Svag);
