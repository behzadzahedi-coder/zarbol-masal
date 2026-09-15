// German-oriented reading aid, not a claim to reproduce DMG or IPA.
// A single pass avoids converting generated 'ch' or 'j' a second time.
export function germanReadingAid(international: string): string {
  const mapping: Record<string,string> = { sh:'sch', ch:'tsch', kh:'ch', zh:'ž', j:'dsch', y:'j', v:'w' };
  return international.replace(/sh|ch|kh|zh|j|y|v/gi, token => {
    const value=mapping[token.toLowerCase()];
    return token[0] === token[0].toUpperCase() ? value[0].toUpperCase()+value.slice(1) : value;
  });
}
export const pronunciationGuideDe = 'Deutsche Lesehilfe: sch wie in Schule, tsch wie in Tschüss, dsch wie in Dschungel, ch immer wie in Bach, j wie in ja und w wie in Wasser. ž klingt wie das stimmhafte sch in Journal. s ist immer stimmlos; z klingt wie das stimmhafte s in Sonne, niemals wie ts. â steht für ein langes a; i und u liest du wie in Igel und Uhr, nicht als ei oder ü. gh / q bezeichnen einen Rachenlaut ohne genaue deutsche Entsprechung. h wird hörbar gesprochen.';
export const pronunciationGuideFa = 'این راهنمای خواندن برای آلمانی‌زبان‌هاست: sch برای ش، tsch برای چ، dsch برای ج، ch برای خ، j برای یِ همخوان، w برای وِ همخوان و ž برای ژ به کار می‌رود. z صدای ز و s صدای س دارد. â نشان‌دهندهٔ آ است. این راهنما آوانگاری دقیق نیست.';
