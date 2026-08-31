export type Faction = {
  id: string;
  name: string;
  order?: string;
  capital: string;
  sigilSlot: string;
  bannerSlot: string;
  keyArtSlot: string;
  creed: string;
  lore: string;
  playstyle: string;
  region: string;
  tenets: string[];
  accent: "gold" | "void" | "frost" | "ember";
};

export const FACTIONS: Faction[] = [
  {
    id: "guardians",
    name: "Guardians",
    order: "Iron Choir",
    capital: "Frosthelm",
    sigilSlot: "GR-100_Faction_Sigil_Guardians",
    bannerSlot: "GR-110_Faction_Banner_Guardians",
    keyArtSlot: "GR-120_Faction_KeyArt_Guardians",
    creed: "The relics are kept, never wielded.",
    lore: "The Guardians are the oldest surviving order devoted to containing the Genesis Relics. From Frosthelm, the Iron Choir protects sealed vaults and the northern frontier. They do not seek conquest; they seek containment. Yet their greatest question remains unanswered: if the relics belong to no one, who gave the Guardians the right to keep them?",
    playstyle: "Defensive control, protection, fortification, and counter-attacks. Guardians excel at holding territory, protecting allies, and turning enemy aggression against itself.",
    region: "The Frozen March",
    tenets: [
      "The vault is never opened without the Choir.",
      "The oath outlives the oathkeeper.",
      "No relic leaves the north unguarded.",
    ],
    accent: "frost",
  },
  {
    id: "voidborn",
    name: "Voidborn",
    order: "Moonless Host",
    capital: "Voidwatch",
    sigilSlot: "GR-101_Faction_Sigil_Voidborn",
    bannerSlot: "GR-111_Faction_Banner_Voidborn",
    keyArtSlot: "GR-121_Faction_KeyArt_Voidborn",
    creed: "What the light forgot, we remember.",
    lore: "The Voidborn emerged from the first Unmaking. They are survivors of something the world itself has forgotten. Beneath the broken moon, the Moonless Host studies places where reality decays. To them, Genesis Relics are memories of the world before it was broken—not weapons, but fragments of a lost truth.",
    playstyle: "Attrition, mobility, disruption, and manipulation. Voidborn thrive on weakened enemies, unexpected movement, and battlefield control.",
    region: "The Hollow Reach",
    tenets: [
      "Memory is a weapon.",
      "The dark keeps its debts.",
      "No name survives the Void unchanged.",
    ],
    accent: "void",
  },
  {
    id: "architects",
    name: "Architects",
    order: "Celestial Order",
    capital: "Skyhold",
    sigilSlot: "GR-102_Faction_Sigil_Architects",
    bannerSlot: "GR-112_Faction_Banner_Architects",
    keyArtSlot: "GR-122_Faction_KeyArt_Architects",
    creed: "Creation is a law, not a gift.",
    lore: "The Architects believe the world was designed. Therefore, if the world was designed, it can be redesigned. From the floating spires of Skyhold, the Celestial Order studies Genesis Relics as fragments of the original architecture of reality. To them, destroying a relic is destroying part of the world's blueprint.",
    playstyle: "Construction, positioning, battlefield manipulation, and resource efficiency. Architects grow stronger by preparing the battlefield before committing to combat.",
    region: "The Ascendant Spires",
    tenets: [
      "Every line must be measured.",
      "The design precedes the world.",
      "Nothing is built twice without purpose.",
    ],
    accent: "gold",
  },
  {
    id: "ashen-covenant",
    name: "Ashen Covenant",
    capital: "Emberfall",
    sigilSlot: "GR-103_Faction_Sigil_Ashen_Covenant",
    bannerSlot: "GR-113_Faction_Banner_Ashen_Covenant",
    keyArtSlot: "GR-123_Faction_KeyArt_Ashen_Covenant",
    creed: "From ash, dominion.",
    lore: "The Ashen Covenant was born from the ruins of the southern kingdoms. In Emberfall, survivors discovered that relic energy could survive within fire. The Covenant transformed that discovery into a doctrine: power belongs to those strong enough to command it. They do not worship destruction; they believe destruction is the price of transformation.",
    playstyle: "Aggression, sacrifice, momentum, and high-risk attacks. Ashen Covenant units become stronger through controlled sacrifice and aggressive positioning.",
    region: "The Cinder Wastes",
    tenets: [
      "The pyre pays for the crown.",
      "An oath is signed in ash.",
      "Burn what cannot be held.",
    ],
    accent: "ember",
  },
];

export function getFaction(id: string) {
  return FACTIONS.find((f) => f.id === id);
}
