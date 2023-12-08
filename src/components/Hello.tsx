import React, { useMemo } from "react";

type Props = { name: string }


export const Hello = React.memo(({ name }: Props) => {

    const calc = () => {
        console.log("recal");

        return name.length;
    };
    return (
        <div>demo: {name} + " - " + {calc()}</div>
    )
});