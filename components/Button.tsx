/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React from "react";


export function Button({text}:{text:string;}) {
    return (
        <button className="p-[3px] relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-lg" />
            <div className="px-8 py-2  bg-white dark:bg-black rounded-[6px]  relative group transition duration-200 text-primary dark:text-white hover:bg-transparent hover:text-white dark:hover:bg-transparent">
                {text}
            </div>
        </button>
    );
}
