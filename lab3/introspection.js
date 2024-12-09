let i ={
            m1: (x, y, z) => [x, y, z],
            m2: function (x) {
            return [x];
            },
            m3(x, y, z, s) {
            return [x, y, z, s];
            },
            m4(x, y, z, s, t , u) {
                return [x, y, z, s, t , u];
            }
        }

        function introsFunc(obj) {
            const res = []; 

            for (let k in obj) {
              if (obj.hasOwnProperty(k)) {  
                const val = obj[k];
                if (typeof val === 'function') {
                  const argumens = val.length;
                  res.push([k, argumens]);
                }
              }
            }
          
            return res;
          }
          
console.log(introsFunc(i))