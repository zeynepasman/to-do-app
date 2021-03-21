import { Input } from 'antd';
import { StyledComponent } from 'styled-components';
import {
  TextAreaWrapper
} from './styles/textArea.style';

const {  TextArea } = Input;

const Textarea = TextAreaWrapper(TextArea as StyledComponent<any, any, object, string | number | symbol>);

export { Textarea };