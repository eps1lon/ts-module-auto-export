"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Component = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const React = require("react");
class Component extends React.Component {
    render() {
        if (Math.random()) {
            return (0, jsx_runtime_1.jsx)("div", { children: this.props.children });
        }
        else {
            return this.props.children;
        }
    }
}
exports.Component = Component;
