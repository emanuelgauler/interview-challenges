export default function esIsograma(string: string): boolean {
   const count = string.split("")
   .map( e => e.toLowerCase() )
   .reduce((a, e) => {
      a[e] = a[e] + 1 || 1;
      return a;
   }, {});

   return Object.values(count).every( e => e === 1 )
}
