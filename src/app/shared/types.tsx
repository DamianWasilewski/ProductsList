export interface DefaultInputProps {
    readonly label: string;
    readonly name?: string;
    readonly value?: string;
    readonly placeholder?: string;
    readonly onChange?: ( event: React.ChangeEvent<HTMLInputElement> ) => void;
}