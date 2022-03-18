// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class Approval extends ethereum.Event {
  get params(): Approval__Params {
    return new Approval__Params(this);
  }
}

export class Approval__Params {
  _event: Approval;

  constructor(event: Approval) {
    this._event = event;
  }

  get owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get spender(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get value(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class Burned extends ethereum.Event {
  get params(): Burned__Params {
    return new Burned__Params(this);
  }
}

export class Burned__Params {
  _event: Burned;

  constructor(event: Burned) {
    this._event = event;
  }

  get owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get numberOfDolla(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class BurnedBusinesses extends ethereum.Event {
  get params(): BurnedBusinesses__Params {
    return new BurnedBusinesses__Params(this);
  }
}

export class BurnedBusinesses__Params {
  _event: BurnedBusinesses;

  constructor(event: BurnedBusinesses) {
    this._event = event;
  }

  get owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get numberOfBusinesses(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class BusinessesStaked extends ethereum.Event {
  get params(): BusinessesStaked__Params {
    return new BusinessesStaked__Params(this);
  }
}

export class BusinessesStaked__Params {
  _event: BusinessesStaked;

  constructor(event: BusinessesStaked) {
    this._event = event;
  }

  get user(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class BusinessesSwapped extends ethereum.Event {
  get params(): BusinessesSwapped__Params {
    return new BusinessesSwapped__Params(this);
  }
}

export class BusinessesSwapped__Params {
  _event: BusinessesSwapped;

  constructor(event: BusinessesSwapped) {
    this._event = event;
  }

  get owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get numberOfDolla(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class BusinessesUnStaked extends ethereum.Event {
  get params(): BusinessesUnStaked__Params {
    return new BusinessesUnStaked__Params(this);
  }
}

export class BusinessesUnStaked__Params {
  _event: BusinessesUnStaked;

  constructor(event: BusinessesUnStaked) {
    this._event = event;
  }

  get user(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class Minted extends ethereum.Event {
  get params(): Minted__Params {
    return new Minted__Params(this);
  }
}

export class Minted__Params {
  _event: Minted;

  constructor(event: Minted) {
    this._event = event;
  }

  get owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get numberOfDolla(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class MintedBusinesses extends ethereum.Event {
  get params(): MintedBusinesses__Params {
    return new MintedBusinesses__Params(this);
  }
}

export class MintedBusinesses__Params {
  _event: MintedBusinesses;

  constructor(event: MintedBusinesses) {
    this._event = event;
  }

  get owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get numberOfDolla(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class StakedBusinesses extends ethereum.Event {
  get params(): StakedBusinesses__Params {
    return new StakedBusinesses__Params(this);
  }
}

export class StakedBusinesses__Params {
  _event: StakedBusinesses;

  constructor(event: StakedBusinesses) {
    this._event = event;
  }

  get owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get numberOfBusinesses(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class Transfer extends ethereum.Event {
  get params(): Transfer__Params {
    return new Transfer__Params(this);
  }
}

export class Transfer__Params {
  _event: Transfer;

  constructor(event: Transfer) {
    this._event = event;
  }

  get from(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get to(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get value(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class UnstakedBusinesses extends ethereum.Event {
  get params(): UnstakedBusinesses__Params {
    return new UnstakedBusinesses__Params(this);
  }
}

export class UnstakedBusinesses__Params {
  _event: UnstakedBusinesses;

  constructor(event: UnstakedBusinesses) {
    this._event = event;
  }

  get owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get numberOfBusinesses(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class $dolla__businessesStakedHoldersResult {
  value0: Address;
  value1: BigInt;
  value2: BigInt;

  constructor(value0: Address, value1: BigInt, value2: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromAddress(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    return map;
  }
}

export class $dolla extends ethereum.SmartContract {
  static bind(address: Address): $dolla {
    return new $dolla("$dolla", address);
  }

  BOOSTER_MULTIPLIER(): BigInt {
    let result = super.call(
      "BOOSTER_MULTIPLIER",
      "BOOSTER_MULTIPLIER():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_BOOSTER_MULTIPLIER(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "BOOSTER_MULTIPLIER",
      "BOOSTER_MULTIPLIER():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  BUSINESSES_CONTRACT(): Address {
    let result = super.call(
      "BUSINESSES_CONTRACT",
      "BUSINESSES_CONTRACT():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_BUSINESSES_CONTRACT(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "BUSINESSES_CONTRACT",
      "BUSINESSES_CONTRACT():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  DOLLA_FARMING_FACTOR(): BigInt {
    let result = super.call(
      "DOLLA_FARMING_FACTOR",
      "DOLLA_FARMING_FACTOR():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_DOLLA_FARMING_FACTOR(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "DOLLA_FARMING_FACTOR",
      "DOLLA_FARMING_FACTOR():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  DOLLA_SWAP_FACTOR(): BigInt {
    let result = super.call(
      "DOLLA_SWAP_FACTOR",
      "DOLLA_SWAP_FACTOR():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_DOLLA_SWAP_FACTOR(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "DOLLA_SWAP_FACTOR",
      "DOLLA_SWAP_FACTOR():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  MAX_DOLLA_SUPPLY(): BigInt {
    let result = super.call(
      "MAX_DOLLA_SUPPLY",
      "MAX_DOLLA_SUPPLY():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_MAX_DOLLA_SUPPLY(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "MAX_DOLLA_SUPPLY",
      "MAX_DOLLA_SUPPLY():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  VMTYCOON_CONTRACT(): Address {
    let result = super.call(
      "VMTYCOON_CONTRACT",
      "VMTYCOON_CONTRACT():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_VMTYCOON_CONTRACT(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "VMTYCOON_CONTRACT",
      "VMTYCOON_CONTRACT():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  _allBusinessesStakeHolders(param0: BigInt): Address {
    let result = super.call(
      "_allBusinessesStakeHolders",
      "_allBusinessesStakeHolders(uint256):(address)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return result[0].toAddress();
  }

  try__allBusinessesStakeHolders(param0: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "_allBusinessesStakeHolders",
      "_allBusinessesStakeHolders(uint256):(address)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  allowance(owner: Address, spender: Address): BigInt {
    let result = super.call(
      "allowance",
      "allowance(address,address):(uint256)",
      [ethereum.Value.fromAddress(owner), ethereum.Value.fromAddress(spender)]
    );

    return result[0].toBigInt();
  }

  try_allowance(owner: Address, spender: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "allowance",
      "allowance(address,address):(uint256)",
      [ethereum.Value.fromAddress(owner), ethereum.Value.fromAddress(spender)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  approve(spender: Address, amount: BigInt): boolean {
    let result = super.call("approve", "approve(address,uint256):(bool)", [
      ethereum.Value.fromAddress(spender),
      ethereum.Value.fromUnsignedBigInt(amount)
    ]);

    return result[0].toBoolean();
  }

  try_approve(spender: Address, amount: BigInt): ethereum.CallResult<boolean> {
    let result = super.tryCall("approve", "approve(address,uint256):(bool)", [
      ethereum.Value.fromAddress(spender),
      ethereum.Value.fromUnsignedBigInt(amount)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  authorized(param0: Address): boolean {
    let result = super.call("authorized", "authorized(address):(bool)", [
      ethereum.Value.fromAddress(param0)
    ]);

    return result[0].toBoolean();
  }

  try_authorized(param0: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall("authorized", "authorized(address):(bool)", [
      ethereum.Value.fromAddress(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  balanceOf(account: Address): BigInt {
    let result = super.call("balanceOf", "balanceOf(address):(uint256)", [
      ethereum.Value.fromAddress(account)
    ]);

    return result[0].toBigInt();
  }

  try_balanceOf(account: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall("balanceOf", "balanceOf(address):(uint256)", [
      ethereum.Value.fromAddress(account)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  businessesStakedHolders(
    param0: Address
  ): $dolla__businessesStakedHoldersResult {
    let result = super.call(
      "businessesStakedHolders",
      "businessesStakedHolders(address):(address,uint32,uint256)",
      [ethereum.Value.fromAddress(param0)]
    );

    return new $dolla__businessesStakedHoldersResult(
      result[0].toAddress(),
      result[1].toBigInt(),
      result[2].toBigInt()
    );
  }

  try_businessesStakedHolders(
    param0: Address
  ): ethereum.CallResult<$dolla__businessesStakedHoldersResult> {
    let result = super.tryCall(
      "businessesStakedHolders",
      "businessesStakedHolders(address):(address,uint32,uint256)",
      [ethereum.Value.fromAddress(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new $dolla__businessesStakedHoldersResult(
        value[0].toAddress(),
        value[1].toBigInt(),
        value[2].toBigInt()
      )
    );
  }

  claimableView(user: Address): BigInt {
    let result = super.call(
      "claimableView",
      "claimableView(address):(uint256)",
      [ethereum.Value.fromAddress(user)]
    );

    return result[0].toBigInt();
  }

  try_claimableView(user: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "claimableView",
      "claimableView(address):(uint256)",
      [ethereum.Value.fromAddress(user)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  decimals(): i32 {
    let result = super.call("decimals", "decimals():(uint8)", []);

    return result[0].toI32();
  }

  try_decimals(): ethereum.CallResult<i32> {
    let result = super.tryCall("decimals", "decimals():(uint8)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toI32());
  }

  decreaseAllowance(spender: Address, subtractedValue: BigInt): boolean {
    let result = super.call(
      "decreaseAllowance",
      "decreaseAllowance(address,uint256):(bool)",
      [
        ethereum.Value.fromAddress(spender),
        ethereum.Value.fromUnsignedBigInt(subtractedValue)
      ]
    );

    return result[0].toBoolean();
  }

  try_decreaseAllowance(
    spender: Address,
    subtractedValue: BigInt
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "decreaseAllowance",
      "decreaseAllowance(address,uint256):(bool)",
      [
        ethereum.Value.fromAddress(spender),
        ethereum.Value.fromUnsignedBigInt(subtractedValue)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  increaseAllowance(spender: Address, addedValue: BigInt): boolean {
    let result = super.call(
      "increaseAllowance",
      "increaseAllowance(address,uint256):(bool)",
      [
        ethereum.Value.fromAddress(spender),
        ethereum.Value.fromUnsignedBigInt(addedValue)
      ]
    );

    return result[0].toBoolean();
  }

  try_increaseAllowance(
    spender: Address,
    addedValue: BigInt
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "increaseAllowance",
      "increaseAllowance(address,uint256):(bool)",
      [
        ethereum.Value.fromAddress(spender),
        ethereum.Value.fromUnsignedBigInt(addedValue)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  name(): string {
    let result = super.call("name", "name():(string)", []);

    return result[0].toString();
  }

  try_name(): ethereum.CallResult<string> {
    let result = super.tryCall("name", "name():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  symbol(): string {
    let result = super.call("symbol", "symbol():(string)", []);

    return result[0].toString();
  }

  try_symbol(): ethereum.CallResult<string> {
    let result = super.tryCall("symbol", "symbol():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  totalBusinessesHolder(): BigInt {
    let result = super.call(
      "totalBusinessesHolder",
      "totalBusinessesHolder():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_totalBusinessesHolder(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "totalBusinessesHolder",
      "totalBusinessesHolder():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  totalBusinessesStaked(): BigInt {
    let result = super.call(
      "totalBusinessesStaked",
      "totalBusinessesStaked():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_totalBusinessesStaked(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "totalBusinessesStaked",
      "totalBusinessesStaked():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  totalSupply(): BigInt {
    let result = super.call("totalSupply", "totalSupply():(uint256)", []);

    return result[0].toBigInt();
  }

  try_totalSupply(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("totalSupply", "totalSupply():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  transfer(recipient: Address, amount: BigInt): boolean {
    let result = super.call("transfer", "transfer(address,uint256):(bool)", [
      ethereum.Value.fromAddress(recipient),
      ethereum.Value.fromUnsignedBigInt(amount)
    ]);

    return result[0].toBoolean();
  }

  try_transfer(
    recipient: Address,
    amount: BigInt
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall("transfer", "transfer(address,uint256):(bool)", [
      ethereum.Value.fromAddress(recipient),
      ethereum.Value.fromUnsignedBigInt(amount)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  transferFrom(sender: Address, recipient: Address, amount: BigInt): boolean {
    let result = super.call(
      "transferFrom",
      "transferFrom(address,address,uint256):(bool)",
      [
        ethereum.Value.fromAddress(sender),
        ethereum.Value.fromAddress(recipient),
        ethereum.Value.fromUnsignedBigInt(amount)
      ]
    );

    return result[0].toBoolean();
  }

  try_transferFrom(
    sender: Address,
    recipient: Address,
    amount: BigInt
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "transferFrom",
      "transferFrom(address,address,uint256):(bool)",
      [
        ethereum.Value.fromAddress(sender),
        ethereum.Value.fromAddress(recipient),
        ethereum.Value.fromUnsignedBigInt(amount)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get _vmtycoonContract(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _businessesContract(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class AddAuthorizedCall extends ethereum.Call {
  get inputs(): AddAuthorizedCall__Inputs {
    return new AddAuthorizedCall__Inputs(this);
  }

  get outputs(): AddAuthorizedCall__Outputs {
    return new AddAuthorizedCall__Outputs(this);
  }
}

export class AddAuthorizedCall__Inputs {
  _call: AddAuthorizedCall;

  constructor(call: AddAuthorizedCall) {
    this._call = call;
  }

  get _toAdd(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class AddAuthorizedCall__Outputs {
  _call: AddAuthorizedCall;

  constructor(call: AddAuthorizedCall) {
    this._call = call;
  }
}

export class ApproveCall extends ethereum.Call {
  get inputs(): ApproveCall__Inputs {
    return new ApproveCall__Inputs(this);
  }

  get outputs(): ApproveCall__Outputs {
    return new ApproveCall__Outputs(this);
  }
}

export class ApproveCall__Inputs {
  _call: ApproveCall;

  constructor(call: ApproveCall) {
    this._call = call;
  }

  get spender(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class ApproveCall__Outputs {
  _call: ApproveCall;

  constructor(call: ApproveCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class ClaimDollaCall extends ethereum.Call {
  get inputs(): ClaimDollaCall__Inputs {
    return new ClaimDollaCall__Inputs(this);
  }

  get outputs(): ClaimDollaCall__Outputs {
    return new ClaimDollaCall__Outputs(this);
  }
}

export class ClaimDollaCall__Inputs {
  _call: ClaimDollaCall;

  constructor(call: ClaimDollaCall) {
    this._call = call;
  }
}

export class ClaimDollaCall__Outputs {
  _call: ClaimDollaCall;

  constructor(call: ClaimDollaCall) {
    this._call = call;
  }
}

export class DecreaseAllowanceCall extends ethereum.Call {
  get inputs(): DecreaseAllowanceCall__Inputs {
    return new DecreaseAllowanceCall__Inputs(this);
  }

  get outputs(): DecreaseAllowanceCall__Outputs {
    return new DecreaseAllowanceCall__Outputs(this);
  }
}

export class DecreaseAllowanceCall__Inputs {
  _call: DecreaseAllowanceCall;

  constructor(call: DecreaseAllowanceCall) {
    this._call = call;
  }

  get spender(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get subtractedValue(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class DecreaseAllowanceCall__Outputs {
  _call: DecreaseAllowanceCall;

  constructor(call: DecreaseAllowanceCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class EquipVMTycoonCall extends ethereum.Call {
  get inputs(): EquipVMTycoonCall__Inputs {
    return new EquipVMTycoonCall__Inputs(this);
  }

  get outputs(): EquipVMTycoonCall__Outputs {
    return new EquipVMTycoonCall__Outputs(this);
  }
}

export class EquipVMTycoonCall__Inputs {
  _call: EquipVMTycoonCall;

  constructor(call: EquipVMTycoonCall) {
    this._call = call;
  }

  get vmtycoonId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get amount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class EquipVMTycoonCall__Outputs {
  _call: EquipVMTycoonCall;

  constructor(call: EquipVMTycoonCall) {
    this._call = call;
  }
}

export class IncreaseAllowanceCall extends ethereum.Call {
  get inputs(): IncreaseAllowanceCall__Inputs {
    return new IncreaseAllowanceCall__Inputs(this);
  }

  get outputs(): IncreaseAllowanceCall__Outputs {
    return new IncreaseAllowanceCall__Outputs(this);
  }
}

export class IncreaseAllowanceCall__Inputs {
  _call: IncreaseAllowanceCall;

  constructor(call: IncreaseAllowanceCall) {
    this._call = call;
  }

  get spender(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get addedValue(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class IncreaseAllowanceCall__Outputs {
  _call: IncreaseAllowanceCall;

  constructor(call: IncreaseAllowanceCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class MintDollaCall extends ethereum.Call {
  get inputs(): MintDollaCall__Inputs {
    return new MintDollaCall__Inputs(this);
  }

  get outputs(): MintDollaCall__Outputs {
    return new MintDollaCall__Outputs(this);
  }
}

export class MintDollaCall__Inputs {
  _call: MintDollaCall;

  constructor(call: MintDollaCall) {
    this._call = call;
  }

  get sender(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class MintDollaCall__Outputs {
  _call: MintDollaCall;

  constructor(call: MintDollaCall) {
    this._call = call;
  }
}

export class RebalanceStakingPoolCall extends ethereum.Call {
  get inputs(): RebalanceStakingPoolCall__Inputs {
    return new RebalanceStakingPoolCall__Inputs(this);
  }

  get outputs(): RebalanceStakingPoolCall__Outputs {
    return new RebalanceStakingPoolCall__Outputs(this);
  }
}

export class RebalanceStakingPoolCall__Inputs {
  _call: RebalanceStakingPoolCall;

  constructor(call: RebalanceStakingPoolCall) {
    this._call = call;
  }

  get from(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get to(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class RebalanceStakingPoolCall__Outputs {
  _call: RebalanceStakingPoolCall;

  constructor(call: RebalanceStakingPoolCall) {
    this._call = call;
  }
}

export class RemoveAuthorizedCall extends ethereum.Call {
  get inputs(): RemoveAuthorizedCall__Inputs {
    return new RemoveAuthorizedCall__Inputs(this);
  }

  get outputs(): RemoveAuthorizedCall__Outputs {
    return new RemoveAuthorizedCall__Outputs(this);
  }
}

export class RemoveAuthorizedCall__Inputs {
  _call: RemoveAuthorizedCall;

  constructor(call: RemoveAuthorizedCall) {
    this._call = call;
  }

  get _toRemove(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class RemoveAuthorizedCall__Outputs {
  _call: RemoveAuthorizedCall;

  constructor(call: RemoveAuthorizedCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall extends ethereum.Call {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class StakingCall extends ethereum.Call {
  get inputs(): StakingCall__Inputs {
    return new StakingCall__Inputs(this);
  }

  get outputs(): StakingCall__Outputs {
    return new StakingCall__Outputs(this);
  }
}

export class StakingCall__Inputs {
  _call: StakingCall;

  constructor(call: StakingCall) {
    this._call = call;
  }

  get amount(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class StakingCall__Outputs {
  _call: StakingCall;

  constructor(call: StakingCall) {
    this._call = call;
  }
}

export class SwapBusinessesForDollaCall extends ethereum.Call {
  get inputs(): SwapBusinessesForDollaCall__Inputs {
    return new SwapBusinessesForDollaCall__Inputs(this);
  }

  get outputs(): SwapBusinessesForDollaCall__Outputs {
    return new SwapBusinessesForDollaCall__Outputs(this);
  }
}

export class SwapBusinessesForDollaCall__Inputs {
  _call: SwapBusinessesForDollaCall;

  constructor(call: SwapBusinessesForDollaCall) {
    this._call = call;
  }

  get businessesAmt(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class SwapBusinessesForDollaCall__Outputs {
  _call: SwapBusinessesForDollaCall;

  constructor(call: SwapBusinessesForDollaCall) {
    this._call = call;
  }
}

export class TransferCall extends ethereum.Call {
  get inputs(): TransferCall__Inputs {
    return new TransferCall__Inputs(this);
  }

  get outputs(): TransferCall__Outputs {
    return new TransferCall__Outputs(this);
  }
}

export class TransferCall__Inputs {
  _call: TransferCall;

  constructor(call: TransferCall) {
    this._call = call;
  }

  get recipient(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class TransferCall__Outputs {
  _call: TransferCall;

  constructor(call: TransferCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class TransferFromCall extends ethereum.Call {
  get inputs(): TransferFromCall__Inputs {
    return new TransferFromCall__Inputs(this);
  }

  get outputs(): TransferFromCall__Outputs {
    return new TransferFromCall__Outputs(this);
  }
}

export class TransferFromCall__Inputs {
  _call: TransferFromCall;

  constructor(call: TransferFromCall) {
    this._call = call;
  }

  get sender(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get recipient(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get amount(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class TransferFromCall__Outputs {
  _call: TransferFromCall;

  constructor(call: TransferFromCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}

export class UpdateBoosterMultiplierCall extends ethereum.Call {
  get inputs(): UpdateBoosterMultiplierCall__Inputs {
    return new UpdateBoosterMultiplierCall__Inputs(this);
  }

  get outputs(): UpdateBoosterMultiplierCall__Outputs {
    return new UpdateBoosterMultiplierCall__Outputs(this);
  }
}

export class UpdateBoosterMultiplierCall__Inputs {
  _call: UpdateBoosterMultiplierCall;

  constructor(call: UpdateBoosterMultiplierCall) {
    this._call = call;
  }

  get _value(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class UpdateBoosterMultiplierCall__Outputs {
  _call: UpdateBoosterMultiplierCall;

  constructor(call: UpdateBoosterMultiplierCall) {
    this._call = call;
  }
}

export class UpdateDollaSwapFactorCall extends ethereum.Call {
  get inputs(): UpdateDollaSwapFactorCall__Inputs {
    return new UpdateDollaSwapFactorCall__Inputs(this);
  }

  get outputs(): UpdateDollaSwapFactorCall__Outputs {
    return new UpdateDollaSwapFactorCall__Outputs(this);
  }
}

export class UpdateDollaSwapFactorCall__Inputs {
  _call: UpdateDollaSwapFactorCall;

  constructor(call: UpdateDollaSwapFactorCall) {
    this._call = call;
  }

  get _value(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class UpdateDollaSwapFactorCall__Outputs {
  _call: UpdateDollaSwapFactorCall;

  constructor(call: UpdateDollaSwapFactorCall) {
    this._call = call;
  }
}

export class UpdateFarmingFactorCall extends ethereum.Call {
  get inputs(): UpdateFarmingFactorCall__Inputs {
    return new UpdateFarmingFactorCall__Inputs(this);
  }

  get outputs(): UpdateFarmingFactorCall__Outputs {
    return new UpdateFarmingFactorCall__Outputs(this);
  }
}

export class UpdateFarmingFactorCall__Inputs {
  _call: UpdateFarmingFactorCall;

  constructor(call: UpdateFarmingFactorCall) {
    this._call = call;
  }

  get _value(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class UpdateFarmingFactorCall__Outputs {
  _call: UpdateFarmingFactorCall;

  constructor(call: UpdateFarmingFactorCall) {
    this._call = call;
  }
}

export class UpdateMaxDollaSupplyCall extends ethereum.Call {
  get inputs(): UpdateMaxDollaSupplyCall__Inputs {
    return new UpdateMaxDollaSupplyCall__Inputs(this);
  }

  get outputs(): UpdateMaxDollaSupplyCall__Outputs {
    return new UpdateMaxDollaSupplyCall__Outputs(this);
  }
}

export class UpdateMaxDollaSupplyCall__Inputs {
  _call: UpdateMaxDollaSupplyCall;

  constructor(call: UpdateMaxDollaSupplyCall) {
    this._call = call;
  }

  get _value(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class UpdateMaxDollaSupplyCall__Outputs {
  _call: UpdateMaxDollaSupplyCall;

  constructor(call: UpdateMaxDollaSupplyCall) {
    this._call = call;
  }
}

export class WithdrawAllBusinessesAndClaimDollaCall extends ethereum.Call {
  get inputs(): WithdrawAllBusinessesAndClaimDollaCall__Inputs {
    return new WithdrawAllBusinessesAndClaimDollaCall__Inputs(this);
  }

  get outputs(): WithdrawAllBusinessesAndClaimDollaCall__Outputs {
    return new WithdrawAllBusinessesAndClaimDollaCall__Outputs(this);
  }
}

export class WithdrawAllBusinessesAndClaimDollaCall__Inputs {
  _call: WithdrawAllBusinessesAndClaimDollaCall;

  constructor(call: WithdrawAllBusinessesAndClaimDollaCall) {
    this._call = call;
  }
}

export class WithdrawAllBusinessesAndClaimDollaCall__Outputs {
  _call: WithdrawAllBusinessesAndClaimDollaCall;

  constructor(call: WithdrawAllBusinessesAndClaimDollaCall) {
    this._call = call;
  }
}

export class WithdrawBusinessesCall extends ethereum.Call {
  get inputs(): WithdrawBusinessesCall__Inputs {
    return new WithdrawBusinessesCall__Inputs(this);
  }

  get outputs(): WithdrawBusinessesCall__Outputs {
    return new WithdrawBusinessesCall__Outputs(this);
  }
}

export class WithdrawBusinessesCall__Inputs {
  _call: WithdrawBusinessesCall;

  constructor(call: WithdrawBusinessesCall) {
    this._call = call;
  }

  get amount(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class WithdrawBusinessesCall__Outputs {
  _call: WithdrawBusinessesCall;

  constructor(call: WithdrawBusinessesCall) {
    this._call = call;
  }
}
