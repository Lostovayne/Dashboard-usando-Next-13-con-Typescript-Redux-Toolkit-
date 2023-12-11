"use client";
import { useAppDispach, useAppSelector } from "@/store";
import { addOne, initCounterState, substractOne } from "@/store/counter/counterSlice";
import { useEffect } from "react";

interface Props {
    value?: number;
}

export interface CounterResponse {
    method: string;
    count: number;
}

const getApiCounter = async (): Promise<CounterResponse> => {
    const data = await fetch("/api/counter").then((response) => response.json());
    return data;
};

export const CartCounter = ({ value = 0 }: Props) => {
    const { count } = useAppSelector((state: any) => state.counter);
    const dispatch = useAppDispach();

    // useEffect(() => {
    //     dispatch(initCounterState(value));
    // }, [dispatch, value]);

    useEffect(() => {
        getApiCounter().then(({ count }) => {
            dispatch(initCounterState(count));
        });
    }, [dispatch]);

    return (
        <>
            <span className="text-8xl"> {count}</span>

            <div className="flex">
                <button
                    type="button"
                    onClick={() => dispatch(addOne())}
                    className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2 "
                >
                    +1
                </button>

                <button
                    type="button"
                    onClick={() => dispatch(substractOne())}
                    className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2 "
                >
                    -1
                </button>
            </div>
        </>
    );
};
