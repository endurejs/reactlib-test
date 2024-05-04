import react from "react";

export function Mapped<T extends react.ReactNode>({ arr }: { arr: Array<T> }) {
    return (
        <>
            {arr.map((c, i) => (
                <div key={i}>
                    <h2>{c}</h2>
                </div>
            ))}
        </>
    );
}

type ust<Mos> = {
    state: Mos,
    setState: react.Dispatch<react.SetStateAction<Mos>>
};

export function UseComposed<T extends react.ReactNode>({ st, sst, btnMsg, btnv }: { st: ust<T>["state"], sst: ust<T>["setState"], btnMsg: string, btnv: ust<T>["state"] }) {
    return (
        <div>
            <h1>useState로 테스트하는 컴포넌트입니다.</h1>
            <>
                <button onClick={() => sst(btnv)}>{btnMsg}</button>
                <h2>데이터 보여주기</h2>
                <h3>{st}</h3>
            </>
        </div>
    );
}