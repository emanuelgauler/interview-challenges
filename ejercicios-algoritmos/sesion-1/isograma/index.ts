export default function esIsograma(string: string): boolean {
   const count = string.split("")
   .reduce((a, e) => {
      const letter = e.toLowerCase()
      a[letter] = a[letter] + 1 || 1;
      return a;
   }, {});

   return Object.values(count).every( e => e === 1 )
}
