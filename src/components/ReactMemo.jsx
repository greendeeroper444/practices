import React from "react";
import toast from "react-hot-toast";

const ReactMemo = React.memo(({name}) => {
    toast.success('Child Rendered');
    return <p>Hello {name}</p>;
});

export default ReactMemo;