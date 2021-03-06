/**
  * Wrap component MyBanner to be used from Reason.
  */

[@genType]
type message = {text: string};

[@genType.import "./MyBanner"] /* Module with the JS component to be wrapped. */
[@bs.module "./MyBannerWrapper.gen"] /* This must always be the name of the current module. */
/* The make function will be automatically generated from the types below. */
external make:
  (~show: bool, ~message: option(message)=?, 'a) =>
  ReasonReact.component(
    ReasonReact.stateless,
    ReasonReact.noRetainedProps,
    ReasonReact.actionless,
  ) =
  "";

let make = make;