# AcchaDoc Medical Certificate Design

## A4 Size Certificate Template (210mm x 297mm)

---

## Certificate Layout Specification

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│                    ✓ AcchaDoc                               │
│         NMC-Registered Medical Certificate                  │
│                                                             │
│  ─────────────────────────────────────────────────────      │
│                                                             │
│  Certificate ID: AC-2026-03-18-0001              [QR CODE] │
│  Date of Issue: 18 March 2026                               │
│                                                             │
│  ─────────────────────────────────────────────────────      │
│                                                             │
│  TO WHOM IT MAY CONCERN                                     │
│                                                             │
│  This is to certify that:                                   │
│                                                             │
│  Name:     RAHUL SHARMA                                     │
│  Age:      28 Years                                         │
│  Gender:   Male                                             │
│  Contact:  +91 98765 43210                                  │
│                                                             │
│  was consulted by me via telemedicine on 18 March 2026.    │
│                                                             │
│  DIAGNOSIS:                                                 │
│  Acute Upper Respiratory Tract Infection (Common Cold)      │
│                                                             │
│  MEDICAL ADVICE:                                            │
│  The patient is advised complete rest and is temporarily    │
│  unfit for work/study.                                      │
│                                                             │
│  PERIOD OF LEAVE RECOMMENDED:                               │
│  From: 18 March 2026    To: 19 March 2026    (2 days)      │
│                                                             │
│  This certificate is issued as per Telemedicine Practice    │
│  Guidelines 2020, Ministry of Health & Family Welfare,      │
│  Government of India.                                       │
│                                                             │
│  ─────────────────────────────────────────────────────      │
│                                                             │
│  Dr. Priya Sharma                                           │
│  MBBS, MD (General Medicine)                                │
│  NMC Registration No: 12345-ABCD-67890                      │
│                                                             │
│  [Digital Signature]                                        │
│                                                             │
│  Date: 18 March 2026                                        │
│  Time: 14:30 IST                                            │
│                                                             │
│  ─────────────────────────────────────────────────────      │
│                                                             │
│  Verify this certificate: acchadoc.in/verify/AC2026031800001│
│  Or scan QR code above                                      │
│                                                             │
│  AcchaDoc Healthcare Pvt Ltd                                │
│  help@acchadoc.in  |  +91 98765 43210                       │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## Design Specifications

### Page Setup
- **Size:** A4 (210mm x 297mm / 8.27" x 11.69")
- **Orientation:** Portrait
- **Margins:** 20mm all sides
- **Background:** White (#FFFFFF)

### Colors Used

**Header:**
- AcchaDoc logo: Emerald (#10B981) checkmark
- Title text: Gray 900 (#111827)
- Subtitle: Cyan 600 (#0891B2)

**Divider Lines:**
- Color: Gray 300 (#D1D5DB)
- Height: 1px

**Body Text:**
- Primary: Gray 900 (#111827)
- Secondary/Labels: Gray 600 (#4B5563)

**Footer:**
- Background: Gray 50 (#F9FAFB)
- Text: Gray 600 (#4B5563)

### Typography

**Header:**
- "AcchaDoc": Plus Jakarta Sans Bold, 24pt, Gray 900
- "NMC-Registered...": Inter Medium, 12pt, Cyan 600

**Certificate ID & Date:**
- Labels: Inter Regular, 9pt, Gray 600
- Values: Inter Medium, 9pt, Gray 900

**Main Title ("TO WHOM IT MAY CONCERN"):**
- Plus Jakarta Sans Bold, 14pt, Gray 900

**Body Text:**
- Labels (Name, Age, etc.): Inter Medium, 11pt, Gray 600
- Values: Inter SemiBold, 11pt, Gray 900
- Paragraphs: Inter Regular, 11pt, Gray 900, line-height: 1.6

**Section Headers (DIAGNOSIS, etc.):**
- Inter SemiBold, 11pt, Gray 900, all caps

**Doctor Details:**
- Name: Plus Jakarta Sans SemiBold, 12pt, Gray 900
- Credentials: Inter Regular, 10pt, Gray 600
- NMC Number: Inter Medium, 10pt, Cyan 700

**Footer:**
- Inter Regular, 9pt, Gray 600

### Layout Elements

**Header Section (Top 60mm):**
- AcchaDoc logo centered
- Checkmark icon: 32px, Emerald (#10B981)
- Subtitle below logo
- Divider line

**Certificate Metadata (Next 20mm):**
- Left: Certificate ID, Date
- Right: QR Code (40mm x 40mm)

**Patient Information (Next 40mm):**
- Table format, 2 columns
- Left-aligned labels, values

**Medical Details (Next 80mm):**
- Diagnosis in bold
- Medical advice paragraph
- Leave period clearly highlighted
- Legal disclaimer

**Doctor Signature Section (Next 50mm):**
- Doctor name and credentials
- Digital signature placeholder (60mm x 30mm)
- Timestamp

**Footer Section (Bottom 30mm):**
- Light gray background
- Verification instructions
- Company details centered

### Security Features

**QR Code:**
- Size: 40mm x 40mm
- Position: Top right corner
- Contains: Certificate verification URL
- Error correction: Level H (30%)

**Watermark (Optional):**
- "AcchaDoc" text repeated diagonally
- Opacity: 5%
- Color: Gray 200
- Size: 48pt

**Digital Signature:**
- Embedded doctor's digital signature image
- Format: PNG with transparency
- Size: 200px x 80px
- Position: Below doctor credentials

---

## Certificate Types - Content Variations

### 1. Sick Leave Certificate

**DIAGNOSIS:** [Doctor specifies illness]

**MEDICAL ADVICE:**
The patient is advised complete rest and is temporarily unfit for work/study.

**PERIOD OF LEAVE RECOMMENDED:**
From: [Date] To: [Date] ([X] days)

---

### 2. Fitness Certificate

**EXAMINATION FINDINGS:**
General physical examination conducted via telemedicine consultation.

**MEDICAL OPINION:**
The individual is MEDICALLY FIT for [purpose: employment/travel/sports/etc.]

**VALIDITY:**
This certificate is valid until: [Date]

**LIMITATIONS (if any):**
None / [Specify any restrictions]

---

### 3. Form 1A (Driving License Medical Certificate)

**EXAMINATION CONDUCTED:** As per Form 1A requirements

**PHYSICAL FITNESS:**
☑ Vision: Normal / Corrected to normal with glasses
☑ Hearing: Normal
☑ Physical Deformities: None
☑ General Health: Fit

**MEDICAL OPINION:**
The applicant is MEDICALLY FIT to drive motor vehicles as per the Motor Vehicles Act, 1988.

**RESTRICTIONS (if any):**
Must wear corrective lenses while driving / None

---

## File Naming Convention

Format: `AcchaDoc_Certificate_[TYPE]_[ID]_[DATE].pdf`

Examples:
- `AcchaDoc_Certificate_SickLeave_AC2026031800001_20260318.pdf`
- `AcchaDoc_Certificate_Fitness_AC2026031800002_20260318.pdf`
- `AcchaDoc_Certificate_Form1A_AC2026031800003_20260318.pdf`

---

## Legal Requirements (Always Include)

### Mandatory Elements:
1. ✓ Doctor's full name and qualifications
2. ✓ NMC registration number
3. ✓ Date and time of consultation
4. ✓ Patient's full name, age, gender
5. ✓ Diagnosis/examination findings
6. ✓ Medical advice/opinion
7. ✓ Digital signature
8. ✓ Reference to Telemedicine Guidelines 2020
9. ✓ Unique certificate ID for verification

### Footer Disclaimer (Small print):
```
This certificate is issued based on telemedicine consultation as per
Telemedicine Practice Guidelines 2020, Ministry of Health & Family Welfare,
Government of India. For verification, visit acchadoc.in/verify or scan QR code.
```

---

## Print Specifications

**For Digital Delivery (WhatsApp/Email):**
- Format: PDF
- Resolution: 300 DPI
- Color Space: RGB
- Size: Optimized to <500KB

**For Physical Print:**
- Format: PDF (print-ready)
- Resolution: 300 DPI minimum
- Color Space: CMYK
- Paper: White A4, 80-100 GSM

---

## Accessibility

- **Font Size:** Minimum 9pt (readable when printed)
- **Contrast Ratio:** WCAG AA compliant (4.5:1 minimum)
- **Screen Reader:** PDF tagged for accessibility
- **Language:** Primary English, Hindi translations available

---

## Brand Consistency Checklist

Before issuing certificate, verify:
- [ ] AcchaDoc logo present and correctly colored
- [ ] Fonts: Plus Jakarta Sans (headings), Inter (body)
- [ ] Colors match brand palette (no random colors)
- [ ] QR code functional and links to verification page
- [ ] All mandatory legal elements present
- [ ] Doctor credentials verified
- [ ] Certificate ID unique and traceable
- [ ] No typos or grammatical errors
- [ ] Professional appearance (aligned, clean, organized)
