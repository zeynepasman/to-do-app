import { Radio, RadioGroupProps } from 'antd';
import { ForwardRefExoticComponent, MemoExoticComponent, RefAttributes } from 'react';
import { StyledComponent } from 'styled-components';
import AntRadiobox from './styles/radiobox.style';

const RadioGroup = AntRadiobox(Radio.Group as MemoExoticComponent<ForwardRefExoticComponent<RadioGroupProps & RefAttributes<HTMLDivElement>>>);
const RadioButton = AntRadiobox(Radio.Button as StyledComponent<any, any, object, string | number | symbol>);

export { RadioGroup, RadioButton };