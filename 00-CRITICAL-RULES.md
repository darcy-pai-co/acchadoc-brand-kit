# AcchaDoc Brand - CRITICAL RULES

## ⚠️ RULE #1: ABSOLUTELY NO EMOJIS - EVER

**This is non-negotiable across ALL AcchaDoc materials.**

### ❌ NEVER USE:
- Emojis (👋 🎉 ❤️ etc.)
- Colorful Unicode symbols
- Platform-specific icons
- Any character that renders differently across devices

### ✅ ALWAYS USE INSTEAD:
1. **SVG Icons** - Professional, scalable, brand-controlled
   - Location: `/app/components/Icons.tsx`
   - Examples: `<CheckIcon />`, `<PhoneIcon />`, `<DoctorIcon />`

2. **Text-based symbols** (only when absolutely necessary):
   - ✓ (checkmark) - for approval/completion
   - • (bullet) - for lists
   - - (dash) - for separators
   - × (multiplication) - for close/error

3. **Descriptive text**:
   - Instead of 🔒 → "Secure" or `<LockIcon />`
   - Instead of ⚡ → "Fast" or `<BoltIcon />`
   - Instead of 📱 → "Mobile" or `<PhoneIcon />`

---

## Why No Emojis?

1. **Unprofessional** - Healthcare requires trust and professionalism
2. **Inconsistent** - Emojis render differently on iOS, Android, Windows, web
3. **Not accessible** - Screen readers handle them poorly
4. **Not brand-controlled** - Can't customize colors, sizing, or style
5. **Trademark-free** - Our SVG icons have no licensing issues

---

## Icon System

### Available Icons (`/app/components/Icons.tsx`):
- `CheckIcon` - Approval, completion, success
- `PhoneIcon` - Mobile, contact, call
- `DoctorIcon` - Medical professional
- `CertificateIcon` - Document, certificate
- `LockIcon` - Security, privacy
- `BoltIcon` - Speed, fast delivery
- `WhatsAppIcon` - WhatsApp delivery
- `ClockIcon` - Time, duration
- `FileTextIcon` - Documents

### Icon Usage Guidelines:
```tsx
// ✓ CORRECT
<CheckIcon size={24} className="text-primary" />
<div className="flex items-center gap-2">
  <CheckIcon size={20} style={{ color: '#10B981' }} />
  <span>NMC Registered</span>
</div>

// ❌ WRONG
✓ NMC Registered  // Text symbol in UI
<span>✓ NMC Registered</span>  // Text symbol in component
```

### Adding New Icons:
1. Use simple geometric shapes
2. 2px stroke weight
3. Rounded line caps
4. No fills (stroke only)
5. 24x24 viewBox
6. Must be trademark-free

---

## This Rule Applies To:

- [x] Website (all pages)
- [x] Marketing materials
- [x] WhatsApp messages
- [x] Email communications
- [x] Certificates (use SVG icons or none)
- [x] Social media
- [x] Presentations
- [x] Documentation
- [x] EVERYTHING

---

## Enforcement

Any content containing emojis MUST be rejected and rewritten with:
1. SVG icons from our icon system, OR
2. Plain descriptive text, OR
3. Text-based symbols (✓ • - only)

**No exceptions. No compromise. Professional healthcare branding only.**

---

## Quick Reference Card

| Need to show | ❌ Emoji | ✅ Use Instead |
|--------------|---------|----------------|
| Approval | ✅ | `<CheckIcon />` |
| Phone/Mobile | 📱 | `<PhoneIcon />` |
| Doctor | 👨‍⚕️ | `<DoctorIcon />` |
| Lock/Secure | 🔒 | `<LockIcon />` |
| Fast/Speed | ⚡ | `<BoltIcon />` |
| Time | ⏰ | `<ClockIcon />` |
| Certificate | 📄 | `<CertificateIcon />` |
| Success | ✓ (text only if needed) | `<CheckIcon />` |
| Bullet point | • | `<li>` or `•` |

---

**Last Updated:** March 2026
**Enforced By:** All team members, no exceptions
**Penalty for Violation:** Immediate revision required
