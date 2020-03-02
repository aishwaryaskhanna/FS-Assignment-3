"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var ItemList = [];

var ProductTable =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ProductTable, _React$Component);

  function ProductTable() {
    _classCallCheck(this, ProductTable);

    return _possibleConstructorReturn(this, _getPrototypeOf(ProductTable).apply(this, arguments));
  }

  _createClass(ProductTable, [{
    key: "render",
    value: function render() {
      var itemRows = this.props.items.map(function (item) {
        return React.createElement(ProductRow, {
          key: item.id,
          item: item
        });
      });
      console.log(itemRows);
      return React.createElement("table", {
        className: "bordered-table"
      }, React.createElement("thead", null, React.createElement("tr", null, React.createElement("th", null, "Product Name"), React.createElement("th", null, "Price"), React.createElement("th", null, "Category"), React.createElement("th", null, "Image"))), React.createElement("tbody", null, itemRows));
    }
  }]);

  return ProductTable;
}(React.Component);

var ProductAdd =
/*#__PURE__*/
function (_React$Component2) {
  _inherits(ProductAdd, _React$Component2);

  function ProductAdd() {
    var _this;

    _classCallCheck(this, ProductAdd);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ProductAdd).call(this));
    _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(ProductAdd, [{
    key: "handleSubmit",
    value: function handleSubmit(e) {
      e.preventDefault();
      var form = document.forms.productAdd;
      var price = form.price.value;
      price = price.slice(1);
      var new_item = {
        category: form.category.value,
        price: price,
        productName: form.productName.value,
        image: form.image.value
      };
      this.props.createItem(new_item);
      form.category.value = "";
      form.price.value = "$";
      form.productName.value = "";
      form.image.value = "";
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement("div", null, React.createElement("form", {
        name: "productAdd",
        onSubmit: this.handleSubmit
      }, React.createElement("div", {
        className: "row"
      }, React.createElement("div", {
        className: "column"
      }, React.createElement("label", null, "Category ", React.createElement("br", null), React.createElement("select", {
        id: "category",
        name: "category"
      }, React.createElement("option", {
        value: "Shirts"
      }, "Shirts"), React.createElement("option", {
        value: "Jeans"
      }, "Jeans"), React.createElement("option", {
        value: "Jackets"
      }, "Jackets"), React.createElement("option", {
        value: "Sweaters"
      }, "Sweaters"), React.createElement("option", {
        value: "Accessories"
      }, "Accessories")))), React.createElement("div", {
        className: "column"
      }, React.createElement("label", null, "Price Per Unit  ", React.createElement("br", null), React.createElement("input", {
        type: "text",
        name: "price",
        defaultValue: "$"
      })))), React.createElement("div", {
        className: "row"
      }, React.createElement("div", {
        className: "column"
      }, React.createElement("label", null, "Product Name  ", React.createElement("br", null), React.createElement("input", {
        type: "text",
        name: "productName"
      }))), React.createElement("div", {
        className: "column"
      }, React.createElement("label", null, "Image ", React.createElement("br", null), React.createElement("input", {
        type: "text",
        name: "image"
      }))), React.createElement("div", {
        className: "row"
      }, React.createElement("input", {
        type: "submit",
        id: "addProduct",
        value: "Add Product"
      })))));
    }
  }]);

  return ProductAdd;
}(React.Component);

var ProductRow =
/*#__PURE__*/
function (_React$Component3) {
  _inherits(ProductRow, _React$Component3);

  function ProductRow() {
    _classCallCheck(this, ProductRow);

    return _possibleConstructorReturn(this, _getPrototypeOf(ProductRow).apply(this, arguments));
  }

  _createClass(ProductRow, [{
    key: "render",
    value: function render() {
      var item = this.props.item;
      return React.createElement("tr", null, React.createElement("td", null, item.productName), React.createElement("td", null, item.category), React.createElement("td", null, "$", item.price), React.createElement("td", null, React.createElement("a", {
        href: item.image,
        target: "_blank"
      }, "View")));
    }
  }]);

  return ProductRow;
}(React.Component);

var ProductList =
/*#__PURE__*/
function (_React$Component4) {
  _inherits(ProductList, _React$Component4);

  function ProductList() {
    var _this2;

    _classCallCheck(this, ProductList);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(ProductList).call(this));
    _this2.state = {
      items: []
    };
    _this2.createItem = _this2.createItem.bind(_assertThisInitialized(_this2));
    return _this2;
  }

  _createClass(ProductList, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.loadData();
    }
  }, {
    key: "loadData",
    value: function loadData() {
      var _this3 = this;

      setTimeout(function () {
        _this3.setState({
          items: ItemList
        });
      }, 500);
    }
  }, {
    key: "createItem",
    value: function createItem(item) {
      item.id = this.state.items.length + 1;
      var newItemList = this.state.items.slice();
      newItemList.push(item);
      this.setState({
        items: newItemList
      });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(React.Fragment, null, React.createElement("h1", null, "My Company Inventory"), React.createElement("h2", null, "Showing all available products"), React.createElement("hr", null), React.createElement(ProductTable, {
        items: this.state.items
      }), React.createElement("h2", null, "Add a new product to inventory"), React.createElement("hr", null), React.createElement(ProductAdd, {
        createItem: this.createItem
      }));
    }
  }]);

  return ProductList;
}(React.Component);

var element = React.createElement(ProductList, null);
ReactDOM.render(element, document.getElementById('content'));