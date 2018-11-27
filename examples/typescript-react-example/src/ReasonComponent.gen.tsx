/* TypeScript file generated by genType. */

// tslint:disable-next-line:no-var-requires
const CreateBucklescriptBlock = require('bs-platform/lib/es6/block.js');

// tslint:disable-next-line:no-var-requires
const Curry = require('bs-platform/lib/es6/curry.js');

// tslint:disable-next-line:no-var-requires
const ReasonComponentBS = require('./ReasonComponent.bs');

// tslint:disable-next-line:no-var-requires
const ReasonReact = require('reason-react/src/ReasonReact.js');

import {Mouse_t as ReactEvent_Mouse_t} from '../src/shims/ReactEvent.shim';

import {coord as Records_coord} from '../src/nested/Records.gen';

import {list} from '../src/shims/ReasonPervasives.shim';

import {t as Types_t} from '../src/nested/Types.gen';

// tslint:disable-next-line:interface-over-type-literal
export type person<a> = {
  readonly name: string, 
  readonly surname: string, 
  readonly type: string, 
  readonly polymorphicPayload: a
};

// tslint:disable-next-line:max-classes-per-file 
export abstract class TA { protected opaque!: any }; /* simulate opaque types */

export const A: TA = 0 as any;

// tslint:disable-next-line:max-classes-per-file 
export abstract class TB { protected opaque!: any }; /* simulate opaque types */

export const B: (_1:number) => TB = function _(VArg1) { return CreateBucklescriptBlock.__(0 as any, [VArg1]) }

// tslint:disable-next-line:max-classes-per-file 
export abstract class TC { protected opaque!: any }; /* simulate opaque types */

export const C: (_1:string) => TC = function _(VArg1) { return CreateBucklescriptBlock.__(1 as any, [VArg1]) }

export type t =
  | TA
  | TB
  | TC;

export const onClick: (_1:ReactEvent_Mouse_t) => void = ReasonComponentBS.onClick;

// tslint:disable-next-line:interface-over-type-literal
export type Props = {
  readonly message?: string, 
  readonly person: person<unknown>, 
  readonly intList?: list<number>, 
  readonly children?: unknown
};

export const ReasonComponent: React.ComponentClass<Props> = ReasonReact.wrapReasonForJs(
  ReasonComponentBS.component,
  (function _(jsProps: Props) {
     return Curry._4(ReasonComponentBS.make, jsProps.message, [jsProps.person.name, jsProps.person.surname, jsProps.person.type, jsProps.person.polymorphicPayload], jsProps.intList, jsProps.children);
  }));

export default ReasonComponent;

export const minus: (_1:{readonly first?: number, readonly second: number}) => number = function _(Arg1: any) { const result = ReasonComponentBS.minus(Arg1.first, Arg1.second); return result };

export const useTypeDefinedInAnotherModule: (_1:Types_t) => Types_t = ReasonComponentBS.useTypeDefinedInAnotherModule;

export const tToString: (_1:t) => string = ReasonComponentBS.tToString;

export const useRecordsCoord: (_1:Records_coord) => number = function _(Arg1: any) { const result = ReasonComponentBS.useRecordsCoord([Arg1.x, Arg1.y, Arg1.z]); return result };
