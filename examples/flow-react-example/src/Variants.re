[@genType]
type action =
  | NoOp
  | AdjustAge(int => int)
  | Booly(bool)
  | OptionalInt(option(int))
  | Unity(unit)
  | OptionalBooly(option(bool))
  | OptionalBoolMapper(option(bool) => option(bool));

[@genType]
let actionToString = (_: action) => "";

type optionalBoolMapper = {
  optionalBoolMapper: option(bool) => option(bool),
};

[@genType]
let converter = (x: optionalBoolMapper) => x;