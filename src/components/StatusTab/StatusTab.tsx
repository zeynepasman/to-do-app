import { FC } from "react";
import { RadioButton, RadioGroup } from "../Input/Radio/Radio";
interface Props{
    onChange: (event: Event) => void;
    options: Array<string>;
    value: string;
}

const StatusTab: FC<Props> = ({
    options,
    onChange,
    value
}) => {

    return (
        <div className="TodoStatusTab">
            <RadioGroup
                onChange={onChange}
                value={value}
                className="TodoStatus"
            >
                {options.map(option => {
                    return (
                        <RadioButton
                            key={option}
                            value={option}
                        >
                            {option}
                        </RadioButton>  
                    )   
                })}
        
            </RadioGroup>
      </div>
    )
};

export { StatusTab };
