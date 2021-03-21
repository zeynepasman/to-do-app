import styled from 'styled-components';
import { palette } from 'styled-theme';
import {
  transition,
  borderRadius,
  boxShadow,
} from '../../library/helpers/styles/style_utils';

const TodoWrapper = styled.div`
  padding: 50px 35px;

  @media only screen and (max-width: 767px) {
    padding: 30px 20px;
  }
  @media only screen and (min-width: 767px) and (max-width: 990px) {
    padding: 40px 20px;
  }

  .TodoHeader {
    height: auto;
    line-height: inherit;
    padding: 0;
    margin-bottom: 40px;
    background: none;

    @media only screen and (max-width: 767px) {
      margin-bottom: 20px;
    }

    .TodoInput {
      font-size: 14px;
      font-weight: 400;
      color: ${palette('text', 2)};
      line-height: inherit;
      height: 50px;
      padding: 0 15px;
      margin: 0;
      border: 1px solid ${palette('border', 0)};
      outline: 0 !important;
      overflow: hidden;
      background-color: #ffffff;
      ${boxShadow('none')};
      ${borderRadius(3)};
      ${transition()};

      &:focus {
        border-color: ${palette('primary', 0)};
        ${boxShadow('0 0 0 2px rgba(68, 130, 255, 0.2)')};
        outline: 0;
      }

      &:hover {
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
  }

  .TodoContentBody {
    width: 100%;
  }
`;

const TodoListWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  .TodoStatusTab {
    margin-bottom: 20px;
    display: flex;

    .TodoStatus {
      margin-left:auto;
      margin-right: inherit;

      .ant-radio-button-wrapper {
        margin: 0;
        height: auto;
        line-height: 1.5;
        color: rgba(0, 0, 0, 0.65);
        display: inline-block;
        transition: all 0.3s ease;
        cursor: pointer;
        border: 0;
        background: transparent;
        padding: 0 15px;
        box-shadow: none;
        outline: 0;
        &:last-child {
          padding-right: 0;
          padding-left: 15px;
        }

        &:first-child {
          padding-left: 0;
          padding-right: 15px;
        }

        &:not(:first-child)::before {
          left: -1px;
          right: inherit;
        }

        span {
          font-size: 14px;
          font-weight: 400;
          color: ${palette('text', 3)};
        }
      }

      .ant-radio-button-wrapper-checked {
        span {
          color: ${palette('primary', 0)};
        }
      }
    }
  }

  .TodoListWrapper {
    width: 100%;
    display: flex;
    flex-direction: column;

    .TodoList {
      width: 100%;
      padding: 20px 15px 20px 0;
      overflow: hidden;
      margin: 0 0 15px;
      background: #ffffff;
      border: 1px solid ${palette('border', 0)};
      display: flex;
      align-items: flex-start;
      text-align:  left;
      position: relative;


      .ant-checkbox-wrapper {
        line-height: 1;
        margin-right: 15px;
        margin-left: 25px;

        .ant-checkbox-inner {
          width: 15px;
          height: 15px;
        }
      }

      .TodoContentWrapper {
        width: 100%;
        padding: 0 30px 0 0;
        position: relative;

        .TodoDate {
          font-size: 12px;
          font-weight: 400;
          color: ${palette('grayscale', 0)};
          line-height: inherit;
          display: flex;
          margin-bottom: 10px;
          text-transform: capitalize;
        }

        .NoteContent {
          width: 100%;
          display: flex;

          .NoteTextWrapper {
            font-size: 14px;
            font-weight: 400;
            color: ${palette('text', 4)};
            line-height: 24px;
          }

          .NoteEditWrapper {
            width: 100%;
            display: flex;

            textarea {
              font-size: 14px;
              font-weight: 400;
              color: ${palette('text', 4)};
              line-height: 24px;
              height: 210px;
              padding: 10px 15px;
              margin: 0;
              border: 0;
              outline: 0 !important;
              background-color: #ffffff;
              ${boxShadow('none')};
              ${borderRadius(3)};
              box-sizing: content-box;
              resize: vertical;
              ${transition()};

              &:focus {
                border: 1px solid ${palette('primary', 0)};
                outline: 0;
                ${boxShadow('0 0 0 2px rgba(68, 130, 255, 0.2)')};
              }

              &:hover {
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
          }
        }
      }

      .NoteEditIcon {
        font-size: 16px;
        color: ${palette('primary', 0)};
        width: 30px;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        background-color: #ffffff;
        outline: 0;
        padding: 0;
        border: 1px solid ${palette('border', 0)};
        margin-left: -1px;
        margin-right: inherit;
        cursor: pointer;
        ${transition()};
        ${borderRadius()};

        &:first-child {
          margin-left: 0;
          margin-right: inherit;
        }

        &:hover {
          color: ${palette('primary', 0)};
          background-color: ${palette('grayscale', 7)};
        }
      }

      .NoteEditIcon {
        position: absolute;
        top: 0;
        right: 0;
        left: inherit;
      }
    }

    .NoTodoFound {
      font-size: 21px;
      font-weight: 300;
      padding: 0;
      text-transform: uppercase;
      color: ${palette('text', 3)};
      width: 100%;
      text-align: center;
      margin: 50px 0;
    }
  }
`;

export { TodoWrapper, TodoListWrapper };
