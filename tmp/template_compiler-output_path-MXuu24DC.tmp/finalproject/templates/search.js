export default Ember.HTMLBars.template((function() {
  var child0 = (function() {
    return {
      meta: {
        "revision": "Ember@2.8.2",
        "loc": {
          "source": null,
          "start": {
            "line": 17,
            "column": 12
          },
          "end": {
            "line": 17,
            "column": 41
          }
        },
        "moduleName": "finalproject/templates/search.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("About");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes() { return []; },
      statements: [

      ],
      locals: [],
      templates: []
    };
  }());
  var child1 = (function() {
    return {
      meta: {
        "revision": "Ember@2.8.2",
        "loc": {
          "source": null,
          "start": {
            "line": 18,
            "column": 12
          },
          "end": {
            "line": 18,
            "column": 45
          }
        },
        "moduleName": "finalproject/templates/search.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("Contact");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes() { return []; },
      statements: [

      ],
      locals: [],
      templates: []
    };
  }());
  var child2 = (function() {
    return {
      meta: {
        "revision": "Ember@2.8.2",
        "loc": {
          "source": null,
          "start": {
            "line": 42,
            "column": 0
          },
          "end": {
            "line": 51,
            "column": 0
          }
        },
        "moduleName": "finalproject/templates/search.hbs"
      },
      isEmpty: false,
      arity: 1,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("b");
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode(" - ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("br");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment(" Calories: {{item.fields.nf_calories}} <br>\n  Calories from Fat: {{item.fields.nf_calories_from_fat}} <br> ");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("br");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("br");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [1]);
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(dom.childAt(element0, [1]),0,0);
        morphs[1] = dom.createMorphAt(element0,3,3);
        return morphs;
      },
      statements: [
        ["content","item.fields.brand_name",["loc",[null,[45,5],[45,31]]],0,0,0,0],
        ["content","item.fields.item_name",["loc",[null,[45,38],[45,63]]],0,0,0,0]
      ],
      locals: ["item"],
      templates: []
    };
  }());
  var child3 = (function() {
    return {
      meta: {
        "revision": "Ember@2.8.2",
        "loc": {
          "source": null,
          "start": {
            "line": 51,
            "column": 0
          },
          "end": {
            "line": 53,
            "column": 0
          }
        },
        "moduleName": "finalproject/templates/search.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("  ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("No results");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes() { return []; },
      statements: [

      ],
      locals: [],
      templates: []
    };
  }());
  return {
    meta: {
      "revision": "Ember@2.8.2",
      "loc": {
        "source": null,
        "start": {
          "line": 1,
          "column": 0
        },
        "end": {
          "line": 58,
          "column": 0
        }
      },
      "moduleName": "finalproject/templates/search.hbs"
    },
    isEmpty: false,
    arity: 0,
    cachedFragment: null,
    hasRendered: false,
    buildFragment: function buildFragment(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("nav");
      dom.setAttribute(el1,"class","navbar navbar-default");
      var el2 = dom.createTextNode("\n  ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("div");
      dom.setAttribute(el2,"class","container-fluid");
      var el3 = dom.createTextNode("\n    ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"class","navbar-header");
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("button");
      dom.setAttribute(el4,"type","button");
      dom.setAttribute(el4,"class","navbar-toggle collapsed");
      dom.setAttribute(el4,"data-toggle","collapse");
      dom.setAttribute(el4,"data-target","#menu-collapse");
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("span");
      dom.setAttribute(el5,"class","sr-only");
      var el6 = dom.createTextNode("Toggle navigation");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("span");
      dom.setAttribute(el5,"class","icon-bar");
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("span");
      dom.setAttribute(el5,"class","icon-bar");
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("span");
      dom.setAttribute(el5,"class","icon-bar");
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n      ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createComment(" {{ link-to 'Home' 'index' class=\"navbar-brand\" }} ");
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n    ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n\n    ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"class","collapse navbar-collapse");
      dom.setAttribute(el3,"id","menu-collapse");
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("ul");
      dom.setAttribute(el4,"class","nav navbar-nav");
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("li");
      var el6 = dom.createComment("");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("li");
      var el6 = dom.createComment("");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n      ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n    ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n  ");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("div");
      dom.setAttribute(el1,"class","container");
      var el2 = dom.createTextNode("\n  \n");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("h1");
      var el3 = dom.createTextNode("Search");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n\n");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("form");
      var el3 = dom.createTextNode("\nWhat do you want to eat? (i.e. fish, chocolate, ) \n");
      dom.appendChild(el2, el3);
      var el3 = dom.createComment("");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("br");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("br");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\nDiet Preferences?");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("br");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("input");
      dom.setAttribute(el3,"type","radio");
      dom.setAttribute(el3,"name","diet");
      dom.setAttribute(el3,"value","lowcarb");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("Low Carb");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("br");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("input");
      dom.setAttribute(el3,"type","radio");
      dom.setAttribute(el3,"name","diet");
      dom.setAttribute(el3,"value","highprotein");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("High Protein");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("br");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("input");
      dom.setAttribute(el3,"type","radio");
      dom.setAttribute(el3,"name","diet");
      dom.setAttribute(el3,"value","lowsugar");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("Low Sugar");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("br");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("br");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("input");
      dom.setAttribute(el3,"type","submit");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n\n");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n\n");
      dom.appendChild(el1, el2);
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n\n");
      dom.appendChild(el1, el2);
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      return el0;
    },
    buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
      var element1 = dom.childAt(fragment, [1, 1, 3, 1]);
      var element2 = dom.childAt(fragment, [3]);
      var element3 = dom.childAt(element2, [3]);
      var element4 = dom.childAt(element3, [8]);
      var element5 = dom.childAt(element3, [12]);
      var element6 = dom.childAt(element3, [16]);
      var element7 = dom.childAt(element3, [22]);
      var morphs = new Array(10);
      morphs[0] = dom.createMorphAt(dom.childAt(element1, [1]),0,0);
      morphs[1] = dom.createMorphAt(dom.childAt(element1, [3]),0,0);
      morphs[2] = dom.createMorphAt(element3,1,1);
      morphs[3] = dom.createAttrMorph(element4, 'onclick');
      morphs[4] = dom.createAttrMorph(element5, 'onclick');
      morphs[5] = dom.createAttrMorph(element6, 'onclick');
      morphs[6] = dom.createElementMorph(element7);
      morphs[7] = dom.createMorphAt(element2,5,5);
      morphs[8] = dom.createMorphAt(element2,7,7);
      morphs[9] = dom.createMorphAt(element2,9,9);
      return morphs;
    },
    statements: [
      ["block","link-to",["about"],[],0,null,["loc",[null,[17,12],[17,41]]]],
      ["block","link-to",["contact"],[],1,null,["loc",[null,[18,12],[18,45]]]],
      ["inline","input",[],["type","text","value",["subexpr","@mut",[["get","foodItem",["loc",[null,[29,26],[29,34]]],0,0,0,0]],[],[],0,0]],["loc",[null,[29,0],[29,36]]],0,0],
      ["attribute","onclick",["subexpr","action",["selectPreference","lowcarb"],[],["loc",[null,[null,null],[32,95]]],0,0],0,0,0,0],
      ["attribute","onclick",["subexpr","action",["selectPreference","highprotein"],[],["loc",[null,[null,null],[33,103]]],0,0],0,0,0,0],
      ["attribute","onclick",["subexpr","action",["selectPreference","lowsugar"],[],["loc",[null,[null,null],[34,97]]],0,0],0,0,0,0],
      ["element","action",["search"],[],["loc",[null,[36,21],[36,40]]],0,0],
      ["inline","log",[["get","response",["loc",[null,[40,6],[40,14]]],0,0,0,0]],[],["loc",[null,[40,0],[40,16]]],0,0],
      ["block","each",[["get","response.hits",["loc",[null,[42,8],[42,21]]],0,0,0,0]],[],2,3,["loc",[null,[42,0],[53,9]]]],
      ["content","outlet",["loc",[null,[55,0],[55,10]]],0,0,0,0]
    ],
    locals: [],
    templates: [child0, child1, child2, child3]
  };
}()));