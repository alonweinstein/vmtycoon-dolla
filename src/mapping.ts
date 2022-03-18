import { BigInt } from "@graphprotocol/graph-ts"
import {
  $dolla,
  Approval,
  Burned,
  BurnedBusinesses,
  BusinessesStaked,
  BusinessesSwapped,
  BusinessesUnStaked,
  Minted,
  MintedBusinesses,
  OwnershipTransferred,
  StakedBusinesses,
  Transfer,
  UnstakedBusinesses
} from "../generated/$dolla/$dolla"
import { ExampleEntity } from "../generated/schema"

export function handleApproval(event: Approval): void {
  // Entities can be loaded from the store using a string ID; this ID
  // needs to be unique across all entities of the same type
  let entity = ExampleEntity.load(event.transaction.from.toHex())

  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
  if (!entity) {
    entity = new ExampleEntity(event.transaction.from.toHex())

    // Entity fields can be set using simple assignments
    entity.count = BigInt.fromI32(0)
  }

  // BigInt and BigDecimal math are supported
  entity.count = entity.count + BigInt.fromI32(1)

  // Entity fields can be set based on event parameters
  entity.owner = event.params.owner
  entity.spender = event.params.spender

  // Entities can be written to the store with `.save()`
  entity.save()

  // Note: If a handler doesn't require existing field values, it is faster
  // _not_ to load the entity from the store. Instead, create it fresh with
  // `new Entity(...)`, set the fields that should be updated and save the
  // entity back to the store. Fields that were not set or unset remain
  // unchanged, allowing for partial updates to be applied.

  // It is also possible to access smart contracts from mappings. For
  // example, the contract that has emitted the event can be connected to
  // with:
  //
  // let contract = Contract.bind(event.address)
  //
  // The following functions can then be called on this contract to access
  // state variables and other data:
  //
  // - contract.BOOSTER_MULTIPLIER(...)
  // - contract.BUSINESSES_CONTRACT(...)
  // - contract.DOLLA_FARMING_FACTOR(...)
  // - contract.DOLLA_SWAP_FACTOR(...)
  // - contract.MAX_DOLLA_SUPPLY(...)
  // - contract.VMTYCOON_CONTRACT(...)
  // - contract._allBusinessesStakeHolders(...)
  // - contract.allowance(...)
  // - contract.approve(...)
  // - contract.authorized(...)
  // - contract.balanceOf(...)
  // - contract.businessesStakedHolders(...)
  // - contract.claimableView(...)
  // - contract.decimals(...)
  // - contract.decreaseAllowance(...)
  // - contract.increaseAllowance(...)
  // - contract.name(...)
  // - contract.owner(...)
  // - contract.symbol(...)
  // - contract.totalBusinessesHolder(...)
  // - contract.totalBusinessesStaked(...)
  // - contract.totalSupply(...)
  // - contract.transfer(...)
  // - contract.transferFrom(...)
}

export function handleBurned(event: Burned): void {}

export function handleBurnedBusinesses(event: BurnedBusinesses): void {}

export function handleBusinessesStaked(event: BusinessesStaked): void {}

export function handleBusinessesSwapped(event: BusinessesSwapped): void {}

export function handleBusinessesUnStaked(event: BusinessesUnStaked): void {}

export function handleMinted(event: Minted): void {}

export function handleMintedBusinesses(event: MintedBusinesses): void {}

export function handleOwnershipTransferred(event: OwnershipTransferred): void {}

export function handleStakedBusinesses(event: StakedBusinesses): void {}

export function handleTransfer(event: Transfer): void {}

export function handleUnstakedBusinesses(event: UnstakedBusinesses): void {}
