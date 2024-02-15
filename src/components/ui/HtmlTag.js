
import React from "react";
export default function HtmlTag(props) {

    let attributes = () => {
        let o = {}
        for (let i in props) o[i] = props[i];

        if (o.cls && o.styles) {
            o.className = o.styles[o.cls];
        } else {
            o.className = o.cls;
        }
        if (o.tag) delete o.tag;
        if (o.cls) delete o.cls;
        if (o.styles) delete o.styles;
        return o;
    }
    let tag = props.tag;

    let attr = attributes();
    let children = props.children || props.text || "";

    if (Object.keys(children).length == 0 && typeof tag == "undefined") {
        return null;
    }
    if (typeof props.tag == "undefined") {
        return children;
    }

    return (
        React.createElement(tag, attr, children)
    )
}