const fs = require('fs');
const path = require('path');
const readline = require('readline');
const iniparser = require("ini");
const config = iniparser.parse(fs.readFileSync(path.join(__dirname, "..", "Config", "config.ini")).toString());

const defaultGamePath = path.join(__dirname, '..', 'CloudStorage', 'DefaultGame.ini');

const bloomText = `
[AssetHotfix]
+DataTable=/Game/Athena/Items/Weapons/AthenaRangedWeapons;RowUpdate;Sniper_BoltAction_Scope_Athena_C_Ore_T03;Spread;0
+DataTable=/Game/Athena/Items/Weapons/AthenaRangedWeapons;RowUpdate;Sniper_BoltAction_Scope_Athena_UC_Ore_T03;Spread;0
+DataTable=/Game/Athena/Items/Weapons/AthenaRangedWeapons;RowUpdate;Sniper_BoltAction_Scope_Athena_R_Ore_T03;Spread;0
+DataTable=/Game/Athena/Items/Weapons/AthenaRangedWeapons;RowUpdate;Sniper_BoltAction_Scope_Athena_SR_Ore_T03;Spread;0
+DataTable=/Game/Athena/Items/Weapons/AthenaRangedWeapons;RowUpdate;Sniper_BoltAction_Scope_Athena_VR_Ore_T03;Spread;0
+DataTable=/Game/Athena/Items/Weapons/AthenaRangedWeapons;RowUpdate;Sniper_Heavy_Athena_SR_Ore_T03;Spread;0
+DataTable=/Game/Athena/Items/Weapons/AthenaRangedWeapons;RowUpdate;Sniper_Heavy_Athena_VR_Ore_T03;Spread;0
+DataTable=/Game/Athena/Items/Weapons/AthenaRangedWeapons;RowUpdate;Sniper_Heavy_Athena_R_Ore_T03;Spread;0
+DataTable=/Game/Athena/Items/Weapons/AthenaRangedWeapons;RowUpdate;Sniper_BoltAction_Scope_Suppressed_Athena_SR_Ore_T03;Spread;0
+DataTable=/Game/Athena/Items/Weapons/AthenaRangedWeapons;RowUpdate;Sniper_BoltAction_Scope_Suppressed_Athena_VR_Ore_T03;Spread;0
+DataTable=/Game/Athena/Items/Weapons/AthenaRangedWeapons;RowUpdate;Sniper_BoltAction_Scope_Suppressed_Athena_R_Ore_T03;Spread;0
+DataTable=/Game/Athena/Items/Weapons/AthenaRangedWeapons;RowUpdate;Sniper_Standard_Scope_Athena_SR_Ore_T03;Spread;0
+DataTable=/Game/Athena/Items/Weapons/AthenaRangedWeapons;RowUpdate;Sniper_Standard_Scope_Athena_VR_Ore_T03;Spread;0
+DataTable=/Game/Athena/Items/Weapons/AthenaRangedWeapons;RowUpdate;Sniper_Standard_Scope_Athena_HighTier_SR_Ore_T03;Spread;0
+DataTable=/Game/Athena/Items/Weapons/AthenaRangedWeapons;RowUpdate;Sniper_Standard_Scope_Athena_HighTier_VR_Ore_T03;Spread;0
+DataTable=/Game/Athena/Items/Weapons/AthenaRangedWeapons;RowUpdate;Sniper_Weather_Athena_SR_Ore_T03;Spread;0
+DataTable=/Game/Athena/Items/Weapons/AthenaRangedWeapons;RowUpdate;Sniper_Weather_Athena_VR_Ore_T03;Spread;0
+DataTable=/Game/Athena/Items/Weapons/AthenaRangedWeapons;RowUpdate;Sniper_BoltAction_Hunter_Athena_C_Ore_T03;Spread;0
+DataTable=/Game/Athena/Items/Weapons/AthenaRangedWeapons;RowUpdate;Sniper_BoltAction_Hunter_Athena_UC_Ore_T03;Spread;0
+DataTable=/Game/Athena/Items/Weapons/AthenaRangedWeapons;RowUpdate;Sniper_BoltAction_Hunter_Athena_R_Ore_T03;Spread;0
+DataTable=/Game/Athena/Items/Weapons/AthenaRangedWeapons;RowUpdate;Sniper_BoltAction_Hunter_Athena_VR_Ore_T03;Spread;0
+DataTable=/Game/Athena/Items/Weapons/AthenaRangedWeapons;RowUpdate;Sniper_BoltAction_Hunter_Athena_SR_Ore_T03;Spread;0
+DataTable=/Game/Athena/Items/Weapons/AthenaRangedWeapons;RowUpdate;WaffleTruck_Sniper_DragonBreath;Spread;0
+DataTable=/Game/Athena/Items/Weapons/AthenaRangedWeapons;RowUpdate;Sniper_Weather_Athena_SR_Ore_T03;Spread;0
+DataTable=/Game/Athena/Items/Weapons/AthenaRangedWeapons;RowUpdate;Sniper_Heavy_Boom_Athena_SR_Ore_T03;Spread;0
+DataTable=/Game/Athena/Items/Weapons/AthenaRangedWeapons;RowUpdate;Sniper_BoltAction_Scope_Athena_C_Ore_T03;AthenaJumpingFallingSpreadMultiplier;0
+DataTable=/Game/Athena/Items/Weapons/AthenaRangedWeapons;RowUpdate;Sniper_BoltAction_Scope_Athena_UC_Ore_T03;AthenaJumpingFallingSpreadMultiplier;0
+DataTable=/Game/Athena/Items/Weapons/AthenaRangedWeapons;RowUpdate;Sniper_BoltAction_Scope_Athena_R_Ore_T03;AthenaJumpingFallingSpreadMultiplier;0
+DataTable=/Game/Athena/Items/Weapons/AthenaRangedWeapons;RowUpdate;Sniper_BoltAction_Scope_Athena_SR_Ore_T03;AthenaJumpingFallingSpreadMultiplier;0
+DataTable=/Game/Athena/Items/Weapons/AthenaRangedWeapons;RowUpdate;Sniper_BoltAction_Scope_Athena_VR_Ore_T03;AthenaJumpingFallingSpreadMultiplier;0
+DataTable=/Game/Athena/Items/Weapons/AthenaRangedWeapons;RowUpdate;Sniper_BoltAction_Hunter_Athena_C_Ore_T03;AthenaJumpingFallingSpreadMultiplier;0
+DataTable=/Game/Athena/Items/Weapons/AthenaRangedWeapons;RowUpdate;Sniper_BoltAction_Hunter_Athena_UC_Ore_T03;AthenaJumpingFallingSpreadMultiplier;0
+DataTable=/Game/Athena/Items/Weapons/AthenaRangedWeapons;RowUpdate;Sniper_BoltAction_Hunter_Athena_R_Ore_T03;AthenaJumpingFallingSpreadMultiplier;0
+DataTable=/Game/Athena/Items/Weapons/AthenaRangedWeapons;RowUpdate;Sniper_BoltAction_Hunter_Athena_VR_Ore_T03;AthenaJumpingFallingSpreadMultiplier;0
+DataTable=/Game/Athena/Items/Weapons/AthenaRangedWeapons;RowUpdate;Sniper_BoltAction_Hunter_Athena_SR_Ore_T03;AthenaJumpingFallingSpreadMultiplier;0
+DataTable=/Game/Athena/Items/Weapons/AthenaRangedWeapons;RowUpdate;Sniper_Heavy_Athena_SR_Ore_T03;AthenaJumpingFallingSpreadMultiplier;0
+DataTable=/Game/Athena/Items/Weapons/AthenaRangedWeapons;RowUpdate;Sniper_Heavy_Athena_VR_Ore_T03;AthenaJumpingFallingSpreadMultiplier;0
+DataTable=/Game/Athena/Items/Weapons/AthenaRangedWeapons;RowUpdate;Sniper_Heavy_Athena_R_Ore_T03;AthenaJumpingFallingSpreadMultiplier;0
+DataTable=/Game/Athena/Items/Weapons/AthenaRangedWeapons;RowUpdate;Sniper_BoltAction_Scope_Suppressed_Athena_R_Ore_T03;AthenaJumpingFallingSpreadMultiplier;0
+DataTable=/Game/Athena/Items/Weapons/AthenaRangedWeapons;RowUpdate;Sniper_BoltAction_Scope_Suppressed_Athena_VR_Ore_T03;AthenaJumpingFallingSpreadMultiplier;0
+DataTable=/Game/Athena/Items/Weapons/AthenaRangedWeapons;RowUpdate;Sniper_BoltAction_Scope_Suppressed_Athena_SR_Ore_T03;AthenaJumpingFallingSpreadMultiplier;0
+DataTable=/Game/Athena/Items/Weapons/AthenaRangedWeapons;RowUpdate;Sniper_Standard_Scope_Athena_SR_Ore_T03;AthenaJumpingFallingSpreadMultiplier;0
+DataTable=/Game/Athena/Items/Weapons/AthenaRangedWeapons;RowUpdate;Sniper_Standard_Scope_Athena_VR_Ore_T03;AthenaJumpingFallingSpreadMultiplier;0
+DataTable=/Game/Athena/Items/Weapons/AthenaRangedWeapons;RowUpdate;Sniper_Standard_Scope_Athena_HighTier_SR_Ore_T03;AthenaJumpingFallingSpreadMultiplier;0
+DataTable=/Game/Athena/Items/Weapons/AthenaRangedWeapons;RowUpdate;Sniper_Standard_Scope_Athena_HighTier_VR_Ore_T03;AthenaJumpingFallingSpreadMultiplier;0
+DataTable=/Game/Athena/Items/Weapons/AthenaRangedWeapons;RowUpdate;Sniper_Weather_Athena_SR_Ore_T03;AthenaJumpingFallingSpreadMultiplier;0
+DataTable=/Game/Athena/Items/Weapons/AthenaRangedWeapons;RowUpdate;Sniper_Weather_Athena_VR_Ore_T03;AthenaJumpingFallingSpreadMultiplier;0
+DataTable=/Game/Athena/Items/Weapons/AthenaRangedWeapons;RowUpdate;WaffleTruck_Sniper_DragonBreath;AthenaJumpingFallingSpreadMultiplier;0
+DataTable=/Game/Athena/Items/Weapons/AthenaRangedWeapons;RowUpdate;Sniper_Weather_Athena_SR_Ore_T03;AthenaJumpingFallingSpreadMultiplier;0
+DataTable=/Game/Athena/Items/Weapons/AthenaRangedWeapons;RowUpdate;Sniper_Heavy_Boom_Athena_SR_Ore_T03;AthenaJumpingFallingSpreadMultiplier;0
+DataTable=/Game/Athena/Items/Weapons/AthenaRangedWeapons;RowUpdate;Sniper_BoltAction_Scope_Athena_C_Ore_T03;AthenaSprintingSpreadMultiplier;0
+DataTable=/Game/Athena/Items/Weapons/AthenaRangedWeapons;RowUpdate;Sniper_BoltAction_Scope_Athena_UC_Ore_T03;AthenaSprintingSpreadMultiplier;0
+DataTable=/Game/Athena/Items/Weapons/AthenaRangedWeapons;RowUpdate;Sniper_BoltAction_Scope_Athena_R_Ore_T03;AthenaSprintingSpreadMultiplier;0
+DataTable=/Game/Athena/Items/Weapons/AthenaRangedWeapons;RowUpdate;Sniper_BoltAction_Scope_Athena_SR_Ore_T03;AthenaSprintingSpreadMultiplier;0
+DataTable=/Game/Athena/Items/Weapons/AthenaRangedWeapons;RowUpdate;Sniper_BoltAction_Scope_Athena_VR_Ore_T03;AthenaSprintingSpreadMultiplier;0
+DataTable=/Game/Athena/Items/Weapons/AthenaRangedWeapons;RowUpdate;Sniper_BoltAction_Hunter_Athena_C_Ore_T03;AthenaSprintingSpreadMultiplier;0
+DataTable=/Game/Athena/Items/Weapons/AthenaRangedWeapons;RowUpdate;Sniper_BoltAction_Hunter_Athena_UC_Ore_T03;AthenaSprintingSpreadMultiplier;0
+DataTable=/Game/Athena/Items/Weapons/AthenaRangedWeapons;RowUpdate;Sniper_BoltAction_Hunter_Athena_R_Ore_T03;AthenaSprintingSpreadMultiplier;0
+DataTable=/Game/Athena/Items/Weapons/AthenaRangedWeapons;RowUpdate;Sniper_BoltAction_Hunter_Athena_VR_Ore_T03;AthenaSprintingSpreadMultiplier;0
+DataTable=/Game/Athena/Items/Weapons/AthenaRangedWeapons;RowUpdate;Sniper_BoltAction_Hunter_Athena_SR_Ore_T03;AthenaSprintingSpreadMultiplier;0
+DataTable=/Game/Athena/Items/Weapons/AthenaRangedWeapons;RowUpdate;Sniper_Heavy_Athena_SR_Ore_T03;AthenaSprintingSpreadMultiplier;0
+DataTable=/Game/Athena/Items/Weapons/AthenaRangedWeapons;RowUpdate;Sniper_Heavy_Athena_VR_Ore_T03;AthenaSprintingSpreadMultiplier;0
+DataTable=/Game/Athena/Items/Weapons/AthenaRangedWeapons;RowUpdate;Sniper_Heavy_Athena_R_Ore_T03;AthenaSprintingSpreadMultiplier;0
+DataTable=/Game/Athena/Items/Weapons/AthenaRangedWeapons;RowUpdate;Sniper_BoltAction_Scope_Suppressed_Athena_R_Ore_T03;AthenaSprintingSpreadMultiplier;0
+DataTable=/Game/Athena/Items/Weapons/AthenaRangedWeapons;RowUpdate;Sniper_BoltAction_Scope_Suppressed_Athena_VR_Ore_T03;AthenaSprintingSpreadMultiplier;0
+DataTable=/Game/Athena/Items/Weapons/AthenaRangedWeapons;RowUpdate;Sniper_BoltAction_Scope_Suppressed_Athena_SR_Ore_T03;AthenaSprintingSpreadMultiplier;0
+DataTable=/Game/Athena/Items/Weapons/AthenaRangedWeapons;RowUpdate;Sniper_Standard_Scope_Athena_SR_Ore_T03;AthenaSprintingSpreadMultiplier;0
+DataTable=/Game/Athena/Items/Weapons/AthenaRangedWeapons;RowUpdate;Sniper_Standard_Scope_Athena_VR_Ore_T03;AthenaSprintingSpreadMultiplier;0
+DataTable=/Game/Athena/Items/Weapons/AthenaRangedWeapons;RowUpdate;Sniper_Standard_Scope_Athena_HighTier_SR_Ore_T03;AthenaSprintingSpreadMultiplier;0
+DataTable=/Game/Athena/Items/Weapons/AthenaRangedWeapons;RowUpdate;Sniper_Standard_Scope_Athena_HighTier_VR_Ore_T03;AthenaSprintingSpreadMultiplier;0
+DataTable=/Game/Athena/Items/Weapons/AthenaRangedWeapons;RowUpdate;Sniper_Weather_Athena_SR_Ore_T03;AthenaSprintingSpreadMultiplier;0
+DataTable=/Game/Athena/Items/Weapons/AthenaRangedWeapons;RowUpdate;Sniper_Weather_Athena_VR_Ore_T03;AthenaSprintingSpreadMultiplier;0
+DataTable=/Game/Athena/Items/Weapons/AthenaRangedWeapons;RowUpdate;WaffleTruck_Sniper_DragonBreath;AthenaSprintingSpreadMultiplier;0
+DataTable=/Game/Athena/Items/Weapons/AthenaRangedWeapons;RowUpdate;Sniper_Weather_Athena_SR_Ore_T03;AthenaSprintingSpreadMultiplier;0
+DataTable=/Game/Athena/Items/Weapons/AthenaRangedWeapons;RowUpdate;Sniper_Heavy_Boom_Athena_SR_Ore_T03;AthenaSprintingSpreadMultiplier;0
+DataTable=/Game/Athena/Items/Weapons/AthenaRangedWeapons;RowUpdate;Sniper_BoltAction_Scope_Athena_C_Ore_T03;StandingStillSpreadMultiplier;0
+DataTable=/Game/Athena/Items/Weapons/AthenaRangedWeapons;RowUpdate;Sniper_BoltAction_Scope_Athena_UC_Ore_T03;StandingStillSpreadMultiplier;0
+DataTable=/Game/Athena/Items/Weapons/AthenaRangedWeapons;RowUpdate;Sniper_BoltAction_Scope_Athena_R_Ore_T03;StandingStillSpreadMultiplier;0
+DataTable=/Game/Athena/Items/Weapons/AthenaRangedWeapons;RowUpdate;Sniper_BoltAction_Scope_Athena_SR_Ore_T03;StandingStillSpreadMultiplier;0
+DataTable=/Game/Athena/Items/Weapons/AthenaRangedWeapons;RowUpdate;Sniper_BoltAction_Scope_Athena_VR_Ore_T03;StandingStillSpreadMultiplier;0
+DataTable=/Game/Athena/Items/Weapons/AthenaRangedWeapons;RowUpdate;Sniper_Heavy_Athena_SR_Ore_T03;StandingStillSpreadMultiplier;0
+DataTable=/Game/Athena/Items/Weapons/AthenaRangedWeapons;RowUpdate;Sniper_Heavy_Athena_VR_Ore_T03;StandingStillSpreadMultiplier;0
+DataTable=/Game/Athena/Items/Weapons/AthenaRangedWeapons;RowUpdate;Sniper_Heavy_Athena_R_Ore_T03;StandingStillSpreadMultiplier;0
+DataTable=/Game/Athena/Items/Weapons/AthenaRangedWeapons;RowUpdate;Sniper_BoltAction_Scope_Suppressed_Athena_SR_Ore_T03;StandingStillSpreadMultiplier;0
+DataTable=/Game/Athena/Items/Weapons/AthenaRangedWeapons;RowUpdate;Sniper_BoltAction_Scope_Suppressed_Athena_VR_Ore_T03;StandingStillSpreadMultiplier;0
+DataTable=/Game/Athena/Items/Weapons/AthenaRangedWeapons;RowUpdate;Sniper_BoltAction_Scope_Suppressed_Athena_R_Ore_T03;StandingStillSpreadMultiplier;0
+DataTable=/Game/Athena/Items/Weapons/AthenaRangedWeapons;RowUpdate;Sniper_Standard_Scope_Athena_SR_Ore_T03;StandingStillSpreadMultiplier;0
+DataTable=/Game/Athena/Items/Weapons/AthenaRangedWeapons;RowUpdate;Sniper_Standard_Scope_Athena_VR_Ore_T03;StandingStillSpreadMultiplier;0
+DataTable=/Game/Athena/Items/Weapons/AthenaRangedWeapons;RowUpdate;Sniper_Standard_Scope_Athena_HighTier_SR_Ore_T03;StandingStillSpreadMultiplier;0
+DataTable=/Game/Athena/Items/Weapons/AthenaRangedWeapons;RowUpdate;Sniper_Standard_Scope_Athena_HighTier_VR_Ore_T03;StandingStillSpreadMultiplier;0
+DataTable=/Game/Athena/Items/Weapons/AthenaRangedWeapons;RowUpdate;Sniper_Weather_Athena_SR_Ore_T03;StandingStillSpreadMultiplier;0
+DataTable=/Game/Athena/Items/Weapons/AthenaRangedWeapons;RowUpdate;Sniper_Weather_Athena_VR_Ore_T03;StandingStillSpreadMultiplier;0
+DataTable=/Game/Athena/Items/Weapons/AthenaRangedWeapons;RowUpdate;Sniper_BoltAction_Hunter_Athena_C_Ore_T03;StandingStillSpreadMultiplier;0
+DataTable=/Game/Athena/Items/Weapons/AthenaRangedWeapons;RowUpdate;Sniper_BoltAction_Hunter_Athena_UC_Ore_T03;StandingStillSpreadMultiplier;0
+DataTable=/Game/Athena/Items/Weapons/AthenaRangedWeapons;RowUpdate;Sniper_BoltAction_Hunter_Athena_R_Ore_T03;StandingStillSpreadMultiplier;0
+DataTable=/Game/Athena/Items/Weapons/AthenaRangedWeapons;RowUpdate;Sniper_BoltAction_Hunter_Athena_VR_Ore_T03;StandingStillSpreadMultiplier;0
+DataTable=/Game/Athena/Items/Weapons/AthenaRangedWeapons;RowUpdate;Sniper_BoltAction_Hunter_Athena_SR_Ore_T03;StandingStillSpreadMultiplier;0
+DataTable=/Game/Athena/Items/Weapons/AthenaRangedWeapons;RowUpdate;WaffleTruck_Sniper_DragonBreath;StandingStillSpreadMultiplier;0
+DataTable=/Game/Athena/Items/Weapons/AthenaRangedWeapons;RowUpdate;Sniper_Weather_Athena_SR_Ore_T03;StandingStillSpreadMultiplier;0
+DataTable=/Game/Athena/Items/Weapons/AthenaRangedWeapons;RowUpdate;Sniper_Heavy_Boom_Athena_SR_Ore_T03;StandingStillSpreadMultiplier;0
+DataTable=/Game/Athena/Items/Weapons/AthenaRangedWeapons;RowUpdate;Sniper_BoltAction_Scope_Athena_C_Ore_T03;SpreadDownsights;0
+DataTable=/Game/Athena/Items/Weapons/AthenaRangedWeapons;RowUpdate;Sniper_BoltAction_Scope_Athena_UC_Ore_T03;SpreadDownsights;0
+DataTable=/Game/Athena/Items/Weapons/AthenaRangedWeapons;RowUpdate;Sniper_BoltAction_Scope_Athena_R_Ore_T03;SpreadDownsights;0
+DataTable=/Game/Athena/Items/Weapons/AthenaRangedWeapons;RowUpdate;Sniper_BoltAction_Scope_Athena_SR_Ore_T03;SpreadDownsights;0
+DataTable=/Game/Athena/Items/Weapons/AthenaRangedWeapons;RowUpdate;Sniper_BoltAction_Scope_Athena_VR_Ore_T03;SpreadDownsights;0
+DataTable=/Game/Athena/Items/Weapons/AthenaRangedWeapons;RowUpdate;Sniper_Heavy_Athena_SR_Ore_T03;SpreadDownsights;0
+DataTable=/Game/Athena/Items/Weapons/AthenaRangedWeapons;RowUpdate;Sniper_Heavy_Athena_VR_Ore_T03;SpreadDownsights;0
+DataTable=/Game/Athena/Items/Weapons/AthenaRangedWeapons;RowUpdate;Sniper_Heavy_Athena_R_Ore_T03;SpreadDownsights;0
+DataTable=/Game/Athena/Items/Weapons/AthenaRangedWeapons;RowUpdate;Sniper_BoltAction_Scope_Suppressed_Athena_SR_Ore_T03;SpreadDownsights;0
+DataTable=/Game/Athena/Items/Weapons/AthenaRangedWeapons;RowUpdate;Sniper_BoltAction_Scope_Suppressed_Athena_VR_Ore_T03;SpreadDownsights;0
+DataTable=/Game/Athena/Items/Weapons/AthenaRangedWeapons;RowUpdate;Sniper_BoltAction_Scope_Suppressed_Athena_R_Ore_T03;SpreadDownsights;0
+DataTable=/Game/Athena/Items/Weapons/AthenaRangedWeapons;RowUpdate;Sniper_Standard_Scope_Athena_SR_Ore_T03;SpreadDownsights;0
+DataTable=/Game/Athena/Items/Weapons/AthenaRangedWeapons;RowUpdate;Sniper_Standard_Scope_Athena_VR_Ore_T03;SpreadDownsights;0
+DataTable=/Game/Athena/Items/Weapons/AthenaRangedWeapons;RowUpdate;Sniper_Standard_Scope_Athena_HighTier_SR_Ore_T03;SpreadDownsights;0
+DataTable=/Game/Athena/Items/Weapons/AthenaRangedWeapons;RowUpdate;Sniper_Standard_Scope_Athena_HighTier_VR_Ore_T03;SpreadDownsights;0
+DataTable=/Game/Athena/Items/Weapons/AthenaRangedWeapons;RowUpdate;Sniper_Weather_Athena_SR_Ore_T03;SpreadDownsights;0
+DataTable=/Game/Athena/Items/Weapons/AthenaRangedWeapons;RowUpdate;Sniper_Weather_Athena_VR_Ore_T03;SpreadDownsights;0
+DataTable=/Game/Athena/Items/Weapons/AthenaRangedWeapons;RowUpdate;Sniper_BoltAction_Hunter_Athena_C_Ore_T03;SpreadDownsights;0
+DataTable=/Game/Athena/Items/Weapons/AthenaRangedWeapons;RowUpdate;Sniper_BoltAction_Hunter_Athena_UC_Ore_T03;SpreadDownsights;0
+DataTable=/Game/Athena/Items/Weapons/AthenaRangedWeapons;RowUpdate;Sniper_BoltAction_Hunter_Athena_R_Ore_T03;SpreadDownsights;0
+DataTable=/Game/Athena/Items/Weapons/AthenaRangedWeapons;RowUpdate;Sniper_BoltAction_Hunter_Athena_VR_Ore_T03;SpreadDownsights;0
+DataTable=/Game/Athena/Items/Weapons/AthenaRangedWeapons;RowUpdate;Sniper_BoltAction_Hunter_Athena_SR_Ore_T03;SpreadDownsights;0
+DataTable=/Game/Athena/Items/Weapons/AthenaRangedWeapons;RowUpdate;WaffleTruck_Sniper_DragonBreath;SpreadDownsights;0
+DataTable=/Game/Athena/Items/Weapons/AthenaRangedWeapons;RowUpdate;Sniper_Weather_Athena_SR_Ore_T03;SpreadDownsights;0
+DataTable=/Game/Athena/Items/Weapons/AthenaRangedWeapons;RowUpdate;Sniper_Heavy_Boom_Athena_SR_Ore_T03;SpreadDownsights;0
+DataTable=/Game/Athena/Items/Weapons/AthenaRangedWeapons;RowUpdate;Sniper_BoltAction_Scope_Athena_C_Ore_T03;MinSpeedForSpreadMultiplier;0
+DataTable=/Game/Athena/Items/Weapons/AthenaRangedWeapons;RowUpdate;Sniper_BoltAction_Scope_Athena_UC_Ore_T03;MinSpeedForSpreadMultiplier;0
+DataTable=/Game/Athena/Items/Weapons/AthenaRangedWeapons;RowUpdate;Sniper_BoltAction_Scope_Athena_R_Ore_T03;MinSpeedForSpreadMultiplier;0
+DataTable=/Game/Athena/Items/Weapons/AthenaRangedWeapons;RowUpdate;Sniper_BoltAction_Scope_Athena_SR_Ore_T03;MinSpeedForSpreadMultiplier;0
+DataTable=/Game/Athena/Items/Weapons/AthenaRangedWeapons;RowUpdate;Sniper_BoltAction_Scope_Athena_VR_Ore_T03;MinSpeedForSpreadMultiplier;0
+DataTable=/Game/Athena/Items/Weapons/AthenaRangedWeapons;RowUpdate;Sniper_Heavy_Athena_SR_Ore_T03;MinSpeedForSpreadMultiplier;0
+DataTable=/Game/Athena/Items/Weapons/AthenaRangedWeapons;RowUpdate;Sniper_Heavy_Athena_VR_Ore_T03;MinSpeedForSpreadMultiplier;0
+DataTable=/Game/Athena/Items/Weapons/AthenaRangedWeapons;RowUpdate;Sniper_Heavy_Athena_R_Ore_T03;MinSpeedForSpreadMultiplier;0
+DataTable=/Game/Athena/Items/Weapons/AthenaRangedWeapons;RowUpdate;Sniper_BoltAction_Scope_Suppressed_Athena_SR_Ore_T03;MinSpeedForSpreadMultiplier;0
+DataTable=/Game/Athena/Items/Weapons/AthenaRangedWeapons;RowUpdate;Sniper_BoltAction_Scope_Suppressed_Athena_VR_Ore_T03;MinSpeedForSpreadMultiplier;0
+DataTable=/Game/Athena/Items/Weapons/AthenaRangedWeapons;RowUpdate;Sniper_BoltAction_Scope_Suppressed_Athena_R_Ore_T03;MinSpeedForSpreadMultiplier;0
+DataTable=/Game/Athena/Items/Weapons/AthenaRangedWeapons;RowUpdate;Sniper_Standard_Scope_Athena_SR_Ore_T03;MinSpeedForSpreadMultiplier;0
+DataTable=/Game/Athena/Items/Weapons/AthenaRangedWeapons;RowUpdate;Sniper_Standard_Scope_Athena_VR_Ore_T03;MinSpeedForSpreadMultiplier;0
+DataTable=/Game/Athena/Items/Weapons/AthenaRangedWeapons;RowUpdate;Sniper_Standard_Scope_Athena_HighTier_SR_Ore_T03;MinSpeedForSpreadMultiplier;0
+DataTable=/Game/Athena/Items/Weapons/AthenaRangedWeapons;RowUpdate;Sniper_Standard_Scope_Athena_HighTier_VR_Ore_T03;MinSpeedForSpreadMultiplier;0
+DataTable=/Game/Athena/Items/Weapons/AthenaRangedWeapons;RowUpdate;Sniper_Weather_Athena_SR_Ore_T03;MinSpeedForSpreadMultiplier;0
+DataTable=/Game/Athena/Items/Weapons/AthenaRangedWeapons;RowUpdate;Sniper_Weather_Athena_VR_Ore_T03;MinSpeedForSpreadMultiplier;0
+DataTable=/Game/Athena/Items/Weapons/AthenaRangedWeapons;RowUpdate;Sniper_BoltAction_Hunter_Athena_C_Ore_T03;MinSpeedForSpreadMultiplier;0
+DataTable=/Game/Athena/Items/Weapons/AthenaRangedWeapons;RowUpdate;Sniper_BoltAction_Hunter_Athena_UC_Ore_T03;MinSpeedForSpreadMultiplier;0
+DataTable=/Game/Athena/Items/Weapons/AthenaRangedWeapons;RowUpdate;Sniper_BoltAction_Hunter_Athena_R_Ore_T03;MinSpeedForSpreadMultiplier;0
+DataTable=/Game/Athena/Items/Weapons/AthenaRangedWeapons;RowUpdate;Sniper_BoltAction_Hunter_Athena_VR_Ore_T03;MinSpeedForSpreadMultiplier;0
+DataTable=/Game/Athena/Items/Weapons/AthenaRangedWeapons;RowUpdate;Sniper_BoltAction_Hunter_Athena_SR_Ore_T03;MinSpeedForSpreadMultiplier;0
+DataTable=/Game/Athena/Items/Weapons/AthenaRangedWeapons;RowUpdate;WaffleTruck_Sniper_DragonBreath;MinSpeedForSpreadMultiplier;0
+DataTable=/Game/Athena/Items/Weapons/AthenaRangedWeapons;RowUpdate;Sniper_Weather_Athena_SR_Ore_T03;MinSpeedForSpreadMultiplier;0
+DataTable=/Game/Athena/Items/Weapons/AthenaRangedWeapons;RowUpdate;Sniper_Heavy_Boom_Athena_SR_Ore_T03;MinSpeedForSpreadMultiplier;0
+DataTable=/Game/Athena/Items/Weapons/AthenaRangedWeapons;RowUpdate;Sniper_BoltAction_Scope_Athena_C_Ore_T03;MaxSpeedForSpreadMultiplier;0
+DataTable=/Game/Athena/Items/Weapons/AthenaRangedWeapons;RowUpdate;Sniper_BoltAction_Scope_Athena_UC_Ore_T03;MaxSpeedForSpreadMultiplier;0
+DataTable=/Game/Athena/Items/Weapons/AthenaRangedWeapons;RowUpdate;Sniper_BoltAction_Scope_Athena_R_Ore_T03;MaxSpeedForSpreadMultiplier;0
+DataTable=/Game/Athena/Items/Weapons/AthenaRangedWeapons;RowUpdate;Sniper_BoltAction_Scope_Athena_SR_Ore_T03;MaxSpeedForSpreadMultiplier;0
+DataTable=/Game/Athena/Items/Weapons/AthenaRangedWeapons;RowUpdate;Sniper_BoltAction_Scope_Athena_VR_Ore_T03;MaxSpeedForSpreadMultiplier;0
+DataTable=/Game/Athena/Items/Weapons/AthenaRangedWeapons;RowUpdate;Sniper_Heavy_Athena_SR_Ore_T03;MaxSpeedForSpreadMultiplier;0
+DataTable=/Game/Athena/Items/Weapons/AthenaRangedWeapons;RowUpdate;Sniper_Heavy_Athena_VR_Ore_T03;MaxSpeedForSpreadMultiplier;0
+DataTable=/Game/Athena/Items/Weapons/AthenaRangedWeapons;RowUpdate;Sniper_Heavy_Athena_R_Ore_T03;MaxSpeedForSpreadMultiplier;0
+DataTable=/Game/Athena/Items/Weapons/AthenaRangedWeapons;RowUpdate;Sniper_BoltAction_Scope_Suppressed_Athena_SR_Ore_T03;MaxSpeedForSpreadMultiplier;0
+DataTable=/Game/Athena/Items/Weapons/AthenaRangedWeapons;RowUpdate;Sniper_BoltAction_Scope_Suppressed_Athena_VR_Ore_T03;MaxSpeedForSpreadMultiplier;0
+DataTable=/Game/Athena/Items/Weapons/AthenaRangedWeapons;RowUpdate;Sniper_BoltAction_Scope_Suppressed_Athena_R_Ore_T03;MaxSpeedForSpreadMultiplier;0
+DataTable=/Game/Athena/Items/Weapons/AthenaRangedWeapons;RowUpdate;Sniper_Standard_Scope_Athena_SR_Ore_T03;MaxSpeedForSpreadMultiplier;0
+DataTable=/Game/Athena/Items/Weapons/AthenaRangedWeapons;RowUpdate;Sniper_Standard_Scope_Athena_VR_Ore_T03;MaxSpeedForSpreadMultiplier;0
+DataTable=/Game/Athena/Items/Weapons/AthenaRangedWeapons;RowUpdate;Sniper_Standard_Scope_Athena_HighTier_SR_Ore_T03;MaxSpeedForSpreadMultiplier;0
+DataTable=/Game/Athena/Items/Weapons/AthenaRangedWeapons;RowUpdate;Sniper_Standard_Scope_Athena_HighTier_VR_Ore_T03;MaxSpeedForSpreadMultiplier;0
+DataTable=/Game/Athena/Items/Weapons/AthenaRangedWeapons;RowUpdate;Sniper_Weather_Athena_SR_Ore_T03;MaxSpeedForSpreadMultiplier;0
+DataTable=/Game/Athena/Items/Weapons/AthenaRangedWeapons;RowUpdate;Sniper_Weather_Athena_VR_Ore_T03;MaxSpeedForSpreadMultiplier;0
+DataTable=/Game/Athena/Items/Weapons/AthenaRangedWeapons;RowUpdate;Sniper_BoltAction_Hunter_Athena_C_Ore_T03;MaxSpeedForSpreadMultiplier;0
+DataTable=/Game/Athena/Items/Weapons/AthenaRangedWeapons;RowUpdate;Sniper_BoltAction_Hunter_Athena_UC_Ore_T03;MaxSpeedForSpreadMultiplier;0
+DataTable=/Game/Athena/Items/Weapons/AthenaRangedWeapons;RowUpdate;Sniper_BoltAction_Hunter_Athena_R_Ore_T03;MaxSpeedForSpreadMultiplier;0
+DataTable=/Game/Athena/Items/Weapons/AthenaRangedWeapons;RowUpdate;Sniper_BoltAction_Hunter_Athena_VR_Ore_T03;MaxSpeedForSpreadMultiplier;0
+DataTable=/Game/Athena/Items/Weapons/AthenaRangedWeapons;RowUpdate;Sniper_BoltAction_Hunter_Athena_SR_Ore_T03;MaxSpeedForSpreadMultiplier;0
+DataTable=/Game/Athena/Items/Weapons/AthenaRangedWeapons;RowUpdate;WaffleTruck_Sniper_DragonBreath;MaxSpeedForSpreadMultiplier;0
+DataTable=/Game/Athena/Items/Weapons/AthenaRangedWeapons;RowUpdate;Sniper_Weather_Athena_SR_Ore_T03;MaxSpeedForSpreadMultiplier;0
+DataTable=/Game/Athena/Items/Weapons/AthenaRangedWeapons;RowUpdate;Sniper_Heavy_Boom_Athena_SR_Ore_T03;MaxSpeedForSpreadMultiplier;0
+DataTable=/Game/Athena/Items/Weapons/AthenaRangedWeapons;RowUpdate;Sniper_BoltAction_Scope_Athena_C_Ore_T03;AthenaCrouchingSpreadMultiplier;0
+DataTable=/Game/Athena/Items/Weapons/AthenaRangedWeapons;RowUpdate;Sniper_BoltAction_Scope_Athena_UC_Ore_T03;AthenaCrouchingSpreadMultiplier;0
+DataTable=/Game/Athena/Items/Weapons/AthenaRangedWeapons;RowUpdate;Sniper_BoltAction_Scope_Athena_R_Ore_T03;AthenaCrouchingSpreadMultiplier;0
+DataTable=/Game/Athena/Items/Weapons/AthenaRangedWeapons;RowUpdate;Sniper_BoltAction_Scope_Athena_SR_Ore_T03;AthenaCrouchingSpreadMultiplier;0
+DataTable=/Game/Athena/Items/Weapons/AthenaRangedWeapons;RowUpdate;Sniper_BoltAction_Scope_Athena_VR_Ore_T03;AthenaCrouchingSpreadMultiplier;0
+DataTable=/Game/Athena/Items/Weapons/AthenaRangedWeapons;RowUpdate;Sniper_Heavy_Athena_SR_Ore_T03;AthenaCrouchingSpreadMultiplier;0
+DataTable=/Game/Athena/Items/Weapons/AthenaRangedWeapons;RowUpdate;Sniper_Heavy_Athena_VR_Ore_T03;AthenaCrouchingSpreadMultiplier;0
+DataTable=/Game/Athena/Items/Weapons/AthenaRangedWeapons;RowUpdate;Sniper_Heavy_Athena_R_Ore_T03;AthenaCrouchingSpreadMultiplier;0
+DataTable=/Game/Athena/Items/Weapons/AthenaRangedWeapons;RowUpdate;Sniper_BoltAction_Scope_Suppressed_Athena_SR_Ore_T03;AthenaCrouchingSpreadMultiplier;0
+DataTable=/Game/Athena/Items/Weapons/AthenaRangedWeapons;RowUpdate;Sniper_BoltAction_Scope_Suppressed_Athena_VR_Ore_T03;AthenaCrouchingSpreadMultiplier;0
+DataTable=/Game/Athena/Items/Weapons/AthenaRangedWeapons;RowUpdate;Sniper_BoltAction_Scope_Suppressed_Athena_R_Ore_T03;AthenaCrouchingSpreadMultiplier;0
+DataTable=/Game/Athena/Items/Weapons/AthenaRangedWeapons;RowUpdate;Sniper_Standard_Scope_Athena_SR_Ore_T03;AthenaCrouchingSpreadMultiplier;0
+DataTable=/Game/Athena/Items/Weapons/AthenaRangedWeapons;RowUpdate;Sniper_Standard_Scope_Athena_VR_Ore_T03;AthenaCrouchingSpreadMultiplier;0
+DataTable=/Game/Athena/Items/Weapons/AthenaRangedWeapons;RowUpdate;Sniper_Standard_Scope_Athena_HighTier_SR_Ore_T03;AthenaCrouchingSpreadMultiplier;0
+DataTable=/Game/Athena/Items/Weapons/AthenaRangedWeapons;RowUpdate;Sniper_Standard_Scope_Athena_HighTier_VR_Ore_T03;AthenaCrouchingSpreadMultiplier;0
+DataTable=/Game/Athena/Items/Weapons/AthenaRangedWeapons;RowUpdate;Sniper_Weather_Athena_SR_Ore_T03;AthenaCrouchingSpreadMultiplier;0
+DataTable=/Game/Athena/Items/Weapons/AthenaRangedWeapons;RowUpdate;Sniper_Weather_Athena_VR_Ore_T03;AthenaCrouchingSpreadMultiplier;0
+DataTable=/Game/Athena/Items/Weapons/AthenaRangedWeapons;RowUpdate;Sniper_BoltAction_Hunter_Athena_C_Ore_T03;AthenaCrouchingSpreadMultiplier;0
+DataTable=/Game/Athena/Items/Weapons/AthenaRangedWeapons;RowUpdate;Sniper_BoltAction_Hunter_Athena_UC_Ore_T03;AthenaCrouchingSpreadMultiplier;0
+DataTable=/Game/Athena/Items/Weapons/AthenaRangedWeapons;RowUpdate;Sniper_BoltAction_Hunter_Athena_R_Ore_T03;AthenaCrouchingSpreadMultiplier;0
+DataTable=/Game/Athena/Items/Weapons/AthenaRangedWeapons;RowUpdate;Sniper_BoltAction_Hunter_Athena_VR_Ore_T03;AthenaCrouchingSpreadMultiplier;0
+DataTable=/Game/Athena/Items/Weapons/AthenaRangedWeapons;RowUpdate;Sniper_BoltAction_Hunter_Athena_SR_Ore_T03;AthenaCrouchingSpreadMultiplier;0
+DataTable=/Game/Athena/Items/Weapons/AthenaRangedWeapons;RowUpdate;WaffleTruck_Sniper_DragonBreath;AthenaCrouchingSpreadMultiplier;0
+DataTable=/Game/Athena/Items/Weapons/AthenaRangedWeapons;RowUpdate;Sniper_Weather_Athena_SR_Ore_T03;AthenaCrouchingSpreadMultiplier;0
+DataTable=/Game/Athena/Items/Weapons/AthenaRangedWeapons;RowUpdate;Sniper_Heavy_Boom_Athena_SR_Ore_T03;AthenaCrouchingSpreadMultiplier;0
+DataTable=/Game/Athena/Items/Weapons/AthenaRangedWeapons;RowUpdate;Sniper_BoltAction_Scope_Athena_C_Ore_T03;AthenaSlidingSpreadMultiplier;0
+DataTable=/Game/Athena/Items/Weapons/AthenaRangedWeapons;RowUpdate;Sniper_BoltAction_Scope_Athena_UC_Ore_T03;AthenaSlidingSpreadMultiplier;0
+DataTable=/Game/Athena/Items/Weapons/AthenaRangedWeapons;RowUpdate;Sniper_BoltAction_Scope_Athena_R_Ore_T03;AthenaSlidingSpreadMultiplier;0
+DataTable=/Game/Athena/Items/Weapons/AthenaRangedWeapons;RowUpdate;Sniper_BoltAction_Scope_Athena_SR_Ore_T03;AthenaSlidingSpreadMultiplier;0
+DataTable=/Game/Athena/Items/Weapons/AthenaRangedWeapons;RowUpdate;Sniper_BoltAction_Scope_Athena_VR_Ore_T03;AthenaSlidingSpreadMultiplier;0
+DataTable=/Game/Athena/Items/Weapons/AthenaRangedWeapons;RowUpdate;Sniper_Heavy_Athena_SR_Ore_T03;AthenaSlidingSpreadMultiplier;0
+DataTable=/Game/Athena/Items/Weapons/AthenaRangedWeapons;RowUpdate;Sniper_Heavy_Athena_VR_Ore_T03;AthenaSlidingSpreadMultiplier;0
+DataTable=/Game/Athena/Items/Weapons/AthenaRangedWeapons;RowUpdate;Sniper_Heavy_Athena_R_Ore_T03;AthenaSlidingSpreadMultiplier;0
+DataTable=/Game/Athena/Items/Weapons/AthenaRangedWeapons;RowUpdate;Sniper_BoltAction_Scope_Suppressed_Athena_SR_Ore_T03;AthenaSlidingSpreadMultiplier;0
+DataTable=/Game/Athena/Items/Weapons/AthenaRangedWeapons;RowUpdate;Sniper_BoltAction_Scope_Suppressed_Athena_VR_Ore_T03;AthenaSlidingSpreadMultiplier;0
+DataTable=/Game/Athena/Items/Weapons/AthenaRangedWeapons;RowUpdate;Sniper_BoltAction_Scope_Suppressed_Athena_R_Ore_T03;AthenaSlidingSpreadMultiplier;0
+DataTable=/Game/Athena/Items/Weapons/AthenaRangedWeapons;RowUpdate;Sniper_Standard_Scope_Athena_SR_Ore_T03;AthenaSlidingSpreadMultiplier;0
+DataTable=/Game/Athena/Items/Weapons/AthenaRangedWeapons;RowUpdate;Sniper_Standard_Scope_Athena_VR_Ore_T03;AthenaSlidingSpreadMultiplier;0
+DataTable=/Game/Athena/Items/Weapons/AthenaRangedWeapons;RowUpdate;Sniper_Standard_Scope_Athena_HighTier_SR_Ore_T03;AthenaSlidingSpreadMultiplier;0
+DataTable=/Game/Athena/Items/Weapons/AthenaRangedWeapons;RowUpdate;Sniper_Standard_Scope_Athena_HighTier_VR_Ore_T03;AthenaSlidingSpreadMultiplier;0
+DataTable=/Game/Athena/Items/Weapons/AthenaRangedWeapons;RowUpdate;Sniper_Weather_Athena_SR_Ore_T03;AthenaSlidingSpreadMultiplier;0
+DataTable=/Game/Athena/Items/Weapons/AthenaRangedWeapons;RowUpdate;Sniper_Weather_Athena_VR_Ore_T03;AthenaSlidingSpreadMultiplier;0
+DataTable=/Game/Athena/Items/Weapons/AthenaRangedWeapons;RowUpdate;Sniper_BoltAction_Hunter_Athena_C_Ore_T03;AthenaSlidingSpreadMultiplier;0
+DataTable=/Game/Athena/Items/Weapons/AthenaRangedWeapons;RowUpdate;Sniper_BoltAction_Hunter_Athena_UC_Ore_T03;AthenaSlidingSpreadMultiplier;0
+DataTable=/Game/Athena/Items/Weapons/AthenaRangedWeapons;RowUpdate;Sniper_BoltAction_Hunter_Athena_R_Ore_T03;AthenaSlidingSpreadMultiplier;0
+DataTable=/Game/Athena/Items/Weapons/AthenaRangedWeapons;RowUpdate;Sniper_BoltAction_Hunter_Athena_VR_Ore_T03;AthenaSlidingSpreadMultiplier;0
+DataTable=/Game/Athena/Items/Weapons/AthenaRangedWeapons;RowUpdate;Sniper_BoltAction_Hunter_Athena_SR_Ore_T03;AthenaSlidingSpreadMultiplier;0
+DataTable=/Game/Athena/Items/Weapons/AthenaRangedWeapons;RowUpdate;WaffleTruck_Sniper_DragonBreath;AthenaSlidingSpreadMultiplier;0
+DataTable=/Game/Athena/Items/Weapons/AthenaRangedWeapons;RowUpdate;Sniper_Weather_Athena_SR_Ore_T03;AthenaSlidingSpreadMultiplier;0
+DataTable=/Game/Athena/Items/Weapons/AthenaRangedWeapons;RowUpdate;Sniper_Heavy_Boom_Athena_SR_Ore_T03;AthenaSlidingSpreadMultiplier;0
`;

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function extractDataTables(text) {
    return text.split('\n').filter(line => line.trim().startsWith('+DataTable='));
}

function bloomExists(content) {
    const dataTableLines = extractDataTables(bloomText);

    return dataTableLines.every(line => content.includes(line));
}

function addBloom() {
    fs.appendFileSync(defaultGamePath, bloomText, 'utf8');
    console.log('');
    console.log('Bloom text added to DefaultGame.ini.');
    console.log('');
}

function removeBloom(content) {
    const updatedContent = content.replace(bloomText, '');
    fs.writeFileSync(defaultGamePath, updatedContent, 'utf8');
    console.log('');
    console.log('Bloom text removed from DefaultGame.ini.');
    console.log('');
}

function removeBloomNoMessage(content) {
    const updatedContent = content.replace(bloomText, '');
    fs.writeFileSync(defaultGamePath, updatedContent, 'utf8');
}

function main() {
    if (config.Profile.bStraightBloom == false) {
        const content = fs.readFileSync(defaultGamePath, 'utf8');
        removeBloomNoMessage(content);
        require(path.join(__dirname, '..', 'index.js'));
        rl.close();
        return;
    }

    rl.question('Do you want to use straight bloom? (Y/N) ', (answer) => {
        const content = fs.readFileSync(defaultGamePath, 'utf8');

        if (answer.toUpperCase() === 'Y') {
            if (!bloomExists(content)) {
                addBloom();
            } else {
                console.log('');
                console.log('Bloom text already exists.');
                console.log('');
            }
        } else if (answer.toUpperCase() === 'N') {
            if (bloomExists(content)) {
                removeBloom(content);
            } else {
                console.log('');
                console.log('No bloom text to remove.');
                console.log('');
            }
        } else {
            console.log('');
            console.log('Invalid input. Please enter Y or N.');
            console.log('');
        }

        rl.close();
    });
}

main();