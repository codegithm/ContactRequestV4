# API Endpoints

## POST /api/contact-request

### Request payload

```json
{
  "title": "string|null",
  "initials": "string|null",
  "firstName": "string|null",
  "surname": "string|null",
  "idNumber": "string|null",
  "idType": "string|null",
  "maritalStatus": "string|null",
  "dateOfBirth": "string|null",
  "gender": "string|null",
  "telAreaCode": "string|null",
  "telNumber": "string|null",
  "email": "string|null",
  "cellAreaCode": "string|null",
  "cellNumber": "string|null",
  "workAreaCode": "string|null",
  "workNumber": "string|null",
  "prefferdeConsultant": "string|null",
  "vdn": "string|null",
  "brokerCode": "string|null",
  "uri": "string|null",
  "workStationName": "string|null",
  "workStationIp": "string|null",
  "comments": "string|null",
  "referralNo": "string|null",
  "language": "string|null",
  "brokerOwnCode": "string|null",
  "brokerFee": "string|null",
  "hasHHInsurance": "string|null",
  "numberOfCars": "string|null",
  "totalPremium": "string|null",
  "contactSource": "string|null",
  "sponsor": "string|null",
  "grossIncome": "string|null",
  "membershipNo": "string|null",
  "itcScore": "string|null",
  "itcVersion": "string|null",
  "itcDate": "string|null",
  "itcyn": "string|null",
  "itcStatus": "string|null",
  "sasriaYN": "string|null",
  "sasriaPremium": "string|null",
  "contactSourceURL": "string|null",
  "loadedBy": "string|null",
  "companyName": "string|null",
  "referredPolicyNumber": "string|null",
  "collectionPolicyNumber": "string|null",
  "brandCode": "string|null",
  "height": "number|null",
  "weight": "number|null",
  "sumAssured": "string|null",
  "nonMotorAssistantProduct": "string|null",
  "brokerContatSequenceNumber": "string|null",
  "employmentStatus": "string|null",
  "vapsPolicytype": "string|null",
  "tyreAndRimFlage": "string|null",
  "callbackTime": "string|null",
  "incompleteLeadNumber": "string|null",
  "referenceVernacContactID": "string|null",
  "dedupeNotificationContactID": "string|null",
  "dedupeReferenceNumber": "string|null",
  "gclid": "string|null",
  "cashbag": "string|null",
  "contactType": "string|null",
  "batchName": "string|null",
  "longContactID": "string|null",
  "contactID": "string|null",
  "dedupeStatus": "string|null",
  "referedContactID": "string|null",
  "dateCreated": "string|null",
  "system": "string|null",
  "errorMessage": "string|null",
  "previousInsurance": "string|null",
  "fiBrokerCode": "string|null",
  "fiName": "string|null",
  "product": "string|null",
  "estateName": "string|null",
  "estateUnitNumber": "string|null",
  "businessType": "string|null",
  "vatNumber": "string|null",
  "companyRegistrationNumber": "string|null",
  "employeeNumber": "string|null",
  "dealerCode": "string|null",
  "accountNumber": "string|null",
  "fiEmailAddress": "string|null",
  "dealerName": "string|null",
  "vehicleType": "string|null",
  "vehicleModel": "string|null",
  "vehicleCabType": "string|null",
  "vehicleIdentificationNumber": "string|null",
  "vehicleMMCode": "string|null",
  "vehicleDeliveryDate": "string|null",
  "vehicleEngineNumber": "string|null",
  "alternativeNumber": "string|null"
}
```

### Response

- `200-299`: API-defined success payload.
- Non-2xx: text error body.

---

## GET /vdns

### Request payload

- None.

### Response

```json
[
  {
    "vdnNo": "string",
    "brokerCode": "string"
  }
]
```

---

## GET /api/partners/config

### Request payload

- None.

### Response

```json
[
  {
    "partnerId": "string",
    "partnerName": "string",
    "isActive": true,
    "logoUrl": "string",
    "bannerUrl": "string",
    "attachBannerToFormTop": true,
    "theme": {
      "primary": "string",
      "primaryForeground": "string",
      "radius": "string",
      "pageBackground": "string",
      "headerBackground": "string",
      "footerBackground": "string",
      "cardBackground": "string",
      "cardBorder": "string",
      "headlineColor": "string",
      "descriptionColor": "string",
      "bodyTextColor": "string",
      "badgeStyle": "soft|solid",
      "radix": {
        "accentColor": "string",
        "grayColor": "string",
        "radius": "string",
        "scaling": "string",
        "panelBackground": "string",
        "appearance": "string"
      }
    },
    "headline": "string",
    "description": "string",
    "submitLabel": "string",
    "successMessage": "string",
    "fields": [],
    "sections": [],
    "settings": {
      "vdn": "string|number|boolean|null",
      "brokerCode": "string|number|boolean|null",
      "extra": {}
    },
    "termsAndConditions": "string",
    "feedback": true,
    "feedbackSearchFields": [],
    "footer": {
      "showPoweredBy": true,
      "poweredByLabel": "string",
      "poweredByUrl": "string",
      "links": [],
      "logos": [],
      "layout": "split|centered|links-only",
      "note": "string"
    }
  }
]
```

---

## GET /api/partners/config/:id

### Request payload

- None.

### Response

```json
{
  "partnerId": "string",
  "partnerName": "string",
  "...": "same PartnerConfig shape as above"
}
```

---

## POST /api/partners/config

### Request payload

```json
{
  "partnerId": "string",
  "partnerName": "string",
  "isActive": true,
  "logoUrl": "string",
  "bannerUrl": "string",
  "attachBannerToFormTop": true,
  "theme": {},
  "headline": "string",
  "description": "string",
  "submitLabel": "string",
  "successMessage": "string",
  "fields": [],
  "sections": [],
  "settings": {},
  "termsAndConditions": "string",
  "feedback": true,
  "feedbackSearchFields": [],
  "footer": {}
}
```

### Response

- `200-299`: success (body not used by client).
- Non-2xx: error.
