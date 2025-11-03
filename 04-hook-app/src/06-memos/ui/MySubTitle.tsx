import { memo } from "react";

interface Props {
    subtitle: string;
    callMyAPI: () => void;
    //callMyAPI: (myValue: string) => void;
}

export const MySubTitle = memo(({ subtitle, callMyAPI }: Props) => {
    console.log('MySubTitle re-render');

    return (
        <>
            <h6 className="text-2xl font-bold">{subtitle}</h6>

            <button
                //onClick={() => callMyAPI(subtitle)}
                onClick={callMyAPI}
                className="bg-indigo-500 text-white px-1 py-1 rounded-md cursor-pointer">Llamar a funcion</button>
        </>
    )
});
