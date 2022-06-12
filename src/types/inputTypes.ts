import {ComponentPropsWithoutRef} from "react";

export interface inputType {
    name: string;
    value: string | number;
    status: boolean;
}

export interface InputPropsType extends ComponentPropsWithoutRef<"input"> {
    input: inputType;
}

export interface InputsPropsType extends ComponentPropsWithoutRef<"input"> {
    inputs: inputType[];
}
