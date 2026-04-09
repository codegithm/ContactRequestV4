export interface ContactRequestModel {
  title?: string;
  initials?: string;
  firstName?: string;
  surname?: string;
  idNumber?: string;
  idType?: string;
  maritalStatus?: string;
  dateOfBirth?: string;
  gender?: string;
  telAreaCode?: string;
  telNumber?: string;
  email?: string;
  cellAreaCode?: string;
  cellNumber?: string;
  workAreaCode?: string;
  workNumber?: string;
  prefferdeConsultant?: string;
  vdn?: string;
  brokerCode?: string;
  uri?: string;
  workStationName?: string;
  workStationIp?: string;
  comments?: string;
  referralNo?: string;
  language?: string;
  brokerOwnCode?: string;
  brokerFee?: string;
  hasHHInsurance?: string;
  numberOfCars?: string;
  totalPremium?: string;
  contactSource?: string;
  sponsor?: string;
  grossIncome?: string;
  membershipNo?: string;
  itcScore?: string;
  itcVersion?: string;
  itcDate?: string;
  itcyn?: string;
  itcStatus?: string;
  sasriaYN?: string;
  sasriaPremium?: string;
  contactSourceURL?: string;
  loadedBy?: string;
  companyName?: string;
  referredPolicyNumber?: string;
  collectionPolicyNumber?: string;
  brandCode?: string;
  height?: number;
  weight?: number;
  sumAssured?: string;
  nonMotorAssistantProduct?: string;
  brokerContatSequenceNumber?: string;
  employmentStatus?: string;
  vapsPolicytype?: string;
  tyreAndRimFlage?: string;
  callbackTime?: string;
  incompleteLeadNumber?: string;
  referenceVernacContactID?: string;
  dedupeNotificationContactID?: string;
  dedupeReferenceNumber?: string;
  gclid?: string;
  cashbag?: string;
  contactType?: string;
  batchName?: string;
  longContactID?: string;
  contactID?: string;
  dedupeStatus?: string;
  referedContactID?: string;
  dateCreated?: string;
  system?: string;
  errorMessage?: string;
  previousInsurance?: string;
  fiBrokerCode?: string;
  fiName?: string;
  product?: string;
  estateName?: string;
  estateUnitNumber?: string;
  businessType?: string;
  vatNumber?: string;
  companyRegistrationNumber?: string;
  employeeNumber?: string;
  dealerCode?: string;
  accountNumber?: string;
  fiEmailAddress?: string;
  dealerName?: string;
  vehicleType?: string;
  vehicleModel?: string;
  vehicleCabType?: string;
  vehicleIdentificationNumber?: string;
  vehicleMMCode?: string;
  vehicleDeliveryDate?: string;
  vehicleEngineNumber?: string;
  alternativeNumber?: string;
}

export interface CreateContactResponse {
  LongContactID: string;
  ContactID: string;
  DedupeStatuseCode: string;
  ResponseDescription: string;
  DedupeStatusDescription: string;
  Message: string;
}

export const contactRequestModelFieldIds: ReadonlyArray<
  keyof ContactRequestModel
> = [
  "title",
  "initials",
  "firstName",
  "surname",
  "idNumber",
  "idType",
  "maritalStatus",
  "dateOfBirth",
  "gender",
  "telAreaCode",
  "telNumber",
  "email",
  "cellAreaCode",
  "cellNumber",
  "workAreaCode",
  "workNumber",
  "prefferdeConsultant",
  "vdn",
  "brokerCode",
  "uri",
  "workStationName",
  "workStationIp",
  "comments",
  "referralNo",
  "language",
  "brokerOwnCode",
  "brokerFee",
  "hasHHInsurance",
  "numberOfCars",
  "totalPremium",
  "contactSource",
  "sponsor",
  "grossIncome",
  "membershipNo",
  "itcScore",
  "itcVersion",
  "itcDate",
  "itcyn",
  "itcStatus",
  "sasriaYN",
  "sasriaPremium",
  "contactSourceURL",
  "loadedBy",
  "companyName",
  "referredPolicyNumber",
  "collectionPolicyNumber",
  "brandCode",
  "height",
  "weight",
  "sumAssured",
  "nonMotorAssistantProduct",
  "brokerContatSequenceNumber",
  "employmentStatus",
  "vapsPolicytype",
  "tyreAndRimFlage",
  "callbackTime",
  "incompleteLeadNumber",
  "referenceVernacContactID",
  "dedupeNotificationContactID",
  "dedupeReferenceNumber",
  "gclid",
  "cashbag",
  "contactType",
  "batchName",
  "longContactID",
  "contactID",
  "dedupeStatus",
  "referedContactID",
  "dateCreated",
  "system",
  "errorMessage",
  "previousInsurance",
  "fiBrokerCode",
  "fiName",
  "product",
  "estateName",
  "estateUnitNumber",
  "businessType",
  "vatNumber",
  "companyRegistrationNumber",
  "employeeNumber",
  "dealerCode",
  "accountNumber",
  "fiEmailAddress",
  "dealerName",
  "vehicleType",
  "vehicleModel",
  "vehicleCabType",
  "vehicleIdentificationNumber",
  "vehicleMMCode",
  "vehicleDeliveryDate",
  "vehicleEngineNumber",
  "alternativeNumber",
];
