# GENESIS RELICS — ASSET BIBLE

**Version:** 2.3  
**Status:** Canonical production source of truth  
**Project:** Genesis Relics  
**Last updated:** 2026-08-18

> **Core Rule — Asset ID Integrity**  
> Once an Asset ID is assigned, it is permanent and can never be reused for another asset.

This document is the canonical Asset Bible for Genesis Relics artwork and production assets. Visual posters, generated reference sheets, website text, and other presentations may contain outdated labels or errors; this document and the actual repository structure take precedence.

---

## 1. Production Principles

### 1.1 GR-001 → GR-030 are FROZEN

Existing IDs **GR-001 through GR-030** are locked.

- Do not rename them.
- Do not renumber them.
- Do not change their purpose retroactively.
- Do not reuse their IDs.
- The existing `src/assets/registry.ts` remains the working technical base.

### 1.2 GR-031+ is the production line

Every new asset must receive the following specification **before artwork is created**:

**ID → Name → Category → Purpose → Status → Dimensions → Format → Description → Where Used**

Production flow:

**Canon → Asset specification → Approval → Artwork → GitHub → Registry → Website/Game → Review & acceptance**

### 1.3 Quality over quantity

The first production target is approximately **80–120 high-quality assets**, not 249 images.

GR-001 → GR-249 is a permanent ID system and roadmap, not a mandatory production volume.

---

## 2. Status Legend

| Status | Meaning |
|---|---|
| 🟢 EXISTING | Asset exists, is accepted, and is part of production. |
| 🟡 PLANNED | Asset is approved/planned but artwork is not yet created. |
| 🔴 NEEDED | Existing code/system requires the asset, but the physical asset does not yet exist. |
| ⚪ RESERVED | ID/range is reserved for future development and is not currently required. |

---

## 3. GR-001 → GR-030 — FROZEN EXISTING ASSETS

These IDs are inherited from the existing project and must not be changed retroactively.

| ID | Name | Category | Purpose | Status |
|---|---|---|---|---|
| GR-001 | Hero Background | Home | Hero section background | 🟢 EXISTING |
| GR-002 | Main Genesis Relic | Home | Main relic / project symbol | 🟢 EXISTING |
| GR-003 | Hero Logo Composition | Home | Hero logo composition | 🟢 EXISTING |
| GR-004 | The Story Artwork | Story | Story page artwork | 🟢 EXISTING |
| GR-005 | The First Relic | Story | First Relic close-up | 🟢 EXISTING |
| GR-006 | Guardians | Factions | Guardians faction key art | 🟢 EXISTING |
| GR-007 | Voidborn | Factions | Voidborn faction key art | 🟢 EXISTING |
| GR-008 | Architects | Factions | Architects faction key art | 🟢 EXISTING |
| GR-009 | Ashen Covenant | Factions | Ashen Covenant faction key art | 🟢 EXISTING |
| GR-010 | Aurelion Vanguard | Heroes | Hero portrait | 🟢 EXISTING |
| GR-011 | Seraphis Lightbearer | Heroes | Hero portrait | 🟢 EXISTING |
| GR-012 | Caelum Starwarden | Heroes | Hero portrait | 🟢 EXISTING |
| GR-013 | Nyx Abysswalker | Heroes | Hero portrait | 🟢 EXISTING |
| GR-014 | Varyn Shadowborn | Heroes | Hero portrait | 🟢 EXISTING |
| GR-015 | Morveth Voidcaller | Heroes | Hero portrait | 🟢 EXISTING |
| GR-016 | The Celestial Architect | Heroes | Hero portrait | 🟢 EXISTING |
| GR-017 | The Starforged Warden | Heroes | Hero portrait | 🟢 EXISTING |
| GR-018 | The Astral Seer | Heroes | Hero portrait | 🟢 EXISTING |
| GR-019 | The Ember Warlord | Heroes | Hero portrait | 🟢 EXISTING |
| GR-020 | The Cinder Witch | Heroes | Hero portrait | 🟢 EXISTING |
| GR-021 | The Ash Reaper | Heroes | Hero portrait | 🟢 EXISTING |
| GR-022 | World Map | World | Canonical world map | 🟢 EXISTING |
| GR-023 | Locations | World | World locations overview | 🟢 EXISTING |
| GR-024 | Board Game Box | Board Game | Box / cover art | 🟢 EXISTING |
| GR-025 | Board Game Setup | Board Game | Game setup overview | 🟢 EXISTING |
| GR-026 | Game Pieces | Board Game | Game pieces / components | 🟢 EXISTING |
| GR-027 | Digital Game Key Art | Digital Game | Main digital-game artwork | 🟢 EXISTING |
| GR-028 | Digital Game Trailer | Digital Game | Trailer thumbnail / visual | 🟢 EXISTING |
| GR-029 | Dev Diary | Development | Dev Diary cover | 🟢 EXISTING |
| GR-030 | Crowdfunding | Crowdfunding | Crowdfunding campaign visual | 🟢 EXISTING |

> **Note:** GR-030 is the canonical crowdfunding asset. Genesis Relics is **not built around Kickstarter**.

---

## 4. GR-031 → GR-037 — CURRENT PRODUCTION LINE

| ID | Name | Category | Purpose | Status |
|---|---|---|---|---|
| GR-031 | Miniatures | Board Game | Player/faction miniatures | 🟢 EXISTING |
| GR-032 | Relic Tokens | Board Game | Relic gameplay tokens | 🟢 EXISTING |
| GR-033 | Digital Game Key Art | Digital Game | Main digital-game key art | 🟢 EXISTING |
| GR-034 | Gameplay Scene | Digital Game | In-game gameplay/environment scene | 🟢 EXISTING |
| GR-035 | Battle Scene | Digital Game | Cinematic battle scene | 🟢 EXISTING |
| GR-036 | Dungeon | Digital Game | Dungeon/exploration environment | 🟢 EXISTING |
| GR-037 | Genesis Final Confrontation | Digital Game | Culminating confrontation around a Genesis Relic using existing canonical factions/heroes | 🟢 EXISTING |

### GR-037 Canon Rule

The previous draft label **“Boss” is obsolete**. Genesis Relics has no separately established monster/boss race in the current canon. GR-037 is permanently **Genesis Final Confrontation**.

---

## 5. GR-038 → GR-049 — DEV DIARY PRODUCTION BLOCK

These are reserved production slots created as the corresponding development diary requires them.

| ID | Name | Category | Purpose | Status |
|---|---|---|---|---|
| GR-038 | Dev Diary — Week 1 | Dev Diary | Week 1 cover | 🟢 EXISTING |
| GR-039 | Dev Diary — Week 2 | Dev Diary | Week 2 cover | 🟢 EXISTING |
| GR-040 | Dev Diary — Week 3 | Dev Diary | Week 3 cover | 🟢 EXISTING |
| GR-041 | Dev Diary — Week 4 | Dev Diary | Week 4 cover | 🟢 EXISTING |
| GR-042 | Dev Diary — Week 5 | Dev Diary | Week 5 cover | 🟢 EXISTING |
| GR-043 | Dev Diary — Week 6 | Dev Diary | Week 6 cover | 🟢 EXISTING |
| GR-044 | Dev Diary — Week 7 | Dev Diary | Week 7 cover | 🟢 EXISTING |
| GR-045 | Dev Diary — Week 8 | Dev Diary | Week 8 cover | 🟢 EXISTING |
| GR-046 | Dev Diary — Week 9 | Dev Diary | Week 9 cover | 🟢 EXISTING |
| GR-047 | Dev Diary — Week 10 | Dev Diary | Week 10 cover | 🟢 EXISTING |
| GR-048 | Dev Diary — Week 11 | Dev Diary | Week 11 cover | 🟢 EXISTING |
| GR-049 | Dev Diary — Week 12 | Dev Diary | Week 12 cover | 🟡 PLANNED |

---

## 6. GR-050 → GR-052 — COMMUNITY

| ID | Name | Category | Purpose | Status |
|---|---|---|---|---|
| GR-050 | Discord Banner | Community | Official Discord banner | 🟡 PLANNED |
| GR-051 | Twitter / X Banner | Community | Official X/Twitter header | 🟡 PLANNED |
| GR-052 | YouTube Banner | Community | Official YouTube channel banner | 🟡 PLANNED |

---

## 7. GR-053 → GR-099 — RESERVED

**Status:** ⚪ RESERVED

Reserved for future World, Lore, Relics, Board Game, Digital Game, Marketing, Community, and other IP assets as actual production needs arise.

No asset is created merely to fill the range.

---

## 8. GR-100 → GR-103 — FACTION SIGILS

These IDs are retained because the existing code/system requires the assets.

| ID | Name | Category | Purpose | Status |
|---|---|---|---|---|
| GR-100 | Guardians Sigil | Factions | Official Guardians sigil/emblem | 🟢 EXISTING |
| GR-101 | Voidborn Sigil | Factions | Official Voidborn sigil/emblem | 🟢 EXISTING |
| GR-102 | Architects Sigil | Factions | Official Architects sigil/emblem | 🟢 EXISTING |
| GR-103 | Ashen Covenant Sigil | Factions | Official Ashen Covenant sigil/emblem | 🟢 EXISTING |

These are **not deleted, renumbered, or reassigned**. They have now been produced and accepted during the Faction Assets production stage.

---

## 9. GR-110 → GR-113 — FACTION BANNERS

| ID | Name | Category | Purpose | Status |
|---|---|---|---|---|
| GR-110 | Guardians Banner | Factions | Official faction banner/flag | 🟢 EXISTING |
| GR-111 | Voidborn Banner | Factions | Official faction banner/flag | 🟢 EXISTING |
| GR-112 | Architects Banner | Factions | Official faction banner/flag | 🟢 EXISTING |
| GR-113 | Ashen Covenant Banner | Factions | Official faction banner/flag | 🟢 EXISTING |

### Faction Banner Visual Canon

All four faction banners must follow the same visual role and composition logic: a monumental faction banner/flag as the dominant centerpiece, with the faction's established sigil/emblem clearly integrated into the banner, surrounded by faction-appropriate environment and atmosphere. Supporting faction warriors/guards may be present and should remain consistent with the established faction identity.

The four banners must feel like a coherent set while preserving each faction's established visual language. A new banner must not redefine the faction's canon or replace established faction imagery.

For **Architects**, the approved direction preserves the established Architects identity: luminous celestial architecture, white/ivory and gold materials, blue/celestial energy, monumental floating-city or crystalline architecture, and **visible armored Architects warriors/guards** supporting the banner composition. The banner is not intended to be a scene of empty architecture or isolated pillars.

---

## 10. GR-120 → GR-123 — FACTION KEY ART

| ID | Name | Category | Purpose | Status |
|---|---|---|---|---|
| GR-120 | Guardians Key Art | Factions | Epic Guardians key art/poster | 🔴 NEEDED |
| GR-121 | Voidborn Key Art | Factions | Epic Voidborn key art/poster | 🔴 NEEDED |
| GR-122 | Architects Key Art | Factions | Epic Architects key art/poster | 🔴 NEEDED |
| GR-123 | Ashen Covenant Key Art | Factions | Epic Ashen Covenant key art/poster | 🔴 NEEDED |

---

## 11. GR-124 → GR-249 — RESERVED

**Status:** ⚪ RESERVED

Reserved for long-term development, expansions, new content, events, platforms, campaigns, and future Genesis Relics IP assets.

The existence of these IDs does **not** create a requirement to produce 249 assets.

---

## 12. Canonical Factions

Genesis Relics currently has four canonical factions:

1. **Guardians**
2. **Voidborn**
3. **Architects**
4. **Ashen Covenant**

Faction assets must remain consistent with the established universe and must not introduce an unapproved fifth faction or new race.

---

## 13. Canonical Heroes

The current hero system contains **12 canonical heroes**, three per faction, using the frozen GR-010 → GR-021 range.

No new hero is assigned an existing Asset ID.

---

## 14. Digital Game Canon Rule

Digital Game artwork must represent the existing Genesis Relics universe. Do not invent unsupported monster races, boss systems, factions, or lore merely to fill an asset slot.

GR-037 specifically represents the **Genesis Final Confrontation**, not a separate boss/monster entity.

---

## 15. Crowdfunding Strategy Terminology

Genesis Relics uses the general term **Crowdfunding** rather than treating Kickstarter as a required platform.

Potential future fundraising channels may include:

- traditional crowdfunding platforms that are actually accessible and suitable for the project's legal/geographic structure;
- Web3 / crypto crowdfunding platforms;
- appropriate coin/token fundraising infrastructure where legally and technically justified.

A platform is not considered part of the project simply because it exists. Platform selection is handled separately in the project's crowdfunding strategy and must be verified against current eligibility, payment, jurisdiction, and compliance requirements.

**Kickstarter is not a required Genesis Relics platform.**

---

## 16. Production Acceptance Rule

An asset is not considered fully integrated merely because an image file exists.

For GR-031+ the normal acceptance sequence is:

1. Asset specification approved.
2. Artwork created.
3. Original uploaded to the correct GitHub path.
4. Asset registered in `src/assets/registry.ts`.
5. Asset connected to its intended website/game section.
6. Import, registry key, path, and usage verified.
7. Asset marked 🟢 **EXISTING**.

If code references an asset that does not yet exist, the asset is 🔴 **NEEDED** until produced and integrated.

---

## 17. Permanent ID Rule

> **Once an Asset ID is assigned, it is permanent and can never be reused for another asset.**

An artwork may be redesigned, replaced, upscaled, re-rendered, or stylistically improved without changing its Asset ID, provided its canonical identity and purpose remain the same.

---

## 18. Current Production Goal

Genesis Relics is building a coherent IP asset library for:

- Website
- Lore / World
- Four Factions
- Twelve Heroes
- Genesis Relics
- Board Game
- Digital Game
- Dev Diary
- Community
- Crowdfunding
- Future promotional and publishing materials

**Target:** approximately **80–120 high-quality assets** for the first major production milestone.

**Not the target:** creating all 249 reserved IDs.

---

## 19. Source of Truth Hierarchy

When sources conflict, use this order:

1. **Canonical project/lore decisions explicitly approved by the project owner.**
2. **This `GENESIS_RELICS_ASSET_BIBLE.md`.**
3. **Actual GitHub asset files and current `src/assets/registry.ts`.**
4. Website implementation.
5. Visual Asset Bible posters / generated reference images.
6. Old drafts, prompts, or temporary planning notes.

This hierarchy prevents an outdated generated image or old planning document from silently changing the Genesis Relics canon.

---

**GENESIS RELICS**  
*Forge. Conquer. Ascend.*
