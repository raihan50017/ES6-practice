const ages=[44,66,33];
const ages2=[66,88,2,3];
const ages3=[55,77,55];
const allAges=ages.concat(ages2).concat(ages3).concat([99]);
const allAges2=[...ages,...ages2,...ages3,990];
const maximum=Math.max(...ages);
console.log(maximum);