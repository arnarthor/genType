[@genType]
type t = int;

[@genType]
let someIntList = [1, 2, 3];

[@genType]
let map = List.map;

[@genType]
type typeWithVars('x, 'y, 'z) =
  | A('x, 'y)
  | B('z);

[@genType]
type tree = {
  .
  "label": string,
  "left": option(tree),
  "right": option(tree),
};

/*
 * A tree is a recursive type which does not require any conversion (JS object).
 * All is well.
 */
[@genType]
let rec swap = (tree: tree): tree => {
  "label": tree##label,
  "left": tree##right->(Belt.Option.map(swap)),
  "right": tree##left->(Belt.Option.map(swap)),
};

[@genType]
type selfRecursive = {self: selfRecursive};

[@genType]
type mutuallyRecursiveA = {b: mutuallyRecursiveB}
and mutuallyRecursiveB = {a: mutuallyRecursiveA};

/*
 * This is a recursive type which requires conversion (a record).
 * Only a shallow conversion of the top-level element is performed.
 */
[@genType]
let selfRecursiveConverter = ({self}) => self;

/*
 * This is a mutually recursive type which requires conversion (a record).
 * Only a shallow conversion of the two top-level elements is performed.
 */
[@genType]
let mutuallyRecursiveConverter = ({b}) => b;

[@genType]
let testFunctionOnOptionsAsArgument = (a: option('a), foo) => foo(a);