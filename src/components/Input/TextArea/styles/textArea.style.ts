import styled, { StyledComponent } from 'styled-components';
import { palette } from 'styled-theme';
import {
  transition,
  borderRadius,
} from '../../../../library/helpers/styles/style_utils';

const TextAreaWrapper = (ComponentName: StyledComponent<any, any, object, string | number | symbol>) => styled(ComponentName)`
  &.ant-input {
    padding: 4px 10px;
    width: 100%;
    height: auto;
    cursor: text;
    font-size: 13px;
    line-height: 1.5;
    color: ${palette('text', 1)};
    background-color: #fff;
    background-image: none;
    border: 1px solid ${palette('border', 0)};
    ${borderRadius(4)};
    ${transition()};

    &:focus {
      border-color: ${palette('primary', 0)};
    }

    &::-webkit-input-placeholder {
      color: ${palette('grayscale', 0)};
    }

    &:-moz-placeholder {
      color: ${palette('grayscale', 0)};
    }

    &::-moz-placeholder {
      color: ${palette('grayscale', 0)};
    }
    &:-ms-input-placeholder {
      color: ${palette('grayscale', 0)};
    }
  }
`;
export { TextAreaWrapper };