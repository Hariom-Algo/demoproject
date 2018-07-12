import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  acft = {};
  selectedTab = 'Overview';
  fields = [];
  values = []; 
  constructor(){
    this.acft = acftJson;
  }

  clickTab($event){
    //this.selectedTab = $event.target.innerHTML;
  }
  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.fields = Object.keys(this.acft);
    this.values = Object.values(this.acft); 
  }

}


 const acftJson: Acft = {  
  "effectiveBillingDate":null,
  "taxiFuel":200,
  "TOAminRunway":5000,
  "etopsMaxAltitude":null,
  "imei":"",
  "collinsFlag":"0",
  "etpHoldingTime":0,
  "_Tail__FMCRight":null,
  "rnavArrEquip":"0",
  "autoSelectFID":1,
  "isMetric":false,
  "survivalPolar":0,
  "defaultFlightType":"G",
  "maxZeroFuelWeight":32000,
  "dinghieNumber":0,
  "enableRAIM":1,
  "operatorNumber":"",
  "etpDepressMaxAltitude":null,
  "alternateIncludePrivate":0,
  "graphicalWX":1,
  "etpPnrCruiseMode":"LRC",
  "approachRNP":"",
  "jacketLight":0,
  "etpInopMaxFlightLevel":null,
  "icao2012EquipInstalled":"SDFGHIJ3M3RWXYZ",
  "survivalMaritime":0,
  "takeoffFuel":0,
  "avionicsType":"CMU-4000",
  "wakeTurbulence":"Medium",
  "single_ack":1,
  "radioLocator":0,
  "etpTimeFuel":0,
  "etpPnrReturnMode":0,
  "UUID":"cb0725a0-b784-409e-a0ce-11fd12f66888",
  "climbSchedule":"275/M72",
  "aircraftColor":"SLV RED",
  "includeWeatherFPLUplinks":1,
  "lastModified":"2017-10-17T13:44:43",
  "notes":null,
  "equipmentTypeName":"",
  "supports100Procedures":0,
  "etpApuFuel":null,
  "enableRNPAR":0,
  "takeoffTime":0,
  "posPFM":0,
  "authRequiredRNP":"",
  "sitaRouting":1,
  "flightaware":false,
  "_Tail__FMSLeft":1,
  "surveillanceEquipment":"LV1",
  "enableWeightAndBalance":1,
  "jacketUHF":0,
  "selcal":"0",
  "maskAngle":5.0,
  "manufacturerAndModel":null,
  "_Tail__FMCLeft":null,
  "rwaLegacy":0,
  "autoATISUpdateFlag":0,
  "etpDepressOxygenAltitude":null,
  "pdcDate":"",
  "operatorName":"",
  "survivalJungle":0,
  "_Tail__FMCorFMS":"FMS",
  "survivalDesert":0,
  "newCollinsFlag":0,
  "raimAlgorithm":"FD",
  "DCUVersion":"001",
  "passengerWeight":0,
  "ETOPSMinutes":0,
  "RWAAltitudeUnits":"feet",
  "ackProfile":1,
  "domNotamsFPLUplinks":1,
  "enrouteRNP":"NA",
  "dat2012":"",
  "etpMedicalCruiseMode":"LRC",
  "etpInopCruiseMode":"EO LRC",
  "baroAided":"0",
  "part135":0,
  "_Tail__FMSRight":null,
  "IdMRO2CruiseMode":null,
  "autoRecomputeFPLs":1,
  "_Tail__FMSCenter":null,
  "RWAUnits":2,
  "filingWaiverCode":null,
  "IdDefaultCruiseMode":42,
  "maxWaypoints":100,
  "fmsMakeModel":6,
  "rnavDepEquip":"1",
  "TOAalternateIncludePrivate":0,
  "apisOnly":false,
  "selcalNumber":"ESAH",
  "climbFuel":0,
  "rwaEnabled":0,
  "maxTakeoffWeight":48200,
  "enableTOCTODFlag":1,
  "fuelFlow":0,
  "reserveFuel":"5%",
  "maxFlightLevel":0,
  "fpto3rdparty":"",
  "cfmuOption":0,
  "IdMRO1CruiseMode":null,
  "wbPerformanceLandingFlapDefault":null,
  "intlNotamsFPLUplinks":1,
  "customerID":1,
  "jacketFluor":0,
  "aircraft_type_id":8,
  "cost_default_units_measure":"USG",
  "printerPorts":0,
  "milNotamsFPLUplinks":0,
  "homeBase":"LMML",
  "fpNotificationFlag":1,
  "cost_default_fuel_currency":"USD",
  "currentlyHandling":0,
  "rwaGoLine":0,
  "basicWeight":27732,
  "rnpLevel":null,
  "flightrisk":false,
  "minRunway":5000,
  "RWAairframe":null,
  "maxWeight":0,
  "pdcCapable":1,
  "RWACertification":"FAA_CIRC",
  "instrumentApproachFuel":0,
  "RWABleed":1,
  "jacketVHF":0,
  "etopsInopCruiseMode":"EO LRC",
  "singleEngineTAS":0,
  "wbPerformanceTakeoffFlapDefault":null,
  "jacketNumber":0,
  "radioVHF":0,
  "rnavEnrEquip":"0",
  "maxLandingWeight":38000,
  "etpMedicalMaxFlightLevel":null,
  "cost_default_currency":"USD",
  "etopsMinutesOfOxygen":null,
  "TOAmaxAlternateDistance":50,
  "ocdEastCapable":0,
  "instrumentApproachTime":0,
  "serial_number":"5970",
  "countryOfRegistryId":null,
  "defaultFPFormat":"AB",
  "basicRNP":"O2",
  "equipRemarks":"",
  "RWAAirCondition":1,
  "enableDCL":1,
  "RWADistance":0,
  "sur2012":"",
  "flightPlanningEnabled":1,
  "flightFollowing":1,
  "telelinkPosReportOptions":null,
  "enableEvaluate":1,
  "etopsOxygenAltitude":null,
  "reclearFuel":null,
  "maxAlternateDistance":50,
  "enableFPLCost":0,
  "emptyWeightCG":0,
  "etpPnrMaxFlightLevel":null,
  "taxiAllowance":null,
  "cbpDecal":"12345678",
  "rwaLongRunning":0,
  "mobileID":"",
  "com2012":"",
  "windsAloftRange":0,
  "tail_number":"9HVFA",
  "cost_default_fuel_value":0,
  "fileFPCapable":1,
  "approachLandingTime":0,
  "_Tail__FMCCenter":null,
  "printerWidth":0,
  "cdrCapable":0,

  "etpDepressMinutesOfOxygen":null,
  "fplInactiveRoute":0,
  "id":499,
  "flightFollowingSubscription":1,
  "displayFilingInfo":1,
  "etpDepressCruiseMode":"LRC",
  "rnav2":"",
  "defaultGroundSpeed":450,
  "rnav1":"",
  "icaoType":"CL60",
  "oooiImmediatelyFlag":0,
  "rnav5":"",
  "aesID":"23220307",
  "cbpDecalExpiration":"31-DEC-2017",
  "satellite":"IRIDIUM",
  "EHMReports":0,
  "rwaStopLine":0,
  "sabreTail":"CL64",
  "RWADistanceUnits":"feet",
  "survivalEquipmentRemarks":null,
  "send_data_to_flightaware":false,
  "repeatWaypointsFlag":0,
  "dinghieCovered":"0",
  "GPSReceiverType":"TSO 129",
  "posFlightExplorer":0,
  "emptyWeightMoment":0.0,
  "holdingFuel":"0+30",
  "approachLandingFuel":0,
  "maxFuel":19852,
  "filingWaiverExpiration":null,
  "radioUHF":0,
  "maxRampWeight":48300,
  "defaultMissedApproachFuel":0,
  "RWAengineName":null,
  "descentSchedule":"M72/250K",
  "RWACorrection":1,
  "reclearMethod":"80P",
  "avionicsDisplayWidth":20,
  "RWAAltitude":0,
  "descentFuel":0,
  "dinghieCapacity":0,
  "supportsMultipleAPGConfigurations":0,
  "minAltFuel":0,
  "emptyWeight":0
}

//  tail_number
// home_base
// serial_number
// aircraft_type_id
// countryOfRegistryId
// aircraftColor
// flightPlanningEnabled
// flightAwareEnabled
// max_fuel
// satellite

export interface Acft {
  effectiveBillingDate?: any;
  taxiFuel?: number;
  TOAminRunway: number;
  etopsMaxAltitude?: any;
  imei: string;
  collinsFlag: string;
  etpHoldingTime: number;
  _Tail__FMCRight?: any;
  rnavArrEquip: string;
  autoSelectFID: number;
  isMetric: boolean;
  survivalPolar: number;
  defaultFlightType: string;
  maxZeroFuelWeight: number;
  dinghieNumber: number;
  enableRAIM: number;
  operatorNumber: string;
  etpDepressMaxAltitude?: any;
  alternateIncludePrivate: number;
  graphicalWX: number;
  etpPnrCruiseMode: string;
  approachRNP: string;
  jacketLight: number;
  etpInopMaxFlightLevel?: any;
  icao2012EquipInstalled: string;
  survivalMaritime: number;
  takeoffFuel: number;
  avionicsType: string;
  wakeTurbulence: string;
  single_ack: number;
  radioLocator: number;
  etpTimeFuel: number;
  etpPnrReturnMode: number;
  UUID: string;
  climbSchedule: string;
  aircraftColor: string;
  includeWeatherFPLUplinks: number;
  lastModified: string;
  notes?: any;
  equipmentTypeName: string;
  supports100Procedures: number;
  etpApuFuel?: any;
  enableRNPAR: number;
  takeoffTime: number;
  posPFM: number;
  authRequiredRNP: string;
  sitaRouting: number;
  flightaware: boolean;
  _Tail__FMSLeft: number;
  surveillanceEquipment: string;
  enableWeightAndBalance: number;
  jacketUHF: number;
  selcal: string;
  maskAngle: number;
  manufacturerAndModel?: any;
  _Tail__FMCLeft?: any;
  rwaLegacy: number;
  autoATISUpdateFlag: number;
  etpDepressOxygenAltitude?: any;
  pdcDate: string;
  operatorName: string;
  survivalJungle: number;
  _Tail__FMCorFMS: string;
  survivalDesert: number;
  newCollinsFlag: number;
  raimAlgorithm: string;
  DCUVersion: string;
  passengerWeight: number;
  ETOPSMinutes: number;
  RWAAltitudeUnits: string;
  ackProfile: number;
  domNotamsFPLUplinks: number;
  enrouteRNP: string;
  dat2012: string;
  etpMedicalCruiseMode: string;
  etpInopCruiseMode: string;
  baroAided: string;
  part135: number;
  _Tail__FMSRight?: any;
  IdMRO2CruiseMode?: any;
  autoRecomputeFPLs: number;
  _Tail__FMSCenter?: any;
  RWAUnits: number;
  filingWaiverCode?: any;
  IdDefaultCruiseMode: number;
  maxWaypoints: number;
  fmsMakeModel: number;
  rnavDepEquip: string;
  TOAalternateIncludePrivate: number;
  apisOnly: boolean;
  selcalNumber: string;
  climbFuel: number;
  rwaEnabled: number;
  maxTakeoffWeight: number;
  enableTOCTODFlag: number;
  fuelFlow: number;
  reserveFuel: string;
  maxFlightLevel: number;
  fpto3rdparty: string;
  cfmuOption: number;
  IdMRO1CruiseMode?: any;
  wbPerformanceLandingFlapDefault?: any;
  intlNotamsFPLUplinks: number;
  customerID: number;
  jacketFluor: number;
  aircraft_type_id: number;
  cost_default_units_measure: string;
  printerPorts: number;
  milNotamsFPLUplinks: number;
  homeBase: string;
  fpNotificationFlag: number;
  cost_default_fuel_currency: string;
  currentlyHandling: number;
  rwaGoLine: number;
  basicWeight: number;
  rnpLevel?: any;
  flightrisk: boolean;
  minRunway: number;
  RWAairframe?: any;
  maxWeight: number;
  pdcCapable: number;
  RWACertification: string;
  instrumentApproachFuel: number;
  RWABleed: number;
  jacketVHF: number;
  etopsInopCruiseMode: string;
  singleEngineTAS: number;
  wbPerformanceTakeoffFlapDefault?: any;
  jacketNumber: number;
  radioVHF: number;
  rnavEnrEquip: string;
  maxLandingWeight: number;
  etpMedicalMaxFlightLevel?: any;
  cost_default_currency: string;
  etopsMinutesOfOxygen?: any;
  TOAmaxAlternateDistance: number;
  ocdEastCapable: number;
  instrumentApproachTime: number;
  serial_number: string;
  countryOfRegistryId?: any;
  defaultFPFormat: string;
  basicRNP: string;
  equipRemarks: string;
  RWAAirCondition: number;
  enableDCL: number;
  RWADistance: number;
  sur2012: string;
  flightPlanningEnabled: number;
  flightFollowing: number;
  telelinkPosReportOptions?: any;
  enableEvaluate: number;
  etopsOxygenAltitude?: any;
  reclearFuel?: any;
  maxAlternateDistance: number;
  enableFPLCost: number;
  emptyWeightCG: number;
  etpPnrMaxFlightLevel?: any;
  taxiAllowance?: any;
  cbpDecal: string;
  rwaLongRunning: number;
  mobileID: string;
  com2012: string;
  windsAloftRange: number;
  tail_number: string;
  cost_default_fuel_value: number;
  fileFPCapable: number;
  approachLandingTime: number;
  _Tail__FMCCenter?: any;
  printerWidth: number;
  cdrCapable: number;
  etpDepressMinutesOfOxygen?: any;
  fplInactiveRoute: number;
  id: number;
  flightFollowingSubscription: number;
  displayFilingInfo: number;
  etpDepressCruiseMode: string;
  rnav2: string;
  defaultGroundSpeed: number;
  rnav1: string;
  icaoType: string;
  oooiImmediatelyFlag: number;
  rnav5: string;
  aesID: string;
  cbpDecalExpiration: string;
  satellite: string;
  EHMReports: number;
  rwaStopLine: number;
  sabreTail: string;
  RWADistanceUnits: string;
  survivalEquipmentRemarks?: any;
  send_data_to_flightaware: boolean;
  repeatWaypointsFlag: number;
  dinghieCovered: string;
  GPSReceiverType: string;
  posFlightExplorer: number;
  emptyWeightMoment: number;
  holdingFuel: string;
  approachLandingFuel: number;
  maxFuel: number;
  filingWaiverExpiration?: any;
  radioUHF: number;
  maxRampWeight: number;
  defaultMissedApproachFuel: number;
  RWAengineName?: any;
  descentSchedule: string;
  RWACorrection: number;
  reclearMethod: string;
  avionicsDisplayWidth: number;
  RWAAltitude: number;
  descentFuel: number;
  dinghieCapacity: number;
  supportsMultipleAPGConfigurations: number;
  minAltFuel: number;
  emptyWeight: number;
}